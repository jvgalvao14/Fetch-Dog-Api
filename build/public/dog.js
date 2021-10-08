async function fetchDog() {
    try {
        const port = process.env.PORT || 3003;
        const dog = await fetch(`http://localhost:${port}/dog/`);
        const data = await dog.json();
        document.querySelector(
            ".dog-container"
        ).innerHTML = `<img src="${data.message}" alt="DOG!" class="rounded mx-auto d-block" style="max-height: 600px">`;
    } catch (error) {
        console.log(error);
    }
}

async function fetchDogByBreed(breed) {
    try {
        const port = process.env.PORT || 3003;
        const dog = await fetch(
            `http://localhost:${port}/dog/breed?breed=${breed}`
        );
        const data = await dog.json();
        document.querySelector(
            ".dog-container"
        ).innerHTML = `<img src="${data.message}" alt="${breed}!" class="rounded mx-auto d-block" style="max-height: 600px">`;
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
