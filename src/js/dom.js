// Módulo responsável por manipular o DOM
export function getSearchElements() {
  return {
    inputSearch: document.getElementById("input-search"),
    btnSearch: document.getElementById("btn-search"),
    profileResults: document.getElementById("profile-results"),
  };
}

export function displayLoading(container) {
  container.innerHTML = "<p class='loading'>Carregando...</p>";
}

export function displayProfile(container, template) {
  container.innerHTML = template;
}

export function clearProfile(container) {
  container.innerHTML = "";
}

export function showError(message) {
  alert(message);
}
