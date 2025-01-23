# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can install:

### `npm i --legacy-peer-deps`

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Architecture Overview
The proposed architecture will follow a modular approach with clearly separated concerns:

- **UI Components**: Shared reusable React components such as buttons, forms, modals, etc.
- **Utilities**: Functions for common operations like data formatting, API calls, etc.
- **Business Logic**: Core logic related to application state, data manipulation, and processing.

Each of these will be placed in separate directories for clarity and maintainability.

### Directory Structure

```/my-app
│
├── /public                      # Static files, index.html, assets
│   ├── index.html               # Main HTML template
│   └── /assets                  # All static assets like images, fonts, etc.
│
├── /src
│   ├── /components              # Reusable, presentational components
│   ├── /context                 # Context API for global state management
│   ├── /hooks                   # Custom React hooks (for logic)
│   ├── /pages                   # Pages or views of the app
│   ├── /services                # API calls, business logic
│   ├── /store                   # Global state management (if using Redux, Zustand, etc.)
│   ├── /styles                  # Styling (CSS, SCSS, or styled-components)
│   ├── /utils                   # Helper functions and utilities
│   ├── App.js                   # Main app component
│   ├── index.js                 # Entry point (where ReactDOM renders)
│   └── routes.js                # All routes related logic
│
└── /node_modules                # Installed node dependencies
```

- For the project to build, **these files must exist with exact filenames:**

- `public/index.html` is the page template;
- `src/index.js` is the JavaScript entry point.


### Folder Breakdown

- `/public`:
Contains files that are publicly accessible. The `index.html` is the root HTML file for the app, and `/assets` is where you would store static resources like images, icons, or other assets.

- `/src`:
The main codebase for the React application. This folder will contain all React components, hooks, and logic.

  - `/assets`:
Store images, SVG files, fonts, or any static media files that the app uses.
  
  - `/components`:
Contains reusable presentational components. Components could be things like buttons, cards, or inputs that are shared across multiple pages. Example:
    - `Button.js`
    - `Card.js`

   - `/context`:
If you're using the Context API for state management, this folder will contain context files for global state. For example, `AuthContext.js` for managing authentication status. 

   - `/hooks`:
Store custom hooks that abstract and encapsulate logic. Example:
     - `useFetch.js` (A custom hook to fetch data)
     - `useAuth.js` (A custom hook to handle authentication)

   - `/pages`:
Contains page-level components. These are the components that represent full views or routes in the application. Pages are typically composed of multiple smaller components. Example:
     - `Home.js`
     - `Profile.js`

   - `/services`:
Contains all business logic like API calls, interactions with back-end services, and general app services. Example:
     - `api.js` (for making API requests)
     - `authService.js` (for handling authentication logic)

   - `/store`:
If you are using a global state management library (like Redux or Zustand), this folder stores all related store files. If not using any global store, this folder may not be needed.

   - `/styles`:
Styling-related files. Depending on your styling preference, this could include:
     - `App.css` or `App.scss`
     - `index.css` for global styles
     - Styled-components or SCSS modules

   - `/utils`:
Reusable utility functions or constants that are used throughout the app. Example:
     - `helpers.js` (for generic functions)
     - `constants.js` (for storing fixed values like URL paths or keys)

   - `App.js`:
The main entry point for the app component. It typically includes routing and global layout (header, footer, etc.).

   - `/index.js`:
The entry point for the React application, where ReactDOM renders the main App component.

   - `/routes.js`:
A central place where all routes are defined. This file will import the components and handle routing logic using React Router.

### Naming Conventions

- Component Names: Use PascalCase for components (`Button.js`, `Card.js`, `Profile.js`).
- Hook Names: Prefix hooks with `use` (`useAuth.js`, `useFetch.js`).
- Service Names: Use camelCase for services and files containing business logic (`authService.js`, `api.js`).
- Style Files: Use kebab-case for style files (`app.css`, `globals.scss`).

### Demo Code

Here’s a small demo of a basic React setup to show the proposed structure:

`src/App.js` (Main App Component)

```js
import React from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Welcome to My React App</h1>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
```

