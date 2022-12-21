const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function(app) {
    app.use(createProxyMiddleware('/auth/google', 
        { target: 'https://sheets.googleapis.com/' }
    ));
}