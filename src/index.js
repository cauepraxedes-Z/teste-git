import { fetchUser, fetchUserRepos } from './api.js';
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

    // buscar últimos repositórios (últimos 10 por padrão)
    let repos = [];
    try {
      repos = await fetchUserRepos(userName, 10);
    } catch (err) {
      console.warn('Não foi possível obter repositórios:', err);
      repos = [];
    }

    renderUser(userData, repos);
  } catch (error) {
    console.error('Erro:', error);
    showAlert('Erro ao buscar dados. Verifique sua conexão.');
    clearProfile();
  }
}

export function init() {
  bindSearch(handleSearch);
}
