# Chat App

## Table of Contents

- [General Info](#general-information)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Project Status](#project-status)
- [Issues](#issues)

## General Information

I made this chat app to test my skills with authentication and
start work with a database. Turns out the database using Supabase
was the easier part. Auth using NextAuth was not as simple.
Excellent lesson and learned a ton.

Design wise, I was going for a Discord/WhatsApp combo. You can add
a new thread on the left side and add your own messages in each
thread.

## Technologies Used

- Next.js v12.3.0
- React Timeago v7.1.0
- Supabase JS v1.35.6

## Features

- VERY elemntary sign in/sign out process
- Timestamps for individual chats
- Ability to create channels and chats that sync to database

## Project Status

Version 1: _complete as of 10/04/22_

## Issues

- Authentication doesn't actually work, need to implement something simpler like Supabase Auth over NextAuth
