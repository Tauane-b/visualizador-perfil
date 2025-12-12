const inputSearch = document.getElementById("input-search");
const btnSearch = document.getElementById("btn-search");
const profileResults = document.getElementById("profile-results");

const BASE_URL = "https://api.github.com";

btnSearch.addEventListener("click", async () => {
  const userName = inputSearch.value;
  if (userName) {
    profileResults.innerHTML = "<p class='loading'>Carregando...</p>";
    try {
      const response = await fetch(`${BASE_URL}/users/${userName}`);

      if (!response.ok) {
        alert(
          "Usuário não encontrado. por favor, verifique o nome de usuário e tente novamente."
        );
        profileResults.innerHTML= "";
        return;
      }

      const userData = await response.json();
      console.log(userData);

      profileResults.innerHTML = `
        <div class="profile-card">
          <img src="${userData.avatar_url}" alt="Avatar de ${userData.name}" class="profile-avatar" />
          <div class ="profile-info">
          <h2>${userData.name}</h2>
          <p>${userData.bio || 'Não possui bio cadastrada😭'}</p>
          <p>Repositórios públicos: ${userData.public_repos}</p>
          <p>Seguidores: ${userData.followers}</p>
          <p>Seguindo: ${userData.following}</p>
        </div>
        </div>
      `;

    } catch (error) {
      alert(
        "Ocorreu um erro ao buscar o usuário. Por favor, tente novamente mais tarde."
      );
    }
  } else {
    alert("Por favor,digite um nome de usúario do GitHub");
  }

  // O valor do input está na variável searchTerm.
  // Você pode usar essa variável para fazer o que precisa
});
