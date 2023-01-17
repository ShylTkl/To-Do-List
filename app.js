
let cikti = document.getElementById("todocikti");
let note = document.getElementById("giris");
let add = document.getElementById("add");
let clear = document.getElementById("clear");

add.addEventListener('click', function(){

    if((note.value).length==0){
        alert("Lütfen Değer Giriniz")
    }else{
        let paragraph = document.createElement("p");
        paragraph.classList.add("eklemeSonuc");
       todocikti.appendChild(paragraph);
       paragraph.innerHTML = note.value;
       note.value ="";
    
      todocikti.style.marginTop ="10px";
    
      paragraph.addEventListener("click", function(){
    
        paragraph.style.textDecoration ="line-through";
        paragraph.style.opacity = "0.8";
        paragraph.style.color="#778899";
    
        paragraph.addEventListener("dblclick", function(){
            todocikti.removeChild(paragraph);
        })
      })
    
    clear.addEventListener("click", function(){
        paragraph.remove();
    })
    }
})

    
