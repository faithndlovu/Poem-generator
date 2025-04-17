function displayPoem(response){
    console.log("poem generated");
    new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart: true,
        cursor: "",
      });
}


function generatePoem(event){
    event.preventDefault();
 let promptInput= document.querySelector("#user-prompt");  
let apiKey="dof43157bf3aftdf9163bbd7407de4ba";
let context="You are a romantic poem expert and love to write poem. Your mission is to generate a an english poem.Make sure to follow the user instructions below.Do not include a title";
let prompt=`Generate an english poem above ${promptInput.value} `;
let apiUrl=`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`; 
 
console.log("Generating poem");
console.log(`Prompt:${prompt}`);
console.log(`Context: ${context}`);

axios.get(apiUrl).then(displayPoem);


}




let poemformElement= document.querySelector("#poem-generator-form");
poemformElement=addEventListener("submit", generatePoem);