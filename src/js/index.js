import { fetchGithubUser, fetchGithubRepos } from "./githubApi.js";
import { renderProfile } from "./profileview.js";

const inputSearch = document.getElementById("input-search");
const btnSearch = document.getElementById("btn-search");
const profileResults = document.getElementById("profile-results");

async function getUserProfile() {
  const userName = inputSearch.value.trim();

  if (!userName) {
    alert("Por favor, digite um nome de usuário do GitHub");
    profileResults.innerHTML = "";
    return;
  }

  profileResults.innerHTML = "<p class='loading'>Carregando...</p>";

  try {
    const userData = await fetchGithubUser(userName);
    const userRepos = await fetchGithubRepos(userName);

    renderProfile(userData, userRepos, profileResults);

  } catch (error) {
    console.error("Erro ao buscar o perfil do usuário:", error);
    alert("Erro ao buscar o perfil do usuário. Verifique o nome e tente novamente.");
    profileResults.innerHTML = "";
  }
}

btnSearch.addEventListener("click", getUserProfile);

inputSearch.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    getUserProfile();
  }
});
