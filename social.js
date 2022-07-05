const btn = document.getElementById("btn");
btn.addEventListener("click",togglecolor);
function togglecolor(){
    if (btn.classList.contains("checked")){
      document.getElementById("body").className="light";
        btn.classList.remove("checked");
    }else{
         btn.classList.add("checked");
           document.getElementById("body").className="dark";

    }
}