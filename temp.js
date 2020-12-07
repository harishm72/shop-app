const fs = require("fs");

const fetch = require("node-fetch");

const mypath = "./all.json";

const source = require(mypath);

const result = source.map(async (item) => {
  const response = await fetch(item.src);
  const buffer = await response.buffer();
  const fileName = item.src.split(
    "https://shop.polymer-project.org/esm-bundled/data/images/"
  )[1];
  fs.writeFile(`./public/data/images/${fileName}`, buffer, () =>
    console.log("finished downloading!")
  );
});
