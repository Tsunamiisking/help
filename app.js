const ham = document.querySelector('.ham');
const navItems = document.querySelector('.nav-items')

ham.addEventListener('click', () => {
    ham.classList.toggle('active');
    navItems.classList.toggle('active')
})

document.querySelectorAll('.nav-item').forEach((e) => {
    e.addEventListener(('click'), () => {
        ham.classList.remove('active');
        navItems.classList.remove('active');
    })
})

document.querySelector('.form').addEventListener('submit', (e) => {
    e.preventDefault()
    let text = document.getElementById('desc')
    let name = document.getElementById('name')
    let recommendation = document.querySelector('.recommendation')
    let div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = `<p> <span class="bold"> ${name.value}</span>:  ${text.value} </p>`
    recommendation.appendChild(div)
    text.value = ''
    name.value = ''
})