# The Social Media Frontend

This repository contains the frontend code for "The Social Media" application. It is built using ReactJS, HTML, and CSS, with state management handled by Redux. Material UI is used as the design system for consistent and visually appealing components. The frontend connects to a Java backend for data retrieval and manipulation. The app also utilizes various libraries and tools such as lodash for utilities and react-router for page routing.

## Features

- User Authentication: 
  - Users can sign in with their credentials to access the application.
  - Protected routes ensure that only signed-in users can access certain pages.

- Post Management:
  - Users can create new posts.
  - Editing and deleting posts is available for the user's own posts.

- Friend Management:
  - Users can add friends.
  - Friend recommendations are provided to users.

- News Feed:
  - Users can view posts from their friends on their news feed.

- Comments:
  - Users can comment on their own or their friends' posts.
  - Editing and deleting comments is available for the user's own comments.

- Likes:
  - Users can like posts and undo their likes.
  - The number of likes for each post is displayed.

## Tech Stack

The following technologies and tools are used in this project:

- ReactJS: A popular JavaScript library for building user interfaces.
- HTML and CSS: Markup and styling languages used for creating web pages.
- Redux: A predictable state container for managing application state.
- Material UI: A design system and component library for creating visually appealing user interfaces.
- React Router: A library for handling routing in a React application.
- lodash: A utility library that provides helpful functions for various JavaScript operations.
- Java Backend: A Java backend provides the necessary APIs for data retrieval and manipulation.

## Getting Started

To run the application locally, follow these steps:

1. Clone this repository to your local machine.

2. Navigate to the project's root directory in a terminal or command prompt.

3. Install the required dependencies by running the following command:

   ```bash
   npm install
   ```

4. Configure the backend API endpoint in the application code to connect to the Java backend.

5. Start the application by running the following command:

   ```bash
   npm run start
   ```

   The application will be accessible at `http://localhost:3000`.

Now you can explore and use the features of "The Social Media" application.

## Contribution

Contributions to this project are welcome. Feel free to open issues and submit pull requests to suggest improvements, report bugs, or add new features.

## License

This project is licensed under the [MIT License](LICENSE).

Please note that the backend Java code is not included in this repository. Make sure to set up and configure the Java backend separately to enable full functionality of the application.

