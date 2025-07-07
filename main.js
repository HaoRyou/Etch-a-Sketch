 const mainstorage = document.getElementById("container");


 function creategrid(num){
    for(let i=0;i<num;i++){
    const firstlayer = document.createElement('div');
    firstlayer.classList.add("Column");
        for(let z=1;z<=num;z++){
            const secondlayer = document.createElement('div');
            secondlayer.classList.add("Row");
            secondlayer.textContent =`${z}`;
            secondlayer.style.border = "1px Solid black";
            secondlayer.style.margin = "2px";
            firstlayer.appendChild(secondlayer);
        }
    mainstorage.appendChild(firstlayer);
    }
 }

 const inputing = document.getElementById("input");



 inputing.addEventListener("click", () => {
    let num = Number(prompt("Enter Your number for Grid"));
    inputing.style.visibility = "hidden";
    creategrid(num);
 })

