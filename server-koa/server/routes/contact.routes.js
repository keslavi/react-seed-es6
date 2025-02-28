import Router from "koa-router";
import fs from "fs";
import path from "path";

const r = new Router({ prefix: "/contact" });

const readData = () => {
  const x = fs.readFileSync("./data/contact.json", "utf8");
  const ret = JSON.parse(x);
  return ret;
};

const writeData = (data) => {
  fs.writeFileSync("./data/contact.json", JSON.stringify(data, null, 2));
};

const readOptions = () => {
  const x = fs.readFileSync("./data/options.json", "utf8");
  const ret = JSON.parse(x);
  return ret;
};

r.get("/:id", async (ctx, next) => {
  const id = ctx.params.id;
  const data0 = readData();

  let data = null;

  if (id !== "new") {
    data = data0.filter(function (data) {
      return data.id == id;
    })[0];
  } else {
    const newItem = {};
    for (const [key /*,value*/] of Object.entries(data0[0])) {
      newItem[key] = "";
      newItem.id = 0;
    }
    data = newItem;
  }

  ctx.body = data;
});

r.get("/", async (ctx, next) => {
  const data = readData();
  //const options = readOptions();

  ctx.body = data;
});

r.post("/", async (ctx, next) => {
  let data = readData();
  const req = ctx.request.body;
  console.log(req);

  if (req.delete || "" === "delete") {
    console.log("delete");
    data = data.filter(function (data) {
      return data.id !== req.id;
    });
    req.delete = true;
  } else if (req.id != 0) {
    console.log("update");

    const item = data.find(x=>x.id == req.id);
    if (item) {
      Object.keys(req).forEach((key) => {
        item[key] = req[key] || "";
      });
    }

  } else {
    const idNew =
      Math.max.apply(
        Math,
        data.map(function (o) {
          return o.id;
        })
      ) + 1;
    console.log("adding", idNew);

    req.id = idNew;
    if (req.type === "") req.type = "1";
    data.push(req);
  }

  writeData(data);

  req.success = true;

  ctx.body = req;
});

export default r;
