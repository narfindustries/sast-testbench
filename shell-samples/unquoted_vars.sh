#!/bin/bash
# Using unquoted variables (SC2086 / SC2164)

DIR=$1
cd $DIR       # unquoted, could break if DIR has spaces
ls $DIR       # unquoted, same issue
