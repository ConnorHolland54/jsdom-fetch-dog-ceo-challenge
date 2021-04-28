console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

document.addEventListener('DOMContentLoaded', function() {
  fetchImages(imgUrl)

})

function fetchImages(url) {
  fetch(url) .then(function(response) {
  return response.json();
}) .then(function(json){
  addImageToPage(json)
})
}

function addImageToPage(images) {
  let imageContainer = document.getElementById('dog-image-container')
  for (const url of images['message']) {
    let newImage = document.createElement('img')
    newImage.src = url
    newImage.width = '100'
    newImage.heigth = '100'
    imageContainer.appendChild(newImage)
  }
}
