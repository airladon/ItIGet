# ItIGet

ItIGet web app.

# Containerized Development Environment Setup

### Setup
* Install Docker
* `git clone https://github.com/airladon/itiget/`
* Navigate to project directory

### Setup local environment variables for app emails, database, flask and heroku deployment
#### Database
The environment variable `DATABASE_URL` defines which database option to use.

* `unset DATABASE_URL` or DATABASE_URL not defined: local SQLite3 instance
* `export DATABASE_URL=postgresql://postgres@host.docker.internal/<local_db_name>` a local postgres database
* ```export DATABASE_URL=`heroku config --app=itgetitest | grep DATABASE_URL | sed 's/DATABASE_URL: *//'` ```


This is only needed for running locally.

#### Email
The environment variables `MAIL_PASSWORD`, `MAIL_SERVER`, `MAIL_SENDER` and `MAIL_USERNAME` control where to send emails from (emails are used for example in resetting passwords, or creating accounts).

If they are not set, then app will not try to send emails.

This is only needed for running locally.

#### Flask
If you want to run flask or flask database migrations locally and not in a container, then you need the flask environment variable:

`FLASK_APP=app/my_app.py`

#### Heroku deployment
If deploying the app to HEROKU, then the `HEROKU_TOKEN` environment variable needs to be set. The variable can be set by using:

```export HEROKU_TOKEN=`heroku auth:token` ```

This is only needed if deploying a build from the local machine.

### Start interactive dev environment
A docker container can be used to do lint and type checking, and tests. To start the container
* `./startenv dev`

This will bring up a prompt which is a python virtual environment, within a bash shell session within the container.

From here you can:
* Perform type and linting checks:
  * Javascript:
    * `flow`
    * `npm run lint`
  * CSS:
    * `npm run css`
  * Python:
    * `flake8`

* Perform unit testing:
  * Javascript:
    * `jest`
  * Python:
    * `pytest`

* Package Javascript files:
  * `npm run webpack -- --env.mode=dev` or `webpack`
    * similar to `./build.sh dev` below
  * `npm run webpack -- --env.mode=stage`
    * similar to `./build.sh stage` below
  * `npm run webpack -- --env.mode=prod` or `npm run build`
    * similar to `./build.sh prod` below

* Run flask:
  * `flask run --host=0.0.0.0`
    * Can be accessed through a browser at `localhost:5002`
    * You would only do this for deep debugging purposes, generally running the `dev-server` container (below) is sufficent.

### Run a local dev server of web app
`./startenv dev-server`

Automatic environment that hosts app at `localhost:5003`
  * Automatically rebuilds and rehosts app each time a source file is changed
  * Browser cache might need to be cleared each time
    * Safari: CMD+OPT+e, then CMD+r
    * Chrome: Hold click the refresh icon and select `Empty Cache and Reload` (only works in developer mode)
  * Uses localally built react js files


### Run a local Stage server of web app
`./startenv stage`

Automatic environment that runs flask and hosts app at `localhost:5001`
  * Container has no npm packages installed, and only the python packages needed for production.
  * Can see flask requests and responses
  * Uses development versions of react from CDN
  * Should run `./build.sh stage` locally, or `webpack --env.mod=stage` in the dev container first

### Run a local Production server of web app
`./startenv prod`
Automatic environment that runs nginx and hosts app at `localhost:5000`
  * Container has no npm packages installed, and only the python packages needed for production.  
  * Uses minified production versions of react from CDN
  * Should run `./build.sh prod` locally, or `webpack --env.mod=prod` in the dev container first to build the needed js files.


# Local Development Environment

### Database management

This is best done locally outside of a container. You will need to have:

* Started python virtual environment (`source env/bin/activate`)
* Installed all python packages (`pip install -r requirements.txt`)
* Setup the flask environment variable (`export FLASK_APP=app/my_app.py`)
* Installed Heroku CLI if you want to manage a heroku database
* Installed postgres.app locally if you want to manage a local postgres database

