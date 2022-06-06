const https = require('https');

export default async function(app, pKey, cert) {
  const credentials = {
    key: await fs.promises.readFile(pKey, "utf-8"),
    cert: await fs.promises.readFile(cert, 'utf-8')
  }
  return https.createServer(credentials, app);
}
