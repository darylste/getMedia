# GetMedia

This website was created as a college project for the Designing and Developing an interactive Product class. The website allows you to search for music, albums or artists via the [iTunes API](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/index.html) and has a dummy cart feature which allows you to add/remove vouchers from a shopping cart created using TypeScript.

[View the hosted version](https://getmedia.vercel.app/)

## Folder Structure

### Atomic

I used the atomic design pattern to organise the folder structure for this application, to help ensure ease of navigation throughout the project. There is a great [article about atomic design by Janelle Wong here](https://medium.com/@janelle.wg/atomic-design-pattern-how-to-structure-your-react-application-2bb4d9ca5f97).

## Technologies

### React

This project was created using the [React](https://reactjs.org/) library. To run in development mode, run `npm start` in the terminal. This will run the application on [http://localhost:3000](http://localhost:3000/).

### Typescript

I created this application in [TypeScript](https://www.typescriptlang.org/). This allowed me to gain experience working with a typed language and made debugging the application easier.

### SASS

To style this application I used the CSS Preprocessor [SASS](https://sass-lang.com/documentation/). SASS allows for quicker and more consistent development as you can create CSS variables, nest CSS rules and more.

## Packages

### Axios

When making HTTP requests to the [iTunes API](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/index.html), I used the [Axios package](https://www.npmjs.com/package/axios). Axios works similarly to the built-in [JavaScript Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API), although can be easier to use and offers some built-in security features. For a comparison of Axios vs Fetch see [this article by GeeksForGeeks](https://www.geeksforgeeks.org/difference-between-fetch-and-axios-js-for-making-http-requests/#:~:text=Axios%20performs%20automatic%20transforms%20of,cancelling%20request%20and%20request%20timeout.).

### ClassNames

I used the [ClassNames](https://www.npmjs.com/package/classnames) package to dynamically generate class names for components based on props.
