# project_final

## URL Deploy
- **Public** https://api.myproject.com
- **Local:** http://localhost:3000/api

## Daftar Endpoint

### 1. Authentication

- **POST** `/auth/login`
  - Deskripsi: Login user dengan email dan password.
  - Request Body:
    ```json
    {
      "email": "user@example.com",
      "password": "password123"
    }
    ```

- **POST** `/auth/register`
  - Deskripsi: Register user baru.
  - Request Body:
    ```json
    {
      "name": "Your name",
      "email": "yourname@example.com",
      "password": "password123"
    }
    ```

    
- **GET** `/auth/me`
  - Deskripsi: Detail User.
  - Bearer Token : Token
