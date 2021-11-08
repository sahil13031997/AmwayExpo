$(".mainnav div").click(function() {
  $("ul").slideToggle();
  $("ul ul").css("display", "none");
  $(".mainnav .on").toggleClass("on");
});
$(".hasDD").click(function(e) {
  $(this)
    .find("> ul")
    .slideToggle();
  $(this)
    .find("> ul ul")
    .css("display", "none");
  $(this)
    .find("> ul li")
    .removeClass("on");
  $(this).toggleClass("on");
  e.stopPropagation();
});



let backdrop = document.querySelector(".backdrop");

backdrop.addEventListener("click",function(){
  document.querySelector(".product-card").style.display="none";
  document.querySelector(".backdrop").style.display="none";

})

// let dropdownText = document.querySelector(".dropdown-text");
// let dropdownOption = document.querySelector(".dropdown-option")
// dropdownText.addEventListener("click",function(){
//   dropdownOption.classList.toggle("open");
// });

let muteBtn = document.querySelector(".mute-div");
let muteCln = document.querySelector(".mute-cancel");
muteBtn.addEventListener("click",function(){
  muteCln.classList.toggle("open");
})