//pseudocode
//see the image received from the server, including title, likes, and comments
    //function init - get request to get photo data
    //renderphoto - function to display image data on the dom

//click heart icon to increase likes on the page

//add a new comment when the comment form is submitted
    //submit event listener
    //add new comment to page

const baseUrl = 'http://localhost:3000'
const photo = document.querySelector('.image-card')
const newComment = document.querySelector('#comment-form')
const commentsList = document.querySelector('#comments-list')
const likeBtn = document.querySelector('#like-button')
const likes = document.getElementById('like-count')


function init(){
    fetch(baseUrl + '/images/1')
    .then(res => res.json())
    .then(imageData => {
        renderComments(imageData)
        renderImages(imageData)
    })
}

function renderImages(imageData){
    const title = document.getElementById('card-title')
    title.textContent = imageData.title
    
    const image = document.getElementById('card-image')
    image.src = imageData.image
    
    const likes = document.getElementById('like-count')
    likes.textContent = `${imageData.likes}`
}

function renderComments(imageData){
    const li1 = document.getElementById('li1')
    li1.textContent = imageData.comments[0].content

    const li2 = document.getElementById('li2')
    li2.textContent = imageData.comments[1].content

    const li3 = document.getElementById('li3')
    li3.textContent = imageData.comments[2].content

}

newComment.addEventListener('submit', e => {
    e.preventDefault()
    // console.log(e.target['comment'].value)
    let newLi = document.createElement('li')
    newLi.textContent = e.target['comment'].value
    console.log(newLi)
    commentsList.append(newLi)
})

likeBtn.addEventListener('click', handleLikes)

function handleLikes(e){
    let likenum = document.getElementById('like-count').innerText
    likenum++
    likes.innerText = likenum
    console.log(likes)
}


init()