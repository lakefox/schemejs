# schemejs
``` javascript
eval(fs.readFileSync("./api.js").toString());
var s = new scheme(apijs);

app.post("/api", (req,res) => {
  if (req.body.store) {
    s.rag(req.body.store).then((data) => {
      res.json(data);
    });
  }
});
```