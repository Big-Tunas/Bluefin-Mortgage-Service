//  import statements
const express = require('express');
// const path = require('path');

const filePath = '/Users/robertlopez/Desktop/Bluefin-Mortgage-Service/public';
const port = 4003;
const app = express();

app.use(express.static(filePath));

app.get('mortgages', (req, res) => {
  // Get the id of the item, form req

  // Send request for that listing

  // Get relevant mortgages

  // then send information to the client
});

app.patch('addClick'), (req, res) => {
  // Get the id of the add

  // Increment that add by one

  // Redirect to third party site.  
}



app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Morgage sub-App is lisenting on port ${port}`);
});
