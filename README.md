# Visualizador de Perfil do GitHub (simples)

Pequeno projeto que busca e exibe informações de perfis do GitHub.

## Estrutura

- `index.html` - página principal (carrega `src/main.js` como `type="module"`).
- `src/api.js` - responsabilidade de comunicação com a API do GitHub.
- `src/ui.js` - manipulação do DOM, renderização e mensagens ao usuário.
- `src/index.js` - orquestração (lógica de busca) e ponto de integração entre `api` e `ui`.
- `src/main.js` - entrypoint que inicializa a aplicação no `DOMContentLoaded`.

## Pré-requisitos

É necessário servir os arquivos por HTTP para que os módulos ES6 funcionem corretamente no navegador (abrir o arquivo diretamente com `file://` pode causar erros).

## Executando localmente

Na raiz do projeto, execute um servidor simples (exemplos):

```bash
python -m http.server 8000
```

ou

```bash
npx http-server -p 8000
```

Depois abra `http://localhost:8000` no navegador.

## Observações

- A UI usa um container in-page para mensagens ao usuário (substitui `alert()`).
- O campo de busca possui debounce para reduzir número de requisições enquanto o usuário digita.
- Caso queira melhorar: adicionar paginação de repositórios, cache local e testes unitários para funções puras.

## Como contribuir

- Abra uma issue ou envie um pull request com melhorias.

---
Solucionei problemas básicos de duplicação no código, adicionei debounce e mensagens in-page. Teste localmente conforme instruções acima.
