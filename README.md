# Personal Website Template
This is a personal website template, suitable for researcher and students. Django, JQuery, MySQL and Bulma CSS are used in this template.

If any question, start an issue and let everyone can reach you.

The example page is in [here]()
## Setup
### 1.MYSQL
#### 1.1 install mysql
``` bash
sudo apt install mysql-server
sudo mysql_secure_installation # select Y all the way
sudo systemctl enable mysql
sudo systemctl status mysql # check mysql is active
```
#### 1.2 intialize mysql
```sql
CREATE DATABASE 'your_database' CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'your_username'@'localhost' IDENTIFIED BY 'your_password!';
GRANT ALL PRIVILEGES ON your_database.* TO 'your_username'@'localhost';
FLUSH PRIVILEGES;
exit;
```
### 2. Django
#### 2.1 create python env 
``` bash
WEB_ENV_NAME=web_py_env
conda create -n $WEB_ENV_NAME python=3.8 -y
conda activate $WEB_ENV_NAME
pip install -U pip
pip install mysqlclient # install mysql client
pip install django # install django
django-admin --version # check django install coorect
```
#### 2.2 create django project and app
``` bash
PROJ_NAME=web_project
APP_NAME=web_main
django-admin startproject $PROJ_NAME # create project
cd $PROJ_NAME
python manage.py startapp $APP_NAME # create app
```
#### 2.3 update django databases settings
add following into your _${PROJ_NAME}/${PROJ_NAME}/settings.py_ file
``` python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'your_database',
        'USER': 'your_username',
        'PASSWORD': 'your_password',
        'HOST': 'localhost',
        'PORT': '3306',
    }
}

```
#### 2.4 runserver locally for debug
``` bash
python manage.py makemigrations
python manage.py migrate
python manage.py collectstatic
python manage.py runserver 9090

```
visit http://127.0.0.1:9090/ to check your website

### 3 Refresh your content
The template uses html for controlling the content and css for controlling the style. 
The `base.html`, `project/project_base.html` and `navbar_section.html` files contain the template html code for the website's main pages and project pages. If you want to change the base style of the website, feel free to edit them.
If you only want to edit the websites contents, change other `*.html` file. It contains different HTML "building blocks", use whichever ones you need and comment out the rest. If your do not want certain blocks, you can leaveit empty like `{% block a %}{% endblock %}` in the `*.html` file. 

## Acknowledgments
Parts of this project page were adopted from the [Academic Project Page Template](https://github.com/eliahuhorwitz/Academic-project-page-template) page.

## Website License
<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.


