$(function(){
	
	
"use strict";


var friends = new Array();
friends[0]="yaakov";
friends[1]="john";
friends[2]="jen";
friends[3]="jason";
    friends[4]="paul";
     friends[5]="frank";
     friends[6]="larry";
     friends[7]="paula";
     friends[8]="laura";
     friends[9]="jim";

console.log(friends);
    

var i;
    for(i=0;i<friends.length;i++){
var atag=document.createElement('P');
        var mydiv= document.getElementById("mydiv");
        mydiv.appendChild(atag);
        if(friends[i].startsWith("j")){
            console.log("Goodbye "+friends[i]);
            atag.innerHTML="Goodbye "+friends[i];
            
        }
        else{
            console.log("hello "+friends[i]);
            atag.innerHTML="hello "+friends[i];
        }
    }
});