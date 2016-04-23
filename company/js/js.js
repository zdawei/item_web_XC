(function(){
	var main_btn1=document.getElementById("main_tab1");
	var btn1_p=main_btn1.getElementsByTagName("div").item(0);
	var main_btn2=document.getElementById("main_tab2");
	var btn2_p=main_btn2.getElementsByTagName("div").item(0);
	var main_btn3=document.getElementById("main_tab3");
	var btn3_p=main_btn3.getElementsByTagName("div").item(0);
	var main_btn4=document.getElementById("main_tab4");
	var btn4_p=main_btn4.getElementsByTagName("div").item(0);
	btn2_p.style.display="none";
	btn3_p.style.display="none";
	btn4_p.style.display="none";
	main_btn1.onmouseover=function(){
		btn1_p.style.display="block";
		btn2_p.style.display="none";
		btn3_p.style.display="none";
		btn4_p.style.display="none";		
		main_btn1.childNodes[1].style.backgroundColor="green";
		main_btn2.childNodes[1].style.backgroundColor="#999999";
		main_btn3.childNodes[1].style.backgroundColor="#999999";
		main_btn4.childNodes[1].style.backgroundColor="#999999";
	}
	main_btn2.onmouseover=function(){
		btn1_p.style.display="none";
		btn2_p.style.display="block";
		btn3_p.style.display="none";
		btn4_p.style.display="none";
		main_btn1.childNodes[1].style.backgroundColor="#999999";
		main_btn2.childNodes[1].style.backgroundColor="green";
		main_btn3.childNodes[1].style.backgroundColor="#999999";
		main_btn4.childNodes[1].style.backgroundColor="#999999";
	}
	main_btn3.onmouseover=function(){
		btn1_p.style.display="none";
		btn2_p.style.display="none";
		btn3_p.style.display="block";
		btn4_p.style.display="none";
		main_btn1.childNodes[1].style.backgroundColor="#999999";
		main_btn2.childNodes[1].style.backgroundColor="#999999";
		main_btn3.childNodes[1].style.backgroundColor="green";
		main_btn4.childNodes[1].style.backgroundColor="#999999";
	}
	main_btn4.onmouseover=function(){
		btn1_p.style.display="none";
		btn2_p.style.display="none";
		btn3_p.style.display="none";
		btn4_p.style.display="block";
		main_btn1.childNodes[1].style.backgroundColor="#999999";
		main_btn2.childNodes[1].style.backgroundColor="#999999";
		main_btn3.childNodes[1].style.backgroundColor="#999999";
		main_btn4.childNodes[1].style.backgroundColor="green";
	}
})();
/*************************************************************************/
var index=document.getElementById("index");
index.style.backgroundColor="white";
index.style.color="black";
