
var giphy_api = "http://api.giphy.com/v1/gifs/search";




// var giphy_api = "http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC";


$(document).on("ready", function(){

    // var giphy_api = "http://api.giphy.com/v1/gifs/search";

    appendImages();

  // $('.gif-gallery')

  $("form").on('submit', function(event) {

    event.preventDefault();

    appendImages();

  });
});

function appendImages() {
    $.ajax({
      method: "GET",
      url: giphy_api,
      data: $("form").serialize(),
      success: onSuccess,
      error: onError,
    });
}
  function onSuccess(json) {
    // console.log('json works', json); it does work
    $(".gif-img").remove(); //remove applies to the node, hence removing all imgs
    json.data.forEach(function(v,i){
      $(".gif-gallery").append($("<img class='img-responsive img-thumbnail gif-img' src="+v.images.fixed_height.url+">"));
  });
}

  function onError(xhr, status, errorThrown) {
    alert("Sorry, there was a problem!");
    console.log("Error: " + errorThrown);
    console.log("Status: " + status);
    console.dir(xhr);
  }
