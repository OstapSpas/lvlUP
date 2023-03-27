window.onload = function (){
    window.setInterval(function(){
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let second = date.getSeconds();
        let clock = hours + ":" + minutes + ":" + second;
        document.getElementById("clock").innerHTML = clock;
    },1000);
};