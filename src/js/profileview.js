export function renderProfile(userData, userRepos, container) {

  const repositoriesHtml = userRepos.length > 0
    ? userRepos.map(repo => `
        <div class="repository-card">
          <h3>${repo.name}</h3>
          <div class="repository-stats">
            <span>⭐ ${repo.stargazers_count}</span>
            <span>🍴 ${repo.forks_count}</span>
            <span>👀 ${repo.watchers_count}</span>
            <span>💻 ${repo.language || "Não informado"}</span>
          </div>
        </div>
      `).join("")
    : "<p>Nenhum repositório encontrado.</p>";

  container.innerHTML = `
    <div class="profile-card">
      <img 
        src="${userData.avatar_url}" 
        alt="Avatar de ${userData.name || userData.login}" 
        class="profile-avatar"
      />

      <div class="profile-info">
        <h2>${userData.name || userData.login}</h2>
        <p>${userData.bio || "Não possui bio cadastrada 😭"}</p>
        <p>Repositórios públicos: ${userData.public_repos}</p>
      </div>
    </div>

    <div class="profile-counters">
      <div class="followers"> 
        <h4>👥 Seguidores</h4> 
        <span>${userData.followers}</span>
      </div>
      <div class="following">
        <h4>👥 Seguindo</h4>
        <span>${userData.following}</span>
      </div>
    </div>

    <div class="profile-repositories">
      <h2>📦 Repositórios</h2>
      <div class="repositories">
        ${repositoriesHtml}
      </div>
    </div>
  `;
}
