/*jshint esversion: 6 */
//
// SUBMIT SEARCH FORM
//
const formInput = document.querySelector('.search-form input');
const submit = document.querySelector('[type="submit"]');

submit.addEventListener('click', function(ev) {
  console.log(this);
  console.log(formInput.value);
  formInput.value = '';
  ev.preventDefault();
});
//
// REQUEST API
//
const req = new Request('http://api.tvmaze.com/shows');
const shows = fetch(req)
    .then((function(response) {
      return(response.json())
    .then(function(shows) {
      removeLoading();
      shows.forEach(show => addShow(show))
    });
    }));
//
// TEMPLATE HTML AND ADD SHOW
//
const tvshowsContainer = document.querySelector('.tv-shows');
const loadingSpinner = document.querySelector('.loading');

function removeLoading() {
  loadingSpinner.parentNode.removeChild(loadingSpinner);
}
function addShow(show) {
  let newShow = `<article class="tv-show">
                    <img src="${show.image.medium}" alt="${show.name} cover">
                    <div class="info">
                      <h1>${show.name}</h1>
                      ${show.summary}
                    </div>
                  </article>`
  tvshowsContainer.innerHTML += newShow;
}


