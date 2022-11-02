let acc = document.querySelectorAll(".accordion");
// let ac = document.getElementsByClassName("accordion");
let accArray = Array.from(acc);
accArray.map((item)=>{
    item.addEventListener("click", function(){
        item.classList.toggle("active") //classList: click korlei active namer akti class toiri hoye jabe. togle thakle delete korbe na thakle toiri korbe.
        let panel = item.nextElementSibling; // section a click korar por er porer tagta k dhorbe. ata kore hocce 'nextElementSibling'
        if(panel.style.display=="block"){
            panel.style.display = "none"
        }
        else{
            panel.style.display = "block"
        }
    });
});