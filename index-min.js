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
const req = new Request('http://api.tvmaze.com/search/shows?q=girls');
const myResponse = fetch(req)
    .then((function(response) {
      return(response.json())
    .then(function(json) {console.log(json);});  
    }));

//console.log(myResponse);
// console.log(myResponse.PromiseValue);


