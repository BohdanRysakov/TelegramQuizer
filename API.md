### Auth

- **POST** `/auth/sign-in` - запрос на логин пользователя
    
    - ожидает получить
    
    ```
    {
        "InitData": строка InitData из тг 
    }
    ```
    
    - возвращает
    
    ```jsx
    {
        "accessToken": string,
        "userData": {
            "telegram_id": int,
            "name": string,
            "avatar_url": string,
            "points": int,
            "global_rank": int
        }
    }
    ```
    

### Daily Bonus

- **GET** `/api/daily-bonus` - Получение информации о ежедневном бонусе
    - Проверка - есть ли записть о бонусах, если нет, то надо ее создать
    - Возвращает текущий бонусный день (счетчик) + доступен ли новый бонус (прошло ли больше 24 часов) + дни и цены донусов (”Authorization”: accessToken)

```
{
    "current_day": 0,
    "is_available": true, - доступен ли новый бонус
    "bonuses": [
        {
            "day": 1,
            "points": 100
        },
        {
            "day": 2,
            "points": 150
        },
        {
            "day": 3,
            "points": 200
        }
    ]
}
```

- **POST** `/api/daily-bonus` - Получение ежедневного бонуса
    
    - проверяет - есть ли запись о бонусах, если нет, то надо ее создать
    - добавляет +1 день бонуса и + points в (all, month, week) + записывает транзакцию в историю
    - возвращает обновленные данные бонуса или ошибку
    - ответ
    
    ```
    {
        "claimed": 100
    }
    ```


### Таблица лидеров

- **GET** `/api/leaderboard/week` - Получение недельной таблицы лидеров
- ответ - список лидеров

```
{
    "leaderbord": [
        {
            "telegram_id": 522757046,
            "user_name": "💎",
            "avatar_url": "",
            "points": 300
        },
        {
            "telegram_id": 6251790581,
            "user_name": "Boba",
            "avatar_url": "",
            "points": 100
        }
    
}
```

- **GET** `/api/leaderboard/all` - Получение таблицы лидеров за все время
- ответ - список лидеров

```
{
    "leaderbord": [
        {
            "telegram_id": 522757046,
            "user_name": "💎",
            "avatar_url": "",
            "points": 300
        },
        {
            "telegram_id": 6251790581,
            "user_name": "Boba",
            "avatar_url": "",
            "points": 100
        }
    ]
}
```

### Subject Menu

- **GET** `/api/subjects - Получение информации о списке предметов
    - Возвращает список предметов и прогресс пользователя в решенные и всего задач

```
[
	{
		"id": 1,
		"subject": "Math",
		"solvedTasks": 5,
		"totalTasks": 1202
	},
	{
		"id": 2,
		"subject": "History",
		"solvedTasks": 3,
		"totalTasks": 608
	}
]
```

- **GET** `/api/subjects/{{id}} - Получение информации о списке задач предмета
    - Возвращает список задач предмета с статусами решено/нет
    - status 0 - not solved, 1 - solved

```
[
	{
		"id": 1,
		"task": "Math Task 1",
		"status": 1,
	},
	{
		"id": 2,
		"task": "Math Task 2",
		"status": 0
	},
	{
		"id": 3,
		"task": "Math Task 3",
		"status": 0
	}
]
```

- **GET** `/api/subjects/task/{{id}} - Получение информации о задаче полностью
    - Возвращает список задач предмета с статусами решено/нет
    - status 0 - not solved, 1 - solved, 2- wrong

```
{
	"isSolved": false,
	"imgUrl": "",

//TOBE DISCUSSED
//OPTIONS WRITTEN BY HANDS OR JUST IMAGE

	numberOfAnswers: 4,

	OR

	answers: [Possible answers array]

}
```

- **POST** `/api/subjects/task/{{id}} - Получение информации о задаче полностью
    - Возвращает список задач предмета с статусами решено/нет
    - status 0 - not solved, 1 - solved
	**SEND DATA**
```
{
	"answer": "A"
}
```

	 **RETURN**
```
{
	"isSolved": false,
	imgUrl: "",
//TOBE DISCUSSED
OPTIONS WRITTEN BY HANDS OR JUST IMAGE

}
```


