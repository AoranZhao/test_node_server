let express = require("express");
let app = express();
let process = require("process");

const ENV_VAR = process.env.ENV_VAR || "[unknown]";
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
    console.log(`${new Date().toISOString()} - info - get request from url <hostname>:${PORT}/.`);
    res.status(200).send(`this message comes from ${ENV_VAR}`);
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT} ....`);
})