## Overview
This project is a ViteJS Vue TypeScript project that implements internationalization (i18n) in both English and French for four distinct Vue components. These components are buildable as web-components and integrated into a separate HTML codebase, displaying 2 instances of all 4 components on a single page. The web-components interact with each other dynamically, demonstrating language switching capabilities and component interactions.


### Used Technologies

* Vue.js
* TailwindCSS
* Typescript
* Tailwind CSS
* vue-i18n
* Vitest
* Vue Test Utils

### Demo
You can view the demo of the web components [here](https://diabolocom-web-components.vercel.app/), and the Vue.js project demo [here](https://diabolocom.vercel.app/).

For more details on how to use the web components and the Vue.js project, please refer to their respective branches:
- [Web Components Demo](https://github.com/mustafadalga/diabolocom/tree/web-components-demo)
- [Vue.js Project Demo](https://github.com/mustafadalga/diabolocom/tree/demo)


## Project Setup

### Installation

```
git clone git@github.com:mustafadalga/diabolocom.git
cd diabolocom
npm install
```

### Running the Project
To start the development server and run the project locally, use the following command:
```
npm run dev
```
Once the server is running, you can access the project in your web browser at http://localhost:5173.



### Building and Integrating Web Components
To build the web components and integrate them into the HTML codebase, follow these steps:

1. Run the build command:
```
npm run build
```

2. Include the built web-components in your HTML codebase using script tags:
```
<script type="module" src="./path/to/i18n-host.js"></script>
<script type="module" src="./path/to/locale-picker.js"></script>
<script type="module" src="./path/to/metrics-display.js"></script>
<script type="module" src="./path/to/counter.js"></script>
<script type="module" src="./path/to/control-panel.js"></script>
```

3. Use the web-components in your HTML codebase:
```
  <i18n-host>
        <locale-picker></locale-picker>
        
        <div>
            <metrics-display></metrics-display>
            <counter-element></counter-element>
        </div>
    </i18n-host>
```


### Run Unit Test
To run unit tests for the project, execute the following command:

```
npm run unit:test
```

### TailwindCSS Usage in Web Components

In this project, TailwindCSS is imported into each Vue.js component using a <style> tag. This approach was adopted due to the inherent limitations of applying global TailwindCSS styles within the encapsulated scope of web components' shadow DOM. While effective in ensuring style encapsulation, this method introduces inefficiencies, notably the inclusion of unused TailwindCSS classes within each component's styles. Although alternative strategies exist to mitigate these issues, such as manually scoping necessary styles or employing build-time optimizations to prune unused classes, each comes with its own set of complexities and trade-offs. Consequently, the direct import method remains a pragmatic, albeit imperfect, solution for integrating TailwindCSS with web components that utilize shadow DOM.

<hr/>

### Screenshots

<img width="1128" alt="Screenshot" src="https://github.com/mustafadalga/diabolocom/assets/25087769/ff2be7c5-0e91-4c14-a650-0f3c178d4ef9">
