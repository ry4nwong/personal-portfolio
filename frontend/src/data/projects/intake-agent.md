## Overview

This is an implementation of a voice enabled AI agent for patient intake. It is equipped to collect patient information (name, birthdate, address, etc.) and schedule appointments with an available doctor.

## Initial Motivation

I wanted to explore how voice AI agents can be used to power real-time, conversational experiences. Healthcare stood out as the ideal use case; it involves structured, repetitive phone interactions that are perfectly suited for automation. This project gave me a hands-on opportunity to test out voice-driven workflows in a high impact area like patient intake.

## How it Works

- Phone call hits `/voice` webhook from Twilio
- Audio is streamed to WebSocket `/ws`
- Pipecat pipeline handles incoming speech (Deepgram), flow logic (OpenAI + `FlowConfig`), and returns a response (Eleven Labs)
- Address is validated in real time with Google Maps during phone call
- Confirmation email is sent with SMTP

## Key Features

- **Voice-driven intake**: Powered by real-time speech-to-text (`Deepgram`) and text-to-speech (`ElevenLabs`)
- **Structured flow**: Defined in `Pipecat` Flow with OpenAI `GPT-4o` for natural conversation logic
- **Address validation**: Using the `Google Maps API`, with re-prompting if parts are missing
- **Confirmation email**: Sent after the call with collected details and appointment info
- **WebSocket-based audio streaming**: Done via `FastAPI`, allows for real-time audio interaction with public callers
