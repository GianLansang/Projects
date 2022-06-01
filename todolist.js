// hard code items
let items = ["Pay Bills", "Learn to code", "Apply Job"];

// DOM select initialization
const tdB = document.getElementById("tdB");
const tdI = document.getElementById("tdI");
const tUl = document.getElementById("todoItems");

//update
 const reset = () => {
for(let i=0; i < items.length; i++){
const node = document.createElement("li");
const but = document.createElement("button");
 const textnode = document.createTextNode(items[i]);
 const textnodeb = document.createTextNode("X");
 node.appendChild(textnode);
 but.appendChild(textnodeb);
 tUl.appendChild(node);
 node.appendChild(but).style.visibility = "hidden";
 but.classList.add("specialButton");
node.addEventListener("mouseover", function() {
     but.style.visibility = "visible";
 })
 node.addEventListener("mouseout", function() {
     but.style.visibility = "hidden";
})
but.addEventListener("click", function(){    
         items.splice(i,1);
         tUl.innerHTML = "";
         reset();
 })
 node.addEventListener("click", function() {
     node.classList.toggle("lineThrough");
 })
}
}
reset();

// input text
tdB.addEventListener("click", function(){
    tdI.classList.toggle("hidden");
})
tdI.addEventListener("keypress", function(e) {
    if (e.key === "Enter"){
        const input = tdI.value;
        items.push(input);
        tUl.innerHTML = "";
        reset();
        tdI.value = "";
    }
    
})


