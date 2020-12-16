async function getPhotos() {
    let response = await fetch('photo.json')
    let data = await response.json();


    let myPhotoHtml = data.map(dat => {
        return `<img class='img' src="https://picsum.photos/id/${dat.id}/100/100" />`
    }).join('')
    console.log(myPhotoHtml)

    document.body.innerHTML = `<div class='photos'>${myPhotoHtml}</div>` 
}

getPhotos()