# API de Games

Essa é uma API construida utilizando Express.js. Ela foi utilizada para manipular um banco de dados MongoDB, no qual armazena dados de uma loja de games.

## Endpoints

> POST /games

Esse endpoint é respónsavel por cadastrar um novo game.

Parametros:
~~~javascript
{
	"title": "Battlefield 4",
	"year": "2012",
	"price": "50",
	"category": "Ação"
}
~~~

Exemplo de respostas:
~~~javascript
[
   HTTP Status Code: 200 OK
]
~~~

> GET /games

Esse endpoint é respónsavel para pegar todos os games presentes no database.

Parametros:
~~~javascript
None
~~~

Exemplo de respostas:

~~~javascript
[
	{
		"_id": "620ac7d610540f788682441f",
		"title": "Battlefield 4",
		"year": "2012",
		"price": "50",
		"category": "Ação",
		"__v": 0
	},
	{
		"_id": "620ac7ea10540f7886824421",
		"title": "Sea of Thievs",
		"year": "2018",
		"price": "80",
		"category": "Aventura",
		"__v": 0
	}
]
~~~

> GET /games/:id

Esse endpoint é respónsavel por pegar apenas um game presente no database.

Parametros:
~~~javascript
URL = http://localhost:3000/game/620ac7d610540f788682441f
~~~

Exemplo de respostas:

~~~javascript
{
	"_id": "620ac7d610540f788682441f",
	"title": "Battlefield 4",
	"year": "2012",
	"price": "50",
	"category": "Ação",
	"__v": 0
}
~~~

> PUT /game/:id

Esse endpoint é respónsavel por atualizar um game presente no database.

Parametros:
~~~javascript
URL = http://localhost:3000/game/620ac7d610540f788682441f
~~~

~~~javascript
{
	"title": "Battlefield 4",
	"year": "2012",
	"price": "90",
	"category": "Ação",
	"__v": 0
}
~~~

Exemplo de respostas:

~~~javascript
HTTP Status Code: 200 OK
~~~

> DEL /game/:id

Esse endpoint é respónsavel por deletar um game presente no database.

Parametros:
~~~javascript
URL = http://localhost:3000/game/620ac7d610540f788682441f
~~~

Exemplo de respostas:

~~~javascript
HTTP Status Code: 200 OK
~~~


