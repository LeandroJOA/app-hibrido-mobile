const app = require('./index');

const port = process.env.PORT || 4000;

console.log(`Listining on port: ${port}`);

app.listen(port);
