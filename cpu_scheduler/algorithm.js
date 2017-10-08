var count = 0;

//record users choices
var nop = 0; // numbers of process
var algo = ""; //algorithm


//different processes options
var cpur1 = 0, cpur2 = 0, cpur3 = 0,cpur4 = 0;//CPU requirements
var prio1 = 0, prio2 = 0, prio3 = 0,prio4 = 0;//priotm
var arr1 = 0, arr2 = 0, arr3 = 0, arr4 = 0;//Arrival time
var quan = 0, quan1=0, quan2 = 0, quan3=0, quan4=0;//qutuam
var before_cpur1,before_cpur2,before_cpur3,before_cpur4;
var before_prio1,before_prio2,before_prio3,before_prio4;
var currentTime = 0;
var xlocation = -52;
var wait = 0;
var turnaround = 0;
var wait1 = 0;
var turnaround1 = 0;
var wait2 = 0;
var turnaround2 = 0;
var wait3 = 0;
var turnaround3 = 0;
var wait4 = 0;
var turnaround4 = 0;
/* 2 is unkonwn, 1 is true, 0 is flase*/
var nonp1 = 2;
var nonp2 = 2;
var nonp3 = 2;
var nonp4 = 2;

/*set var only to judge wheter process has arrived*/
var set = true;
var set1 = true;
var set2 = true;
var set3 = true;
var set4 = true;

//onload page
window.onload = main;

function main(){
	// when data are selected, call the get functions
	var temp_noj = document.getElementById('noj');
	temp_noj.onchange = p_getNumber;
    var temp_algo = document.getElementById('algo');
    temp_algo.onchange = a_getNumber;
    var temp_cpur1 = document.getElementById('cpur1');
    temp_cpur1.onchange = c1_getNumber;
    var temp_prio1 = document.getElementById('prio1');
    temp_prio1.onchange = p1_getNumber;
    var temp_arr1 = document.getElementById('arr1');
    temp_arr1.onchange = a1_getNumber;
    var temp_cpur2 = document.getElementById('cpur2');
    temp_cpur2.onchange = c2_getNumber;
    var temp_prio2 = document.getElementById('prio2');
    temp_prio2.onchange = p2_getNumber;
    var temp_arr2 = document.getElementById('arr2');
    temp_arr2.onchange = a2_getNumber;
    var temp_cpur3 = document.getElementById('cpur3');
    temp_cpur3.onchange = c3_getNumber;
    var temp_prio3 = document.getElementById('prio3');
    temp_prio3.onchange = p3_getNumber;
    var temp_arr3 = document.getElementById('arr3');
    temp_arr3.onchange = a3_getNumber;
    var temp_cpur4 = document.getElementById('cpur4');
    temp_cpur4.onchange = c4_getNumber;
    var temp_prio4 = document.getElementById('prio4');
    temp_prio4.onchange = p4_getNumber;
    var temp_arr4 = document.getElementById('arr4');
    temp_arr4.onchange = a4_getNumber;
    var temp_quan = document.getElementById('quan');
    temp_quan.onchange = quan_getNumber;
    //start the simulations
	document.getElementById('button1').onclick = process;
}

//get the data from user
function p_getNumber(){
	var temp = document.getElementById('noj');
	nop = temp.options[temp.selectedIndex].value;
}

function a_getNumber(){
	var temp = document.getElementById('algo');
    algo = temp.value;
}

function c1_getNumber(){
	var temp = document.getElementById('cpur1');
	cpur1 = temp.value;
}

function p1_getNumber(){
	var temp = document.getElementById('prio1');
	prio1 = temp.value;
}

function a1_getNumber(){
	var temp = document.getElementById('arr1');
	arr1 = temp.value;
}

function c2_getNumber(){
	var temp = document.getElementById('cpur2');
	cpur2 = temp.value;
}

function p2_getNumber(){
	var temp = document.getElementById('prio2');
	prio2 = temp.value;
}

function a2_getNumber(){
	var temp = document.getElementById('arr2');
	arr2 = temp.value;
}

function c3_getNumber(){
	var temp = document.getElementById('cpur3');
	cpur3 = temp.value;
}

function p3_getNumber(){
	var temp = document.getElementById('prio3');
	prio3 = temp.value;
}

function a3_getNumber(){
	var temp = document.getElementById('arr3');
	arr3 = temp.value;
}

function c4_getNumber(){
	var temp = document.getElementById('cpur4');
	cpur4 = temp.value;
}

function p4_getNumber(){
	var temp = document.getElementById('prio4');
	prio4 = temp.value;
}

function a4_getNumber(){
	var temp = document.getElementById('arr4');
	arr4 = temp.value;
}

function quan_getNumber(){
	var temp = document.getElementById('quan');
	quan = temp.value;
}

