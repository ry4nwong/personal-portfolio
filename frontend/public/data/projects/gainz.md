## Overview

Gainz is a personalized workout logging platform designed for individuals who want to track their daily routines and manage their fitness data in one place. Inspired by my favorite fitness application [Hevy](https://www.hevyapp.com), this app delivers a smooth, data-driven experience designed to help users stay consistent, monitor progress, and make informed training decisions.

## Initial Motivation

After nearly four years of going to the gym consistently, I noticed that many of my peers had no structured way to track their workouts; some used scattered notes, others didn’t track at all. As someone passionate about personal fitness and software engineering, I wanted to find the bridge between these two to solve that problem.

## Key Features

- **User Profiles**: User registration and login functionalities, backed by Bcrypt for password hashing
- **Workout Logging**: Log custom exercises, reps, sets, and weights across different workout sessions
- **Persistent Data**: All user progress is securely stored and available across multiple devices
- *(COMING SOON)* **Social Feed**: Follow friends and view their workouts to stay motivated and accountable

## Challenges & Learnings

- Implemented custom GraphQL resolvers to support complex queries for workout data
- Achieved 90%+ backend test coverage using JUnit and Mockito, with JaCoCo reports tracking stability
- Authored a [blog post](https://medium.com/@rnwong2002/building-a-spring-boot-application-with-maven-and-mongodb-integration-fb2247a96aef) laying out the development of a Spring Boot application with MongoDB integration
