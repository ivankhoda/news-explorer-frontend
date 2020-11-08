# news-explorer-frontend
Второй этап дипломной работы Яндекс Практикум - настройка окружения и верстка.
По заданию необходимо было настроить Гитхаб и Вебпак, который должен уметь:
1) Собирать проект. 
2) Деплоить сайт на GitHub Pages.
3) Установить локальный сервер для автоматического обновления.
4) Установить плагины для работы с кодом (список в package.json)
5) Сверстать проект по макету, который лежит тут: https://bit.ly/2EYiGeF.

Итак, после клонирования репозитория к себе и установки всех зависимостей, сделать сборку можно командой npm run build, команда npm run dev запустит девелоперскую сборку с хот релоудом, а npm run deploy - разместит готовую сборку на gh-pages.

Проект сверстан на основные расширения:
320px
768px
1440px

Для других расширений верстка тянется и адаптируется.

Проект сверстан на двух страницах - когда пользователь незалогинен (index.html), и когда залогинен (loggedIn.html).
На этапе верстки это реализовано через нажатие кнопки "Авторизоваться".
Нажатие кнопки "Главная" вернет на страницу index.html

Саму страницу можно найти тут: https://ivankhoda.github.io/news-explorer-frontend/index.html





