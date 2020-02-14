
//used to fetch client side javascript
console.log('Client side javascript file is loaded!')
//fetch api is client side api
//fetch method only used in javascript
fetch('http://puzzle.mead.io/puzzle').then((response)=>{         //fetch callback is followed
    response.json().then((data)=>console.log(data));
})
debugger
// fetch('http://localhost:3000/weather?address=Boston').then((response)=>{         //fetch callback is followed
//     response.json().then((data)=>
//   {  if(data.error)
//     {   console.log(data.error);}
//     else
//     { 
//          console.log(data.location)
//          console.log(data.forecast)
//     }

// })
// })
 //console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')    //by tag
const messageOne = document.querySelector('#message-1')  //by id
const memssageTwo = document.querySelector('#message-2')
// messageOne.textContent='From javascript'
// memssageTwo.textContent =''
messageOne.textContent='Loading... '
memssageTwo.textContent =''

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                // console.log(data.error)
                messageOne.textContent = data.error
            } else {
                // console.log(data.location)
                // console.log(data.forecast)
                messageOne.textContent=data.location
                memssageTwo.textContent=data.forecast
            }
        })
    })
})