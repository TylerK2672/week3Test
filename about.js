console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submitted');
}

function complimentPicHover ()
{
	alert('you are so cute, almost on par with this cat');
}

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

document.getElementById('catPic').addEventListener('mouseover', complimentPicHover);

