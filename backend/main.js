const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req,res) => {
  res.send("qqafhasfh");
})

app.listen(port, ()=>{
  console.log(`server start at localhost:${port}`);
})