function process(){
	//Fill data in Job Pool
	var table1 = document.getElementById("table1");
	table1.rows[1].cells[1].innerText = arr1;
	table1.rows[1].cells[2].innerText = cpur1;
	table1.rows[1].cells[3].innerText = prio1;
	table1.rows[2].cells[1].innerText = arr2;
	table1.rows[2].cells[2].innerText = cpur2;
	table1.rows[2].cells[3].innerText = prio2;
	table1.rows[3].cells[1].innerText = arr3;
	table1.rows[3].cells[2].innerText = cpur3;
	table1.rows[3].cells[3].innerText = prio3;
	table1.rows[4].cells[1].innerText = arr4;
	table1.rows[4].cells[2].innerText = cpur4;
	table1.rows[4].cells[3].innerText = prio4;
	if(nop == 3){
        table1.rows[4].cells[0].innerText = "";
        table1.rows[4].cells[1].innerText = "";
	    table1.rows[4].cells[2].innerText = "";
	    table1.rows[4].cells[3].innerText = "";
        arr4=100, cpur4=0, prio4=0;
	}
	if(nop == 2){
		table1.rows[4].cells[0].innerText = "";
		table1.rows[3].cells[0].innerText = "";
		table1.rows[3].cells[1].innerText = "";
	    table1.rows[3].cells[2].innerText = "";
	    table1.rows[3].cells[3].innerText = "";
	    table1.rows[4].cells[1].innerText = "";
	    table1.rows[4].cells[2].innerText = "";
	    table1.rows[4].cells[3].innerText = "";
		arr4=100, cpur4=0, prio4=0;
		arr3=100, cpur3=0, prio3=0;
	}
	if(nop == 1){
		table1.rows[4].cells[0].innerText = "";
		table1.rows[3].cells[0].innerText = "";
		table1.rows[2].cells[0].innerText = "";
		table1.rows[2].cells[1].innerText = "";
	    table1.rows[2].cells[2].innerText = "";
	    table1.rows[2].cells[3].innerText = "";
	    table1.rows[3].cells[1].innerText = "";
	    table1.rows[3].cells[2].innerText = "";
	    table1.rows[3].cells[3].innerText = "";
	    table1.rows[4].cells[1].innerText = "";
	    table1.rows[4].cells[2].innerText = "";
	    table1.rows[4].cells[3].innerText = "";
		arr4=100, cpur4=0, prio4=0;
		arr3=100, cpur3=0, prio3=0;
		arr2=100, cpur2=0, prio2=0;
	}
	setInterval(update,1000);//time counter
}


//Running processes
function update(){
	var table2 = document.getElementById("table2");
	var table3 = document.getElementById("table3");
	if(count<28){
	  //current time
      table2.rows[1].cells[1].innerText = count;
      if(algo == "FCFS")  fcfs();
      if(algo == "SJF_P") sjf_p();
      if(algo == "SJF_NONP") sjf_nonp();
      if(algo == "RR") rr();
      if(algo == "PS_P") ps_p();
      if(algo == "PS_NONP") ps_nonp();
      xlocation += 52;//move the color rect  of each process per second
      count++;
      //wait and turnaround data
      table3.rows[1].cells[0].innerText = wait;
      table3.rows[1].cells[1].innerText = turnaround;
      table3.rows[2].cells[0].innerText = wait1;
      table3.rows[2].cells[1].innerText = turnaround1;
      table3.rows[3].cells[0].innerText = wait2;
      table3.rows[3].cells[1].innerText = turnaround2;
      table3.rows[4].cells[0].innerText = wait3;
      table3.rows[4].cells[1].innerText = turnaround3;
      table3.rows[5].cells[0].innerText = wait4;
      table3.rows[5].cells[1].innerText = turnaround4;
	}
}

