const usernameInput = document.querySelector('.username_input')
const passwordInput = document.querySelector('.password_input')
const submitBtn = document.querySelector('.submit_btn')
const userMsg = document.querySelector('.user_msg')
const passMsg = document.querySelector('.pass_msg')
const btnMsg = document.querySelector('.btn_msg')




submitBtn.addEventListener('click' , (e) => {
e.preventDefault()
let sendData = true


if (usernameInput.value.length === 0 ) {
    userMsg.innerHTML = 'Please enter your username'
    usernameInput.style.borderColor = 'red'
    sendData = false
}else if(usernameInput.value.length < 5){
    userMsg.innerHTML = 'username must At least 5 chart'
    usernameInput.style.borderColor = 'red'
    sendData = false
}

    usernameInput.addEventListener('blur', ()=>{
        if (usernameInput.value.length !== 0 ) {
            userMsg.innerHTML = ''
            usernameInput.style.borderColor = '#009579'
            sendData = true
        }else if(usernameInput.value.length > 5){
            userMsg.innerHTML = ''
            usernameInput.style.borderColor = '#009579'
            sendData = true
        }
    })

    if (passwordInput.value.length === 0 ) {
        passMsg.innerHTML = 'Please enter your password'
        passwordInput.style.borderColor = 'red'
        sendData = false
    }else if(passwordInput.value.length < 10){
        passMsg.innerHTML = 'username must At least 10 chart'
        passwordInput.style.borderColor = 'red'
        sendData = false
    }


    passwordInput.addEventListener('blur', ()=>{
        if (passwordInput.value.length !== 0 ) {
            passMsg.innerHTML = ''
            passwordInput.style.borderColor = '#009579'
            sendData = true
        }else if(usernameInput.value.length > 10){
            passMsg.innerHTML = ''
            passwordInput.style.borderColor = '#009579'
            sendData = true
        }
    })

    if (sendData) {
        fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: usernameInput,
    body: passwordInput,
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => {
      if (response.ok) {
        btnMsg.innerHTML = ' You have successfully logged in'
      }
  })
  .catch(error => console.log('error'))
  
    }

})