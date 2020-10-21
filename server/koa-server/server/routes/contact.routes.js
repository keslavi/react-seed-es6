import Router from 'koa-router';
import fs from 'fs';
import path from 'path';

const r = new Router({prefix:'/contact'});

const readData = () => {
    const x = fs.readFileSync('./data/contact.json', 'utf8');
    const ret = JSON.parse(x);
    return ret;
}

const writeData = (data) => {
    fs.writeFileSync('./data/contact.json', JSON.stringify(data, null, 2));
}

const readOptions = () => {
    const x = fs.readFileSync('./data/options.json', 'utf8');
    const ret = JSON.parse(x);
    return ret;
}


r.get('/:id', async (ctx, next) => {
    const data = readData()
        .filter(function (data) { return data.id == ctx.params.id })[0];

    ctx.body = data;
})

r.get('/', async (ctx, next) => {

    const data = readData();
    //const options = readOptions();

    ctx.body = data

})

r.post('/', async (ctx, next) => {
    let data = readData();
    const req = ctx.request.body;

    if (req.delete || '' === 'delete') {
        console.log('delete')
        data = data.filter(function (data) { return data.id !== req.id });
        req.delete = true;
    }
    else if (req.id || 0 !== 0) {
        console.log('update');
        data
            .map(function (item) {
                if (item.id == req.id) {
                    item.nameLast = req.nameLast;
                    item.nameFirst = req.nameFirst;
                    item.phone = req.phone;
                    item.typeContact = req.type;
                    item.comments = req.comments;
                }
            });
    }
    else {
        const idNew = Math.max.apply(Math, data.map(function (o) { return o.id; })) + 1;
        console.log('adding', idNew);

        req.id = idNew;
        data.push(req);
    }

    writeData(data);

    req.success = true;

    ctx.body = req;
})

export default r;
