const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");
btn.addEventListener('click', function(){
    let hexColor = '#';
    //getting 6 values for ex."#123456"
    for (let i=0; i<6;i++){
        hexColor += hex[getRandomNumber()]
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length)
    //Math random gives us a random number between 0 and almost 1, thats why we multiply it with the length of the array so it can give us a number between 0 and last index. Then we floor it to get the closest lower integer
}