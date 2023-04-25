    

const newYears="1 Jan 2024";
 const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");


 function calculation(){
   

    const newYearsDate=new Date(newYears);
    const currentDate=new Date();
   

    const seconds = Math.floor((newYearsDate-currentDate)/1000%60);
    const minutes = Math.floor((newYearsDate-currentDate)/1000/60%60);
    const hours = Math.floor((newYearsDate-currentDate)/1000/60/60%24);
    const days = Math.floor((newYearsDate-currentDate)/1000/3600/24);

    
    console.log(days,hours,minutes,seconds);
   
    


    daysEl.innerHTML = days;
    hoursEl.innerHTML =addzero(hours);
    minutesEl.innerHTML =addzero(minutes);
    secondsEl.innerHTML =addzero(seconds);

    
}

function addzero(time){
   if(time<10){
      return `0${time}`;
   }
   else{return time;}
}

calculation();
setInterval(calculation,1000)




