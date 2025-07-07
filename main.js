 const mainstorage = document.getElementById("container");


for(let i=0;i<16;i++){
    const firstlayer = document.createElement('div');
    firstlayer.classList.add("Column");
    for(let z=1;z<=16;z++){
        const secondlayer = document.createElement('div');
        secondlayer.classList.add("Row");
        secondlayer.textContent =`${z}`;
        secondlayer.style.border = "1px Solid black";
        secondlayer.style.margin = "2px";
        firstlayer.appendChild(secondlayer);
    }
    mainstorage.appendChild(firstlayer);
}