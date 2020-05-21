var express = require("express");

var router = express.Router();

var db = require("../models");

router.get("/", function(req, res) {
    db.Playlist.findAll({raw:true}).then(function(data){
        var hbsObject = {
            song: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    }); 
    });

router.post("/api/music", function (req, res) {
    console.log(req.body)
    db.Playlist.create({
        songTitle: req.body.songTitle,
        addedPlaylist: req.body.addedPlaylist
    }).then(function(result){
        res.json(result);
    }).catch(function(err){
        res.json(err);
    })
});

router.put("/api/music/:id", function (req, res){
    db.Playlist.update({
        addedPlaylist: req.body.addedPlaylist
    },{
        where: {
            id: req.params.id
        }
    }).then(function(result){
        res.json(result);
    }).catch(function(err){
        res.json(err);
    });
});
  

     
   router.delete("/api/music/:id", function (res, req){
       db.Playlist.destroy({
           where: {
               id: req.params.id
           }
       }).then(function(result){
        res.json(result);
    }).catch(function(err){
        res.json(err);
    });
   })



module.exports = router; 