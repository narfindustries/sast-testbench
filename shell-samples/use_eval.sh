#!/bin/bash
# Using eval (SC2046 / SC2059)

CMD="ls -l"
eval $CMD     # eval of untrusted string
