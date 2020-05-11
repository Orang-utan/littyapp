# Litty App

A webapp designed for food truck online ordering. Think Snackpass but for food trucks. As users, you can register an account, order from your favorite food truck, and pick it up using a unique pick up code. This app is built using the following technology: Django, React, Semantic UI, Webpack, Babel.

## Demos

Home Page:

![home](docs/Screenshot1.png "home")

Food Truck Menu:

![menu](docs/Screenshot2.png "menu")

## Code Structure

- `littyapp/accounts` handles authentication logic
- `littyapp/foodtrucks` handles getting, creating foodtruck logics
- `littyapp/frontend` handles frontend, only exist view logic
- `littyapp/littyapp` contains settings file for Django
- `littyapp/text` contains twilio sms text logic
- `./webpacka.config.js` compiles React code in frontend
- `./babelrc` makes React backward compatible

## API Endpoints

| Name                         | API ENDPOINTS                                             |
| ---------------------------- | --------------------------------------------------------- |
| Get all foodtrucks           | api/foodtrucks/                                           |
| Get one foodtruck            | api/foodtrucks/<str:foodtruck_id>/                        |
| Get one foodtruck's menu     | api/foodtrucks/<str:foodtruck_id>/menu/                   |
| Get one foodtruck's fooditem | api/foodtrucks/<str:foodtruck_id>/menu/<str:fooditem_id>/ |
| Log in                       | api/auth/login                                            |
| Registration                 | api/auth/register                                         |
| Get user details             | api/auth/user                                             |
| Logout / destroy token       | api/auth/logout                                           |
| Send SMS order to vendor     | api/sms/                                                  |

## Key Packages

##### First Party Packages:

UUID, dotenv

##### Third Party Packages:

Django, Django REST framework, Knox Authentication, Twilio

##### React Packages:

React, React Router, Semantic UI, Axios, Webpack, Babel

## Setting Up

##### Initialize a virtual enviroment

Windows:

```
$ python3 -m venv venv
$ venv\Scripts\activate.bat
```

Unix/MacOS:

```
$ python3 -m venv venv
$ source venv/bin/activate
```

##### Install requirements

```
$ pip3 install -r requirements.txt
$ yarn install
```

#### Run Project in Development

```
$ yarn dev
$ cd littyapp
$ python3 manage.py migrate
$ python3 manage.py runserver
```

#### Create .env file in littyapp/littyapp

```
$ TWILIO_ACCOUNT_SID=xxxxxxxxxxxxxxxx
$ TWILIO_AUTH_TOKEN=xxxxxxxxxxxxxxxx
$ TWILIO_NUMBER=xxxxxxxxxxxxxxxx
```
