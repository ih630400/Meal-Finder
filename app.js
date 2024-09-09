

async function findRecipes() {
    const ingredients = document.getElementById('ingredients').value;
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = 'Searching...';

    try {
        const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${SEARCH_ENGINE_ID}&q=recipe+${encodeURIComponent(ingredients)}&searchType=image`);
        const data = await response.json();

        if (data.items && data.items.length > 0) {
            resultsDiv.innerHTML = data.items.map(item => `
                <div class="recipe">
                    <img src="${item.link}" alt="${item.title}" class="recipe-image">
                    <div class="recipe-content">
                        <h2><a href="${item.image.contextLink}" target="_blank">${item.title}</a></h2>
                        <p>${item.snippet}</p>
<div class="recipe-tags">
  ${item.labels ? item.labels.map(label => `<span class="recipe-tag">${label}</span>`).join('') : ''}
</div>
                    </div>
                </div>
            `).join('');
        } else {
            resultsDiv.innerHTML = 'No recipes found. Try different ingredients.';
        }
    } catch (error) {
        console.error('Error:', error);
        resultsDiv.innerHTML = 'An error occurred while searching for recipes.';
    }
}
