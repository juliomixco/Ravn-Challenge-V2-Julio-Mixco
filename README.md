# Starwars Challenge

## Setup instructions

clone this repository and then go to the root folder of the project and run one of the following command to install the dependencies.

**NPM**

```
npm install
```

**YARN**

```
yarn
```

Create a `.env` file in the root of the project with the following content.

```
# All variables must be prefixed with REACT_APP_

REACT_APP_API_URL=https://api.graph.cool/simple/v1/swapi\
REACT_APP_ITEMS_PER_PAGE=5
REACT_APP_QUERY_DELAY=500
```

And then run the project.

**NPM**

```
npm run start
```

**YARN**

```
yarn start
```

The application will be launched at http://localhost:3000/.

## Description

This is a SPA that fetches all StarWars characters and display the details of a character when you select one from the side menu.
This application has been built using React and Apollo Client. the characters are loaded in chuncks of 5 but you can change that in the environment variables.

**People pagination**

![Starwars Pagination](https://i.imgur.com/ysfosDq.gif)

**Person detail**

![Starwars detail](https://i.imgur.com/lxXOAcH.gif)

## Environment Variables

The suggested default values can be found in the setup instructions

| Variable Name            | Description                                                                                                 |
| ------------------------ | ----------------------------------------------------------------------------------------------------------- |
| REACT_APP_API_URL        | URL pointing to the Starwars graphql API                                                                    |
| REACT_APP_ITEMS_PER_PAGE | Number of items loaded per page on each request to the people endpoint. Should be a positive integer number |
| REACT_APP_QUERY_DELAY    | Delay in Milliseconds between each page. Should be a positive integer number                                |

[learn more about envrionment variables](https://create-react-app.dev/docs/adding-custom-environment-variables/#expanding-environment-variables-in-env)

## Poject Structure

This project is structured in a way that the files are easy to find and understand what's their responsibility.

```
|-- public
|   `-- icons
|-- src
|   |
|   |-- components
|   |   |-- styled
|   |   |   `-- Lib.tsx // Reusable design system components
|   |   `-- myComponent
|   |       |-- MyComponent.tsx // component file
|   |       `-- MyComponent.style.tsx  // styled components for  MyComponent
|   |
|   |-- config
|   |   `-- app.config.ts // project configuration loaded from the .env file
|   |
|   |-- graphql
|   |   |-- index.ts // configuration for apollo client
|   |   `-- queries.ts // graphql query and the interface that represents the shape of the response and the query variables
|   |
|   |-- hooks
|   |   `-- useMyHook.ts // custom reusable hook
|   |
|   |-- interfaces
|   |   `-- domainObjectName.interface.ts // interface that represents the shape of a domain object EX: Person, Planet ...
|   |
|   |-- pages
|   |   `-- PageComponent.tsx // container component that handles a specific view
|   |
|   |-- App.tsx // main fileof the react application
|   `-- index.css // global styles for the application
|
|-- .env //file containing the environment variables
|
```

**file extensions**

## Assumptions

- There is a folder for reusable components and another one called `pages` where the main views are stored.
- This project is intended to work under the container/persentation components pattern.
- The interfaces concerning the domain objects of this project are stored under the `interface` folder.
- The people should be automaically loaded one page after another.
- Styles should be stored in a separate file and close to the component that uses them. Unless they are global styles.
- Colors can be changed ot themed using css variables.
- Adding Redux to this project will be overkill because apollo cliente already caches the requests.
- Adding a routing library will be overkill because the deatil can be loaded through a click event.
- A single query containing all fields needed to diplat the list and the detail view.
- In a bigger project there should be a query folder inside the `graphql` to store all the queries and its variables.
- The interface that represent the query variables is stored in the same file to avoid importing from multiple files.

## Technologies

- [React](https://reactjs.org/)
- [Styled Components](https://styled-components.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Apollo Client](https://www.apollographql.com/docs/react/)

<details>
<summary>
    React Docs
</summary>
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

</details>
