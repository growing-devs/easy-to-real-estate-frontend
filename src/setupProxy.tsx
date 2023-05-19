// eslint-disable-next-line import/no-import-module-exports
import { createProxyMiddleware } from 'http-proxy-middleware';

module.exports = function (app: any) {
  app.use(
    '/proxy',
    createProxyMiddleware({
      target: 'http://openapi.molit.go.kr/',
      changeOrigin: true,
      pathRewrite: {
        '^/proxy': '',
      },
    }),
  );
};
