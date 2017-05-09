var mapBtn = document.querySelector(".js-map");
var mapPopup = document.querySelector(".popup-map");
var closeMapBtn = document.querySelector(".js-close-map");
var writeUsBtn = document.querySelector(".js-write-us");
var writeUsPopup = document.querySelector(".popup-write-us");
var closeWriteUsBtn = document.querySelector(".js-close-write-us");
var form = document.querySelector(".popup-write-us form");
var username = document.querySelector(".popup-name input");
var email = document.querySelector(".popup-email input");
var emailText = document.querySelector(".popup-text textarea");
var searchField = document.querySelector(".search input[type='text']");
var searchBtn = document.querySelector(".search input[type='submit']");

try {
	mapBtn.addEventListener("click", function(evt) {
		evt.preventDefault();
		mapPopup.classList.add("popup-show");
	});

	closeMapBtn.addEventListener("click", function(evt) {
		evt.preventDefault();
		mapPopup.classList.remove("popup-show");
	});

	writeUsBtn.addEventListener("click", function(evt) {
		evt.preventDefault();
		writeUsPopup.classList.add("popup-show");
	});

	closeWriteUsBtn.addEventListener("click", function(evt) {
		evt.preventDefault();
		writeUsPopup.classList.remove("popup-show");
	});

	window.addEventListener("keydown", function(evt) {
		if (evt.keyCode === 27) {
			if (writeUsPopup.classList.contains("popup-show")) {
				writeUsPopup.classList.remove("popup-show");
			}
			if (mapPopup.classList.contains("popup-show")) {
				mapPopup.classList.remove("popup-show");
			}
		}
	});

	function removeFormError() {
		if (username.classList.contains("form-error")) {
			username.classList.remove("form-error");
		}
		if (email.classList.contains("form-error")) {
			email.classList.remove("form-error");
		}
		if (emailText.classList.contains("form-error")) {
			emailText.classList.remove("form-error");
		}
	}

	form.addEventListener("submit", function(evt) {
		if (!username.value) {
			evt.preventDefault();
			username.classList.add("form-error");
		}
		if (!email.value) {
			evt.preventDefault();
			email.classList.add("form-error");
		}
		if (!emailText.value) {
			evt.preventDefault();
			emailText.classList.add("form-error");
		}
		setTimeout(removeFormError, 1000);
	});
} catch(err) { }

searchField.addEventListener("blur", function() {
	if (searchField.value) {
		searchField.classList.add("field-not-empty-text");
		searchBtn.classList.add("field-not-empty-btn");
	} else {
		if (searchField.classList.contains("field-not-empty-text")) {
			searchField.classList.remove("field-not-empty-text");
		}
		if (searchBtn.classList.contains("field-not-empty-btn")) {
			searchBtn.classList.remove("field-not-empty-btn");
		}
	}
});