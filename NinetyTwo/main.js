const express = require('express')
const app = express()
const port = 3000

// Set the view engine to ejs
app.set('view engine', 'ejs');  


app.get('/', (req, res) => {
    //   res.send('Hello EJS!')
    // res.sendFile("templates/index.html", { root: __dirname })
    let sitename = "Addidas"
    let searchText = "Search Now"
    let arr = [1,2,3,4,5]
    // res.render("templates/index.html", { sitename: sitename, searchText: searchText })
    res.render("index", { sitename: sitename, searchText: searchText,arr })

})


app.get('/blog/:slug', (req, res) => {
    //   res.send('Hello EJS!')
    let blogTitle = "Man utd"
    let blogContent = "Sujan Thapa"
    // res.sendFile("templates/blogpost.html", { blogTitle: blogTitle, blogContent: blogContent })
    res.sendFile("blogpost", { blogTitle: blogTitle, blogContent: blogContent })

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})