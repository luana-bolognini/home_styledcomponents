CRIANDO UMA HOME COM STYLED COMPONENTS
- React: biblioteca de JS declarativa pra criar interfaces visuais. Não é um framework, mas uma biblioteca, e que serve pra criar interface com o usuário.

- Styled Components: uma biblioteca (lib), que nos permite escrever códigos CSS dentro do JS.

- no terminal:
npx create-react-app styleshomes (esse último deve ser só o nome do app, e com ele abre a pasta já)
- todas as bibliotecas são instaladas nesse comando

- muito mais simples essa forma de criar um app react****

- é uma boa prática tirar tudo que não vamos usar, como os logos do react, só que, ao tirar os arquivos do public por exemplo (deixando só o index.html), nós temos que ir em todos os arquivos .js (como o App.js) e TIRAR TODOS OS IMPORT, até que a página volte a rodar sem problemas, antes de continuar

- nesse primeiro momento eu deixei todos os aquivos mesmo ela tendo tirado na aula

- CRIAR PASTA COMPONENTS: Content.js, Footer.js e Header.js

- APAGAR em App.js o header e deixar no return inicialmente só uma div com qualquer coisa escrita, pra se modificado depois. (e funcionou muito bem, mesmo não tendo excluído todos os arquivos, ele deixou apenas o que eu queria escrito sem bug)

- MAS É POSSÍVEL QUE DÊ ERRO POR NÃO ESTAR USANDO CERTAS COISAS NO MEIO DO CÓDIGO DEPOIS

- 