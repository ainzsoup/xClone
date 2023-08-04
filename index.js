const leftBar = document.querySelector('#left-bar');
const content = document.querySelector('#content');


function setContentLeftMargin() {
	content.style.marginLeft = leftBar.offsetWidth + 'px';
}
setContentLeftMargin();

window.addEventListener('resize', setContentLeftMargin);
