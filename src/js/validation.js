// Módulo responsável pela validação de entrada
export function validateUserInput(userName) {
  if (!userName || userName.trim().length === 0) {
    throw new Error("Por favor, digite um nome de usuário do GitHub");
  }
  return true;
}
