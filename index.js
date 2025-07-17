document.getElementById("openbtn").addEventListener("click",function(){
    document.getElementById("sideBar").style.width = "300px";
});
document.getElementById("close").addEventListener("click",function(){
    document.getElementById("sideBar").style.width = "0";
});

function home(){
    document.getElementById("home").scrollIntoView({behavior:"smooth"});
}

function about(){
    document.getElementById("about").scrollIntoView({behavior:"smooth"});
}

function contact(){
    document.getElementById("contact").scrollIntoView({behavior:"smooth"});
}