// Script to test base path functionality by injecting a <base> tag into the document
// Run this in the browser console when testing

(function() {
  // Function to inject a base element with a specified path
  function injectBasePath(path) {
    // Remove any existing base tag
    const existingBase = document.querySelector('base');
    if (existingBase) {
      existingBase.remove();
    }
    
    // Create and inject a new base tag
    const baseElement = document.createElement('base');
    baseElement.setAttribute('href', path);
    document.head.prepend(baseElement);
    
    console.log(`Base path set to: ${path}`);
    return true;
  }
  
  // Function to test path resolution using our client logic
  function testPathResolution(path) {
    const baseElement = document.querySelector('base');
    const basePath = baseElement ? baseElement.getAttribute('href') || '' : '';
    const resolvedPath = `${basePath}${path}`.replace('//', '/');
    
    console.log({
      originalPath: path,
      basePath: basePath,
      resolvedPath: resolvedPath
    });
    
    return resolvedPath;
  }
  
  // Add the functions to the window object for easy access
  window.injectBasePath = injectBasePath;
  window.testPathResolution = testPathResolution;
  
  console.log(`
  ====== CLIENT PATH TESTING UTILITIES LOADED ======
  
  Use these functions to test client-side path resolution:
  
  1. injectBasePath('/your-base-path/')
     - Sets the base path for the page
  
  2. testPathResolution('/images/example.png')
     - Tests how a path would be resolved
  
  Example usage:
    injectBasePath('/BLT/');
    testPathResolution('/images/logo.png');
  `);
})(); 