const express = require('express')
const bodyParser = require('body-parser');
const multipart = require('connect-multiparty')
const cors = require('cors')
const app = express();

const fs = require('fs');
const path = require('path');

// const corsOptions = {
//   origin: '*',
//   optionsSuccessStatus: 200 
// }

// app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


const multipartMiddleware = multipart({ uploadDir: './uploads' });
app.post('/upload', multipartMiddleware, (req, res) => {
  const files = req.files;
  console.log(files);
  res.json({ message: files });
});


app.use((err, req, res, next) => {
  res.json({ error: err.message})
})

app.listen(8000, () => {
  console.log('Server running na porta 8000')
})