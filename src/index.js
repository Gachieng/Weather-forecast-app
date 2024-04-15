function submitResults(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#weather-app-city");
  cityElement.innerHTML = searchInput.value;
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", submitResults);
