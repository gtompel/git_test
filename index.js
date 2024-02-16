const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.ico': 'image/x-icon',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.json': 'application/json',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2'
}
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile('/public/index.html', {root: __dirname });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})