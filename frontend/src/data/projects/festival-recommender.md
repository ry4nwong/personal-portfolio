## Overview

The Festival Recommender is an intelligent chat-based assistant I’m currently building that helps users discover music festivals based on their preferences, whether it's genre, location, or favorite artists. Powered by LLM reasoning and vector search, the chatbot bridges conversational AI with structured festival data to deliver hyper-personalized recommendations.

## Initial Motivation

During my time exploring new music event listings, I found that most platforms severely lacked personalization. Much of my time would be spent manually sifting through long lists across multiple websites to find something relevant, instead of being excited for my next festival. I wanted to create a chat-based interface that could be used as a one-stop shop for curated suggestions, especially for newer fans who might not know where to start.

## Key Features

- **AI-Powered Chat Interface**: Users can describe what they like (ex. “I would like to attend a techno festival in California that is 18+”) and get tailored results
- **Hybrid Semantic Search**: Over 15,000 festivals and artists indexed using a hybrid search strategy, including semantic search and keyword matching
- **Spotify OAuth Integration**: Authenticates new users without the need to create an account
- **Metadata Scraping**: Automated daily web scraping via Selenium WebDriver with optimized selectors and multithreaded performance

## Challenges & Learnings

- Improved web scraping performance by 200% by optimizing CSS selectors and introducing multithreading