const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const profileResults = document.getElementById('profile-results');

// CORREÇÃO: URL oficial para desenvolvedores (API)
const BASE_URL = 'https://api.github.com/users';

async function getUserData() {
    const userName = inputSearch.value.trim();
   
    if (userName === "") {
        alert('Por favor, digite um nome de usuário do GitHub.');
        return;
    }

    profileResults.innerHTML = '<p class="loading">Carregando...</p>';

    try {
        // CORREÇÃO: Chamada direta para a API
        const response = await fetch(`${BASE_URL}/${userName}`);

        if (!response.ok) {
            alert('Usuário não encontrado!');
            profileResults.innerHTML = "";
            return;
        }

        const userData = await response.json();

        // CORREÇÃO: 'userData.name' pode ser nulo, usamos o 'login' como reserva
        profileResults.innerHTML = `  
        <div class="profile-card" style="margin-top: 20px; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
            <img src="${userData.avatar_url}" alt="Avatar" style="width: 100px; border-radius: 50%;">
            <div class="profile-info">
                <h2 style="margin: 10px 0;">${userData.name || userData.login}</h2>
                <p>${userData.bio || 'Este usuário não possui biografia.'}</p>
                <a href="${userData.html_url}" target="_blank" style="color: blue; text-decoration: underline;">Ver Perfil Completo</a>
            </div>
        </div>`;      

    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao buscar dados. Verifique sua conexão.');
        profileResults.innerHTML = "";
    } 
}

btnSearch.addEventListener('click', getUserData);

inputSearch.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        getUserData();
    }
});
