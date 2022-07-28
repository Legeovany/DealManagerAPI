Instructions for running the application<br>


1- First clone the project into a local folder.<br>
2- Run the command “npm install“ in the terminal on the directory that the project is, to install all the dependencies.<br>
3- Initialize the PostgreSQL server locally and create the DB (localhost) with the following info:<br>
	Name: requestmanager<br>
    Port: localhost 5432<br>
	Obs: It's not necessary to create the tables because the application will create by itself.<br>
4- After this, will only be necessary to initialize the application running the command “npm start“ in the VSCode Editor terminal.<br>

Routes<br>

1. Create Users<br>
2. Login<br>
3. list all user's request<br>
4. list all user's request by date<br>


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
    "user_id": INTEGER, (This info is being returned when the user is created)<br>
    "date": DATE (Ex: “2022-06-30 22:00:00”)<br>
})<br>



Tools<br>

The following tools were utilized for the API development:<br>

•	Nodejs<br>
•	ExpressJs<br>
•	PostgreSQL<br>
•	Sequelize<br>
•	Nodemon<br>
•	MVC Architecture<br>
