const express = require('express');
const app = express();
const printer = require('node-native-printer');
const fs = require('fs');

const file = fs.readFileSync('/public/streaching.jpg');
console.log(file);

const port = 7000;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

app.get('/', (req, res) => {
  res.send(printer.listPrinters());
  const setPrinter = printer.listPrinters()[0].name;
  const value = printer.setPrinter(setPrinter);
  const myPrinter = printer.getCurrentPrinter();
  const done = printer.print(file);
  console.log(printer.printerInfo());

});

