function getJoke() {
    fetch("https://official-joke-api.appspot.com/random_joke")
        .then(response => response.json())
        .then(data => {
            document.getElementById("joke").innerText =
                data.setup + "  " + data.punchline;
        })
        .catch(() => {
            document.getElementById("joke").innerText =
                "Oops! Could not fetch a joke. Try again.";
        });
}
