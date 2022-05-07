const path = require('path');
const express = require('express');
const multer = require('multer');
const handlebars  = require('express-handlebars');
const methodOverride = require('method-override');
const app = express();
const port = 3001;
const Course = require('./app/models/Course');
const route = require('./routes')
const db =  require('./config/db');
const cors = require('cors');

app.use(cors());

// app.use(morgan('combined'))
//tự động show img trong public
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: true}));//midd sửa lý submit form data lấy dữ liệu post
app.use(express.json());//

app.use(methodOverride('_method'))
// Rendering engine setup
app.engine('.hbs', handlebars(
  {extname: '.hbs'}
));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources','views'));
//connect db
db.connect();
// Routes
// app.get('/', function (req, res) {
//   res.render('home');
// });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    //files khi upload xong sẽ nằm trong thư mục "uploads" này - các bạn có thể tự định nghĩa thư mục này
    cb(null, 'src/public/img') 
  },
  filename: function (req, file, cb) {
    // tạo tên file = thời gian hiện tại nối với số ngẫu nhiên => tên file chắc chắn không bị trùng
    const filename = Date.now() + '-' + Math.round(Math.random() * 1E9) 
    cb(null, filename + '-' + file.originalname )
  }
})
//Khởi tạo middleware với cấu hình trên, lưu trên local của server khi dùng multer
const upload = multer({ storage: storage })

app.post('/uploadfile', upload.single('image'), (req, res, next) => {
  //nhận dữ liệu từ form
  const file = req.file;

  // Kiểm tra nếu không phải dạng file thì báo lỗi
  if (!file) {
      const error = new Error('Upload file again!')
      error.httpStatusCode = 400
      return next(error)
    }
  res.send(file);
})

app.post('/uploadmultiple', upload.array('formFileMultiple', 3), (req, res, next) => {
  //nhận dữ liệu từ form mảng thông số của các file upload
  const files = req.files;
  // Kiểm tra nếu không phải dạng file thì báo lỗi
  if (!files) {
      const error = new Error('Upload files again')
      error.httpStatusCode = 400
      return next(error)
    }
  
  // files đã được lưu vào thư mục uploads
  // hiển thị thông số các ảnh ra màn hình
  res.send(files);
  
})
route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})