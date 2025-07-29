#!/bin/bash

cd backend && npm run start:dev &
cd front_end && npm run dev &

wait
