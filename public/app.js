document.getElementById('ingredientForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const ingredient = document.getElementById('ingredient').value;
    if (ingredient) {
        const li = document.createElement('li');
        li.textContent = ingredient;
        document.getElementById('ingredientList').appendChild(li);
        document.getElementById('ingredient').value = '';
    }
});

document.getElementById('findRecipes').addEventListener('click', function() {
    // Here you would make an API call to your backend
    // For now, we'll just log a message
    console.log('Searching for recipes...');
});
