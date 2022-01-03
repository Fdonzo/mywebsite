//wait for the DOM to be ready
$(document).ready(function(e,t){
  console.log('e', e, t)

//$(document).on("load", function(e){ console.log('e', e)});

//$(window).on('load', function(e) {console.log(e)});

var allNavClass = $(".nav-link");

//allNavClass.map(function(item, i){ return allNavClass["item"];});
const allNavButtom = (function(){
  var resultAll =[];
  for(var i = 0; i<allNavClass.length; i++){
    let result= allNavClass[i].innerHTML;
    resultAll.push(result);
  }
  return resultAll;
})();

var middleDivClass =(function(){
  let allMiddleDivClass = $("#middle")['0'].children;
  //children.className;

  //console.log(allMiddleDivClass);
  var resultAll2 = [];
  for (var i = 0; i < allMiddleDivClass.length; i++) {
    resultAll2.push(allMiddleDivClass[i].classList['1']);

  }
   //console.log(resultAll2);
   return resultAll2;
})();

$(".nav-link").on("click", function(event1){
  var clickButtom = event1.target.innerHTML;

    switch(clickButtom) {
      case "Profile":
         window.location.href = "profile.html";
        break;
      case "Skills":
         window.location.href = "skills.html";
        break;

      case"Experience":
         window.location.href = "experience.html";
         break;
        case "Contact":
          window.location.href = "contact.html";
          break;
          /**
        case "Project":
           window.location.href = "project.html";
           break;
           **/
       default:
        window.location.href = "index.html";
  }

}
);

$(".nav-bar").on(
{mouseenter: function(){$(this).css("width","130px");},

mouseleave: function(){$(this).css("width","110px");},
}
);

$(".top-content-image").on(
  {mouseenter:function(){$(this).css({"width":"120%", "height": "100%"})},
   mouseleave:function(){$(this).css({"width":"90%", "height": "60%"})}});

$("#first-flexbox").on(
  {mouseenter:function(event3){
     const htmlElement = `<p class="temporary"> I am an experienced Geoscientist with more than 7 years experience in the Resource Industry.
     Currently, I work as a Frealance Software - and Google-Cloud Developer.
     I have completed both an undragraduate degree in Earth Sciences and a Master in Information Technology.
     In Addition, I am a certified Google Cloud Platform Professional Developer and AWS Cloud Practioner.
     </p>`;
     $("#first-flexbox h4").after(htmlElement);
     $(".sub-heading").hide();
     $("#second-flexbox img").hide();
     $("#second-flexbox").hide();},
     mouseleave:function(){
       $("#first-flexbox p").remove(".temporary");
       $(".sub-heading").show();
       $("#second-flexbox").show();
       $("#second-flexbox img").show();
     }
  }
)

const buttonDivClickedIcon1 = $(".icons")['0'].innerHTML;
const buttonDivClickedIcon2 = $(".icons")['1'].innerHTML;
const buttonDivClickedIcon3 = $(".icons")["2"].innerHTML;


console.log(buttonDivClickedIcon2);
$(".icons").on('click', function(event2){
  if(event2.currentTarget.innerHTML===buttonDivClickedIcon1){
    window.location.href='https://au.linkedin.com/in/fumba-donzo-980abb48?trk=people-guest_people_search-card';
  }

  else if (event2.currentTarget.innerHTML===buttonDivClickedIcon2){
    window.location.href="contact.html";
  }


  else if(event2.currentTarget.innerHTML===buttonDivClickedIcon3){
    window.location.href="https://github.com/Fdonzo";

  }

});


// middle div jquery functionality:



var slideIndex = 1;
slideShow(slideIndex);

function plusSlides(n) {
  slideShow(slideIndex += n);
}

function currentSlide(n) {
  slideShow(slideIndex = n);
    setTimeout(plusSlides(1), 2000);



}
function slideShow(n){
var i;
var slides= $(".middle-content")
//console.log("myslide:", slides)
var dots= $(".dot")
//console.log("dot:", dots)
if (n>slides.length) {slideIndex=1}
else if (n<1) {slideIndex = slides.length}
for(i=0; i<slides.length; i++){
slides[i].style.display= "none";
}

for(i=0; i<dots.length; i++){
   dots[i].className = dots[i].className.replace(" active", "");


}
//need to check it out!
slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

$('#pointer').on('click', function(event3){
  if(event3.target.className==='next'){
    plusSlides(1)
    currentSlide(1);
  }
  else if(event3.target.className==='prev'){
    plusSlides(-1)
    currentSlide(-1)
  }



});

//});

$('.dot-container').on('click', function(event8){
  //console.log('my-event', event8.currentTarget.children);

  let totalSpanElements = event8.currentTarget.children;
  let secondClassNameOfSpan =event8.target.classList[1];
  for(d =0; d<totalSpanElements.length;d++){
    if (secondClassNameOfSpan===totalSpanElements[d].classList[1]){
     currentSlide(d);
    }
  }


});

$('.frame').on('load', function(){
    $('.frame').contents().find('.bottom-navigation').hide();
    $('.frame').contents().find('.submission').hide();

});

var copyrightHtmlElement = $(".copyright p");
//console.log(copyrightHtmlElement);
(function(){
  var year= new Date().getFullYear();
  var siteOwnerName = "fumbadonzo"
  copyrightHtmlElement.append(` ${year} `).append(siteOwnerName);
  //console.log(copyrightHtmlElement);
})();


$(".bottom-navigation").on('click', function(event){
  console.log(event);
});



}



);
