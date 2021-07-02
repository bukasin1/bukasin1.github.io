function main(){

}
let images = [
    "./images/luke-Sky.jpeg",
    "./images/c3-po.jpeg",
    "./images/r2-d2.jpeg",
    "./images/Anakin_Skywalker_RotS.png",
    "./images/princess-leia-1200.jpeg",
    "./images/OwenCardTrader.png",
    "./images/character1.jpeg" ,
    "./images/character1.jpeg",
    "./images/BiggsHS-ANH.png",
    "./images/obi-wan-ken.jpeg"
]
let names = document.getElementsByClassName('name')
let copulateData = []
let name = document.getElementById('modalName')
let gender = document.getElementById('gender')
let height = document.getElementById('height')
let mainBlock = document.getElementById('main')
const starWarsUrl = "https://swapi.dev/api/people"
fetch(starWarsUrl).then(resp => resp.json()).then(data => {

    let charactersContainer = document.createElement('div')
    charactersContainer.classList.add('characters-section')
    
    data.results.forEach((item,index) => {
        let characterBox = document.createElement('div')
        characterBox.classList.add('character-box')
        characterBox.innerHTML = `
            <img src=${images[index]} alt="skywalker">
            <div class="text">
                <p class="name">${item.name}</p>
            </div>
        `
        characterBox.onclick = () => {
            name.textContent = item.name
            gender.textContent = `Gender: ${item.gender}`
            height.textContent = `Height: ${item.height}`
            modal.style.display = 'block'
        }
        charactersContainer.append(characterBox)
    });

    mainBlock.append(charactersContainer)
    
  
   console.log(data)


})

const modal = document.getElementById("myModal");



// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//module.exports = {main}