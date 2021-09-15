async function fetchDog() {
    try {
        const dog = await fetch("http://localhost:3000/dog/");
        const data = await dog.json();
        document.querySelector(
            ".dog-container"
        ).innerHTML = `<img src="${data.message}" alt="DOG!" class="rounded mx-auto d-block" style="max-height: 600px">`;
    } catch (error) {
        console.log(error);
    }
}
