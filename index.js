setInterval(() => {
    d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    session = "AM"
    hrotation = 30*h + m/2;
    mrotation = 6*m;
    srotation = 6*s;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;

    if(h==0){
        h=12;
    }
    if(h>12){
        h=h-12;
        session="PM";
    }
    h= (h<10) ? "0" + h : h;
    m= (m<10) ? "0" + m : m;
    s= (s<10) ? "0" + s : s;
    
    time=h + ":" + m + ":" + s + ":" + session;
    document.getElementById("digital_time").innertext=time;
    document.getElementById("digital_time").textContent=time;


}, 1000);