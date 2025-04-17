function generatePoem(event){
    event.preventDefault();
       

    new Typewriter("#poem", {
        strings: "Poem",
        autoStart: true,
        cursor: "",
      });


}




let poemformElement= document.querySelector("#poem-generator-form");
poemformElement=addEventListener("submit", generatePoem);