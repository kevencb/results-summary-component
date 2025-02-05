const containerItem = document.querySelector(".card__container")

async function loadItems(){
    try {
        const resp = await fetch('https://raw.githubusercontent.com/kevencb/results-summary-component/refs/heads/main/data.json');
        const items = await resp.json();
        displayItems(items)
        console.log(items)
    } catch (error) {
        console.log("Error: ", error)
    }
}

function displayItems(items){
    const itemList = document.querySelector('.card__container');
    itemsOrder = items.reverse()
    itemsOrder.forEach( item => {
      const itemDiv = document.createElement('div');
      itemDiv.classList.add('item')
      itemDiv.innerHTML = `
        <h4><img src="${item.icon}" alt="Reaction icon">${item.category}</h4>
        <p><strong>${item.score} </strong>/ 100</p>
      `      
      switch(item.category.toLowerCase()){
        case 'reaction':
            itemDiv.classList.add('itemReaction')
            break;
        case 'memory':
            itemDiv.classList.add('itemMemory')
            break
        case 'verbal':
            itemDiv.classList.add('itemVerbal')
            break
        case 'visual':
            itemDiv.classList.add('itemVisual')
            break
      }
      itemList.prepend(itemDiv)
    })
}
loadItems()

