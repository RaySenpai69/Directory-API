import { readdirSync } from "fs";

import express from "express";

const app = express();

const port: number = Number(process.env.PORT) || 8080;

let dir = process.cwd();

app.get("/", (req, res) => {
  res.send("Hello Oni-Chan");
});
app.get("/random", (req, res) => {
  const directory = "/images/";
  const files = readdirSync(`.${directory}`);
  let randomFile = files[Math.floor(Math.random() * files.length)];
  res.sendFile(dir + `${directory}${randomFile}`);
});
app.get("*", (req, res) => {
  res.redirect("/random");
});

app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});
