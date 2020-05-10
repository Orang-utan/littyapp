# Litty App

A food ordering app.

## Demos

Home Page:

![home](docs/Screenshot1.png "home")

Food Truck Menu:

![mennu](docs/Menu.png "menu")

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