#### Initialize migration management
If you need to initialize a migration

`flask db init`

This will create a `migrations` directory in the project root.

This only needs to be done once, or after the migrations directory has been removed as you wanted to start afresh.

#### Migrate app changes to database
`flask db migrate -m "migration message"`

#### Select the database you want to upgrade

For SQLite3 local database use `unset DATABASE_URL`

For postgres local use: `export DATABASE_URL=postgresql://localhost/thisiget_local"`

For Heroku postgres database use: export DATABASE_URL=`heroku config --app=itgetitest | grep DATABASE_URL | sed 's/DATABASE_URL: *//'`

You can only use the Heroku database if you have the Heroku CLI installed and logged in.

#### Upgrade the database to a new migration
`Flask db upgrade`

#### Check the database

For Sqlite3, use a database viewing app like `DB Browser for SQLite` and load `app/app/app.db` file.

For postgres local:
* `psql`
* `\c <DATABASE_NAME>` to select database of interest
* `\dt` to show tables
* `SELECT * FROM users` to show all user records

For Heroku Postgres:
* `heroku pg:psql --app=itgeti`
* Won't need to select database, so can go straight to looking at tables

#### Push local database to Heroku
Push up data from local database to Heroku.

First get the heroku database name using:
`heroku addons --app=<HEROKU_APP_NAME>`

Local database would only exist if postgres.app is installed and server running.

Push local DB data up to Heroku.

`heroku pg:push postgresql://localhost/<LOCAL_DB_NAME> <HEROKU_DB_NAME> --app=<HEROKU_APP_NAME>`

e.g.
`heroku pg:push postgresql://localhost/thisiget_local postgresql-lively-27815 --app=itgetitest`


#### Pull Heroku DB data to local
`heroku pg:pull <HEROKU_DB_NAME> <LOCAL_DB_NAME> --app <HEROKU_APP_NAME>`
`heroku pg:pull postgresql-lively-27815 from_heroku --app itgetitest`


#### Local database manual manipulation
`psql postgres`

```
DROP DATABASE thisiget_local;
CREATE DATABASE thisiget_local;
\c thisiget_local
```

### Python Packages

Setting up local node and python packages can be useful for editors that use them for showing lint and type errors, and for flask database migrations. They can also be used to run the same commands as in the containerized development environment, but using the container is potentially cleaner and completely independent of the local system's global packages.

Start in the project directory.

### Install Node Packages
Local node packages are used mostly by the editor for linting and type checking.

They can also be used to run lint and type checks from the command line, it is recommended to use the docker containers for this (see first section on containerized development environment).

To install packages, `package.json` and `package-lock.json` files are included, so just run: 

`npm install`

#### How to Update Node Packages for the project
* Create branch
* Update the version numbers in the package.json file
* `rm -rf node_modules`
* `npm install`
* Run dev container and confirm all lint and type checks, and tests pass
* Do a test build to local
* If all passes, commit and pull request


### Install Python and Packages
#### Install PyEnv and Python 3.7.1 (if not already installed on local machine)
* Install pyenv
  * `brew install pyenv`
* Add pyenv to shell rc file
  * `echo -e 'if command -v pyenv 1>/dev/null 2>&1; then\n  eval "$(pyenv init -)"\nfi' >> ~/.zshrc`
* Run shell rc file to take effect
  * `source ~/.zshrc`
* Install python version of interest
  * `pyenv install 3.7.1`
* Set python version as default if wanted (but not needed)
* `pyenv global 3.7.1 3.6.6 2.7.14 system`

>> If pyenv install doesn't work because of zlib failure, do this:
`xcode-select --install`

>> If it still doesn't work, then do this
`sudo installer -pkg /Library/Developer/CommandLineTools/Packages/macOS_SDK_headers_for_macOS_10.14.pkg -target /`

#### PipEnv
##### Install PipEnv (if not already installed on local machine)
* `brew install pipenv`

