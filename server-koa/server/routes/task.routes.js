import Router from 'koa-router';
import fs from 'fs';
import path from 'path';

const r = new Router({prefix:'/task'});

const readData = () => {
    const x = fs.readFileSync('./data/task.json', 'utf8');
    const ret = JSON.parse(x);
    return ret;
}

const writeData = (data) => {
    fs.writeFileSync('./data/task.json', JSON.stringify(data, null, 2));
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

    const data = readData().filter(x=>x.id!==0);
    //const options = readOptions();

    ctx.body = data

})

//NOTE: in the environments i frequently work in, PUT and DELETE aren't available
//UPSERT/DELETE
r.post('/', async (ctx, next) => {
    let data = readData();
    const req = ctx.request.body;

    if (req.delete) {
        console.log('delete')
        //data = data.filter(function (data) { return data.id !== req.id });
        data = data.filter(x=>x.id !== req.id );
        req.deleted = true;
    }
    else if ((req.id || '0') !== '0') {
        console.log('update',req);
        const item = data.find(x=>x.id == req.id);
        if (item) {
          Object.keys(req).forEach((key) => {
            item[key] = req[key] || "";
          });
        }
    }
    else {
        const idNew = Math.max.apply(Math, data.map(function (o) { return o.id; })) + 1;
        console.log('adding', idNew);

        req.id=idNew;
        req.status = Number(req.status ||0);
        req.result = Number(req.result ||0);
        data.push(req);
    }

    writeData(data);

    req.success = true;

    ctx.body = req;
})

export default r;
