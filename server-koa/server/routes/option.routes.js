import Router from 'koa-router';
import fs from 'fs';
import path from 'path';

const r = new Router({prefix: '/option'});

const readData = () => {
    const x = fs.readFileSync('./data/options.json', 'utf8');
    const ret = JSON.parse(x);
    return ret;
}

const writeData = (data) => {
    fs.writeFileSync('./data/options.json', JSON.stringify(data, null, 2));
}

r.get('/', async (ctx, next) => {
    const data = readData();
    ctx.body = data
})

r.get('/:key', async (ctx, next) => {
    const key=ctx.params.key;
    const data = readData();
    
    ctx.body = {[key]:data[ctx.params.key]};
})

export default r;
