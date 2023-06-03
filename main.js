
//Create an array of alphabets and numbers
const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

const major = document.querySelector(".major");
const hex = document.querySelector("#hex");
const button = document.querySelector(".button button");


button.addEventListener("click", function(){
    let hexColor = "#";
    for (let i = 0; i < 6; i++)

    hexColor += hexArray [getRandomnumber()]

    hex.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})

function getRandomnumber(){
    return Math.floor(Math.random() * hexArray.length);
}
