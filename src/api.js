export const BASE_URL = 'https://api.github.com/users';

export async function fetchUser(userName) {
  if (!userName) throw new Error('Nome de usuário vazio');

  const response = await fetch(`${BASE_URL}/${userName}`);

  if (!response.ok) {
    return null;
  }

  return await response.json();
}
