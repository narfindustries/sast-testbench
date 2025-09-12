#!/bin/bash
# Using backticks instead of $(...) (SC2006)

FILES=`ls *.txt`
echo $FILES
