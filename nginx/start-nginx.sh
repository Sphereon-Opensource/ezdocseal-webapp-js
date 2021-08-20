#!/bin/bash

export DOLLAR='$'
envsubst <"/bootstrap/nginx.conf.template" >"/etc/nginx/conf.d/default.conf"
cat /etc/nginx/conf.d/default.conf
nginx -g 'daemon off;'
