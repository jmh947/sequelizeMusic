// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".change-playlist").on("click", function (event) {
    var id = $(this).data("id");

    var buttonTitle = $(this).text();
    alert(buttonTitle)
    //console.log(newSong + "New Song")
    // Send the PUT request.
console.log(buttonTitle)
    if (buttonTitle.trim() === "Listen!") {
      var songTitle = $(this).data("title")
      $.ajax({
        url: "/api/music/listen/" + songTitle,
        type: "GET",
      }).then(function (data) {
        // console.log("listened to:", newSong);
        // Reload the page to get the updated list

        console.log(data)
    window.location.href = data.listen
       //location.reload();
      });
    } else {
      $.ajax({
        url: "/api/music/" + id,
        type: "PUT",
      }).then(function () {
        // console.log("listened to:", newSong);
        // Reload the page to get the updated list
        location.reload();
      });
    }
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log("please work");

    var newPlaylist = {
      songTitle: $("#song").val().trim(),
      addedPlaylist: false,
    };
    console.log(newPlaylist);

    // Send the POST request.
    $.ajax("/api/music", {
      type: "POST",
      data: newPlaylist,
    }).then(function () {
      console.log("created new Playlist");
      // Reload the page to get the updated list
      location.reload();
    });
  });

  //Delete the POST request
  $(".delete-song").on("click", function (event) {
    var thisId = $(this).data("id");

    // Send the PUT request.
    $.ajax({
      url: "/api/music/" + thisId,
      type: "delete",
    }).then(function (data) {
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
