const Express = require('express');
const path = require('path');
const compression  = require('compression');

const app = Express(),
  viewPath = path.resolve(__dirname, 'build');


app.use(compression());

app.use('/build', Express.static(viewPath, {
    setHeaders: res => res.setHeader('Cache-Control', 'public, max-age=31536000')
  })
);


app.set('views', viewPath);

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, 'index.html')));

app.listen(9001);
