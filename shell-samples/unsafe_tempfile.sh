#!/bin/bash
# Using predictable temporary filenames (SC1090 / SC2002)

TEMP="/tmp/tempfile.txt"
echo "data" > $TEMP
cat $TEMP
rm $TEMP
