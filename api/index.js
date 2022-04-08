const server = require("./src/app.js");

const port = 3001;
server.listen(port, (error) =>
  error ? console.log(error) : console.log(`server running at port ${port}`)
);
