const express = require('express')
const nav = require('./lev1_1_express.js-template-Engine-EJS-Menu-nav.json')
const gallery = require("./lev2_1_express.js-template-Engine-EJS-Gallery-gallery.json")

const app = express()

app.set('view engine', 'ejs')

app.use(express.static(__dirname + "public"))

app.get('/', (req, res) => {
    res.render("pages/page.ejs", {
        nav,
        name: nav.find(elt => {
            if (elt.url == req.url) {
                return elt.name
            }
        }).name
    }
    )
})

app.get('/team', (req, res) => {
    res.render("pages/page.ejs", {
        nav,
        name: nav.find(elt => {
            if (elt.url == req.url) {
                return elt.name
            }
        }).name
    })
})

app.get('/about', (req, res) => {
    res.render("pages/page.ejs", {
        nav,
        name: nav.find(elt => {
            if (elt.url == req.url) {
                return elt.name
            }
        }).name
    })
})

app.get('/contact', (req, res) => {
    res.render("pages/page.ejs", {
        nav,
        name: nav.find(elt => {
            if (elt.url == req.url) {
                return elt.name
            }
        }).name
    })
})

app.get('/gallery', (req, res) => {
    res.render("pages/gallery_page.ejs", {
        nav,
        gallery,
        name: nav.find(elt => {
            if (elt.url == req.url) {
                return elt.name
            }
        }).name
    })
})

app.use((_, res) => {
    res.sendFile(__dirname + "/public/html/error.html")
})

const PORT = 9999
app.listen(PORT, () => console.log(`listening on ${PORT}`))