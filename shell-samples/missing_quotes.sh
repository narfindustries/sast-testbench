#!/bin/bash
# Missing quotes in echo (SC2086 / SC2164)

FILE="$1"
echo Processing $FILE
cat $FILE
