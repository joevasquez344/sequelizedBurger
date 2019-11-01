const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const Burger = require('./models/Burger.model');

const PORT = process.env.PORT || 8080;

// body parsing middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// handlebars init
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// bring in router
const routes = require('./controller/routes');
app.use(routes);

// make public folder static
app.use(express.static('public'));



app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
    Burger.sync({ force: true })
        .then(() => console.log('Connected to database'))
        .catch((err) => console.log(err))
})