// Módulo responsável pelas requisições à API do GitHub
const BASE_URL = "https://api.github.com";

export async function fetchUserProfile(userName) {
  try {
    const response = await fetch(`${BASE_URL}/users/${userName}`);

    if (!response.ok) {
      throw new Error("Usuário não encontrado");
    }

    return await response.json();
  } catch (error) {
    throw new Error(
      "Ocorreu um erro ao buscar o usuário. Por favor, tente novamente mais tarde."
    );
  }
}
