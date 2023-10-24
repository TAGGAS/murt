var burger = document.querySelector(".burger");
burger.onclick = men;

var menu = document.querySelector(".menu");

let i = 0;
function men(){
	i++
	menu.classList.add("men-1");
	if(i % 2 == 0){
		menu.classList.remove("men-1");
	}
}