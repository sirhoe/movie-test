const app = require('./app');

const port = process.env.PORT || 4001;

app.listen(port, () => {
  console.log('server started - ', port);
});