`src/pages/Home.js` (Page Component)

```js
import React from 'react';
import Button from '../components/Button';

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <Button label="Go to Profile" />
    </div>
  );
}

export default Home;
```

`src/components/Button.js` (Reusable Component)

```js
import React from 'react';

function Button({ label }) {
  return <button>{label}</button>;
}

export default Button;
```

`src/styles/App.css` (Styling)

```css
.App {
  text-align: center;
}

button {
  background-color: #4CAF50;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
```

### Aliases 
I would set up the system to use aliases, so anything within the `components` folder could be imported as `@components`, `assets` as `@assets`, etc. If you have a custom Webpack, this is done through the [resolve](https://webpack.js.org/configuration/resolve) configuration.

```js
module.exports = {
  resolve: {
    extensions: ['js', 'ts'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      // ...etc
    },
  },
}
```

It just makes it a lot easier to import from anywhere within the project and move files around without changing imports, and you never end up with something like `../../../../../components/`.

### Components

Within the `components` folder, I would group by type - `forms`, `tables`, `buttons`, `layout`, etc. The specifics will vary by your specific app.

In this example, I'm assuming you're either creating your own form system, or creating your own bindings to an existing form system (for example, combining Formik and Material UI). In this case, you'd create a folder for each component (`TextField`, `Select`, `Radio`, `Dropdown`, etc.), and inside would be a file for the component itself, the styles, the tests, and the Storybook if it's being used.

- **Component.js** - The actual React component
- **Component.styles.js** - The Styled Components file for the component
- **Component.test.js** - The tests
- **Component.stories.js** - The Storybook file

To me, this makes a lot more sense than having one folder that contains the files for ALL components, one folder that contains all the tests, and one folder that contains all the Storybook files, etc. Everything related is grouped together and easy to find.

```
.
└── /src
    └── /components
        ├── /forms
        │   ├── /TextField
        │   │   ├── TextField.js
        │   │   ├── TextField.styles.js
        │   │   ├── TextField.test.js
        │   │   └── TextField.stories.js
        │   ├── /Select
        │   │   ├── Select.js
        │   │   ├── Select.styles.js
        │   │   ├── Select.test.js
        │   │   └── Select.stories.js
        │   └── index.js
        ├── /routing
        │   └── /PrivateRoute
        │       ├── /PrivateRoute.js
        │       └── /PrivateRoute.test.js
        └── /layout
            └── /navigation
                └── /NavBar
                    ├── NavBar.js
                    ├── NavBar.styles.js
                    ├── NavBar.test.js
                    └── NavBar.stories.js
```

You'll notice there's an index.js file in the components/forms directory. It is often rightfully suggested to avoid using index.js files as they're not explicit, but in this case it makes sense - it will end up being an index of all the forms and look something like this:

```js
// src/components/forms/index.js

import { TextField } from './TextField/TextField'
import { Select } from './Select/Select'
import { Radio } from './Radio/Radio'

export { TextField, Select, Radio }
```

Then when you need to use one or more of the components, you can easily import them all at once.

```
import { TextField, Select, Radio } from '@components/forms'
```

I would recommend this approach more than making an `index.js` inside of every folder within `forms`, so now you just have one `index.js` that actually indexes the entire directory, as opposed to ten `index.js` files just to make imports easier for each individual file.

### Services
The services directory is less essential than components, but if you're making a plain JavaScript module that the rest of the application is using, it can be handy. A common contrived example is a LocalStorage module, which might look like this:

```
.
└── /src
    └── /services
        ├── /LocalStorage
        │   ├── LocalStorage.service.js
        │   └── LocalStorage.test.js
        └── index.js
```
An example of the service:

```js
// src/services/LocalStorage/LocalStorage.service.js

export const LocalStorage = {
  get(key) {},
  set(key, value) {},
  remove(key) {},
  clear() {},
}
```

```js
import { LocalStorage } from '@services'

LocalStorage.get('foo')
```

### Store
The global data store will be contained in the store directory - in this case, Redux. Each feature will have a folder, which will contain the Redux Toolkit slice, as well as actions and tests. This setup can also be used with regular Redux, you would just create a .reducers.js file and .actions.js file instead of a slice. If you're using sagas, it could be .saga.js instead of .actions.js for Redux Thunk actions.

```
.
└── /src
    ├── /store
    │   ├── /authentication
    │   │   ├── /authentication.slice.js
    │   │   ├── /authentication.actions.js
    │   │   └── /authentication.test.js
    │   ├── /authors
    │   │   ├── /authors.slice.js
    │   │   ├── /authors.actions.js
    │   │   └── /authors.test.js
    │   └── /books
    │       ├── /books.slice.js
    │       ├── /books.actions.js
    │       └── /books.test.js
    ├── rootReducer.js
    └── index.js
```    
You can also add something like a `ui` section of the store to handle modals, toasts, sidebar toggling, and other global UI state, which I find better than having `const [isOpen, setIsOpen] = useState(false)` all over the place.

In the `rootReducer` you would import all your slices and combine them with `combineReducers`, and in `index.js` you would configure the store.

### Utils
Whether or not your project needs a `utils` folder is up to you, but I think there are usually some global utility functions, like validation and conversion, that could easily be used across multiple sections of the app. If you keep it organized - not just having one `helpers.js` file that contains thousands of functions - it could be a helpful addition to the organization of your project.

```
.
└── src
    └── /utils
        ├── /constants
        │   └── countries.constants.js
        └── /helpers
            ├── validation.helpers.js
            ├── currency.helpers.js
            └── array.helpers.js
```
Again, the `utils` folder can contain anything you want that you think makes sense to keep on a global level. If you don't prefer the "multi-tier" filenames, you could just call it `validation.js`, but the way I see it, being explicit does not take anything away from the project, and makes it easier to navigate filenames when searching in your IDE.

### Views
Here's where the main part of your app will live: in the `views` directory. Any page in your app is a "view". In this small example, the views line up pretty well with the Redux store, but it won't necessarily be the case that the store and views are exactly the same, which is why they're separate. Also, `books` might pull from `authors`, and so on.

Anything within a view is an item that will likely only be used within that specific view - a `BookForm` that will only be used at the `/books` route, and an `AuthorBlurb` that will only be used on the `/authors` route. It might include specific forms, modals, buttons, any component that won't be global.

The advantage of keeping everything domain-focused instead of putting all your pages together in `components/pages` is that it makes it really easy to look at the structure of the application and know how many top level views there are, and know where everything that's only used by that view is. If there are nested routes, you can always add a nested `views` folder within the main route.

```
.
└── /src
    └── /views
        ├── /Authors
        │   ├── /AuthorsPage
        │   │   ├── AuthorsPage.js
        │   │   └── AuthorsPage.test.js
        │   └── /AuthorBlurb
        │       ├── /AuthorBlurb.js
        │       └── /AuthorBlurb.test.js
        ├── /Books
        │   ├── /BooksPage
        │   │   ├── BooksPage.js
        │   │   └── BooksPage.test.js
        │   └── /BookForm
        │       ├── /BookForm.js
        │       └── /BookForm.test.js
        └── /Login
            ├── LoginPage
            │   ├── LoginPage.styles.js
            │   ├── LoginPage.js
            │   └── LoginPage.test.js
            └── LoginForm
                ├── LoginForm.js
                └── LoginForm.test.js
```

> Keeping everything within folders might seem annoying if you've never set up your project that way - you can always keep it more flat, or move `tests` to its own directory that mimics the rest of the app.

### Conclusion
This is my proposal for a sytem for React organization that scales well for a large production app, and handles testing and styling as well as keeping everything together in a feature focused way. It's more nested than the traditional structure of everything being in `components` and `containers`, but that system is a bit more dated due to Redux being much easier to implement with Hooks, and "smart" containers and "dumb" components no longer being necessary.

It's easy to look at this system and understand everything that is needed for your app and where to go to work on a specific section, or a component that affects the app globally. This system may not make sense for every type of app, but it has worked for me. I'd love to hear any comments about ways this system can be improved, or other systems that have merit.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
