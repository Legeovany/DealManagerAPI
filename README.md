Instruções para executar a aplicação


1- Primeiramente realizar o clone do projeto em uma pasta local.<br>
2- Rodar o comando “npm install“ no terminal aberto no diretório em que o projeto está para que todas as dependências sejam instaladas.<br>
3- Inicializar o servidor MySQL localmente e no MySQL Workbench criar o DB (localhost) com as seguintes informações:<br>
	Nome: flightTickets<br>
	Usuário: 'root'<br>
	Senha: '' (Em branco)<br>
	Obs: Não é necessário criar as tabelas pois o próprio código estará criando.<br>
4- Após isto será necessário somente inicializar a aplicação rodando o comando “npm start“ no próprio terminal do VSCode caso esteja utilizando este editor.<br>

Routes

1. Adicionar voo.
   Obs: esse método deve criar os assentos vinculados ao voo
2. Adicionar cliente
3. Adicionar compra de passagem aérea
4. Listar voo com assentos disponíveis
5. Listar passagem aéreas por cliente
6. Listar passagens por voo
7. Obter detalhe da passagem aérea contendo os dados do voo também

1- http://localhost:3000/flight/add = JSON(<br>
{<br>
    "flightId": INTEGER,<br>
    "departureTime": DATE (Ex: “2022-06-30 18:00:00”),<br>
    "arrivalTime": DATE (Ex: “2022-06-30 22:00:00”),<br>
    "airportDeparture": STRING,<br>
    "airportArrival": STRING,<br>
    "seatsQty": INTEGER,<br>
    "price": INTEGER<br>
})<br>


2- http://localhost:3000/client/add = JSON(<br>
{<br>
    "name": STRING,<br>
    "email": STRING,<br>
    "cpfRg": STRING,<br>
    "phoneNumber": STRING<br>
})<br>


3- http://localhost:3000/ticket/buy = JSON(<br>
{<br>
    "flightId": STRING,<br>
    "seat": STRING,<br>
    "clientId": STRING<br>
})


4- http://localhost:3000/flight/flightTickets = JSON(<br>
{<br>
    "flightId": STRING<br>
})<br>


5- http://localhost:3000/ticket/getClientTickets = JSON(<br>
{<br>
    "clientId": STRING<br>
})<br>


6/7- http://localhost:3000/ticket/getFlightTickets = JSON(<br>
{<br>
    "flightId": STRING<br>
})<br>


Tools

Foram utilizadas as seguintes ferramentas para o desenvolvimento da API:

•	Nodejs<br>
•	ExpressJs<br>
•	MySQL<br>
•	Sequelize<br>
•	Nodemon<br>
•	MVC Architecture<br>
