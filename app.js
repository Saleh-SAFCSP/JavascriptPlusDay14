const express = require('express');
const app = express();

/* Server side rendering 

1- What is the type of website ?
    1- Static website
    2- Dynamic website

2- What are the ways to build a website ?
    1- Client side rendering 
        Server = json => client ( react ) = render => browser
    2- Server side rendering
        Server = complete html & css & js => browser

What is the issues with client side rendering ?
    1- Inital load time
    2- SEO issue
    3- Depand in the client performance
    4- Take control over from the server

What is the issues with server side rendering ?
    1- Full load time each page change
    2- Load in the server
    3- Hard to build complex website

*/

// Static webiste server side rendering
// app.use(express.static(__dirname + '/static'));
// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/static/index.html');
// });
// app.get('/about', (req, res) => {
//   res.sendFile(__dirname + '/static/about.html');
// });

// Dynamic website server side rendering
const tasksList = ['Wake up', 'Work', 'Go to gim', 'Sleep'];
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.render('index', { tasksList });
});
app.post('/add', (req, res) => {
  const data = req.body.formData;
  tasksList.push(data);
  res.redirect('/');
});

app.listen(5000, () => {
  console.log('Server is running in port 5000');
});
