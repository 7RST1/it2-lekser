var button = document.getElementById("button");
button.addEventListener("click", () => {
    const name = prompt("Hva heter du?");
    if (name && name.length < 20) {
        document.getElementById("loginmessage").textContent = `Logget inn som ${name}`
    } else if (name.length >= 20) {
        alert(`Navnet ditt er for langt! (${name.length - 19} ${name.length - 19 == 1 ? "symbol" : "symboler"} for langt)`)
    } else if (!name) {
        alert("Navnet ditt kan ikke være ingenting!")
    }
});