const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3000;

// Ensure the 'uploads' directory exists
const uploadDir = './uploads';
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Set up multer storage to save uploaded files
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Save with timestamp to avoid overwriting
    }
});

const upload = multer({ 
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5MB
    fileFilter: (req, file, cb) => {
        const allowedFileTypes = /jpeg|jpg|png|svg/;
        const extname = allowedFileTypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = allowedFileTypes.test(file.mimetype);
        
        if (extname && mimetype) {
            return cb(null, true);
        } else {
            cb(new Error('Only SVG, PNG, JPG, and JPEG files are allowed.'));
        }
    }
});

// Serve static files from 'public' folder
app.use(express.static('public'));
app.use(express.static(uploadDir)); // Allow serving uploaded files directly

// Endpoint to handle file upload
app.post('/upload', upload.single('engraving-file'), (req, res) => {
    if (req.file) {
        // Return the file name so the client can reference it
        res.json({ message: 'File uploaded successfully', filename: req.file.filename });
    } else {
        res.status(400).json({ message: 'No file uploaded' });
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    if (err instanceof multer.MulterError) {
        res.status(400).json({ message: 'Multer Error: ' + err.message });
    } else if (err) {
 

