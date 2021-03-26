// Worked with Gardner Gang: Wade, Tanecia, Dashlin, Asianna, Ziya, Brian

document.querySelector('button').addEventListener('click', findNintendo)
let consoleName = document.querySelector('h2 span')
let consoleInfo = document.querySelector('h3 span')
let consoleYear = document.querySelector('h4 span')
let consoleImage = document.querySelector('img')

async function findNintendo() {
  const year = document.querySelector('input').value
  try {
    const response = await fetch(`http://localhost:8000/api/nintendo/${year}`)
    const gameConsole = await response.json()
    consoleName.innerText = gameConsole.name
    consoleInfo.innerText = gameConsole.description
    consoleYear.innerText = gameConsole.year
    consoleImage.src = gameConsole.imageUrl
  } catch (err) {
    console.log(err)
  }
}

document.querySelector("input").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    findNintendo()
  }
})

