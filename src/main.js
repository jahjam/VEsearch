import { baseURL, API_ID, API_KEY, NEGATE_PADDING } from './config';
import { getJSON, renderLoadingIcon, renderErrorMsg } from './helper';

const searchBtn = document.querySelector('.search-button');
const searchInput = document.querySelector('.search-input');
const resultsSection = document.querySelector('.recipe-results-section');
const resultsBox = document.querySelector('.recipe-results');
const recipeContainer = document.querySelector('.recipe-container');
const rightArrow = document.querySelector('.right-arrow');
const leftArrow = document.querySelector('.left-arrow');
const recipeListing = document.querySelector('.recipe-listing-section');
const recipeListingContainer = document.querySelector(
  '.recipe-listing-container'
);
const recipeFooterSection = document.querySelector('.source-link-section');

// ***************************** //
// DATA
// ***************************** //

const state = {
  search: {
    query: '',
    results: [],
  },
  recipe: {},
};

let width;
let currentSlide = 0;

// ***************************** //
// LOAD RESULTS AND DISPLAY THEM
// ***************************** //

const pressEnterKey = e => {
  if (e.keyCode === 13) {
    showSearchResults();
  }
};

const loadRecipeResults = async function (query) {
  try {
    resultsSection.classList.remove('nodisplay');
    renderLoadingIcon(recipeContainer);

    const data = await getJSON(`${baseURL}&q=${query}`);
    const { hits } = data;
    state.search.query = query;
    state.search.results = hits.map(hit => {
      return {
        id: hit._links.self.href.slice(38, 70),
        title: hit.recipe.label,
        publisher: hit.recipe.source,
        imgURL: hit.recipe.image,
      };
    });
  } catch (err) {
    throw err;
  }
};

const showSearchResults = async function () {
  try {
    await loadRecipeResults(searchInput.value);

    if (searchInput.value === '')
      throw new Error('Please enter something in the search field above!');

    recipeContainer.innerHTML = '';

    state.search.results.forEach(result =>
      recipeContainer.insertAdjacentHTML('beforeend', generateMarkup(result))
    );
    searchInput.value = '';
    width = +resultsBox.clientWidth - NEGATE_PADDING;

    resultsBox.addEventListener('click', function (e) {
      const allResults = document.querySelectorAll('.results-box');
      allResults.forEach(box => box.classList.remove('results-box--active'));
      e.target.closest('.results-box').classList.add('results-box--active');
    });
  } catch (err) {
    renderErrorMsg(recipeContainer, err.message);
  }
};

const generateMarkup = recipe => `
        <a class="results-box" href="#${recipe.id}">
        <div class="result" >
          <div class="img">
            <img
              src="${recipe.imgURL}"
              alt="Professional photograph of ${recipe.title}"
              class="recipe-results-img"
            />
          </div>
          <span class="result-title">${recipe.title}</span>
          <span class="recipe-company result-company">${recipe.publisher}
          </span>
          </div>
        </a>
    `;

const slideResultsLeft = function () {
  if (currentSlide < state.search.results.length - 4) {
    currentSlide++;
    recipeContainer.style.transform = `translateX(-${
      currentSlide * (width / 4)
    }px)`;
  }
};

const slideResultsRight = function () {
  if (currentSlide > 0) {
    currentSlide--;
    recipeContainer.style.transform = `translateX(-${
      currentSlide * (width / 4)
    }px)`;
  }
};

// ***************************** //
// LOAD RECIPE AND DISPLAY IT
// ***************************** //

