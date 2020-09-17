This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

<!-- Project Description -->

#Component structure
The main part of the UI code can be found in space-x/src folder. The src folder contains of:

- Components - all components of the app
- Redux - the store, the initial state, all reducers, actions and actions types.
- app.css - global styling
- Used bootstrap for styling app.

##Reusable components
Every time a new component/file is created, one should consider if there already exists a reusable component for that purpose. The new component might also be similar to another component and should then be refactored to be a reusable component to handle different scenarios. Sometimes you might also experience the opposite - that you need to spit a component into several components because the component is trying to deal with too many things.

##Naming conventions
All folder names should use kebab case (all lower case with dash). Example: “space-x”.

All component file names should use pascal case (each word starting with upper case). Example: SpaceXHome.jsx”. The component should have the exact same name as the file, unless there are other reasons or the file includes several components.

Each component that has props should have an interface defined with the naming convention <ComponentName>Props.

**Do:**
`spaceXDetails // descriptive but not too long`

**Don't:**
`sXDetails // hard to understand for new people on the project, what is sX?`

As often as possible, booleans should be written as a short question to make the code more readable

##Where API data is stored - Redux vs component spesific
For API data that are of a global concern (for example user details), or data used on the general pages, these data are stored in redux store. This is so that the user does not need to reload the data if they browse between the pages. To get an overview of what data is stored in Redux. Other data will be stored in the component itself, which means that if the user navigates away from that component, the data will be lost.
