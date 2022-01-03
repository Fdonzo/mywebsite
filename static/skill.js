$(document).ready(function(){

  $(".bottom-navigation").on('click', function(event){
    let pageNavigator = event.target.className;
    switch (pageNavigator) {
      case "next":
       window.location.href = "project.html";

        break;

        case "home":
         window.location.href = "index.html";

          break;
          case "previous":
           window.location.href = "experience.html";

            break;
      default:
       window.location.href = "index.html";
    }

  });
});
