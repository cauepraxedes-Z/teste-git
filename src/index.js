import { fetchUser } from './api.js';
import { getInputValue, showLoading, clearProfile, showAlert, renderUser, bindSearch } from './ui.js';

async function handleSearch() {
  const userName = getInputValue();

  if (!userName) {
    showAlert('Por favor, digite um nome de usuário do GitHub.');
    return;
  }

  showLoading();

  try {
    const userData = await fetchUser(userName);

    if (!userData) {
      showAlert('Usuário não encontrado!');
      clearProfile();
      return;
    }

    renderUser(userData);
  } catch (error) {
    console.error('Erro:', error);
    showAlert('Erro ao buscar dados. Verifique sua conexão.');
    clearProfile();
  }
}

export function init() {
  bindSearch(handleSearch);
}
