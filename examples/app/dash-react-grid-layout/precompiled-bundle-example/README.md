# Dashboard Example using React - precompiled react jsx bundles

The logic for react component is located in `./src/grid-layout.js`. For Development, this file needs to be pre-compiled using babel and can be done using the following command (reference: https://reactjs.org/docs/add-react-to-a-website.html):

```bash
npm install babel-cli@6 babel-preset-react-app@3
npx babel --watch src --out-dir static/js/ --presets react-app/prod 
```

--watch flag can be used for real-time compiling
