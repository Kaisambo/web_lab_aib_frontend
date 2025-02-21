### Задание №1. Исследование заголовков и тела обычных запросов и их ответов.

Ответы на вопросы:

```shell
1. Что означает каждый из этих заголовков?

Request URL - запрашиваемый URL адрес. 
Request Method - метод запроса
Status Code: 200 - это стандартный код статуса «Ok» для успешного запроса HTTP.
Remote Address 77.88.55.242:443 - это адрес, который получит клиент при подключении к PPP-серверу.
Referrer Policy strict-origin-when-cross-origin - Настраивает уровень детализации для включения в заголовок Referer при уходе со страницы
content-type text/html; charset=UTF-8 - тип контента, в данном случае текст/html страница, также указана кодировка символов
cache-control no-cache,no-store,max-age=0,must-revalidate
cookie yandex_login=kaisambo; i=Q0Ul6nMVqz6e/oQhEU5SYBU6ld1ONoihJc1h4b67fRfCQBN2eZnqdwJXoEWgT46P6q8CcV+uSef5yDn2arr9AgNwv3U=; - небольшой фрагмент данных, который отправляется сервером и хранится на компьютере пользователя.
user-agent Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 YaBrowser/23.7.5.704 Yowser/2.5 Safari/537.36 - 
referer - В протоколе HTTP один из заголовков запроса клиента. Содержит URL источника запроса. 

2. Из каких частей состоит Remote Address?

Пример: 77.88.55.242:443

Где:
77.88.55.242 - IP адрес.
443 - Имя хоста. 

3. Что означает порт подключения? 

Порт подключения - это уникальный номер конечной точки соединения. 

4. На какие секции разделены все заголовки? Какой смысл у каждой секции?

General: Общие заголовки. Заголовки, встречающиеся в каждом запросе.

Response Headers: Заголовки ответа. В них содержится инфформация о параметрах ответа сервиса.

Request Headers: Заголовки запроса. В них содержится информация о параметрах запроса к сервису.

5. Какие заголовки повторяются в нескольких секциях? Какой в этом смысл?

Повторяющихся в нескольких секциях заголовков нет.

6. Что из себя представляет тело ответа?

Тело ответа представляет из себя код на языке HTML, содержащий стили, скрипты и функции этой страницы.
```

### Задание №2. Исследование указывающих ответов сервера.

Ответы на вопросы:

```shell
1. Из-за чего произошло изменение адреса в адресной строке? Какие заголовки в этом поучаствовали и как?

Location: https://rgups.ru/ - данный заголовок указал правильный путь на сайт.

2. Адрес был изменён в исходном запросе или потребовались дополнительные запросы, если были дополнительные запросы, то сколько?

Для изменения адреса потребовался один дополнительный запрос. 

3. Какой статус ответа имеет первоначальный запрос?

Первоначальный запрос имеет статус ответа: Status Code: 301 Moved Permanently 
```

### Задание №3. Исследование получения и передачи cookie.

Ответы на вопросы:

```shell
1. Перечислите название этих параметров и формат данных в них.

yandex_login - текстовый
i - текстовый
yandexuid - числовой
s_gdpr - числовой
is_gdpr_b - текстовый
gdpr - числовой
_ym_uid - числовой
my - текстовый
sae - текстовый
yandex_gid - числовой
_ym_isad - числовой
Session_id - текстовый
ys - текстовый
mda2_beacon - числовой
yandex_csyr - числовой
_ym_d - числовой
yp - текстовый
L - текстовый
bh - текстовый
sso_status - текстовый
_yasc - текстовый

2. Как можно удобно просмотреть все cookie, используемые на странице? Что означают их параметры Name, Value, Domain, Path и Expires?

Для удобного изучения всех cookie, используемых на странице в инструментах разработчика необходимо перейти на вкладку Network -> Имя_запроса -> Cookie.

Name - наименование cookie  
Value - значенияе, то есть то, что именно хранится в cookie
Domain - доменное имя страницы, на которой используется cookie
Path - путь
Expires - дата, когда cookie станет невалидным

3. Как просмотреть все cookie связанные с текущим (просматриваемым) сайтом?

В панели инструменты разработчика необходимо перейти на вкладку Network -> Имя_запроса -> Cookie.

4. Опишите своими словами как вы понимаете суть и назначение cookie?

Cookie - это некоторые данные, которые хранятся на локальном компьютере и используются для хранения информации о посещении сайта.
```

### Задание №4. Исследование построения документов и сопутствующих запросов.

Ответы на вопросы:

```shell
1. Что такое DOM? — Опишите своими словами

DOM - это структура страницы, которая показывает связь объектов между собой.

2. Может ли итоговый документ отличаться от тела ответа, полученного от сервера? Если да, то по каким причинам это может происходить?

Да, итоговый документ может отличаться от тела ответа, если html-код некорректный или если скрипты меняют dom. С корректным html-кодом также может отличаться — например, браузер может автоматически добавлять head, body или tbody если они почему-то отсутствуют в исходном html-коде 

3. Почему если вы сделали всего один запрос, в списке огромное количество запросов и ответов? Что они из себя представляют и на каком основании браузер их делает?

Множество запросов появляется из-за того, что браузер "подтягивает" необходимые данной странице изображения, скрипты и прочие необходимые составляющие элементы страницы.
```
### Задание №5. Определение параметров запроса.

Ответы на вопросы: 

```shell 
1. Запрос к какому эндпоинту необходимо выполнить для получения вашего расписания

Необходимый эндпоинт - https://www.rgups.ru/ajax/schedule.php

2. Что содержится в теле ответа?

В теле ответа содержится php файл в котором прописана информация о расписании.

3. Какого типа запрос вы выполнили?

Мы выполнили запроса типа POST.

4. Какие данные вы использовали для получения расписания?

Для получения расписания мы использовали следующие данные, находящиеся в разделе Payload: action: timetable
fac-id: 1
course-id:3
group-id: 26463
edu-type: internal
```