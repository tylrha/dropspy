#!/bin/bash

#PURPOSE: CLEAN XVFB FILES BETWEEN EXECUTIONS

echo $'CLEAR FILES INIT ===================='

deleteFile() {
  FILE=$1
  if test -f "$FILE"; then
    rm -f "$FILE"
    echo "$FILE was deleted"
  else
    echo "$FILE dont exist"
  fi
}

deleteFile "../../tmp/.X99-lock"
deleteFile "../../tmp/.X11-unix"

echo $'CLEAR FILES END =====================\n'
