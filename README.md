## Server API documentation

Запуск: `npm run build-start`

URL: http://localhost:3000/

***

### /posts
>REQUEST: `type: get` <br />
>RESPONSE `json object: []`

    {
        "_id": "5ded53b7ceab784ad012612c",
        "title": "YOYOYOYOOYOYYO!",
        "text": "hih ihihihhiihihhi ",
        "__v": 0
    }

***

### /posts
>REQUEST: `type: post` <br />

    {
      "title": "title number 3 new You!",
      "text": "hih ihihihhiihihhi "
    }

>RESPONSE `json object`

***

### /posts/id
>REQUEST: `type: get` <br />
>RESPONSE `json object: {}`

    {
        "_id": "5ded53b7ceab784ad012612c",
        "title": "YOYOYOYOOYOYYO!",
        "text": "hih ihihihhiihihhi ",
        "__v": 0
    }
    
***
    
### /posts/id
>REQUEST: `type: delete` <br />
RESPONSE `json object`

***

### /posts/id
>REQUEST: `type: put` <br />

    {
      "title": "YOYOYOYOOYOYYO!"
    } 
       
or

    {
      "title": "YOYOYOYOOYOYYO!",
      "text": "hih ihihihhiihihhi"
    }
 
>RESPONSE `json object`

***

## Использованные технологии в проекте

* NodeJS (express, bodyParser)
* MongoDB (mongoose, Schema)
