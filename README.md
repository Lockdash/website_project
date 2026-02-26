<h2> Учебный проект: деплой контейнера со статическим сайтом на Ubuntu 22.04</h2>

<p>Для деплоя используются Docker, docker-compose и Ansible playbook</p>

<h3>Структура</h3>
1. website - директория с файлами сайта; </br>
2. Dockerfile - файл для сборки образа; </br>
3. docker-compose.yml - файл с конфигурацией сборки и запуска; </br>
4. playbook.yml - плэйбук для подготовки сервера и деплоя. </br>

<h3>Алгоритм</h3>

- Сайт расположен в контейнере на основе образа Nginx; </br>
- Docker-compose осуществляет сборку и развертывание образа; </br>
- Ansible используется для автоматизации процесса. </br>

<h3>Особенности</h3>
- Кастомная сеть с фиксированным IP-адресом (10.0.0.0/24); </br>
- Именованный том как альтернативный способ получения логов; </br>
- Проверка необходимых директорий перед деплоем; </br>
- Ansible-плэйбук для подготовки сервера и запуска деплоя (установка зависимостей, проверка директорий, загрузка репозитория). </br>

<h3>Запуск</h3>

1. Склонируйте репозиторий в удобную для вас директорию
   ```
   git clone https://github.com/Lockdash/website_project.git
   ```
2. Перейдите в скачанный репозиторий
   ```
   cd website_project
   ```
3. Запустите плэйбук, заменив ip-адрес целевого сервера
   ```
   ansible-playbook -i "192.168.56.100," playbook.yml
   ```

<h3>Скриншоты</h3>

<h5>Главная страница сайта </h5>

<img width="1437" height="785" alt="image" src="https://github.com/user-attachments/assets/6254d8bc-6d67-460b-9687-e6a3cd402e0e" />

<h5>Деплой через Ansible</h5>

<img width="1901" height="626" alt="image" src="https://github.com/user-attachments/assets/9e416071-2d70-4e85-a0e9-41cf166ac11d" />

<h5>Запущенный контейнер:</h5>

<img width="799" height="90" alt="image" src="https://github.com/user-attachments/assets/b1bb86d2-eb72-4df2-ab64-cbaa8e7e44ea" />


