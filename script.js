const hex = document.querySelector(".hex");

const btn = document.querySelector(".generate")

btn.addEventListener("click" , () => {

    const randmonColor = Math.random().toString(13).substring(2, 8);

    document.body.style.backgroundColor = "#" + randmonColor;

    hex.innerHTML = "#" + randmonColor;
})