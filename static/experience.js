$(document).ready(function(){

  $(".bottom-navigation").on('click', function(event){
    let pageNavigator = event.target.className;
    switch (pageNavigator) {
      case "next":
       window.location.href = "skills.html";

        break;

        case "home":
         window.location.href = "index.html";

          break;
          case "previous":
           window.location.href = "profile.html";

            break;
      default:
       window.location.href = "index.html";
    }

  });
});
