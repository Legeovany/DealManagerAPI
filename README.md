Instruções para executar a aplicação


1- Primeiramente realizar o clone do projeto em uma pasta local.
2- Rodar o comando “npm install“ no terminal aberto no diretório em que o projeto está para que todas as dependências sejam instaladas.
3- Inicializar o servidor MySQL localmente e no MySQL Workbench criar o DB (localhost) com as seguintes informações:
	Nome: flightTickets
Usuário: 'root'
Senha: '' (Em branco)
Obs: Não é necessário criar as tabelas pois o próprio código estará criando.
4- Após isto será necessário somente inicializar a aplicação rodando o comando “npm start“ no próprio terminal do VSCode caso esteja utilizando este editor.

Rotas

1. Adicionar voo.
   Obs: esse método deve criar os assentos vinculados ao voo
2. Adicionar cliente
3. Adicionar compra de passagem aérea
4. Listar voo com assentos disponíveis
5. Listar passagem aéreas por cliente
6. Listar passagens por voo
7. Obter detalhe da passagem aérea contendo os dados do voo também

1- http://localhost:3000/flight/add = JSON(
{
    "flightId": INTEGER,
    "departureTime": DATE (Ex: “2022-06-30 18:00:00”),
    "arrivalTime": DATE (Ex: “2022-06-30 22:00:00”),
    "airportDeparture": STRING,
    "airportArrival": STRING,
    "seatsQty": INTEGER,
    "price": INTEGER
})

2- http://localhost:3000/client/add = JSON(
{
    "name": STRING,
    "email": STRING,
    "cpfRg": STRING,
    "phoneNumber": STRING
})



3- http://localhost:3000/ticket/buy = JSON(
{
    "flightId": STRING,
    "seat": STRING,
    "clientId": STRING
})

4- http://localhost:3000/flight/flightTickets = JSON(
{
    "flightId": STRING
})

5- http://localhost:3000/ticket/getClientTickets = JSON(
{
    "clientId": STRING
})

6/7- http://localhost:3000/ticket/getFlightTickets = JSON(
{
    "flightId": STRING
})

Tools

Foram utilizadas as seguintes ferramentas para o desenvolvimento da API:

•	Nodejs
•	ExpressJs
•	MySQL
•	Sequelize
•	Nodemon
•	MVC Architecture
