const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})



// const express = require('express');
// const multer = require('multer');
// const path = require('path');
// const app = express();

// // Set up multer for file storage
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads/');
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + path.extname(file.originalname));
//     }
// });
// const upload = multer({ storage: storage });

// // Serve static files (if needed)
// // app.use(express.static('public'));

// app.post('/upload', upload.single('file'), (req, res) => {
//     if (!req.file) {
//         return res.status(400).json({ error: 'No file uploaded' });
//     }
//     res.json({ filename: req.file.filename });
// });

// // Start the server
// app.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000');
// });
