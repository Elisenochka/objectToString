

/*дз */

function colors(){
	var check = true;
	colors = new Array();
	match = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F');
	do {
	var r = prompt("enter red gradient",'');
	var g = prompt("enter green gradient",'');
	var b = prompt("enter blue gradient",'');
} while(isNaN(r)||r>255||isNaN(g)||g>255||isNaN(b)||b>255);
if(r<16){
	if(g<16){
		if(b<16){
			alert("hex code of color is: #" + r + g + b);
		}
		else{
			i=Math.floor(b/16);
			ii=b%16;
			alert("hex code of color is: #" + r + g + match[i]+ match[ii]);
		}
	}
	else{
		i=Math.floor(b/16);
		ii=b%16;
		j=Math.floor(g/16);
		jj=g%16;
		alert("hex code of color is: #" + r + match[j]+ match[jj] + match[i]+ match[ii]);
	}	
}
else{
	i=Math.floor(b/16);
	ii=b%16;
	j=Math.floor(g/16);
	jj=g%16;
	k=Math.floor(r/16);
	kk=r%16;
	alert("hex code of color is: #" + match[k]+ match[kk] + match[j] + match[jj] + match[i] + match[ii]);
}
}


function number(){
var nb = prompt("enter a number 0-999",'');
var numb = {};
numb.hundreds = parseInt(nb/100);
numb.tens = parseInt((nb%100)/10);
numb.unities = parseInt((nb%100)%10);
alert("hundreds: "+numb.hundreds+", tens: "+numb.tens+", unities: "+numb.unities)
}

function objectToQueryString(object){
	var str ='y';
	var object = {};
	while(str!="n"){
		key = prompt("enter object property");
		object[key] = prompt("enter it's value");
		str=prompt("continue? y/n");
	}
	for (key in object){
		alert(key + ":" + object[key]);
	}

}


