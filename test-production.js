// This script helps test the production build with a base path
const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Set environment variables for the build
process.env.NODE_ENV = 'production';
process.env.NEXT_PUBLIC_BASE_PATH = '/BLT';

console.log('Building production version...');
const buildProcess = spawn('npm', ['run', 'build'], { stdio: 'inherit', shell: true });

buildProcess.on('close', (code) => {
  if (code !== 0) {
    console.error(`Build process exited with code ${code}`);
    return;
  }
  
  console.log('Build completed. Starting simple HTTP server to serve the build...');
  
  // Create a simple HTTP server to serve the build
  const server = http.createServer((req, res) => {
    let url = req.url;
    
    // Remove /BLT prefix if present
    if (url.startsWith('/BLT')) {
      url = url.replace('/BLT', '');
    }
    
    // Set default file to index.html
    if (url === '/' || url === '') {
      url = '/index.html';
    }
    
    // Get the file path
    const filePath = path.join(__dirname, 'out', url);
    
    // Check if the file exists
    fs.access(filePath, fs.constants.F_OK, (err) => {
      if (err) {
        res.statusCode = 404;
        res.end(`File ${filePath} not found!`);
        return;
      }
      
      // Read and serve the file
      fs.readFile(filePath, (err, data) => {
        if (err) {
          res.statusCode = 500;
          res.end(`Error reading file: ${err}`);
          return;
        }
        
        // Set the content type
        const ext = path.extname(filePath);
        let contentType = 'text/html';
        
        switch (ext) {
          case '.js':
            contentType = 'text/javascript';
            break;
          case '.css':
            contentType = 'text/css';
            break;
          case '.json':
            contentType = 'application/json';
            break;
          case '.png':
            contentType = 'image/png';
            break;
          case '.jpg':
          case '.jpeg':
            contentType = 'image/jpeg';
            break;
        }
        
        // Serve the file
        res.setHeader('Content-Type', contentType);
        
        // If it's an HTML file, inject the base tag
        if (ext === '.html') {
          // Convert buffer to string
          let htmlContent = data.toString();
          
          // Check if there's already a base tag
          if (!htmlContent.includes('<base')) {
            // Insert base tag after head tag
            htmlContent = htmlContent.replace(
              '<head>', 
              '<head>\n    <base href="/BLT/" />'
            );
          }
          
          res.end(htmlContent);
        } else {
          res.end(data);
        }
      });
    });
  });
  
  // Start the server
  server.listen(3001, () => {
    console.log('Server running at http://localhost:3001/');
    console.log('To test with base path, visit: http://localhost:3001/BLT/');
    console.log('To test the client page, visit: http://localhost:3001/BLT/client/');
    console.log('Press Ctrl+C to stop the server');
  });
}); 