let total =0;
function handelClick(target){
    const selectedContainer = document.getElementById('selected-container')

    const itemName = target.parentNode.childNodes[3].innerText;
    const li =document.createElement('li');
    li.innerText = itemName;
    selectedContainer.appendChild(li);
   

    const price = target.parentNode.childNodes[5].innerText.split(" ")[1];
   
    total = parseInt(total) + parseFloat(price);
    
    document.getElementById('total-piece').innerText = total;

   

}