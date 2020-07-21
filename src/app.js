const path = require('path');
const express = require('express');
const hbs = require('hbs');
const forecast = require('./utils/forecast');

const app = express();


const publicDirectoryPath = path.join(__dirname,"../public");
const viewsDirectoryPath = path.join(__dirname,"../views");
app.use(express.static(publicDirectoryPath));

const viewPath = path.join(viewsDirectoryPath,'../templates/views');
const partialsPath = path.join(__dirname,'../templates/partials');

app.set('view engine', 'hbs');
app.set('views', viewPath);
hbs.registerPartials(partialsPath);


app.get('', (req, res) => {
    res.render('index',{
        title:"WEATHER APP",
        title_page:"HOME"
    });
});

app.get('/about', (req, res) => {
    res.render('about',{
        title:'about page',
    });
});

app.get('/help', (req, res) => {
    res.render('help',{
        title:"Welcome to help page",
    });
});
app.get('/weather', (req, res) => {
    if(!req.query.city){
        res.send({error:"please enter city name"})
    }
    forecast("17785cb56b0843b5b6c187d97a87d969",req.query.city,(error,data)=>{
        if(error){
            res.send({
                error
            });
        }else{
            res.send({
                // city:req.query.city,
                city:data.city_name,
                status:data.weather.description,
                temperture : data.temp
            });
        }
    });
});

app.get('/help/*', (req, res) => {
    res.render('404',{
        title:"HELP ARTICLE NOT FOUND!!!",
    });
});

app.get('*', (req, res) => {
    res.render('404',{
        title:"404 PAGE NOT FOUND!!!",
    });
});

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});