function fcfs(){
   	var c=document.getElementById("myCanvas");
   	var temp_table2 = document.getElementById("table2");
    var cxt1=c.getContext("2d");
    //paint process1 red
	if(arr1 <= arr2 && arr1<= arr3 && arr1 <= arr4 && arr1<100 && cpur1 != 0 && arr1 <= count){
	   cxt1.fillStyle="#FF0000";
       cxt1.fillRect(xlocation+52,0,50,170);
       temp_table2.rows[1].cells[0].innerText = "Process1";
       if(arr2<=count && arr2 != 100) {wait++; turnaround++; wait2++; turnaround2++;}//process2 is arrvial but not finished
       if(arr3<=count && arr3 != 100) {wait++; turnaround++; wait3++; turnaround3++;}
       if(arr4<=count && arr4 != 100) {wait++; turnaround++; wait4++; turnaround4++;}
       /*if(arr1>=count && arr1 != 100) */ turnaround1++;turnaround++;
       cpur1--;
       if(cpur1==0) arr1 = 100;
    }
    //paint process2 blue
    else if(arr2 <= arr3 && arr2<= arr4 && arr2<100 && cpur2 != 0 && arr2 <= count){
	   cxt1.fillStyle="#0000FF";
       cxt1.fillRect(xlocation+52,0,50,170);
       temp_table2.rows[1].cells[0].innerText = "Process2";
       if(arr1<=count && arr1 != 100) {wait++; turnaround++; wait1++; turnaround1++;}//process1 is arrvial but not finished
       if(arr3<=count && arr3 != 100) {wait++; turnaround++; wait3++; turnaround3++;}
       if(arr4<=count && arr4 != 100) {wait++; turnaround++; wait4++; turnaround4++;}
       /*if(arr2>=count && arr2 != 100) */ turnaround++;turnaround2++;
       cpur2--;
       if(cpur2==0) arr2 = 100;
    }
    //paint process3 yellow
    else if(arr3 <= arr4 && arr3<100 && cpur3 != 0 && arr3 <= count){
	   cxt1.fillStyle="#FFFF00";
       cxt1.fillRect(xlocation+52,0,50,170);
       temp_table2.rows[1].cells[0].innerText = "Process3";
       if(arr2<=count && arr2 != 100) {wait++; turnaround++; wait2++; turnaround2++;}//process2 is arrvial but not finished
       if(arr1<=count && arr1 != 100) {wait++; turnaround++; wait1++; turnaround1++;}
       if(arr4<=count && arr4 != 100) {wait++; turnaround++; wait4++; turnaround4++;}
       /*if(arr3>=count && arr3 != 100) */ turnaround++;turnaround3++;
       cpur3--;
       if(cpur3==0) arr3 = 100;
    }
    //paint process4 green
    else if(arr4<100 && cpur4 != 0 && arr4 <= count){
	   cxt1.fillStyle="#3CB371";
       cxt1.fillRect(xlocation+52,0,50,170);
       temp_table2.rows[1].cells[0].innerText = "Process4";
       if(arr2<=count && arr2 != 100) {wait++; turnaround++; wait2++; turnaround2++;}//process2 is arrvial but not finished
       if(arr3<=count && arr3 != 100) {wait++; turnaround++; wait3++; turnaround3++;}
       if(arr1<=count && arr1 != 100) {wait++; turnaround++; wait1++; turnaround1++;}
       /*if(arr4>=count && arr4 != 100) */ turnaround++;turnaround4;
       cpur4--;
       if(cpur4==0) arr4 = 100;
    } 
    else ;
}

