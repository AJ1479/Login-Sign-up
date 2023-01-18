
# Login-Sign-up

A project demonstrating the Login and Sign-up flow


## Features

- Basic Login and Sign-up webpages written in EJS
- MongoDB database integration
- Login sessions and password salting and hashing


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file


`MONGO_URL`

`SESSION_SECRET`


## Deployment

To deploy this project, first install packages using 

```bash
  npm i
```

Then start the server with 

```bash
  npm start
```

ESLint code formatting available through 

```bash
npm run lint
```


## API Reference

#### Login

```
  GET /login
```

Returns the webpage to login from 

```
  POST /login
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | username |
| `pass` | `string` | user password |

#### Sign-up

```
  GET /signup
```
Returns the webpage to Sign-up

```
  POST /signup
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | username |
| `pass` | `string` | user password |
| `email` | `string` | user email |


#### Logout

```
  GET /logout
```
