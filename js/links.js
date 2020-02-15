const links = () => {
const twitter = document.getElementById('twitter');
const facebook = document.getElementById('facebook')
const instagram = document.getElementById('instagram')
const calculate = document.getElementById('calculator')
const contactModal = document.getElementById('contactModal')
const messageModal = document.getElementById('messageModal')

twitter.addEventListener('click', twitterLink)
    function twitterLink() {
        window.open('')
    }

    facebook.addEventListener('click', facebookLink)
    function facebookLink() {
        window.open('https://www.facebook.com/tech49energy/')
    }

    instagram.addEventListener('click', instagramLink)
    function instagramLink() {
       window.open('https://www.instagram.com/_tech49energy/')
    }

    calculate.addEventListener('click', calculateLink)
    function calculateLink(){
        window.open('calculator.html')
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
