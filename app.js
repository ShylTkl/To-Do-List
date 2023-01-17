let cikti = document.getElementById("todocikti");
let note = document.getElementById("giris");
let add = document.getElementById("add");
let clear = document.getElementById("clear");

window.addEventListener("keyup", (e) => {
    e.code === "Enter" && add.click();
  });

add.onclick=function(){
    if((note.value).length==0){
        alert("Lütfen Değer Giriniz")
    }else{
        let paragraf = document.createElement("li"); 
        paragraf.classList.add("eklemeSonuc"); 
        todocikti.appendChild(paragraf);
        paragraf.innerHTML = note.value;
        note.value ="";
    
      todocikti.style.marginTop ="10px";
    
      paragraf.addEventListener("click", function(){
    
        paragraf.style.textDecoration ="line-through";
        paragraf.style.opacity = "0.8";
        paragraf.style.color="#778899";

    
    })
    paragraf.addEventListener("dblclick", function(){  
        todocikti.removeChild(paragraf);
    })
    
    clear.addEventListener("click", function(){
        paragraf.remove();
    })
    }
}


