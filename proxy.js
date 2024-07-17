// proxy.js
import { NextApiRequest, NextApiResponse } from 'next';
import { createProxyServer } from 'http-proxy';

const target = 'https://lite-stream.vercel.app';
const changeOrigin = true;

const proxyServer = createProxyServer({
  target,
  changeOrigin,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  return new Promise((resolve, reject) => {
    proxyServer.web(req, res, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}
