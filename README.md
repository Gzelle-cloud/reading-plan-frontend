# Reading Plan Frontend

This repository contains the frontend for the Reading Plan application, a simple app that helps users track and plan their reading journey.

## Features

- **Add Book**: Users can add a book by providing a title and selecting a category.
- **Edit Book**: Users can edit an existing book's title and category.
- **Delete Book**: Users can remove a book from the list.
- **Display Books**: The app fetch

## Installation

1. Clone the repository:
   git clone https://github.com/Gzelle-cloud/reading-plan-frontend.git
2. Navigate to the project directory:
   cd reading-plan-frontend
4. Install dependencies:
   npm install
6. Start the development server:
   npm start

## API Endpoints
The frontend interacts with the backend API to manage books:

#### GET /: Fetches all books from the backend.
#### POST /savebooks: Adds a new book with the title and category.
#### PUT /editBook: Updates an existing book by ID.
#### DELETE /deleteBook: Deletes a book by ID.

## Technologies Used
#### React.js: Frontend library for building the user interface.
#### Axios: Used to make HTTP requests to the backend API.
#### React Icons: Used for the edit and delete icons.
#### CSS: Styles for the frontend design.
