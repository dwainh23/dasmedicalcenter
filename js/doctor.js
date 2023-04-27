const serviceItems = document.querySelector(".cards-container");
const popup = document.querySelector(".popup-box")
const popupCloseBtn = popup.querySelector(".popup-close-btn");
const popupCloseIcon = popup.querySelector(".popup-close-icon");

serviceItems.addEventListener("click",function(event){
  if(event.target.tagName.toLowerCase() == "button"){
     const item =event.target.parentElement;
     const h1 = item.querySelector("h1").innerHTML;
     const readMoreCont = item.querySelector(".desc").innerHTML;
     const img = item.querySelector(".image").innerHTML;
     popup.querySelector("h1").innerHTML = h1;
     popup.querySelector(".popup-body").innerHTML = readMoreCont;
     popup.querySelector(".popup-image").innerHTML = img;
     popupBox();
  }

})

popupCloseBtn.addEventListener("click", popupBox);
popupCloseIcon.addEventListener("click", popupBox);

popup.addEventListener("click", function(event){
   if(event.target == popup){
      popupBox();
   }
})

function popupBox(){
  popup.classList.toggle("open");
}