const loadRecipe = async function (id) {
  try {
    recipeListing.classList.remove('nodisplay');
    renderLoadingIcon(recipeListingContainer);

    const data = await getJSON(
      `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=${API_ID}&app_key=${API_KEY}`
    );

    const { recipe } = data;

    state.recipe = {
      id: recipe.uri,
      title: recipe.label,
      publisher: recipe.source,
      imgURL: recipe.image,
      sourceUrl: recipe.url,
      servings: recipe.yield,
      ingredients: recipe.ingredients,
      nutrition: recipe.totalDaily,
      amountInGrams: recipe.digest,
      calories: recipe.calories,
    };
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const showRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;

    await loadRecipe(id);

    recipeFooterSection.classList.remove('nodisplay');
    recipeListingContainer.innerHTML = '';
    recipeFooterSection.innerHTML = '';

    state.recipe.ingredients.forEach(ing => {
      if (ing.quantity.toString().slice(0, 3) === '0.3') ing.quantity = '1/3';
      if (ing.quantity.toString().slice(0, 4) === '0.25') ing.quantity = '1/4';
      if (ing.quantity.toString().slice(0, 3) === '0.5') ing.quantity = '1/2';
      if (ing.quantity.toString().slice(0, 4) === '0.75') ing.quantity = '3/4';
    });

    recipeListingContainer.insertAdjacentHTML(
      'afterbegin',
      generateRecipeMarkup(state.recipe)
    );

    recipeFooterSection.insertAdjacentHTML(
      'afterbegin',
      generateFooterMarkup(state.recipe)
    );
  } catch (err) {
    renderErrorMsg(recipeListingContainer);
  }
};

const generateRecipeMarkup = recipe => `

      <div class="recipe-img-box">
      <img class="listing-img" src="${recipe.imgURL}"> 
      </div>

      <h2 class="recipe-title">${recipe.title}</h2>

      <div class="recipe-servings-box">
        <button class="btn servings-button" data-update-to="${
          recipe.servings - 1
        }">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="servings-icon"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <span class="num-servings quantity">${recipe.servings} serving(s)</span>
        <button class="btn servings-button" data-update-to="${
          recipe.servings + 1
        }">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="servings-icon"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>

       <div class="nutrition-info">
         <div class="nutrition-info-box">
          <h3>Nutritional Facts</h3>
          <h4>(Estimated per serving)</h4>
          <ul class="nooch-list">
            <li class="nooch-box"><p class="nooch-title">Energy</p><p class= "nooch-amount">${(
              recipe.calories / recipe.servings
            ).toFixed(0)}g</p><p  class="nooch-perc">${(
  recipe.nutrition.ENERC_KCAL.quantity / recipe.servings
).toFixed(0)}%</p></li>
            <li class="nooch-box"><p class="nooch-title">Carb</p><p class= "nooch-amount">${(
              Object.values(state.recipe.amountInGrams).find(
                measure => measure.label === 'Carbs'
              ).total / recipe.servings
            ).toFixed(0)}${
  Object.values(state.recipe.amountInGrams).find(
    measure => measure.label === 'Carbs'
  ).unit
}</p><p class="nooch-perc">${(
  recipe.nutrition.CHOCDF.quantity / recipe.servings
).toFixed(0)}%</p></li>
            <li class="nooch-box"><p class="nooch-title">Fat</p><p class= "nooch-amount">${(
              Object.values(state.recipe.amountInGrams).find(
                measure => measure.label === 'Fat'
              ).total / recipe.servings
            ).toFixed(0)}${
  Object.values(state.recipe.amountInGrams).find(
    measure => measure.label === 'Fat'
  ).unit
}</p><p class="nooch-perc">${(
  recipe.nutrition.FAT.quantity / recipe.servings
).toFixed(0)}%</p></li>
            <li class="nooch-box"><p class="nooch-title">Saturates</p><p class= "nooch-amount">${(
              Object.values(state.recipe.amountInGrams)
                .find(measure => measure.label === 'Fat')
                .sub.find(measure => measure.label === 'Saturated').total /
              recipe.servings
            ).toFixed(0)}${
  Object.values(state.recipe.amountInGrams)
    .find(measure => measure.label === 'Fat')
    .sub.find(measure => measure.label === 'Saturated').unit
}</p><p class="nooch-perc">${(
  recipe.nutrition.FASAT.quantity / recipe.servings
).toFixed(0)}%</p></li>
            <li class="nooch-box"><p class="nooch-title">Salt</p><p class= "nooch-amount">${(
              Object.values(state.recipe.amountInGrams).find(
                measure => measure.label === 'Sodium'
              ).total / recipe.servings
            ).toFixed(0)}${
  Object.values(state.recipe.amountInGrams).find(
    measure => measure.label === 'Sodium'
  ).unit
}</p><p class="nooch-perc">${(
  recipe.nutrition.NA.quantity / recipe.servings
).toFixed(0)}%</p></li>
          </ul>
         </div>
        </div>

        <div class="ingredients-box">

        <h2 class="recipe-list-title">Recipe Ingredients</h2>

        <ul class="recipe-list">
          ${recipe.ingredients
            .map(ing => {
              return `
            <li class="ing-item">
              <span class="ingredient"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="ing-icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"
                  />
                </svg><span class="quantity">
                ${
                  ing.quantity === 0 ? '' : ing.quantity.toString().slice(0, 4)
                } ${
                ing.measure === '<unit>' || ing.quantity === 0
                  ? ''
                  : `${ing.measure}(s)`
              } ${ing.food.toLowerCase()}</span>
              </span>
            </li>
          `;
            })
            .join('')}
          </ul>
        </div>
      `;

