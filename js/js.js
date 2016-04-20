(function(){
	var main_btn1=document.getElementById("main_tab1");
	var btn1_p=main_btn1.getElementsByTagName("p").item(0);
	var main_btn2=document.getElementById("main_tab2");
	var btn2_p=main_btn2.getElementsByTagName("p").item(0);
	var main_btn3=document.getElementById("main_tab3");
	var btn3_p=main_btn3.getElementsByTagName("p").item(0);
	var main_btn4=document.getElementById("main_tab4");
	var btn4_p=main_btn4.getElementsByTagName("p").item(0);
	btn2_p.style.display="none";
	btn3_p.style.display="none";
	btn4_p.style.display="none";
	main_btn1.onclick=function(){
		btn1_p.style.display="block";
		btn2_p.style.display="none";
		btn3_p.style.display="none";
		btn4_p.style.display="none";
	}
	main_btn2.onclick=function(){
		btn1_p.style.display="none";
		btn2_p.style.display="block";
		btn3_p.style.display="none";
		btn4_p.style.display="none";
	}
	main_btn3.onclick=function(){
		btn1_p.style.display="none";
		btn2_p.style.display="none";
		btn3_p.style.display="block";
		btn4_p.style.display="none";
	}
	main_btn4.onclick=function(){
		btn1_p.style.display="none";
		btn2_p.style.display="none";
		btn3_p.style.display="none";
		btn4_p.style.display="block";
	}
})();