const express = require("express");
const users = require("./express-users-submodule/users");
const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});
app.use(users);
app.listen(3000);
