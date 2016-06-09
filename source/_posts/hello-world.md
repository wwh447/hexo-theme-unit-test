title: Hello World
date: 2013-12-24 17:49:32
tags:
---

```bash
sudo npm install nodejs -g
```

```scss
$width: 10rem;
body{
  h1{ color: #333; }
  p{ margin: 2rem 1rem; }
}
```

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <p>test <a href="">link</a></p>
  </body>
</html>
```

```javascript
const http = require('http');

const hostname = '127.0.0.1';
const port = 1337;

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

Welcome to [Hexo](http://zespia.tw/hexo)! This is your very first post. Check [documentation](http://zespia.tw/hexo/docs) to learn how to use.