const generateFooterMarkup = recipe => {
  return `
    <h2 class="source-link-title">Want to cook this recipe?</h2>
    <span class="source-link-desc"
      >This recipe was put together by
      <span class="source-recipe-company">${recipe.publisher}</span>. For
      instructions on how to cook it, visit their website here:</span
    >
    <a href="${recipe.sourceUrl}" class="source-link" target="_blank"
      ><button class="btn source-link-button">Cook it!</button></a
    >
  `;
};

// ***************************** //
// UPDATE SERVINGS
// ***************************** //

const recipeServingsBtns = function (e) {
  const servingsBtn = e.target.closest('.servings-button');
  if (!servingsBtn) return;
  const { updateTo } = servingsBtn.dataset;
  if (+updateTo > 0) updateServings(+updateTo);
};

const updateServings = function (newServings) {
  state.recipe.ingredients.forEach(ing => {
    if (ing.quantity === '1/3') ing.quantity = 0.3333333333333333;
    if (ing.quantity === '1/4') ing.quantity = 0.25;
    if (ing.quantity === '1/2') ing.quantity = 0.5;
    if (ing.quantity === '3/4') ing.quantity = 0.75;

    ing.quantity = (ing.quantity * newServings) / state.recipe.servings;
    // newQt = oldQt * newServings / oldServings // 4 = 2 * 8 / 4

    state.recipe.ingredients.forEach(ing => {
      if (ing.quantity.toString().slice(0, 3) === '0.3') ing.quantity = '1/3';
      if (ing.quantity.toString().slice(0, 4) === '0.25') ing.quantity = '1/4';
      if (ing.quantity.toString().slice(0, 3) === '0.5') ing.quantity = '1/2';
      if (ing.quantity.toString().slice(0, 4) === '0.75') ing.quantity = '3/4';
    });
  });

  state.recipe.servings = newServings;

  const newMarkup = generateRecipeMarkup(state.recipe);

  const newDOM = document.createRange().createContextualFragment(newMarkup);
  const newElements = Array.from(newDOM.querySelectorAll('*'));
  const curElements = Array.from(recipeListingContainer.querySelectorAll('*'));

  newElements.forEach((newEl, i) => {
    const curEl = curElements[i];

    if (!newEl.isEqualNode(curEl) && newEl.classList.contains('quantity'))
      curEl.textContent = newEl.textContent;

    if (!newEl.isEqualNode(curEl)) {
      Array.from(newEl.attributes).forEach(attr =>
        curEl.setAttribute(attr.name, attr.value)
      );
    }
  });
};

// ***************************** //
// EVENT HANDLERS
// ***************************** //

searchBtn.addEventListener('click', showSearchResults);
searchInput.addEventListener('keydown', pressEnterKey);
rightArrow.addEventListener('click', slideResultsLeft);
leftArrow.addEventListener('click', slideResultsRight);
recipeListing.addEventListener('click', recipeServingsBtns);
['hashchange', 'load'].forEach(ev => window.addEventListener(ev, showRecipe));
