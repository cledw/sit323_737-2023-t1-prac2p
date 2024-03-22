// The following code is used to start a express server able to host a simple HTML file
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve HTML files from the public directory within the Week1 folder
app.use(express.static('public'));

// This method was also added for requests outside of the public directory
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
