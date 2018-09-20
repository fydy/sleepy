import Highway from "@dogstudio/highway/build/es5/highway";

const H = new Highway.Core({
  renderers: {
    index: new Promise(function (resolve) {
      resolve(import( /* webpackChunkName: "index" */ './index'))
    }),
    about: new Promise(function (resolve) {
      resolve(import( /* webpackChunkName: "about" */ './about'))
    })
  }
});
