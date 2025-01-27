### How to build and run this project
Clone the repository
Run in your terminal or IDE `npm i`
```
To run the project:
    -In the first terminal run `npm run server-start`
    -In a second terminal run `npm run start`
```
### Engineering and testing methodology
The design and implementation of this app was quite straighforward. The requirements were clear and simple so knowing
what was needed was apparent. Implementation followed by first creating the React front end so I could more easily 
diagnose any problems that I may run into with either the api or with the number to roman numeral conversion. After I
got the front end working as well as the conversion method, I implemented the backend and moved the conversion to 
happen on the api instead of in the front end input. 

I added unit tests for the number conversion at the end to test possible outcomes. I also tested the app by running it 
locally, making sure the input field, the `Convert to roman numeral` button, and the `Light/Dark mode` button all function
correctly. I also checked the api calls to make sure they are sending the data in back in the correct format.

### Packaging Layout
This is a React app running TypeScript with an Express.js server. React is required for Extension 2 and it is also my current
preferred Front End technology. I decided to use TypeScript because that is what I work with and prefer; I appreciate its type-safety.
Express.js was used because of its simplicity to get up and running, expecially for a project of this size. Jest was employed to run
the test I wrote for the functions that do the roman numeral conversion.

### Dependency attribution
The front end is dependent on React, which requires react-dom and react-scripts. It uses TypeScript which depends on JavaScript as well as a UI framework from Adobe React Spectrum. The testing framework is jest which requires TypeScript. The backend api requires express which requires JavaScript uses CORS.
```
Front end tree of dependency:
├── @adobe/react-spectrum@3.39.0  (UI library used for pre-built front end components)
├── @types/react-dom@19.0.3 (TypeScript definitions for react-dom)
├── @types/react@19.0.7 (TypeScript definitions for react)
├── cra-template@1.2.0 (The official base template for Create React App)
├── jest@29.7.0 (Testing framework for JavaScript)
├── react-dom@19.0.0 (Serves as an entry point to the DOM and server renderers for React)
├── react-scripts@5.0.1 (Includes scripts and configurations used by Create React App)
├── react@19.0.0 (Library for web and native user interfaces)
└── typescript@4.9.5 (TypeScript is a superset of JavaScript that compiles to clean JavaScript output)
```
```
Backend tree of dependency:
├── cors@2.8.5 (Provides a middleware for express that can be used to enable CORS, useful when running a front end and back end on different ports)
└── express@4.21.2 (Web server framework used to handle HTTP requests and routing)
```