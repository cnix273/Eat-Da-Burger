app.get("/attitude-chart/:att", function(req, res) {

    connection.query("SELECT * FROM schools WHERE ?",
    {
        attitude: req.params.att
    },
    function(err, result) {
        if (err) throw err;
        var html = "<h1>Seinfeld Cast</h1>";
    
        // Here we begin an unordered list.
        html += "<ul>";
    
        // We then use the retrieved records from the database to populate our HTML file.
        for (var i = 0; i < result.length; i++) {
          html += "<li><p> ID: " + result[i].id + "</p>";
          html += "<p>Name: " + result[i].name + " </p></li>";
          html += "<p>Coolness Points: " + result[i].coolness + " </p></li>";
          html += "<p>Attitude: " + result[i].attitude + " </p></li>";
        }
    
        // We close our unordered list.
        html += "</ul>";
    
        // Finally we send the user the HTML file we dynamically created.
        res.send(html);
    });
});