document.addEventListener('DOMContentLoaded', function () {
  let changeText = document.querySelector('#text')
  changeText.innerHTML = 'This is really cool!'
  console.log(changeText)
  console.log('The DOM has loaded')
})
