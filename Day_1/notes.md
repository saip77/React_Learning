### Day 1 of Learning React

#### What is React?

React is a JavaScript library for building user interfaces, especially for single-page applications. It is maintained by Facebook and a community of individual developers and companies.

#### Benefits of using React

- React makes it easy to create reusable UI components
- React makes it easy to update the UI when the underlying data changes
- React makes it easy to build server-rendered or statically rendered UIs
- React makes it easy to build performant UIs by isolating changes to the UI tree
- React makes it easy to test UI components in isolation

#### Understanding Vite
It is a build tool and a development server for front-end applications.

#### How Vite works
1. When you run npm run dev, Vite starts a development server.
2. It uses ESM (ECMAScript modules) to load your application code, means the browser can import JavaScript files directly without bundling them first.
3. When you run your app in browser,
    - The browser loads index.html
    - The file has a script tag that loads your entry file(main.jsx)
    - The entry file imports your app code and renders it to the DOM
4. Vite only  processes the files you're using on the page. It doesn't process all the files in your project.
5. Vite updates that one module not the whole project. This is called Hot Module Replacement (HMR) and makes your development experience much faster.