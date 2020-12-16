
function displayColors(colors) {

    let colorHtml = colors.map(color => {
        return`<div class="color" style="background-color: ${color.value}"></div>`
    }).join('')

    document.body.innerHTML= `
    <div class='colors'>
        ${colorHtml}
    </div>
    `
}

async function getColors(colorCount) {
    let response = await fetch(`https://api.noopschallenge.com/hexbot?count=${colorCount}`)
    let data = await response.json()
    let colors = data.colors

    displayColors(colors)
}

let colorCount = 100

getColors(colorCount)