function sjf_nonp(){
  	var c=document.getElementById("myCanvas");
   	var temp_table2 = document.getElementById("table2");
    var cxt1=c.getContext("2d");
    if(set == true){
    	before_cpur1 = cpur1; cpur1 = 100;//before arrvial, set cpu requirement = 100 means no execution
    	before_cpur2 = cpur2; cpur2 = 100;
    	before_cpur3 = cpur3; cpur3 = 100;
    	before_cpur4 = cpur4; cpur4 = 100;
    	set = false;
    }
    // arrival -> nonp = 0
    if(arr1 <= count && set1==true) {nonp1 = 0; set1 = false;cpur1 = before_cpur1;}
    if(arr2 <= count && set2==true) {nonp2 = 0; set2 = false;cpur2 = before_cpur2;}
    if(arr3 <= count && set3==true) {nonp3 = 0; set3 = false;cpur3 = before_cpur3;}
    if(arr4 <= count && set4==true) {nonp4 = 0; set4 = false;cpur4 = before_cpur4;}
    //paint process1 red
	if( ( ( (cpur1 <= cpur2 && cpur1 <= cpur3 && cpur1 <= cpur4) || (arr2>count&&arr3>count&&arr4>count) )&& 
		(arr1<100 && cpur1 != 0 && arr1 <= count)&& (nonp1 == 0) )|| 
		(nonp1 == 1)
	  )
	{
	   nonp1 = 1; nonp2 = 2; nonp3 = 2; nonp4 = 2;
	   cxt1.fillStyle="#FF0000";
       cxt1.fillRect(xlocation+52,0,50,170);
       temp_table2.rows[1].cells[0].innerText = "Process1";
       if(arr2<=count && arr2 != 100) {wait++; turnaround++; wait2++; turnaround2++;}//process2 is arrvial but not finished
       if(arr3<=count && arr3 != 100) {wait++; turnaround++; wait3++; turnaround3++;}
       if(arr4<=count && arr4 != 100) {wait++; turnaround++; wait4++; turnaround4++;}
       /*if(arr1>=count && arr1 != 100) */ turnaround1++;turnaround++;
       cpur1--;
       if(cpur1==0) {arr1 = 100,nonp1 = 2, nonp2 = 0, nonp3 = 0, nonp4 =0,cpur1 = 100;}
    }
    //paint process2 blue
    else if( ( ((cpur2 <= cpur1 && cpur2 <= cpur3 && cpur2 <= cpur4) || (arr1>count&&arr3>count&&arr4>count) )&& 
		(arr2<100 && cpur2 != 0 && arr2 <= count)&& (nonp2 == 0) )|| 
		(nonp2 == 1)
	  )
    {
       nonp2 = 1; nonp1 = 2; nonp3 = 2; nonp4 = 2;
	   cxt1.fillStyle="#0000FF";
       cxt1.fillRect(xlocation+52,0,50,170);
       temp_table2.rows[1].cells[0].innerText = "Process2";
       if(arr1<=count && arr1 != 100) {wait++; turnaround++; wait1++; turnaround1++;}//process1 is arrvial but not finished
       if(arr3<=count && arr3 != 100) {wait++; turnaround++; wait3++; turnaround3++;}
       if(arr4<=count && arr4 != 100) {wait++; turnaround++; wait4++; turnaround4++;}
       /*if(arr2>=count && arr2 != 100) */ turnaround++;turnaround2++;
       cpur2--;
       if(cpur2==0) {arr2 = 100,nonp2 = 2, nonp1 = 0, nonp3 = 0, nonp4 =0,cpur2 = 100;}
    }
    //paint process3 yellow
    else if( ( ( (cpur3 <= cpur2 && cpur3 <= cpur1 && cpur3 <= cpur4) || (arr2>count&&arr1>count&&arr4>count) )&& 
		(arr3<100 && cpur3 != 0 && arr3 <= count)&& (nonp3 == 0) )|| 
		(nonp3 == 1)
	  )
    {
       nonp3 = 1; nonp1 = 2; nonp2 = 2; nonp4 = 2;
	   cxt1.fillStyle="#FFFF00";
       cxt1.fillRect(xlocation+52,0,50,170);
       temp_table2.rows[1].cells[0].innerText = "Process3";
       if(arr2<=count && arr2 != 100) {wait++; turnaround++; wait2++; turnaround2++;}//process2 is arrvial but not finished
       if(arr1<=count && arr1 != 100) {wait++; turnaround++; wait1++; turnaround1++;}
       if(arr4<=count && arr4 != 100) {wait++; turnaround++; wait4++; turnaround4++;}
       /*if(arr3>=count && arr3 != 100) */ turnaround++;turnaround3++;
       cpur3--;
       if(cpur3==0) {arr3 = 100,nonp3 = 2, nonp1 = 0, nonp2 = 0, nonp4 =0, cpur3 =100;}
    }
    //paint process4 green
    else if( ( ((cpur4 <= cpur2 && cpur4 <= cpur3 && cpur4 <= cpur1) || (arr2>count&&arr3>count&&arr1>count) )&& 
		(arr4<100 && cpur4 != 0 && arr4 <= count)&& (nonp4 == 0) )|| 
		(nonp4 == 1)
	  )
    {
       nonp4 = 1; nonp1 = 2; nonp2 = 2; nonp3 = 2;
	   cxt1.fillStyle="#3CB371";
       cxt1.fillRect(xlocation+52,0,50,170);
       temp_table2.rows[1].cells[0].innerText = "Process4";
       if(arr2<=count && arr2 != 100) {wait++; turnaround++; wait2++; turnaround2++;}//process2 is arrvial but not finished
       if(arr3<=count && arr3 != 100) {wait++; turnaround++; wait3++; turnaround3++;}
       if(arr1<=count && arr1 != 100) {wait++; turnaround++; wait1++; turnaround1++;}
       /*if(arr4>=count && arr4 != 100) */ turnaround++;turnaround4;
       cpur4--;
       if(cpur4==0){ arr4 = 100,nonp4 = 2, nonp1 = 0, nonp2 = 0, nonp3 =0, cpur4 = 100;}
    } 
    else ;
}

