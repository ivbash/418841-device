var mapBtn = document.querySelector(".js-map");
var mapPopup = document.querySelector(".popup-map");
var closeMapBtn = document.querySelector(".js-close-map");
var writeUsBtn = document.querySelector(".js-write-us");
var writeUsPopup = document.querySelector(".popup-write-us");
var closeWriteUsBtn = document.querySelector(".js-close-write-us");

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
