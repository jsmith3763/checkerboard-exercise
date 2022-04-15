// Your JS goes here

for(let i = 0; i < 72; i++) {
    let tile = document.createElement('div'); 
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    // if(i % 2 !== 0) {
    //     tile.style.backgroundColor = 'black';
    // }else{
    //     tile.style.backgroundColor = 'red';
    // }
    tile.style.backgroundColor = "#" + randomColor;
    tile.style.width = "11.1%";
    tile.style.float = 'left';
    tile.style.paddingBottom = "11.1%";
    

    document.body.appendChild(tile);
}

