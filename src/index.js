
document.addEventListener('DOMContentLoaded', function() {
    getImages()
    getDogBreeds()
  

})

const imgUrl = 'https://dog.ceo/api/breeds/image/random/4'

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function getImages() {
    return fetch(imgUrl)
    .then(resp => resp.json())
    .then(data => {
        data.message.forEach(image =>renderImages(image))
    })
}

function renderImages(dogURL) {
    const container = document.querySelector("#dog-image-container") 

        const img = document.createElement('img')
        img.src = dogURL
        container.appendChild(img)
    
}

function getDogBreeds(){
    fetch(breedUrl)
    .then(res => res.json())
    .then(data => console.log(data))

}

 let ul = document.querySelector('#dog-breeds')
 const li = document.createElement('li')
// function fetchBooks() {
//     return fetch("https://anapioficeandfire.com/api/books")
//       .then(resp => resp.json())
//       .then(json => renderBooks(json))
//   }
  
//   function renderBooks(books) {
//     const main = document.querySelector('main')
//     books.forEach(book => {
//       const h2 = document.createElement('h2')
//       h2.innerHTML = book.name
//       main.appendChild(h2)
//     })
//   }
  
//   document.addEventListener('DOMContentLoaded', function() {
//     fetchBooks()
//   })
 