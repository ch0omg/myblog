module.exports = function(app,fs){
    app.get('/', (req,res) =>
    res.render('index.html',{
        title : "MY HOMEPAGE",
        length : 5
    })
    )

    // app.get('/list', (req,res) =>
    // fs.readFile(__dirname + "/../data/" + "user.json",'utf8', (err,data) =>
    // console.log(data),
    // res.end(data)
    // )
    // )

    app.get('/list', function (req, res) {
        fs.readFile( __dirname + "/../data/" + "user.json", 'utf8', function (err, data) {
            console.log( data );
            res.end( data );
        });
     })
}