menu.onclick = function myfunction() {
	var x = document.getElementById('myTopnav');

	if (x.className === "menu1") {
		x.className	+=	" responsive";
	} else {
		x.className = "menu1";
	}
}
menusec.onclick = function myfunction() {
	var y = document.getElementById('myTopnav2');

	if (y.className === "menu2") {
		y.className	+=	" responsive2";
	} else {
		y.className = "menu2";
	}
}