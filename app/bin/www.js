"use strict"

const port = 3001;

const app = require("../app")

app.listen(port, () => {
    console.log("서버 가동");
});