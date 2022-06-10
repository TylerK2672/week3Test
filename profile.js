document.getElementById('color').addEventListener('click', favoriteColor);
document.getElementById('place').addEventListener('click', favoritePlace);
document.getElementById('ritual').addEventListener('click', favoriteRitual);

function favoriteColor ()
{
    document.body.style.backgroundImage = ''
    document.querySelector('body').style.backgroundColor = '#F4B9B2'
    alert('Tyler\'s favorite color is pink!')
}

function favoritePlace ()
{
    alert('Tyler\'s favorite place is your moms house!')
    document.body.style.backgroundImage = 'url(./images/momsHouse.jpeg)'
}

function favoriteRitual ()
{
    alert('Tyler\'s favorite ritual is playing fortnite daily with the boys!')
    document.body.style.backgroundImage = 'url(./images/fortnite.jpeg)'
}