const { createProxyMiddleware } = require("http-proxy-middleware");

// relay cookies: https://github.com/chimurai/http-proxy-middleware/issues/78
function relayRequestHeaders(proxyReq, req) {
  Object.keys(req.headers).forEach(function (key) {
    proxyReq.setHeader(key, req.headers[key]);
  });
}

function relayResponseHeaders(proxyRes, req, res) {
  Object.keys(proxyRes.headers).forEach(function (key) {
    res.append(key, proxyRes.headers[key]);
  });
}

const proxyWS = {
  target: 'http://localhost:3000',
  //target: 'http://localhost:5000',  //koa
  //prependPath:true,
  //changeOrigin: true,
  //logLevel: 'debug',
};

const api = {

  target: 'http://localhost:5000/api',
  // pathRewrite: {
  //   "apiTask/": "", //remove /service/api
  // },
  //prependPath:true,
  changeOrigin: true,
  secure: false,
  onProxyReq: relayRequestHeaders,
  onProxyRes: relayResponseHeaders,
  cookieDomainRewrite: "localhost",
  logLevel: "debug",
};

module.exports = function (app) {
  app
    .use("/api", createProxyMiddleware(apiTask))
    .use("/ws", createProxyMiddleware(proxyWS));

    app.listen(3000);
};