function sjf_p(){
	var c=document.getElementById("myCanvas");
   	var temp_table2 = document.getElementById("table2");
    var cxt1=c.getContext("2d");
    if(set == true){
    	before_cpur1 = cpur1; cpur1 = 100;
    	before_cpur2 = cpur2; cpur2 = 100;
    	before_cpur3 = cpur3; cpur3 = 100;
    	before_cpur4 = cpur4; cpur4 = 100;
    	set = false;
    }
    if(arr1 <= count && set1==true) {cpur1 = before_cpur1; set1 = false;}
    if(arr2 <= count && set2==true) {cpur2 = before_cpur2; set2 = false;}
    if(arr3 <= count && set3==true) {cpur3 = before_cpur3; set3 = false;}
    if(arr4 <= count && set4==true) {cpur4 = before_cpur4; set4 = false;}
    //paint process1 red
	if(   ((cpur1 <= cpur2 && cpur1 <= cpur3 && cpur1 <= cpur4) || (arr2>count&&arr3>count&&arr4>count) )&& 
		  (arr1<100 && cpur1 != 0 && arr1 <= count)
	  )
	{
	   cxt1.fillStyle="#FF0000";
       cxt1.fillRect(xlocation+52,0,50,170);
       temp_table2.rows[1].cells[0].innerText = "Process1";
       if(arr2<=count && arr2 != 100) {wait++; turnaround++; wait2++; turnaround2++;}//process2 is arrvial but not finished
       if(arr3<=count && arr3 != 100) {wait++; turnaround++; wait3++; turnaround3++;}
       if(arr4<=count && arr4 != 100) {wait++; turnaround++; wait4++; turnaround4++;}
       /*if(arr1>=count && arr1 != 100) */ turnaround1++;turnaround++;
       cpur1--;
       if(cpur1==0) {arr1 = 100,cpur1 = 100;}
    }
    //paint process2 blue
    else if(   ((cpur2 <= cpur1 && cpur2 <= cpur3 && cpur2 <= cpur4) || (arr1>count&&arr3>count&&arr4>count) )&& 
		  (arr2<100 && cpur2 != 0 && arr2 <= count)
	  )
    {
	   cxt1.fillStyle="#0000FF";
       cxt1.fillRect(xlocation+52,0,50,170);
       temp_table2.rows[1].cells[0].innerText = "Process2";
       if(arr1<=count && arr1 != 100) {wait++; turnaround++; wait1++; turnaround1++;}//process1 is arrvial but not finished
       if(arr3<=count && arr3 != 100) {wait++; turnaround++; wait3++; turnaround3++;}
       if(arr4<=count && arr4 != 100) {wait++; turnaround++; wait4++; turnaround4++;}
       /*if(arr2>=count && arr2 != 100) */ turnaround++;turnaround2++;
       cpur2--;
       if(cpur2==0) {arr2 = 100,cpur2 = 100;}
    }
    //paint process3 yellow
    else if(   ((cpur3 <= cpur2 && cpur3 <= cpur1 && cpur3 <= cpur4) || (arr2>count&&arr1>count&&arr4>count) )&& 
		  (arr3<100 && cpur3 != 0 && arr3 <= count)
	  )
    {
	   cxt1.fillStyle="#FFFF00";
       cxt1.fillRect(xlocation+52,0,50,170);
       temp_table2.rows[1].cells[0].innerText = "Process3";
       if(arr2<=count && arr2 != 100) {wait++; turnaround++; wait2++; turnaround2++;}//process2 is arrvial but not finished
       if(arr1<=count && arr1 != 100) {wait++; turnaround++; wait1++; turnaround1++;}
       if(arr4<=count && arr4 != 100) {wait++; turnaround++; wait4++; turnaround4++;}
       /*if(arr3>=count && arr3 != 100) */ turnaround++;turnaround3++;
       cpur3--;
       if(cpur3==0) {arr3 = 100,cpur3 =100;}
    }
    //paint process4 green
    else if(   ((cpur4 <= cpur2 && cpur4 <= cpur3 && cpur4 <= cpur1) || (arr2>count&&arr3>count&&arr1>count) )&& 
		  (arr4<100 && cpur4 != 0 && arr4 <= count)
	  )
    {
	   cxt1.fillStyle="#3CB371";
       cxt1.fillRect(xlocation+52,0,50,170);
       temp_table2.rows[1].cells[0].innerText = "Process4";
       if(arr2<=count && arr2 != 100) {wait++; turnaround++; wait2++; turnaround2++;}//process2 is arrvial but not finished
       if(arr3<=count && arr3 != 100) {wait++; turnaround++; wait3++; turnaround3++;}
       if(arr1<=count && arr1 != 100) {wait++; turnaround++; wait1++; turnaround1++;}
       /*if(arr4>=count && arr4 != 100) */ turnaround++;turnaround4;
       cpur4--;
       if(cpur4==0){ arr4 = 100,cpur4 = 100;}
    } 
    else ;
}

