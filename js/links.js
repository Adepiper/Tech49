const links = () => {
const twitter = document.getElementById('twitter');
const facebook = document.getElementById('facebook')
const instagram = document.getElementById('instagram')
const calculate = document.getElementById('calculate')
const contactModal = document.getElementById('contactModal')
const messageModal = document.getElementById('messageModal')

twitter.addEventListener('click', twitterLink)
    function twitterLink() {
        window.open('')
    }

    facebook.addEventListener('click', facebookLink)
    function facebookLink() {
        window.open('https://www.facebook.com/tech049')
    }

    instagram.addEventListener('click', instagramLink)
    function instagramLink() {
       window.open('https://www.instagram.com/tech_049/')
    }

    calculate.addEventListener('click', calculateLink)
    function calculateLink() {
       location.href = 'calculator.html'
    }

    //messageModal.onclick = function(){
   // const attribute= contactModal.getAttribute('data-dismiss')
   // attribute.value = "modal"
   // }
}

document.querySelector('#button').onmousemove = (e) => {

	const x = e.pageX - e.target.offsetLeft
	const y = e.pageY - e.target.offsetTop

	e.target.style.setProperty('--x', `${ x }px`)
	e.target.style.setProperty('--y', `${ y }px`)
	
}

links();
