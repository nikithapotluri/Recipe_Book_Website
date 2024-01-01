let recipes = []; 

function displayRecipes() {
    const recipeContainer = document.getElementById('recipeContainer');
    recipeContainer.innerHTML = ''; // Clear previous content

    recipes.forEach((recipe, index) => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');
        recipeCard.innerHTML = `
            <h2><em>${recipe.title}</em></h2>
            <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
            <p><strong>Instructions:</strong> ${recipe.instructions}</p>
            <button onclick="deleteRecipe(${index})">Delete Recipe</button>
        `;
        recipeContainer.appendChild(recipeCard);
    });
}

function addRecipe(title, ingredients, instructions) {
    const newRecipe = {
        title: title,
        ingredients: ingredients,
        instructions: instructions
    };
    recipes.push(newRecipe);
    displayRecipes();
}

function deleteRecipe(index) {
    recipes.splice(index, 1);
    displayRecipes();
}

// Event listener for the Add Recipe button
document.getElementById('addRecipeBtn').addEventListener('click', () => {
    const title = prompt('Enter Recipe Title:');
    const ingredients = prompt('Enter Recipe Ingredients:');
    const instructions = prompt('Enter Recipe Instructions:');
    if (title && ingredients && instructions) {
        addRecipe(title, ingredients, instructions);
    } else {
        alert('Please enter valid recipe details.');
    }
});

// Initial display of recipes (if any)
displayRecipes();
