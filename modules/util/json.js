const fs = require("fs");

const writeJson = (filename, object) => {
  fs.writeFile(filename, JSON.stringify(object, null, " "), (err) => {
    if (err) {
      console.log(err);
    }
  });
};

module.exports.writeJson = writeJson;
