const express = require("express");
const exphbs = require('express-handlebars')
const app = express();
const hbs = exphbs.create({
  layoutsDir: (__dirname+ '/views/layouts'),
  partialsDir: (__dirname+ 'views/partials')
})
require("./helper.js").register(hbs.handlebars);
app.engine('handlebars', hbs.engine);
app.engine('.hbs', exphbs({
  extname: '.hbs'
}));
app.set('view engine', 'handlebars');
app.set('views', (__dirname+ '/views'));

const homeRouter = require("./routes/homeRouter.js"); 
app.use("/", homeRouter); 
const userRouter = require("./routes/userRouter.js"); 
app.use("/users", userRouter); 
const contactRouter = require("./routes/contactRouter.js"); 
app.use("/contact", contactRouter); 

app.listen(3000);