let counter = 1
// while (counter < 2) {
//     document.querySelector('#back').style.visibility = 'hidden'
// }



function getMonsters() {
    fetch(`http://localhost:3000/monsters/?_limit=50&_page=${counter}`)
    .then(res => res.json())
    .then(monsters => {
        //console.log(monsters)
        monsters.forEach(monster => {
            const container = document.querySelector('#monster-container')
            const newDiv = document.createElement('div')
            
            const name = document.createElement('h3')
            name.innerText = monster.name
            
            const age = document.createElement('p')
            age.innerText = `Age: ${monster.age}`

            const description = document.createElement('p')
            description.innerText = monster.description

            newDiv.append(name, age, description)
            container.append(newDiv)
        })
    })
    counter < 2? document.querySelector('#back').style.visibility = 'hidden': document.querySelector('#back').style.visibility = 'visible'
}

document.querySelector('#forward').addEventListener('click', () => {
    counter++
    document.querySelector('#monster-container').innerText = ''
    getMonsters()
})

document.querySelector('#back').addEventListener('click', () => {
    counter--
    document.querySelector('#monster-container').innerText = ''
    getMonsters()
})

getMonsters()

const form = document.querySelector('#createMonster')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/monsters/', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: e.target.name.value,
            age: e.target.age.value,
            description: e.target.description.value
        })
    })
    getMonsters()
})