# Категории



### Получение категорий
метод: get\
http://localhost:5000/api/kategories/

### Редактирование категории 
метод: put\
http://localhost:5000/api/kategorie/update/id

### Поиск категории по id
метод: get\
http://localhost:5000/api/kategorie/id

### Удаление категории по id
метод: delete\
http://localhost:5000/api/kategorie/id

### Добавление категории
метод: post\
http://localhost:5000/api/kategorie/create



# Товары


### Получение всех товаров 
метод: get\
http://localhost:5000/api/product

ответ:
[
    {
        "id": 2,
        "name_prod": "Наушники",
        "price": 3000,
        "image": "https://via.placeholder.com/600/d32776",
        "count": 12,
        "color": "black",
        "id_podkat": null,
        "id_stock": null,
        "id_br": null,
        "createdAt": "2021-06-03T21:57:47.757Z",
        "updatedAt": "2021-06-03T21:57:47.757Z"
    }
]

### Поиск продукта по id
метод: get\
http://localhost:5000/api/product/id

### Удаление продукта по id
метод: delete\
http://localhost:5000/api/product/id

### Добавление продукта
метод: post\
http://localhost:5000/api/product/create

### Редактирование продукта
метод: put\
http://localhost:5000/api/product/update/id


# Акции


### Получение всех акций
метод: get\
http://localhost:5000/api/stock/

### Поиск акции по id
метод: get\
http://localhost:5000/api/stock/id

### Удаление акции по id
метод: delete\
http://localhost:5000/api/stock/id

### Добавление акции
метод: post\
http://localhost:5000/api/stock/create

### Редактирование акции
метод: put\
http://localhost:5000/api/stock/update/id


# Сотрудники


### Получение всех сотрудников
метод: get\
http://localhost:5000/api/sotrud/

### Поиск сотрудника по id
метод: get\
http://localhost:5000/api/sotrud/id

### Удаление сотрудника по id
метод: delete\
http://localhost:5000/api/sotrud/id

### Добавление сотрудника
метод: post\
http://localhost:5000/api/sotrud/create

### Редактирование сотрудника
метод: put\
http://localhost:5000/api/sotrud/update/id


# Подкатегории


### Получение подкатегорий
метод: get\
http://localhost:5000/api/podkategoriya/

### Поиск подкатегории по id
метод: get\
http://localhost:5000/api/podkategoriya/id

### Удаление подкатегории по id
метод: delete\
http://localhost:5000/api/podkategoriya/id

### Добавление подкатегории
метод: post\
http://localhost:5000/api/podkategoriya/create

### Редактирование подкатегории
метод: put\
http://localhost:5000/api/podkategoriya/update/id


# Бренд


### Получение брендов
метод: get\
http://localhost:5000/api/brand/

### Поиск бренда по id
метод: get\
http://localhost:5000/api/brand/id

### Удаление бренда по id
метод: delete\
http://localhost:5000/api/brand/id

### Добавление бренда
метод: post\
http://localhost:5000/api/brand/create

### Редактирование бренда
метод: put\
http://localhost:5000/api/brand/update/id


# Услуги


### Получение услуг
метод: get\
endpoint: /service

### Поиск услуги по id
метод: get\
endpoint: /service/id

### Удаление услуги по id
метод: delete
endpoint: /service/id

### Добавление услуги
метод: post
endpoint: /service/create

### Редактирование услуги
метод: put
endpoint: /service/update/id


# Работа


### Получение работ
метод: get\
endpoint: /work

### Поиск работы по id
метод: get\
endpoint: /work/id

### Удаление работы по id
метод: delete\
endpoint: /work/id

### Добавление работы
метод: post\
endpoint: /work/create

### Редактирование работы
метод: put\
endpoint: /work/update/id


# Регистрация


### Регистрация юзера
метод: post\
endpoint: /auth/register

### Регистрация админа
метод: post\
endpoint: /auth/register_admin


### Авторизация
метод: post\
endpoint: /auth/login


# Обратная связь
### Просмотр 
метод:get\
endpoint: /feedback\

### Создание 
метод:post\
endpoint: /feedback/create\
ожидаемые поля:
{
name: STRING,\
email: STRING,\
msg: STRING\
}

### Поиск конкретной обр связи по id
метод:get\
endpoint: /feedback\:id

### Поиск обр связи

метод:get\
endpoint: /feedback\