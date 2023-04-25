<h1>Kenziehub - Parte 1 (Cadastro e Login)</h1>

<h3>Sobre a entrega</h3>
Nessa entrega, combinando vários conhecimentos abordados ao longo das sprints, vamos começar o projeto Kenzie Hub. O objetivo é desenvolver as features de login e cadastro utilizando React Hook Form, Zod e requisições de POST simples.<br>
<br>
<a href="https://www.figma.com/file/ccZ4uMlJtuBQISDzCCI1Vq/Kenzie-Hub?node-id=13099%3A314">Style Guide</a> (a entrega precisa ficar fidedigna ao respectivo style guide)<br>
<br>

<img src="https://media.graphassets.com/resize=width:1440,height:400/ybq6ESXSiaZqsiJqhUaj"/>

<h3>API</h3>
Além disso, será utilizada a respectiva API: <a href="https://github.com/Kenzie-Academy-Brasil-Developers/kenziehub-api">Kenzie Hub API</a>

<h3>Mão na massa!</h3>

<h4>Registro de usuário</h4>

- Crie um formulário utilizando React Hook Form e Zod;
- Faça as validações necessárias:
- Todos os campos obrigatórios
- E-mail precisa ser fornecido no formato adequado
- Senha com no mínimo 8 caracteres. Necessário ter letras, números e ao menos um símbolo
- Confirmação de senha
- Crie a função de cadastro (aplicando no submit do form), realizando uma requisição na rota /users (POST), conforme as orientações da documentação da API
- Crie notificações de sucesso e erro
- Em caso de sucesso, redirecione o usuário para a tela de login

<h4>Login de usuário</h4>

- Novamente, crie um formulário utilizando React Hook Form e Zod
- Nesse formulário serão necessários somente validações de campo obrigatório (tanto e e-mail, quanto em senha)
- Crie um estado de carregamento (loading) na rota de login, e um estado de usuário (user) de forma global
- Crie a função de login, realizando uma requisição na rota /sessions (POST), conforme as orientação da documentação da API
- Crie notificação
- Em caso de sucesso, armazene o data.user no estado user, o data.token e data.user.id em chaves diferentes no localStorage(@TOKEN, @USERID), feito isso, redirecione o usuário para o dashboard

<h4>Dashboard</h4>

- Renderize as informações de nome e módulo
- Crie uma função de logout, limpando o estado user e as chaves no localStorage(@TOKEN, @USERID)

<h2>KenzieHub (Completo)</h2>

<h3>Sobre a entrega</h3>

Estamos continuando nesta entrega o projeto Kenzie Hub. O objetivo agora é mover as funções de Login e Cadastro para um contexto de usuário, além de criar um conjunto de funcionalidades para adicionar, editar e excluir tecnologias.

<h3>Introdução</h3>
Continuaremos utilizando a Kenzie Hub API do projeto anterior. Desta vez utilizando os endpoints de gerenciamento de tecnologias, além do endpoint que retorna as informações usuário (GET) Utilizaremos uma style guide baseada na anterior, mas contemplando as novas features. Por isso, você poderá reaproveitar parte da estilização já criada na entrega anterior.

<a href="https://www.figma.com/file/ccZ4uMlJtuBQISDzCCI1Vq/Kenzie-Hub?node-id=0%3A1">Style Guide</a> (a entrega precisa ficar fidedigna ao respectivo style guide)

Lembre-se de consultar a documentação da API o tempo inteiro, e realiza teste de requisição no Insomnia.

<h3>Refatorando:</h3>

- Comece criando um contexto chamado de UserContext, feito isso, traga todas as funcionalidades e estados referentes ao usuário para este contexto (Login e Cadastro)
- Crie um componente chamado Providers para centralizar os seus contextos e envolva o componente App com este componente
- Substitua toda a passagem de props na aplicação relacionada aos estados e funcionalidades centralizados em UserContext
- Se tudo der certo, sua aplicação estará funcionando corretamente, mesmo com a migração das funções para context.

<h4>Criando o Autologin:</h4>

- No contexto UserContext, crie um useEffect de montagem, neste efeito realize uma requisição na rota /profile (GET)
- Envolva a requisição com uma condicional verificando se o token ( colhido do localStorage) é válido.
- Assim como na função de Login, o resultado da requisição deverá armazenar as informações do usuário no estado user
- Em caso de erro (em catch), faça a limpeza da @TOKEN do localStorage.
- Dando tudo certo, ao realizar login e atualizar a página, o usuário continuará logado

<h4>Interagindo com as tecnologias:</h4>

- Comece renderizando as tecnologias do usuário, elas já estão na resposta que vem das funcionalidades de Login e Autologin;
- Crie um modal (AddModal) para ser renderizado por meio de renderização condicional
- Neste modal, crie um formulário e realize as validações e coleta de dados, utilizando Hook Form/Zod
- Prosseguindo, crie um novo contexto chamado TechContext, neste criaremos duas funcionalidades:
- Uma função de criação de tecnologias, realizando uma requisição na rota /users/techs (POST)
- Uma função de exclusão de tecnologias, realizando uma requisição na rota /users/techs/:tech_id (DELETE)
- As funcionalidades deverão ter loading e toast de erro
- OBS: Ambas as rotas são privadas, por isso não esqueça de enviar o token (presente no localStorage) 
- OBS 2: não esqueça, é necessário, mesmo com a requisição, atualizar o estado, para que a renderização aconteça instantaneamente na interface.     

Feito isso, importe o contexto novo no componente Providers, dentro de UserContext, e aplique as funções do contexto nos pontos necessários da interface.

Você pode pegar dados de um contexto externo (estados e funcionalidades) utilizando o useContext.

Cumprindo esta etapa, já será possível adicionar e remover tecnologias.

Você deve criar um novo modal para atualização de tecnologia, que será aberto ao clicar na respectiva tecnologia, verifique na rota da API a rota mais adequada para realizar a alteração.

<h3>Dicas:</h3>

- Faça o modal carregar as informações da respectiva tecnologia nos inputs
- Desabilite o input cujo o dado não pode ser alterado
- Não esqueça do loading e do toast de erro

<br>
<br>

<p align="center"><b>Taken from Kenzie Academy Brasil</b></p>
