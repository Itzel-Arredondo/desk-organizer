const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3000;

// Set up multer storage to save uploaded files
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

app.use(express.static('public'));
app.use(express.static('uploads'));

// Endpoint to handle file upload
app.post('/upload', upload.single('engraving-file'), (req, res) => {
    if (req.file) {
        res.json({ message: 'File uploaded successfully', filename: req.file.filename });
    } else {
        res.status(400).json({ message: 'No file uploaded' });
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
