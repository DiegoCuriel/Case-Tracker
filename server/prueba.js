app.get("/api/hello", (req, res) => {
    res.json({ message: "Hello from server side!"});
  });
  
  app.get("/api/album", (req, res) => {
    fs.readFile( __dirname + "/" + "album.json", "utf8", (err, data) => {
      var data = JSON.parse(data);
      res.json({ message: data});
    });
  });
  
  app.post("/api/album1", (req, res) => {
    console.log(req.body);
    res.json({ message: "Hello from server side!"});
  });
  
  app.post("/api/album", (req, res) => {
    fs.readFile( __dirname + "/" + "album.json", "utf8", (err, data) => {
      const albumData = JSON.parse(data);
      const newAlbum = req.body;
  
      albumData[newAlbum.id] = newAlbum;
  
      fs.writeFile(__dirname + "/" + "album.json", JSON.stringify(albumData), (err) => {
        if (err) throw err;
        console.log("New album added to the file");
        res.send("New album added to the file");
      });
    });
  });
  
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
