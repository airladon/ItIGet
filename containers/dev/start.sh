#!/usr/bin/env sh
if [ $1 ];
then
  pipenv run $1
else
  pipenv shell
fi

# /bin/bash
# if [ $1 ];
# then
#   pipenv run $1
# else
#   pipenv shell
# fi
