<h1>Entrega - Kenziehub - Parte 1 (Cadastro e Login)</h1>

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
<br>
<br>

<p align="center"><b>Taken from Kenzie Academy Brasil</b></p>
