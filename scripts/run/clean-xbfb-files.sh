#!/bin/bash

#PURPOSE: CLEAN XVFB FILES BETWEEN EXECUTIONS

echo $'CLEAR FILES INIT ===================='

deleteFiles() {
FILE=$1
if test -f "$FILE"; then
    rm -f "$FILE"
    echo "$FILE was deleted"
else 
    echo "$FILE dont exist"
fi
}

deleteFiles "../../tmp/.X99-lock"
deleteFiles "../../tmp/.X11-unix"

echo $'CLEAR FILES END =====================\n'