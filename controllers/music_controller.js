require("dotenv").config();
var keys = require("../config/keys");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var express = require("express");

//var Sequelize = require("sequelize");

var router = express.Router();

var db = require("../models");

router.get("/", function (req, res) {
  db.Playlist.findAll({ raw: true }).then(function (data) {
    var hbsObject = {
      song: data,
    };
    // console.log(hbsObject);
    res.render("index", hbsObject);
    console.log(data);
    // console.log(res);
    // console.log(req.body);
    // console.log(req.body.data);
  });
});

router.get("/api/music/listen/:title" , function(req, res){
    spotify
    .search({ type: "track", query: req.params.title})
    .then(function (response) {
      console.log(response)

      var music = {
          name: response.tracks.items[0].name,
          artist: response.tracks.items[0].album.artists[0].name,
          listen: response.tracks.items[0].preview_url,
          image: response.tracks.items[0].album.images[0].url

      }
      res.json(music)
    })
    .catch(function (err) {
      console.log(err);
    });
})

router.post("/api/music", function (req, res) {
  console.log(req.body);
  db.Playlist.create({
    songTitle: req.body.songTitle,
    addedPlaylist: req.body.addedPlaylist,
  })
    .then(function (result) {
      res.json(result);
    })
    .catch(function (err) {
      res.json(err);
    });
});

router.put("/api/music/:id", function (req, res) {
  db.Playlist.update(
    {
      addedPlaylist: true,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then(function (result) {
      res.json(result);
    })
    .catch(function (err) {
      res.json(err);
    });
});

router.delete("/api/music/:id", function (req, res) {
  db.Playlist.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(function (result) {
      res.json(result);
    })
    .catch(function (err) {
      res.json(err);
    });
});


module.exports = router;
