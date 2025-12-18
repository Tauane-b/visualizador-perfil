import { fetchUserProfile } from "./api.js";
import { validateUserInput } from "./validation.js";
import { generateProfileTemplate } from "./templates.js";
import {
  getSearchElements,
  displayLoading,
  displayProfile,
  clearProfile,
  showError,
} from "./dom.js";

// Inicializar elementos do DOM
const { inputSearch, btnSearch, profileResults } = getSearchElements();

// Event Listener para buscar perfil
btnSearch.addEventListener("click", async () => {
  try {
    // Validar entrada do usuário
    const userName = inputSearch.value;
    validateUserInput(userName);

    // Exibir carregamento
    displayLoading(profileResults);

    // Buscar dados do usuário
    const userData = await fetchUserProfile(userName);

    // Gerar e exibir template do perfil
    const profileTemplate = generateProfileTemplate(userData);
    displayProfile(profileResults, profileTemplate);

  } catch (error) {
    showError(error.message);
    clearProfile(profileResults);
  }
});

