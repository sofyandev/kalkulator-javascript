var bil1;
var bil2;
var hasil;
var opr;
var opr_seleksi = false;
function btn(angka) {
	var display = document.getElementById("output").value;
	if (display == "0" || display == bil1) {
		display = angka; 
	} else {
		display += angka;
	}
	document.getElementById("output").value = display;
	scaleFontSize("output");
}

function clr() {
	document.getElementById("output").value = "0";
	bil1 = 0;
	bil2 = 0;
	opr  = '';	
	opr_seleksi = false;
	scaleFontSize("output");
}

function koma() {
	var display = document.getElementById("output").value;
	if (display.includes(".") == false) {
		display += ".";
	}
	document.getElementById("output").value = display;
	scaleFontSize("output");	
}

function btn_opr(o) {
	opr_seleksi = true;
	if(o==5){
		if(opr!=''){
			bil2 = persen(parseFloat(document.getElementById("output").value));
			document.getElementById("output").value = bil2;
			hitung();
		}else{
			bil1 = persen(parseFloat(document.getElementById("output").value));
			document.getElementById("output").value = bil1;
		}
	}else if(o==6){
		if(opr!=''){
			if(bil2<0){
				bil2 = neg_to_pos(parseFloat(document.getElementById("output").value));
			}else{
				bil2 = pos_to_neg(parseFloat(document.getElementById("output").value));
			}
			document.getElementById("output").value = bil2;
		}else{
			if(bil1<0){
				bil1 = neg_to_pos(parseFloat(document.getElementById("output").value));
			}else{
				bil1 = pos_to_neg(parseFloat(document.getElementById("output").value));
			}
			document.getElementById("output").value = bil1;
		}
	}else{
		bil1 = parseFloat(document.getElementById("output").value);
		opr = o;
		document.getElementById("output").value = bil1;
	}
	scaleFontSize("output");
}

function hitung() {
	if (opr_seleksi == true) {
		bil2 = parseFloat(document.getElementById("output").value);
		switch(opr){
			case 1 :
				hasil = bil1 * bil2;
				document.getElementById("output").value = hasil;			
				break;
			case 2 :
				hasil = bil1 / bil2;
				document.getElementById("output").value = hasil;
				break;
			case 3 :
				hasil = bil1 - bil2;
				document.getElementById("output").value = hasil;
				break;
			case 4 :
				hasil = bil1 + bil2;
				document.getElementById("output").value = hasil;
				break;
		}
	}
	scaleFontSize("output");
}

function pos_to_neg(num){
	return -Math.abs(num);
}

function neg_to_pos(num){
	return Math.abs(num);
}

function persen(num){
	return num/100;
}

function scaleFontSize(element) {
	var container 	= document.getElementById(element);
	var number 	  	= document.getElementById("output").value;
	var countNumber	= number.length;
	if(countNumber >= 7 && countNumber < 12){
		container.style.fontSize = "36px";		
	}else if(countNumber > 11 && countNumber <= 21){
		container.style.fontSize = "18px";
	}else if(countNumber > 21){
		container.style.fontSize = "10px";
	}else{
		container.style.fontSize = "55px";
	}

	if(bil1 == 0 && opr == '' && number == 0){
		document.getElementById("clearBtn").innerHTML = "AC";
	}else{
		document.getElementById("clearBtn").innerHTML = "C";
	}

}