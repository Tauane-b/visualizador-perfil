import { fetchGithubUser, fetchGithubRepos } from "./githubApi.js";
import { renderProfile } from "./profileview.js";

const inputSearch = document.getElementById("input-search");
const btnSearch = document.getElementById("btn-search");
const profileResults = document.getElementById("profile-results");

btnSearch.addEventListener("click", async () => {
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
    console.log(userRepos);

    renderProfile(userData, userRepos, profileResults);

  } catch (error) {
    console.error("Erro ao buscar o perfil do usuário:", error);

    profileResults.innerHTML = `
      <p class="error">
        Usuário não encontrado. Verifique o nome e tente novamente.
      </p>
    `;
  }
});
