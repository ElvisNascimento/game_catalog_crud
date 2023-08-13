
# Back-end Catalogo de Jogos

Nesta API Rest eu criei um CRUD para cadastro de games,
onde cada game tem as seguintes informações.




## JSON
```
{
"nome": "Call of Duty Ghost",
“descricao”: “Welcome to Call of Duty: Ghosts”
"dataLancamento": "2013-05-01",
"website": “https://www.callofduty.com/br/pt”
“desenvolvedor”: "Activision",
“genero”: “FPS”
“urlCapa”: “https://upload.wikimedia.org/Call_of_duty_ghosts_box_art.jpg”
“consoles”: [
              { codigo: 1 },
              { codigo: 2 },
            ]
}
```

## Documentação da API

#### Retorna todos os games

```http
  GET /api/games
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `name` | `string` | name. A chave da sua API |

#### Retorna um item

```http
  GET /api/games/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | id. O ID do item que você quer |



## Aprendizados

Aqui foi minha primeira vez utilizando um framework para Back-end ( NestJs ), tambem utilizandoas boas praticas com TypeScript. Aprendi a utilizar recursos como Modulos,Services,Repository,Migrations,Decorators entre outros recursos... Foi bem desafiador construir essa Api por mais que com NestJs ja facilite muito a criação.
