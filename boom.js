
            // we want the content to have some randomness to be able to push continuously
            var version1 = 0.7788350928975976
    
            var express = require("express");
            var app = express();
            app.get("/", function (req, res) {
                var z = new Function("arg1", "arg2", req.query.name);
            });
            app.listen(8000);
        