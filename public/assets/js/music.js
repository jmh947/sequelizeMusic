// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-playlist").on("click", function(event) {
      var id = $(this).data("id");
      var newSong = $(this).data("newSong");
        newSong = (newSong == 0) ? 1:0

   console.log(newSong + "New Song")
      // Send the PUT request.
      $.ajax("/api/music/" + id, {
        type: "PUT",
        data: {
            addedPlaylist: newSong
        }
      }).then(
        function() {
          console.log("listened to:", newSong);
          // Reload the page to get the updated list
         // location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  console.log("please work")

      var newPlaylist = {
        songTitle: $("#song").val().trim(),
        addedPlaylist: $("[name=listen]:checked").val().trim()
      };
   console.log(newPlaylist);

      // Send the POST request.
      $.ajax("/api/music", {
        type: "POST",
        data: newPlaylist
      }).then(
        function() {
          console.log("created new Playlist");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

    //Delete the POST request
    $(".delete-song").on("click", function(event) {
        var thisId = $(this).data("id");
    
        // Send the PUT request.
        $.ajax("/api/music/" + thisId, {
          type: "delete",

        }).then(
          function() {
            console.log("DELETE", newSong);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
  });