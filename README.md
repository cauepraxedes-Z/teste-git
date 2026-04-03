# Visualizador de Perfil do GitHub

Uma aplicação frontend leve que consulta a API pública do GitHub para exibir informações de perfil e repositórios recentes de um usuário.

**Principais características**
- Busca por nome de usuário do GitHub
- Exibição de avatar, bio, seguidores/seguindo
- Listagem dos repositórios recentes com Stars, Forks, Watchers e linguagem
- Interface responsiva e sem dependências externas de build (apenas HTML/CSS/JS)

**Arquitetura (breve)**
- `index.html` — ponto de entrada da aplicação
- `src/api.js` — funções para comunicação com a API do GitHub (`fetchUser`, `fetchUserRepos`)
- `src/ui.js` — renderização do DOM e utilitários de UI
- `src/index.js` — lógica de orquestração (integra `api` e `ui`)
- `src/main.js` — inicializador (DOMContentLoaded)

**Requisitos**
- Navegador moderno com suporte a módulos ES (`type="module"`)
- Servir os arquivos por HTTP (abrir via `file://` pode quebrar imports)

**Como executar (rápido)**
1. Abra um terminal na pasta do projeto (onde está este `README.md`).
2. Inicie um servidor HTTP simples. Exemplos:

```bash
# Com Python 3
python -m http.server 8000

# Ou com Node.js (http-server):
npx http-server -p 8000
```

3. Abra no navegador: `http://localhost:8000`
4. No campo de busca digite um usuário (ex.: `octocat`) e pressione Buscar.

**Exemplo de verificação rápida (curl)**

```bash
curl -i http://localhost:8000/index.html
```

**Desenvolvimento**
- Não há build-step; edite os arquivos em `src/` e recarregue a página.
- Sugestões de melhoria: adicionar testes unitários, cache local (LocalStorage) e paginação para repositórios.

**Contribuição**
- Abra uma issue descrevendo o problema ou a feature desejada.
- Envie um pull request com mudanças pequenas e um README atualizado sobre o que foi alterado.

**Licença & Contato**
- Projeto fornecido sem licença explícita (adicione uma `LICENSE` se desejar).
- Para dúvidas ou solicitações, abra uma issue no repositório local ou envie mensagem direta ao autor.

---
_Atualizado:_ documentação criada para execução local e contribuição.
