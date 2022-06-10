document.getElementById('randRestaurant').addEventListener('click', requestRestaurant)

function requestRestaurant ()
{
    const restaurantList = document.querySelectorAll('.liLink')
    document.getElementById('pickedRestaurant').innerHTML = restaurantList[Math.floor(Math.random() * restaurantList.length)].textContent
}