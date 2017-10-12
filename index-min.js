/*jshint esversion: 6 */
//
// SUBMIT SEARCH FORM
//
const formInput = document.querySelector('.search-form input');
const submit = document.querySelector('[type="submit"]');
loadAllShows();

submit.addEventListener('click', function(ev) {
  console.log(formInput.value);
  query = `http://api.tvmaze.com/search/shows?q=${formInput.value}`;
  formInput.value = '';
  ev.preventDefault();
  makeRequest(query);
});
//
// REQUEST
//
function loadAllShows() {
  const req = new Request('http://api.tvmaze.com/shows');
  const shows = fetch(req)
      .then((function(response) {
        return(response.json())
      .then(function(shows) {
        renderShows(shows);
      });
      }));
}

function makeRequest(query) {
  const req = new Request(query);
  const shows = fetch(req)
      .then((function(response) {
        return(response.json())
      .then(shows => renderShows(shows.map(el => el.show)));
      }));
}
//
// TEMPLATE HTML AND RENDER SHOWS
//
const tvshowsContainer = document.querySelector('.tv-shows');
const loadingSpinner = document.querySelector('.loading');

function removeLoading() {
  loadingSpinner.parentNode.removeChild(loadingSpinner);
}

function renderShows(shows) {
  // removeLoading();
  shows.forEach(function(show) {
    const imageURL = show.image ? show.image.medium : 'https://www.nilfiskcfm.com/wp-content/uploads/2016/12/placeholder.png';
    let newShow = `<article class="tv-show fadein">
    <img src="${imageURL}" alt="${show.name} cover">
    <div class="info">
    <h1>${show.name}</h1>
    ${show.summary}
    </div>
    </article>`
    tvshowsContainer.innerHTML += newShow;
  });
}


