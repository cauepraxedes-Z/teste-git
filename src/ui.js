function getEl(id) {
  return document.getElementById(id);
}

export function getInputValue() {
  const input = getEl('input-search');
  return input ? input.value.trim() : '';
}

export function showLoading() {
  const profileResults = getEl('profile-results');
  if (profileResults) profileResults.innerHTML = '<p class="loading">Carregando...</p>';
}

export function clearProfile() {
  const profileResults = getEl('profile-results');
  if (profileResults) profileResults.innerHTML = '';
}

export function showAlert(message, timeout = 4000) {
  const alertContainer = getEl('alert-container');
  if (!alertContainer) {
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

export function renderUser(userData, repos = []) {
  const profileResults = getEl('profile-results');
  if (!profileResults) return;

  const name = userData.name || userData.login;
  const bio = userData.bio || 'Não possui bio cadastrada 😟';

  profileResults.innerHTML = `
    <div class="profile-card">
      <div class="profile-header-custom">
        <img class="avatar" src="${userData.avatar_url}" alt="Avatar de ${name}">
        <div class="profile-info">
          <h2 class="profile-name">${name}</h2>
          <p class="bio-text">${bio}</p>
          <a class="profile-link" href="${userData.html_url}" target="_blank" rel="noopener">Ver Perfil Completo</a>
        </div>
      </div>

      <div class="profile-counters">
        <div class="counter-item">
          <h4>Seguidores</h4>
          <span class="spam">${userData.followers}</span>
        </div>
        <div class="counter-item">
          <h4>Seguindo</h4>
          <span class="spam">${userData.following}</span>
        </div>
      </div>

      <div id="repos-list" class="repo-section">
        ${renderReposHtml(repos)}
      </div>
    </div>
  `;
}

function renderReposHtml(repos) {
  if (!repos || repos.length === 0) {
    return `<p class="no-repos">Nenhum repositório recente encontrado.</p>`;
  }

  const cards = repos.map(repo => {
    const desc = repo.description ? `<p class="repo-desc">${repo.description}</p>` : '';
    return `
      <article class="repository-card">
        <h4 class="repo-name"><a href="${repo.html_url}" target="_blank" rel="noopener">${repo.name}</a></h4>
        ${desc}
        <div class="repository-stats">
          <span class="repo-badge">⭐ Stars: ${repo.stargazers_count || 0}</span>
          <span class="repo-badge">🍴 Forks: ${repo.forks_count || 0}</span>
          <span class="repo-badge">👀 Watchers: ${repo.watchers_count || 0}</span>
          <span class="repo-badge">💻 Language: ${repo.language || '—'}</span>
        </div>
      </article>`;
  }).join('');

  return `
    <h3 class="repo-section-title">Últimos repositórios</h3>
    <div class="repositories">${cards}</div>
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
  const btnSearch = getEl('btn-search');
  const inputSearch = getEl('input-search');

  if (btnSearch) btnSearch.addEventListener('click', handler);
  if (inputSearch) {
    inputSearch.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') handler();
    });

    const debounced = debounce(() => handler(), 500);
    inputSearch.addEventListener('input', debounced);
  }
}
