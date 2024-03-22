// The following code is used to start a express server able to host a simple HTML file
// Firstly the constant variables are used to define the app and the port of which serves the file 
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve HTML files from the public directory. The app.use command will find the index.html file and serve it.
app.use(express.static('public'));

// This method was also added for requests outside of the public directory
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

// This section tells the express app what port to listen to requests from and will return the index.html page when requested at port 3000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
