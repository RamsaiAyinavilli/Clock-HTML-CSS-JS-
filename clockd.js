function Clock(){
let hr=document.querySelector('#hr');
 let mn=document.querySelector('#mn');
 let sc=document.querySelector('#sc');
setInterval(() =>{

let day=new Date();

let hh = day.getHours()*30;
let mm = day.getMinutes()*6;
let ss = day.getSeconds()*6;

hr.style.transform =`rotateZ(${hh+(mm/12)}deg)`;
mn.style.transform = `rotateZ(${mm}deg)`;
sc.style.transform = `rotateZ(${ss}deg)`;

let hour=document.getElementById('hour');
let minute=document.getElementById('minute');
let second=document.getElementById('second');
let ampm=document.getElementById('ampm');


   let h=day.getHours();
   let m=day.getMinutes();
   let s=day.getSeconds();
   let am=(h>=12)? "PM":"AM";
    if(h>12){
        h=h-12;
    }
   h=(h<10)? "0"+h:h;
   m=(m<10)? "0"+m:m;
   s=(s<10)? "0"+s:s;  
     hour.innerHTML=h;
     minute.innerHTML=m;
     second.innerHTML=s;
     ampm.innerHTML=am;

      let dname=day.getDay();
      let dno=day.getDate();
      let montt=day.getMonth();
      let ye=day.getFullYear();
     var month=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    var week=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    var id=["dayn","da","month","year"];
    var values=[week[dname],dno,month[montt],ye];
    for(var i=0;i<id.length;i++){
        document.getElementById(id[i]).lastChild.nodeValue=values[i];
    }
     
})}
Clock();