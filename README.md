# schemejs
Scheme.js is a project designed to make building servers modular and fast.

## Install
```
npm i schemejs
```

## Example Server
This is the server I use on all my projects.
``` javascript
const express = require("express");
const app = express();
const http = require("http").Server(app);
const scheme = require('schemejs');
const fs = require('fs');
const cors = require('cors');
var bodyParser = require('body-parser');

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(cors())

eval(fs.readFileSync("./api.js").toString());
var s = new scheme(apijs);

const megaquery = require('megaquery');

app.post("/api", (req,res) => {
  if (req.body.store) {
    s.rag(req.body.store).then((data) => {
      console.log(data);
      res.json(data);
    });
  }
});

app.get('/', function(req, res) {
    res.end("");
});

http.listen(8080, ()=>{
  console.log('Server is running');
});
```
You can see Scheme.js working on line 14, this is where the server reads the "api.js" file. Then on 15 it loads the file into scheme. The way Scheme.js works is through the "api.js" file.

### Api.js
``` json
var apijs = {
	loud: {
    	client: {
          name: "lakefox"
        },
      	server: {
          res: (req) => {
          		return req.toUpperCase();
          	}
        }
    },
  	...
}
```
