function onReady() {
  console.log("Yay!, onReady() got called when the page loaded.")
  // Document is how you manipulate the HTML
  let header = document.querySelector("h1")
  console.log(header)
  header.classList.add("pink-text")
  header.textContent = "HELLO FROM JAVASCRIPT!"
}

function onPotatoClick() {
  console.log("You clicked potato!")
  let potatoFarm = document.getElementById("potatoFarm")
  potatoFarm.innerHTML += `<p onclick="deletePotato(event)">🥔</p>`
}

function deletePotato(event) {
  console.log("you wanna delete a potat", event.target)
  event.target.remove()
}

function onUnicornClick() {
  console.log("Unicorn button clicked")
  const potatoFarm = document.getElementById("potatoFarm")
  const unicorn = document.createElement("p")
  unicorn.innerText = "🦄"
  unicorn.addEventListener("click", deleteUnicorn)
  potatoFarm.appendChild(unicorn)
}

function deleteUnicorn(e) {
  e.target.remove()
}

// Will call onReady() when the page loads.
onReady()
