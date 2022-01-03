$(document).ready(function(){

  $(".bottom-navigation").on('click', function(event){
    let pageNavigator = event.target.className;
    switch (pageNavigator) {
      case "previous":
       window.location.href = "project.html";

        break;
        case "home":
         window.location.href = "index.html";
          break;
      default:
       window.location.href = "index.html";
    }

  });
});
