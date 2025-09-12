#!/bin/sh
# Using bash-specific features in sh (SC2148 / SC1090)

for i in {1..5}; do   # brace expansion in /bin/sh
    echo $i
done
