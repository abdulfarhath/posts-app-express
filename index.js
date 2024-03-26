const express = require('express')
const app = express()
const path = require("path");
const port = 3000
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
const { v4: uuidv4 } = require('uuid');
app.use(express.urlencoded({ extended: true }));


let posts = [
    {
        id: "asdf",
        username: "abd-3000",
        content : "hello",
    },
    {
        id: "ghjk",
        username: "rahul199",
        content : "hello",
    },
    {
        id: "lkjh",
        username: "saketh979",
        content : "hello",
    }
]

app.get('/', (req, res) => {
    res.redirect('/posts');
})

app.get('/posts', (req, res) => {
  res.render("index.ejs", {posts : posts});
})

app.get('/posts/new', (req, res) => {
    res.render("newpost.ejs");
  })
app.post('/posts/new', (req, res) => {
    console.log("got data");
    const id = uuidv4();
    // const {user,content} = req.body;
    // console.log(`${id},,,${user}.....${content}`);
    console.log(req.body);
    res.redirect("/posts");
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})