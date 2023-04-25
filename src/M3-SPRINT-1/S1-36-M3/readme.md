<h1>Nu Kenzie</h1>

<h3>Sobre a entrega</h3>
Hora de colocar a mão na massa, vamos criar o Nu Kenzie, uma aplicação para gerenciamento de gastos, cadastrando entradas e saídas.

Além disso, para praticar a estilização, a aplicação deverá ser um clone deste <a href="https://www.figma.com/file/h8s0VHmSEUucfc7B3igKbb/M3---Gerenciador-de-Finan%C3%A7as?node-id=0%3A1">figma</a>.

<h3>Instruções</h3>
Essa aplicação precisa de alguns componentes para sua construção. Veja abaixo um modelo dos componentes:

- No seu componente App, você precisa ter um state listTransactions que receberá uma lista que conterá tanto entradas quanto saídas.
- Crie um componente Form, para cadastrar novas Entradas e Saídas, com o seguinte formato:
- Input para pegar o valor.
- Input para pegar a descrição.
- Select para escolher entre entrada e saída.
- Button para enviar as informações captadas no formulário.
- O componente Form precisa receber por prop o state listTransactions além do setListTransactions para poder adicionar novas entradas e saídas.
- Crie o componente List que receberá o state listTransactions por prop.
- Agora, dentro do componente List, você precisa fazer um map no state listTransactions. Para cada interação da lista você criará um componente Card. Ou seja, se dentro do state listTransactions existir 3 transações cadastradas, teremos 3 cards em tela.
- No componente Card você renderizará as informações de uma transaction. Repare que se for entrada terá um detalhe verde no card, e caso seja saída esse detalhe será cinza.
- O componente TotalMoney, recebe por prop o state listTransactions e fará a somatória dos valores de todas as transações.
- Excluir Card - Você precisa criar um botão de exclusão do card e deixa-ló funcional, ou seja, você deve excluir o item da lista ao clicar no botão.
<br>
<br>

<p align="center"><b>Taken from Kenzie Academy Brasil</b></p>