function rr(){
	var c=document.getElementById("myCanvas");
   	var temp_table2 = document.getElementById("table2");
    var cxt1=c.getContext("2d");
    /*RR require same quantum*/
    if(set == true){
    	quan1 = quan; 
    	quan2 = quan;
    	quan3 = quan;
    	quan4 = quan;
    	set = false;
    }
    //paint process1 red
	if(arr1<100 && cpur1 != 0 && arr1 <= count&&quan1!=0&&set1==true)
	{
	   cxt1.fillStyle="#FF0000";
       cxt1.fillRect(xlocation+52,0,50,170);
       temp_table2.rows[1].cells[0].innerText = "Process1";
       if(arr2<=count && arr2 != 100) {wait++; turnaround++; wait2++; turnaround2++;}//process2 is arrvial but not finished
       if(arr3<=count && arr3 != 100) {wait++; turnaround++; wait3++; turnaround3++;}
       if(arr4<=count && arr4 != 100) {wait++; turnaround++; wait4++; turnaround4++;}
       /*if(arr1>=count && arr1 != 100) */ turnaround1++;turnaround++;
       cpur1--;quan1--;
       if(cpur1==0) {arr1 = 100,cpur1 = 100;}
       if(cpur1!=0 && quan1==0) {quan1 = 2, set1=false, set2=true, set3=true,set4=true}
       if(arr2>count&&arr3>count&&arr4>count) set1 = true;
    }   
    //paint process2 blue
    else if(arr2<100 && cpur2 != 0 && arr2 <= count&&quan2!=0&&set2==true)
    {
	   cxt1.fillStyle="#0000FF";
       cxt1.fillRect(xlocation+52,0,50,170);
       temp_table2.rows[1].cells[0].innerText = "Process2";
       if(arr1<=count && arr1 != 100) {wait++; turnaround++; wait1++; turnaround1++;}//process1 is arrvial but not finished
       if(arr3<=count && arr3 != 100) {wait++; turnaround++; wait3++; turnaround3++;}
       if(arr4<=count && arr4 != 100) {wait++; turnaround++; wait4++; turnaround4++;}
       /*if(arr2>=count && arr2 != 100) */ turnaround++;turnaround2++;
       cpur2--;quan2--;
       if(cpur2==0) {arr2 = 100,cpur2 = 100;}
       if(cpur2!=0 && quan2==0) {quan2 = 2, set2=false,set3=true,set4=true}
       if(cpur3==0 && cpur4==0) {set1=true; set2=true;}
       if(arr1>count&&arr3>count&&arr4>count) set2 = true
    }
    //paint process3 yellow
    else if(arr3<100 && cpur3 != 0 && arr3 <= count&&quan3!=0&&set3==true)
    {
	   cxt1.fillStyle="#FFFF00";
       cxt1.fillRect(xlocation+52,0,50,170);
       temp_table2.rows[1].cells[0].innerText = "Process3";
       if(arr2<=count && arr2 != 100) {wait++; turnaround++; wait2++; turnaround2++;}//process2 is arrvial but not finished
       if(arr1<=count && arr1 != 100) {wait++; turnaround++; wait1++; turnaround1++;}
       if(arr4<=count && arr4 != 100) {wait++; turnaround++; wait4++; turnaround4++;}
       /*if(arr3>=count && arr3 != 100) */ turnaround++;turnaround3++;
       cpur3--;quan3--;
       if(cpur3==0) {arr3 = 100,cpur3 =100;}
       if(cpur3!=0 && quan3==0) {quan3 = 2, set3=false,set4=true}
       if(cpur4==0) {set1=true;set2=true;set3=true;}
       if(arr1>count&&arr2>count&&arr4>count) set3 = true
    }
    //paint process4 green
    else if(arr4<100 && cpur4 != 0 && arr4 <= count&&quan4!=0&&set4==true)
    {
	   cxt1.fillStyle="#3CB371";
       cxt1.fillRect(xlocation+52,0,50,170);
       temp_table2.rows[1].cells[0].innerText = "Process4";
       if(arr2<=count && arr2 != 100) {wait++; turnaround++; wait2++; turnaround2++;}//process2 is arrvial but not finished
       if(arr3<=count && arr3 != 100) {wait++; turnaround++; wait3++; turnaround3++;}
       if(arr1<=count && arr1 != 100) {wait++; turnaround++; wait1++; turnaround1++;}
       /*if(arr4>=count && arr4 != 100) */ turnaround++;turnaround4;
       cpur4--;quan4--;
       if(cpur4==0){ arr4 = 100,cpur4 = 100;}
       if(cpur4!=0 && quan4==0) {quan4 = 2, set4=true, set1=true, set2=true,set3=true}
       if(arr1>count&&arr2>count&&arr3>count) set4 = true
    } 
    else ;     
}

