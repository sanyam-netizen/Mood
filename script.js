const searchinput = document.querySelector(".search-input");
const cards = document.querySelectorAll(".card");
const sections=document.querySelectorAll("#section");
const form=document.querySelector(".form")

searchinput.addEventListener("input", function() {

    const searchterm = searchinput.value.toLowerCase();

    cards.forEach(function(card) {

        const title = card.querySelector("h4").textContent.toLowerCase();

        if (title.includes(searchterm)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }

    });
    sections.forEach(function(section){
  if(searchterm!==""){
    section.style.display="none";
  }
  else{
    section.style.display="";
  }
});
     if(searchterm!==""){
    form.style.display="none";
  }
  else{
    form.style.display="";
  }
});
