export function renderProfile(userData, repos = [], container) {
    const displayRepos = Array.isArray(repos) ? repos.slice(0, 10) : [];

    const repositoriesHtml = displayRepos.length > 0
        ? displayRepos.map(repo => `
            <article class="repository-card">
                <h3 class="repo-name">${repo.name}</h3>
                <div class="repository-stats">
                    <span class="repo-badge">⭐ Stars: ${repo.stargazers_count}</span>
                    <span class="repo-badge">🍴 Forks: ${repo.forks_count}</span>
                    <span class="repo-badge">👀 Watchers: ${repo.watchers_count}</span>
                    <span class="repo-badge">💻 Language: ${repo.language || 'CSS'}</span>
                </div>
            </article>
        `).join('')
        : `<p class="no-repos">Nenhum repositório encontrado.</p>`;

    // ... resto do código (mantendo o container.innerHTML)
}
