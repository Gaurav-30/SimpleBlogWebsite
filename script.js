function display(){
    var x = document.getElementById("inp").value;
    var p = document.createElement("p");
    p.innerHTML = x;
    p.style.margin = "10px";
    var div = document.createElement("div");
    div.appendChild(p);
    div.style.backgroundColor = "aliceblue";
    div.style.display = "flex";
    div.style.width = "600px";
    div.style.margin = "15px";
    document.getElementById("data").appendChild(div);
}