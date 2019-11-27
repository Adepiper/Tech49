const links = () => {
const twitter = document.getElementById('twitter');
const facebook = document.getElementById('facebook')
const instagram = document.getElementById('instagram')
const calculate = document.getElementById('calculate')

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
        window.open('')
    }

    calculate.addEventListener('click', calculateLink)
    function calculateLink() {
       location.href = 'calculator.html'
    }
}

links();