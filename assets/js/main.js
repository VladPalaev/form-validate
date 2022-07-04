'use strict';

function addActiveClass(list) {
	return function() {
		list.forEach(item => item.classList.remove('active'));
		this.classList.add('active');
	}
}

function addListenerElement(DOMelement) {
	const list = document.querySelectorAll(DOMelement);

	list.forEach(item => item.addEventListener('click',  addActiveClass(list)))
}


/* вешую события на кнопки и отслеживаю клики по ним, есть  */
addListenerElement('.btn-switch');

/* нахожу нод узел формы с помощью метода forms, после его нужно указать name формы */
const form = document.forms.formRegistration;

form.addEventListener('change', function() {
	this.formRegistrationBtn.disabled = this.checkValidity() ? false : true;
});

function handles(event) {
	if (event.target.tagName = 'INPUT') {
		
	}
}
form.addEventListener('change', handles)