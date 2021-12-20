
var closebtns = document.getElementsByClassName("close");
var i;

for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function() {
    this.parentElement.remove()
	totalSum()

  });
}
var like = document.getElementsByClassName("fa-heart");
for (let i = 0; i < like.length; i++) {
  like[i].addEventListener("click", function () {
    if (like[i].style.color === "black") {
      like[i].style.color = "pink";
    } else {
      like[i].style.color = "black";
    }
  });
}

function totalSum() {
    let qutes = document.querySelectorAll(".quantity");
    let unitPrices = document.getElementsByClassName("price");
	var s=0
	for (let i=0; i<qutes.length;i++){
		
		s=s+qutes[i].value*unitPrices[i].innerHTML
	}
	document.getElementById("total").innerHTML=s

	
    //let s = 0;
    //for (let i in qutes) {
   //     s = s + unitPrices[i].innerText.replace("TND", "") * qutes[i].innerText
    //}
    //document.getElementById("total").innerHTML = s;

} 