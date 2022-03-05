const express = require('express');
const cors = require('cors');

const multer  = require('multer')
const upload = multer()

const app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', upload.single('upfile'), function (req, res, next) {
  console.log(req.file, req.body);
  return res.status(200).json({
    name: req.file.originalname, 
    type: req.file.mimetype, 
    size: req.file.size
  });
})

const port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});