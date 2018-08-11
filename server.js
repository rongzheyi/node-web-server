const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
var app = express();
app.set('view engine', 'hbs');
app.use(express.static(__dirname+'./public'));
app.use((req, res, next) => {
    var now = new Date().toString();
    console.log(`${now}: ${req.method} ${req.url}`);
});

hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});
hbs.registerHelper('screamIt', (text) => {
    console.log(text);
    return 'ss';
})

app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTitle: 'Home page',
        welcomeMessage: 'welcome',
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About page',
    });
});

app.listen(3000, () => {
    console.log('web server started.');
});