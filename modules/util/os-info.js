const os = require("os");

const printmem = (size) => {
  switch (size) {
    case "GB":
      console.log(
        `Total Memory: ${(os.totalmem() / 1024 / 1000 / 1000).toFixed(1)} GB`
      );
      console.log(
        `Free Memory: ${(os.freemem() / 1024 / 1000 / 1000).toFixed(1)} GB`
      );
      break;
    case "MB":
      console.log(
        `Total Memory: ${(os.totalmem() / 1024 / 1000).toFixed(0)} MB`
      );
      console.log(`Free Memory: ${(os.freemem() / 1024 / 1000).toFixed(0)} MB`);
      break;
    case "KB":
      console.log(`Total Memory: ${(os.totalmem() / 1024).toFixed(0)} KB`);
      console.log(`Free Memory: ${(os.freemem() / 1024).toFixed(0)} KB`);
      break;
    default:
      console.log(
        `Total Memory: ${(os.totalmem() / 1024 / 1000 / 1000).toFixed(1)} GB`
      );
      console.log(
        `Free Memory: ${(os.freemem() / 1024 / 1000 / 1000).toFixed(1)} GB`
      );
      break;
  }
};

exports.printMemory = printmem;
exports.machineType = os.machine();
exports.type = os.type();