##### Setup virtual environment and install packages
* `pipenv --python 3.7.1`
* `pipenv shell`
* `pipenv install -d`

##### Update packages
This is only if python packages need to be updated. This will update both production and dev packages.

To see which packages are out of date:
`pipenv update --outdated`

Update version numbers in Pipfile

`pipenv install -d`

If Pipfile.lock is out of date, then use this to bring it up to date.
`pipenv lock`

#### Virtual env
`python3 -m venv env`
`source env/bin/activate`
`pip install -r requirements.txt`
Start sublime after starting the virtual environment


#### Update python version
Change python version number in
* containers/Dockerfile_dev
* containers/Dockerfile_stage
* containers/Dockerfile_prod
* Pipfile

Locally install the required version of python
`pyenv install 3.7.2`

Recreate the virtual environment in project folder
`pipenv --python 3.7.2`

Lock the Pipfile with new python version requirement
`pipenv lock`


# Building and Deploy to Test Site
* `./build.sh dev` - Lint, test and build app where:
  * JS is not minified
  * React is in development mode
* `./build.sh stage` - Lint, test and build app where:
  * JS is minified
  * JS source maps are included
  * React is in production mode
* `./build.sh prod` - Lint, test and build app where:
  * JS is minified
  * JS source maps are not included
  * React is in production mode
  * This same script is run in CI and deployment
* `./build.sh prod deploy test` - Lint, test, build and deploy app where:
  * JS is minified
  * JS source maps are not included
  * React is in production mode
  * This same script is run in CI and deployment
  * Deploys website to test site.


# Work flow

An example contribution work flow to lesson content (just javascript and scss/css) is:
* `git clone https://github.com/airladon/itiget/`
* Create branch
* Host local dev-server 
  `./start_env.sh dev-server`
* In another shell window start interactive dev container
  `./start_env.sh dev`
* Modify lesson content
* Observe result on dev-server `localhost:5003`
* Check javascript and css changes conform to linting, type checking and tests. In the dev container run:
  * `flow`
  * `npm run lint`
  * `npm run css`
  * `jest`
* If all looks good, try a test build
  * `./build.sh prod deploy test`
* If the test site looks good, create a pull request.

# Setting up port forwarding:
If you want to access your local dev server from a device on your LAN, then you need to setup poot forwarding.

forward port external 4000 to local 5000
`echo "
rdr pass inet proto tcp from any to any port 4000 -> 127.0.0.1 port 5003
" | sudo pfctl -ef -`

To stop port forwarding:
`sudo pfctl -F all -f /etc/pf.conf`

To see all current rules:
`sudo pfctl -s nat`


# Update Table

### Simple, adding or changing columns
* Go to project directory
* `export FLASK_APP=app/my_app.py`
* `flask db migrate`
* `flask db upgrade`

### Removing columns
SQLite doesn't allow dropping of columns with ALTER TABLE. Either recreate table, or copy table

e.g. removing salt from username table:
CREATE TABLE new_user(
 id INTEGER PRIMARY KEY,
 username TEXT,
 email TEXT,
 password_hash TEXT);

INSERT INTO new_user SELECT id, username, email, password_hash FROM user

DROP TABLE IF EXISTS user

ALTER TABLE new_user RENAME TO user


Python development:
----------------------
Database:                   DATABASE_URL
  SQLite3                   os.path.join(basedir, 'app.db')
  Postgres local            postgresql://tig@host.docker.internal/thisiget_local
  Postgres-dev on heroku    
  Postgres on heroku

Email:                      
  local
  noreply@thisiget

Data from local to heroku db

Get database link
`heroku addons`

Push up data
`heroku pg:push postgresql://localhost/thisiget_local postgresql-lively-27815 --app=itgetitest`

Log into db and check tables, data
`heroku pg:psql --app=itgetitest`
`\dt`
`SELECT * FROM users;`

Get data from heroku db
`heroku pg:pull postgresql-lively-27815 from_heroku --app itgetitest`
