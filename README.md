
PicVault - Frontend
===================

PicVault is a gallery web application built with **React** for the frontend and **Django** for the backend. The app allows users to browse and view images, with features such as pagination and a responsive design. It is a part of a larger project where the backend handles image storage, management, and additional functionality.

Features
--------

*   **Image Gallery**: Display a collection of images in a responsive grid layout.
*   **Pagination**: Navigate through multiple pages of images.
*   **Lazy Loading**: Images load only when they are in the viewport.
*   **Lightbox**: View images in full-screen mode with a lightbox effect.
*   **Responsive Design**: The app is fully responsive and works on desktop and mobile devices.

Technologies Used
-----------------

*   **React**: JavaScript library for building user interfaces.
*   **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
*   **React Router**: For routing and navigation within the app.
*   **React Icons**: For using customizable icons.
*   **React Image Lightbox**: For a full-screen lightbox image viewer.
*   **React Lazy Load Image Component**: To improve page load speed by lazily loading images.

Installation
------------

### Prerequisites

*   Node.js or Bun

### Steps

1.  Clone the repository:
    
    git clone https://github.com/yourusername/PicVault-Frontend.git
    
    cd PicVault-Frontend
    
2.  Install the dependencies:
    
    npm install
    
3.  Start the development server:
    
    npm run dev
    
    The app will be available at [http://localhost:3000](http://localhost:3000).

Development
-----------

*   **Component Structure**: Components are organized by their functionality, such as the gallery, pagination, and image viewer.
*   **State Management**: React's built-in hooks (useState, useEffect) are used for state management.
*   **Tailwind CSS**: Tailwind CSS is used for styling. Custom classes and components are created to match the desired theme.

Testing
-------

*   **ESLint** is used for linting and enforcing coding standards.
*   **Prettier** is used for code formatting.

To run tests, use the following command:

npm run lint

Environment Variables
---------------------

*   **REACT\_APP\_API\_URL**: The URL to the Django backend API (for example, `http://localhost:8000`).

Project Structure
-----------------

/public
    └── index.html            # Main HTML file
/src
    ├── /components           # React components for the gallery, lightbox, etc.
    ├── /hooks                # Custom React hooks
    ├── /pages                # Different pages of the app
    ├── /services             # API calls to the Django backend
    ├── /styles               # Tailwind CSS configuration
    └── App.js                # Main app component
/vite.config.js               # Vite configuration
/package.json                 # Project dependencies
        

Contributions
-------------

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature`).
3.  Commit your changes (`git commit -am 'Add new feature'`).
4.  Push to the branch (`git push origin feature/your-feature`).
5.  Create a new Pull Request.

License
-------

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.