# Crewmate Creator

A React application that allows users to create, view, update, and delete virtual crewmates. This project demonstrates CRUD operations using React and Supabase as the backend.

## Features

- Create new crewmates with custom names, speeds, and colors
- View all created crewmates in a gallery
- See detailed information about each crewmate
- Edit existing crewmates
- Delete crewmates
- Responsive design

## Technologies Used

- React
- React Router for navigation
- Supabase for backend services
- CSS for styling

## Setup Instructions

1. Clone the repository
2. Install dependencies with `npm install`
3. Create a Supabase account and project
4. Update the `.env` file with your Supabase URL and anon key
5. Run the development server with `npm run dev`

## Database Setup

Create a table in Supabase called `crewmates` with the following columns:

- id (UUID) - Primary key
- name (String) - The crewmate's name
- speed (Number) - The crewmate's speed
- color (String) - The crewmate's color
- created_at (Timestamp) - When the crewmate was created
