# Projeto Leticia

Site estatico em HTML, CSS e JavaScript, sem etapa de compilacao. A pagina inicial e `index.html`; os estilos e scripts compartilhados ficam em `assets/css/` e `assets/js/`. As pastas de paginas e midias foram mantidas para preservar os caminhos relativos.

## Publicar no GitHub Pages

1. Crie um repositorio no GitHub. Se pretende publicar fotos ou textos pessoais, revise primeiro as permissoes e considere se o repositorio deve ser publico.
2. Na pasta do projeto, abra o terminal e execute:

   ```powershell
   git init -b main
   git add .
   git commit -m "Preparar site para GitHub Pages"
   git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
   git push -u origin main
   ```

   Troque `SEU_USUARIO` e `SEU_REPOSITORIO` pelos valores do repositorio criado.
3. No repositorio, abra **Settings > Pages** e selecione **GitHub Actions** como origem de publicacao.
4. A cada envio para `main`, o workflow em `.github/workflows/pages.yml` publica o site.

O workflow envia os arquivos versionados na raiz do repositorio. Arquivos ignorados pelo `.gitignore` nao sao enviados pelo Git normalmente.

## Antes de publicar

- Um repositorio publico deixa os arquivos versionados acessiveis a qualquer pessoa, nao apenas as paginas do site. Revise fotos, videos, cartas, rascunhos, nomes e datas; publique somente o que voce e as demais pessoas retratadas autorizam divulgar.
- Instaladores `.exe`, configuracoes locais do VS Code e o backup em `documentacao/backups/` ficam fora do controle de versao.
- Arquivos `.mp3` e o video musical em `Musicas dedicada a leticia no site/Me namora/` sao ignorados para nao distribuir obras sem autorizacao. Os players que dependem desses arquivos nao terao audio no site publicado. Para habilitar musica, use arquivos com licenca/autorizacao de distribuicao ou links oficiais de streaming e atualize as paginas correspondentes.
- Para um repositorio privado, confirme se seu plano do GitHub permite publicar o Pages a partir dele. Nao envie arquivos ignorados com `git add -f`.
