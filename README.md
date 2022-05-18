Instruções para executar a aplicação<br>


1- Primeiramente realizar o clone do projeto em uma pasta local.<br>
2- Rodar o comando “npm install“ no terminal aberto no diretório em que o projeto está para que todas as dependências sejam instaladas.<br>
3- Inicializar o servidor PostgreSQL localmente e criar o DB (localhost) com as seguintes informações:<br>
	Nome: requestmanager<br>
    Porta: localhost 5432<br>
	Obs: Não é necessário criar as tabelas pois o próprio código estará criando.<br>
4- Após isto será necessário somente inicializar a aplicação rodando o comando “npm start“ no próprio terminal do VSCode caso esteja utilizando este editor.<br>

Routes<br>

1. Criar Usuários<br>
2. Login<br>
3. listar todos os pedidos de um usuário<br>
4. listar todos os pedidos de um usuário por data<br>


1- http://localhost:3000/user/addUser = JSON BODY(<br>
{<br>
    "name": INTEGER,<br>
    "email": STRING<br>
    "password": STRING,<br>
})<br>


2- http://localhost:3000/user/login = JSON BODY(<br>
{<br>
    "clientId": INTEGER,<br>
    "password": STRING,<br>
})<br>


3- http://localhost:3000/request/deals? = JSON PARAMS(<br>
{<br>
    "user_id": INTEGER, (Esta informação é retornada ao criar o usuário)<br>
})<br>


4- http://localhost:3000/request/dealsByDate? = JSON PARAMS(<br>
{<br>
    "user_id": INTEGER, (Esta informação é retornada ao criar o usuário)<br>
    "date": DATE (Ex: “2022-06-30 22:00:00”)<br>
})<br>



Tools<br>

Foram utilizadas as seguintes ferramentas para o desenvolvimento da API:<br>

•	Nodejs<br>
•	ExpressJs<br>
•	PostgreSQL<br>
•	Sequelize<br>
•	Nodemon<br>
•	MVC Architecture<br>
