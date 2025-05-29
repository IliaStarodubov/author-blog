# 📝 Авторский блог (FullStack)

🚀 **Краткое описание**:  
Современное одностраничное приложение (SPA) с полной функциональностью для публикации статей, комментариев и управления ролями пользователей. Реализовано с использованием **React + Redux Toolkit + TypeScript** и полноценного backend на **Node.js + Express + MongoDB**.

## 🔥 Особенности системы

- 🔐 **JWT-аутентификация** с безопасными `HttpOnly` cookie
- 👥 **Ролевая модель**: Admin / Moderator / Reader / Guest
- ✍️ **Полный CRUD** для статей и комментариев
- 🔍 **Умный поиск** с debounce и пагинацией
- 🌦️ **Виджет погоды** (Яндекс.Погода API)
- 🐳 **Docker-контейнеризация** MongoDB + бэкенд
- ⚙️ **Поддержка CORS и cookie-parser** для безопасного взаимодействия

## 🏗️ Архитектура системы

```mermaid
graph TD
    A[🧑 Клиент] -->|React| B[🌐 Frontend React + Vite]
    B -->|HTTP| C[🔒 Backend Node.js + Express]
    C -->|Mongoose ORM| D[(🗄 MongoDB в Docker)]
    E[🐳 Docker] --> D
    B -->|fetch| F[(🌦 API Яндекс.Погоды)]

```

## 🛠 Технологический стек

### 🖥️ Frontend

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.6-764ABC?logo=redux)
![React Router](https://img.shields.io/badge/React_Router-7.4-CA4245?logo=reactrouter)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4-3178C6?logo=typescript)
![Styled Components](https://img.shields.io/badge/Styled_Components-6.1-DB7093?logo=styledcomponents)
![React Hook Form](https://img.shields.io/badge/React_Hook_Form-7.54-EC5990?logo=reacthookform)
![Yup](https://img.shields.io/badge/Yup-1.6-4285F4)
![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?logo=vite)

### ⚙️ Backend

![Node.js](https://img.shields.io/badge/Node.js-20-339933?logo=nodedotjs)
![Express](https://img.shields.io/badge/Express-5.1-000000?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-8.14-47A248?logo=mongodb)
![Mongoose](https://img.shields.io/badge/Mongoose-8.14-880000?logo=mongoose)
![JWT](https://img.shields.io/badge/JWT-9.0-000000?logo=jsonwebtokens)
![Bcrypt](https://img.shields.io/badge/Bcrypt-6.0-003A70?logo=bcrypt)
![cookie-parser](https://img.shields.io/badge/cookie--parser-1.4.7-ff69b4)
![CORS](https://img.shields.io/badge/CORS-enabled-29B6F6)

### 🧰 Инструменты

![Docker](https://img.shields.io/badge/Docker-24.0-2496ED?logo=docker)
![ESLint](https://img.shields.io/badge/ESLint-9.21-4B32C3?logo=eslint)
![Prettier](https://img.shields.io/badge/Prettier-3.5-F7B93E?logo=prettier)
![Git](https://img.shields.io/badge/Git-2.40-F05032?logo=git)

## 🖼️ Примеры интерфейса

### 🏠 Главная страница

- Поисковая строка с автофильтрацией и debounce
- Сетка карточек статей с превью
- Пагинация (динамическая подгрузка)
- Адаптивный хедер с навигацией (в записимоти от роли)

![Главная](image-main.png)

### 📄 Статья

- Полный текст статьи с изображением
- Секция комментариев (CRUD для модераторов)
- Форма добавления комментария
- Кнопки управления для администратора

![Статья](image-post.png)

### 🛡️ Панель администратора

- Таблица пользователей
- Изменение ролей (выпадающие списки)
- Инструменты модерации

![Админка](image-admin.png)

### 🔐 Авторизация / Регистрация

- Формы с валидацией через Yup
- Обработка ошибок на сервере/клиенте
- Защищенные маршруты

![Авторизация](image-login.png)

