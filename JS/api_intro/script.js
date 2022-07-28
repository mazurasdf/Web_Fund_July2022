function fetchPokemon(){
    console.log("clicked!");

    // PROMISES -> pending, resolved, rejected

    //contact API
    //get response
    //put response on page

    var pokeInput = document.querySelector("#pokeInput");
    // console.log(pokeInput.value);

    //STRING INSIDE FETCH IS THE API URL TO CONTACT
    fetch("https://pokeapi.co/api/v2/pokemon/"+pokeInput.value)
        .then(res => res.json())
        .then(res => {
            //RES IS THE DATA AND YOU CAN USE IT HERE
            console.log("it worked");
            console.log(res.sprites.front_default);
            var pokeImg = document.querySelector("#pokeImg");
            pokeImg.src = res.sprites.front_default;
            pokeImg.alt = pokeInput.value;
        })
        .catch(err => {
            //CODE THAT ONLY RUNS IF THE API CALL DOESN'T WORK
            console.log("it didn't work");
            console.log(err);
        })
}