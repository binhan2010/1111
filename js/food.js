document.addEventListener("DOMContentLoaded", function() { 
    const Input = document.getElementById("dish-input");
    const foodList = document.getElementById("dish-list");
    const btn = document.getElementById("btn");

    let list = [];

function renderFood() {
    foodList.innerHTML = "";
    list.forEach(function(item) {
        const foodItem = document.createElement("li");
        foodItem.textContent = item.title;
        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("items-buttons");
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.addEventListener("click",function(){
            edit(item.id);
        const foodItem = document.createElement("li");
        foodItem.textContent = item.title;
        });
        foodList.appendChild(foodItem);
        buttonContainer.appendChild(editButton);
        foodItem.appendChild(buttonContainer);
    });

}
    function add() {
        if (Input.value.trim() === "") return;
        list.push({ id: Date.now(), title: Input.value.trim() });
        Input.value = "";
        renderFood();
    }
    function edit(id){
        const item =list.find(function(item){return item.id === id;});
        const newTitle = prompt("Edit Dish:",item.title);
        if(newTitle){
            item.title = newTitle;
            renderFood();
        }
    }
    btn.addEventListener("click", add);
    renderFood();
});   