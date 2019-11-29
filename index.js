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
        window.open('')
    }

    instagram.addEventListener('click', instagramLink)
    function instagramLink() {
       parent.location='mailto:tech.49@yahoo.com'
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

links();