//Priority Scheduling
function ps_nonp(){
  	var c=document.getElementById("myCanvas");
   	var temp_table2 = document.getElementById("table2");
    var cxt1=c.getContext("2d");
    if(set == true){
    	before_prio1 = prio1; prio1 = 0;//before arrvial, set priority = 100 means no execution
    	before_prio2 = prio2; prio2 = 0;
    	before_prio3 = prio3; prio3 = 0;
    	before_prio4 = prio4; prio4 = 0;
    	set = false;
    }
    // arrival -> nonp = 0
    if(arr1 <= count && set1==true) {nonp1 = 0; set1 = false;prio1 = before_prio1;}
    if(arr2 <= count && set2==true) {nonp2 = 0; set2 = false;prio2 = before_prio2;}
    if(arr3 <= count && set3==true) {nonp3 = 0; set3 = false;prio3 = before_prio3;}
    if(arr4 <= count && set4==true) {nonp4 = 0; set4 = false;prio4 = before_prio4;}
    //paint process1 red
	if( ( ( (prio1 >= prio2 && prio1 >= prio3 && prio1 >= prio4) || (arr2>count&&arr3>count&&arr4>count) )&& 
		(arr1<100 && cpur1 != 0 && arr1 <= count && prio1 != 0)&& (nonp1 == 0) )|| 
		(nonp1 == 1)
	  )
	{
	   nonp1 = 1; nonp2 = 2; nonp3 = 2; nonp4 = 2;
	   cxt1.fillStyle="#FF0000";
       cxt1.fillRect(xlocation+52,0,50,170);
       temp_table2.rows[1].cells[0].innerText = "Process1";
       if(arr2<=count && arr2 != 100) {wait++; turnaround++; wait2++; turnaround2++;}//process2 is arrvial but not finished
       if(arr3<=count && arr3 != 100) {wait++; turnaround++; wait3++; turnaround3++;}
       if(arr4<=count && arr4 != 100) {wait++; turnaround++; wait4++; turnaround4++;}
       /*if(arr1>=count && arr1 != 100) */ turnaround1++;turnaround++;
       cpur1--;
       if(cpur1==0) {arr1 = 100,nonp1 = 2, nonp2 = 0, nonp3 = 0, nonp4 =0,cpur1 = 100; prio1 = 0;}
    }
    //paint process2 blue
    else if( ( ((prio2 >= prio1 && prio2 >= prio3 && prio2 >= prio4) || (arr1>count&&arr3>count&&arr4>count) )&& 
		(arr2<100 && cpur2 != 0 && arr2 <= count && prio2 != 0)&& (nonp2 == 0) )|| 
		(nonp2 == 1)
	  )
    {
       nonp2 = 1; nonp1 = 2; nonp3 = 2; nonp4 = 2;
	   cxt1.fillStyle="#0000FF";
       cxt1.fillRect(xlocation+52,0,50,170);
       temp_table2.rows[1].cells[0].innerText = "Process2";
       if(arr1<=count && arr1 != 100) {wait++; turnaround++; wait1++; turnaround1++;}//process1 is arrvial but not finished
       if(arr3<=count && arr3 != 100) {wait++; turnaround++; wait3++; turnaround3++;}
       if(arr4<=count && arr4 != 100) {wait++; turnaround++; wait4++; turnaround4++;}
       /*if(arr2>=count && arr2 != 100) */ turnaround++;turnaround2++;
       cpur2--;
       if(cpur2==0) {arr2 = 100,nonp2 = 2, nonp1 = 0, nonp3 = 0, nonp4 =0,cpur2 = 100;prio2= 0;}
    }
    //paint process3 yellow
    else if( ( ( (prio3 >= prio2 && prio3 >= prio1 && prio3 >= prio4) || (arr2>count&&arr1>count&&arr4>count) )&& 
		(arr3<100 && cpur3 != 0 && arr3 <= count && prio3 != 0)&& (nonp3 == 0) )|| 
		(nonp3 == 1)
	  )
    {
       nonp3 = 1; nonp1 = 2; nonp2 = 2; nonp4 = 2;
	   cxt1.fillStyle="#FFFF00";
       cxt1.fillRect(xlocation+52,0,50,170);
       temp_table2.rows[1].cells[0].innerText = "Process3";
       if(arr2<=count && arr2 != 100) {wait++; turnaround++; wait2++; turnaround2++;}//process2 is arrvial but not finished
       if(arr1<=count && arr1 != 100) {wait++; turnaround++; wait1++; turnaround1++;}
       if(arr4<=count && arr4 != 100) {wait++; turnaround++; wait4++; turnaround4++;}
       /*if(arr3>=count && arr3 != 100) */ turnaround++;turnaround3++;
       cpur3--;
       if(cpur3==0) {arr3 = 100,nonp3 = 2, nonp1 = 0, nonp2 = 0, nonp4 =0, cpur3 =100;prio3 = 0;}
    }
    //paint process4 green
    else if( ( ((prio4 >= prio2 && prio4 >= prio3 && prio4 >= prio1) || (arr2>count&&arr3>count&&arr1>count) )&& 
		(arr4<100 && cpur4 != 0 && arr4 <= count && prio4 != 0)&& (nonp4 == 0) )|| 
		(nonp4 == 1)
	  )
    {
       nonp4 = 1; nonp1 = 2; nonp2 = 2; nonp3 = 2;
	   cxt1.fillStyle="#3CB371";
       cxt1.fillRect(xlocation+52,0,50,170);
       temp_table2.rows[1].cells[0].innerText = "Process4";
       if(arr2<=count && arr2 != 100) {wait++; turnaround++; wait2++; turnaround2++;}//process2 is arrvial but not finished
       if(arr3<=count && arr3 != 100) {wait++; turnaround++; wait3++; turnaround3++;}
       if(arr1<=count && arr1 != 100) {wait++; turnaround++; wait1++; turnaround1++;}
       /*if(arr4>=count && arr4 != 100) */ turnaround++;turnaround4;
       cpur4--;
       if(cpur4==0){ arr4 = 100,nonp4 = 2, nonp1 = 0, nonp2 = 0, nonp3 =0, cpur4 = 100; prio4 =0;}
    } 
    else ;     
}

