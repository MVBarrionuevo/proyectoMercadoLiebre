const express = require("express");
const app = express();

const path = require("path");

const publicPath = path.resolve(__dirname, "./public");

app.use(express.static(publicPath));

//Cambio este bloque para Heroku
/*app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000");
});
*/

//Agrego este bloque nuevo para HEROKU:
app.listen(process.env.PORT || 3000, function(){
    console.log("Servidor corriendo en el puerto 3000");
})


app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"));
});

app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"));
});
app.post("/register", (req, res) => {
    res.redirect("/");
});

app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"));
});

app.post("/login", (req, res) => {
    res.redirect("/");
});