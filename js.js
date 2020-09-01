var button = document.getElementById("button");
button.addEventListener("click", () => {
    const name = prompt("Hva heter du?");
    if (name) {
        document.getElementById("loginmessage").textContent = `Logget inn som ${name}`
    }
});