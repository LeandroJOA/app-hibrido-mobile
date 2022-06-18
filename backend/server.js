const app = require('./index');

const port = process.env.PORT || 8080;

console.log(`Listining on port: ${port}`);

app.listen(port);
