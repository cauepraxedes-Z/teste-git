const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const profileResults = document.getElementById('profile-results');
const alertContainer = document.getElementById('alert-container');

export function getInputValue() {
  return inputSearch.value.trim();
}

export function showLoading() {
  profileResults.innerHTML = '<p class="loading">Carregando...</p>';
}

export function clearProfile() {
  profileResults.innerHTML = '';
}

export function showAlert(message, timeout = 4000) {
  if (!alertContainer) {
    // Fallback para ambientes sem container
    window.alert(message);
    return;
  }

  alertContainer.textContent = message;
  alertContainer.classList.add('visible');

  setTimeout(() => {
    alertContainer.classList.remove('visible');
    alertContainer.textContent = '';
  }, timeout);
}

export function renderUser(userData) {
  profileResults.innerHTML = `
    <div class="profile-card" style="margin-top: 20px; padding: 20px; border: 1px solid #ddd; border-radius: 8px; display:flex; gap:16px; align-items:center;">
        <img src="${userData.avatar_url}" alt="Avatar" style="width: 100px; border-radius: 50%;">
        <div class="profile-info">
            <h2 style="margin: 10px 0;">${userData.name || userData.login}</h2>
            <p>${userData.bio || 'Este usuário não possui biografia.'}</p>
            <a href="${userData.html_url}" target="_blank" style="color: blue; text-decoration: underline;">Ver Perfil Completo</a>
        </div>
    </div>

    <div class="counters" style="display:flex; gap:12px; margin-top:12px;">
        <div class="counter-item" style="padding:8px; border:1px solid #eee; border-radius:6px;">
            <h4 style="margin:0">👥 Seguidores</h4>
            <span class="spam">${userData.followers}</span>
        </div>
        <div class="counter-item" style="padding:8px; border:1px solid #eee; border-radius:6px;">
            <h4 style="margin:0">👥 Seguindo</h4>
            <span class="spam">${userData.following}</span>
        </div>
    </div>
`;
}

function debounce(fn, wait = 400) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), wait);
  };
}

export function bindSearch(handler) {
  btnSearch.addEventListener('click', handler);
  inputSearch.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') handler();
  });

  // chamada debounced enquanto o usuário digita
  const debounced = debounce(() => handler(), 500);
  inputSearch.addEventListener('input', debounced);
}