function ps_p(){
	var c=document.getElementById("myCanvas");
   	var temp_table2 = document.getElementById("table2");
    var cxt1=c.getContext("2d");
    if(set == true){
    	before_prio1 = prio1; prio1 = 0;
    	before_prio2 = prio2; prio2 = 0;
    	before_prio3 = prio3; prio3 = 0;
    	before_prio4 = prio4; prio4 = 0;
    	set = false;
    }
    if(arr1 <= count && set1==true) {prio1 = before_prio1; set1 = false;}
    if(arr2 <= count && set2==true) {prio2 = before_prio2; set2 = false;}
    if(arr3 <= count && set3==true) {prio3 = before_prio3; set3 = false;}
    if(arr4 <= count && set4==true) {prio4 = before_prio4; set4 = false;}
   // alert(prio1+" "+prio4+" "+arr1+" "+arr4);
    //paint process1 red
	if(   ((prio1 >= prio2 && prio1 >= prio3 && prio1 >= prio4) || (arr2>count&&arr3>count&&arr4>count) )&& 
		  (arr1<100 && cpur1 != 0 && arr1 <= count && prio1 != 0)
	  )
	{
	   cxt1.fillStyle="#FF0000";
       cxt1.fillRect(xlocation+52,0,50,170);
       temp_table2.rows[1].cells[0].innerText = "Process1";
       if(arr2<=count && arr2 != 100) {wait++; turnaround++; wait2++; turnaround2++;}//process2 is arrvial but not finished
       if(arr3<=count && arr3 != 100) {wait++; turnaround++; wait3++; turnaround3++;}
       if(arr4<=count && arr4 != 100) {wait++; turnaround++; wait4++; turnaround4++;}
       /*if(arr1>=count && arr1 != 100) */ turnaround1++;turnaround++;
       cpur1--;
       if(cpur1==0) {arr1 = 100,cpur1 = 100; prio1=0;}
    }
    //paint process2 blue
    else if(   ((prio2 >= prio1 && prio2 >= prio3 && prio2 >= prio4) || (arr1>count&&arr3>count&&arr4>count) )&& 
		  (arr2<100 && cpur2 != 0 && arr2 <= count && prio2 != 0)
	  )
    {
	   cxt1.fillStyle="#0000FF";
       cxt1.fillRect(xlocation+52,0,50,170);
       temp_table2.rows[1].cells[0].innerText = "Process2";
       if(arr1<=count && arr1 != 100) {wait++; turnaround++; wait1++; turnaround1++;}//process1 is arrvial but not finished
       if(arr3<=count && arr3 != 100) {wait++; turnaround++; wait3++; turnaround3++;}
       if(arr4<=count && arr4 != 100) {wait++; turnaround++; wait4++; turnaround4++;}
       /*if(arr2>=count && arr2 != 100) */ turnaround++;turnaround2++;
       cpur2--;
       if(cpur2==0) {arr2 = 100,cpur2 = 100; prio2 = 0;}
    }
    //paint process3 yellow
    else if(   ((prio3 >= prio2 && prio3 >= prio1 && prio3 >= prio4) || (arr2>count&&arr1>count&&arr4>count) )&& 
		  (arr3<100 && cpur3 != 0 && arr3 <= count && prio3 != 0)
	  )
    {
	   cxt1.fillStyle="#FFFF00";
       cxt1.fillRect(xlocation+52,0,50,170);
       temp_table2.rows[1].cells[0].innerText = "Process3";
       if(arr2<=count && arr2 != 100) {wait++; turnaround++; wait2++; turnaround2++;}//process2 is arrvial but not finished
       if(arr1<=count && arr1 != 100) {wait++; turnaround++; wait1++; turnaround1++;}
       if(arr4<=count && arr4 != 100) {wait++; turnaround++; wait4++; turnaround4++;}
       /*if(arr3>=count && arr3 != 100) */ turnaround++;turnaround3++;
       cpur3--;
       if(cpur3==0) {arr3 = 100,cpur3 =100; prio3 = 0;}
    }
    //paint process4 green
    else if(   ((prio4 >= prio2 && prio4 >= prio3 && prio4 >= prio1) || (arr2>count&&arr3>count&&arr1>count) )&& 
		  (arr4<100 && cpur4 != 0 && arr4 <= count && prio4 != 0)
	  )
    {
	   cxt1.fillStyle="#3CB371";
       cxt1.fillRect(xlocation+52,0,50,170);
       temp_table2.rows[1].cells[0].innerText = "Process4";
       if(arr2<=count && arr2 != 100) {wait++; turnaround++; wait2++; turnaround2++;}//process2 is arrvial but not finished
       if(arr3<=count && arr3 != 100) {wait++; turnaround++; wait3++; turnaround3++;}
       if(arr1<=count && arr1 != 100) {wait++; turnaround++; wait1++; turnaround1++;}
       /*if(arr4>=count && arr4 != 100) */ turnaround++;turnaround4;
       cpur4--;
       if(cpur4==0){ arr4 = 100,cpur4 = 100;prio4 = 0}
    } 
    else ;	
}