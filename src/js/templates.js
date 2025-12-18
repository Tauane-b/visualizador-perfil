// Módulo responsável por gerar o template do perfil
export function generateProfileTemplate(userData) {
  return `
    <div class="profile-card">
      <img src="${userData.avatar_url}" alt="Avatar de ${userData.name}" class="profile-avatar" />
      <div class="profile-info">
        <h2>${userData.name}</h2>
        <p>${userData.bio || "Não possui bio cadastrada😭"}</p>
        <p>Repositórios públicos: ${userData.public_repos}</p>
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
    </div>
  `;
}

export function generateLoadingTemplate() {
  return "<p class='loading'>Carregando...</p>";
}
