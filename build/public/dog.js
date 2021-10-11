async function fetchDog() {
    try {
        const dog = await fetch(`https://getdogpics.herokuapp.com/dog`);
        const data = await dog.json();
        document.querySelector(
            ".dog-container"
        ).innerHTML = `<img src="${data.message}" alt="DOG!" class="rounded mx-auto d-block" style="max-height: 600px">`;

        //hiding the "Another from the same breed" button
        document.querySelector("#dog-button").innerHTML = "";
    } catch (error) {
        console.log(error);
    }
}

async function fetchDogByBreed(breed) {
    try {
        const dog = await fetch(
            `https://getdogpics.herokuapp.com/dog/breed?breed=${breed}`
        );
        const data = await dog.json();
        document.querySelector(
            ".dog-container"
        ).innerHTML = `<img src="${data.message}" alt="${breed}!" class="rounded mx-auto d-block" style="max-height: 600px">`;

        const dogButton = document.querySelector("#dog-button");
        dogButton.innerHTML = `<button type="button" class="btn btn-secondary" id="dog-button" onclick="getDogBreed()"> Get another ${breed}!</button>`;
    } catch (error) {
        console.log(error);
    }
}

async function getDogBreed() {
    let select = document.querySelector(".dog-selector").value;
    try {
        fetchDogByBreed(select);
    } catch (error) {
        console.log(error);
    }
}
