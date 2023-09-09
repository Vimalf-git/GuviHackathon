
const toggle=()=>{

   const togbtn= document.querySelector(".nav-li-menu");
   togbtn.classList.toggle("nav-li-menu-toggle");
}

var boo=true;
const darkmode=()=>{
    console.log(boo);
    if(boo==true){
        const modSwitch= document.querySelector("#modeonicon");
        modSwitch.setAttribute("class","mode-switch-on");
        document.getElementById("modeonicon").innerText="LightMode";
        document.getElementById("main").setAttribute("class","dark-main");
        boo=false;
        console.log(boo+"-->"+"inside");
    }else{
        const modSwitch= document.querySelector("#modeonicon");
        modSwitch.setAttribute("class","mode-switch")
        document.getElementById("modeonicon").innerText="DarkMode";
        document.getElementById("main").setAttribute("class","main")
        boo=true;
    }
    
}
const lightmode=()=>{
    document.getElementById("modeonicon").style.display="none";
    document.getElementById("modeofficon").style.display="inline-block";

}