
var cardHolderInfo = document.querySelector('.cardHolderInfo');
var confirmation = document.querySelector('.confirmation');
var toggleArrow = document.querySelector('.toggleArrow');
var form = document.querySelector('.form1');
var investment = document.querySelector('.investment');
var planParagraph = document.querySelector('.planParagraph');
var firstName = document.querySelector('.firstName');
var lastName = document.querySelector('.lastName');
var formSelect = document.querySelector('.formSelect');

toggleArrow.addEventListener('click', () => {
	form.classList.toggle('goUpAndDown');
	investment.classList.toggle('changeHeight');
})

checkWidth();

window.addEventListener("resize", function() {
    if (window.matchMedia("(min-width: 768px)").matches) {
     	changeInnerHTMLAndRemoveClasses();
    } else {
        changeInnerHTMLAndAddClasses();
    }
});

function checkWidth() {
    var body = document.getElementsByTagName('body');
    var width = window.innerWidth || document.documentElement.clientWidth || body.clientWidth;
	if (width <= 767) {
		changeInnerHTMLAndAddClasses();
	} else {
		changeInnerHTMLAndRemoveClasses();
	}
}

function changeInnerHTMLAndAddClasses() {
	cardHolderInfo.innerHTML = '<img src="images/2.png" class="circle" alt="number two">';
	confirmation.innerHTML = '<img src="images/3.png" class="circle" alt="number three">';
	planParagraph.innerHTML = '<h3>בחירת מסלול השקעה</h3>';
	lastName.classList.add('col-11');
	firstName.classList.add('col-11');
	formSelect.classList.add('col-11');
}

function changeInnerHTMLAndRemoveClasses() {
	cardHolderInfo.innerHTML = 'פרטי בעל החיסכון<img src="images/2.png" class="circle" alt="number two">';
	confirmation.innerHTML = 'אישור וסיכום<img src="images/3.png" class="circle" alt="number three">';
	planParagraph.innerHTML = 'באפשרותך לבחור את המסלול שבו יושקע הכסף  שלך, על  פי צרכיך ומידת הסיכון המתאימה לך';
	lastName.classList.remove('col-11');
	firstName.classList.remove('col-11');
	formSelect.classList.remove('col-11');
}