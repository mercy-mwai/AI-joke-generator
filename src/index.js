function displayJoke(response) {
    console.log(response.data.answer);
    new Typewriter("#joke", {
      strings: response.data.answer,
      autoStart: true,
      cursor: null,
      delay: 20,
    });
  };
  
  function generateJoke(event) {
    event.preventDefault();
    let apiKey = "ataf73cb6640fo53e168b11f0d6bb9e4";
    let context =
      "Your are a funny AI Assistant that tells short and sweet jokes. The joke must be provided in HTML format. Example: <p>this is a joke</p>";
    let prompt = "Generate a short and unique joke a French people. ";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  
    let jokeElement = document.querySelector("#joke");
  
    jokeElement.innerHTML = "Generating a joke for you.. please wait";
  
    console.log("called the AI api");
    axios.get(apiUrl).then(displayJoke);
  };
  
  let generatorButton = document.querySelector("#generate-joke-button");
  generatorButton.addEventListener("click", generateJoke);
  