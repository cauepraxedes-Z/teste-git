export const BASE_URL = 'https://api.github.com/users';

export async function fetchUser(userName) {
  if (!userName) throw new Error('Nome de usuário vazio');

  const response = await fetch(`${BASE_URL}/${userName}`);

  if (!response.ok) {
    return null;
  }

  return await response.json();
}

// Busca os repositórios do usuário: retorna os mais recentes por atualização.
export async function fetchUserRepos(userName, perPage = 10) {
  if (!userName) throw new Error('Nome de usuário vazio');
  const url = `${BASE_URL}/${userName}/repos?sort=updated&per_page=${perPage}`;
  const response = await fetch(url);

  if (!response.ok) {
    // Retornar array vazio para a UI não quebrar; o caller pode decidir o que fazer
    return [];
  }

  return await response.json();
}