# InterIntel Test

***

## Creator :man_technologist:

This repo was created and is maintained by **Kelvin Njoro**

* [Twitter](https://twitter.com/kelvinprincipal/)
* [Github](https://github.com/principalkelvo/)
* [Facebook](https://facebook.com/principal.kelvin1/)
* [Youtube](https://www.youtube.com/channel/UCtFlIkYU5mIPPWI-bWSIgVg)
* [Medium](https://medium.com/@principalkelvo)
* [buymeacoffee](https://www.buymeacoffee.com/kelvinnjoro)

## Preview

### Hero Preview

![image](./images/manifest/my-app%20(6).png "Upload Files")

### View 2 Preview

![image](./images/manifest/my-app%20(1).png "Uploading")

## Description

>>Interintel’s front end runs on Polymer 3.0 with a strong focus on lit elements. For HTML column layouts and styling, we use bulma css framework..

### Contains

* inputs to capture a user’s-
  * name
  * email
  * phone number
* An e-commerce view product card with animation
* Todo's from [API](https://jsonplaceholder.typicode.com/todos?_limit=5)
* a list of sorted dictionary in ascending order
* Build with :smiling_face_with_three_hearts:

### Features

* Login page - alerts users details
* Light source code - fast to load
* Beautiful interface - compatible with all desktops and with a beautiful and pleasant interface.
* Dark mode- still under construction
<!-- * Responsive - compatible with all gadgets. -->

### Requirements

* Access to  a computer or any other gadget
* Access to internet

### Setup and installation

> To view the assignment,

* fork from [Here](https://github.com/principalkelvo/interintel-tech-test/fork) or Copy the link <https://github.com/principalkelvo/interintel-tech-test/fork>
* download or clone the repository [Here](https://github.com/principalkelvo/interintel-tech-test.git) **or**
* Copy the link <https://github.com/principalkelvo/interintel-tech-test.git>

* run npm install

* run npm start

<!-- > How to navigate

* [Blog](https://medium.com/@principalkelvo/how-to-upload-and-share-files-anonymously-22b91ff8461d)
* [Youtube](https://youtu.be/hzzf2KhRknc) -->

### Built with

* Polymer and Lit - which was used to develop the structure and styling of the User Interface.
* JS - which was used to create a great interaction with the User Interface.

## Bugs and Issues

>Have a bug or issue? Open a new issue here on Github

### Known Bugs

* There are no known bugs

## Image Attribution

>Images owned by Kelvin Njoro
>Free for personal use with attribution

## Credits

* [Google Fonts](https://fonts.google.com/)

## License

> Use it freely but please do not republish, distribute or sell
> Thats it! Simple, clean and smooth!

For learning
## Polymer App Toolbox - Starter Kit

[![Build Status](https://travis-ci.org/Polymer/polymer-starter-kit.svg?branch=master)](https://travis-ci.org/Polymer/polymer-starter-kit)

This template is a starting point for building apps using a drawer-based
layout. The layout is provided by `app-layout` elements.

This template, along with the `polymer-cli` toolchain, also demonstrates use
of the "PRPL pattern" This pattern allows fast first delivery and interaction with
the content at the initial route requested by the user, along with fast subsequent
navigation by pre-caching the remaining components required by the app and
progressively loading them on-demand as the user navigates through the app.

The PRPL pattern, in a nutshell:

* **Push** components required for the initial route
* **Render** initial route ASAP
* **Pre-cache** components for remaining routes
* **Lazy-load** and progressively upgrade next routes on-demand

### Setup

#### Prerequisites

Install [Polymer CLI](https://github.com/Polymer/polymer-cli) using
[npm](https://www.npmjs.com) (we assume you have pre-installed [node.js](https://nodejs.org)).

    npm install -g polymer-cli@next

##### Initialize project from template

    mkdir my-app
    cd my-app
    polymer init polymer-3-starter-kit

### Start the development server

This command serves the app at `http://127.0.0.1:8081` and provides basic URL
routing for the app:

    npm start

### Build

The `npm run build` command builds your Polymer application for production, using build configuration options provided by the command line or in your project's `polymer.json` file.

You can configure your `polymer.json` file to create multiple builds. This is necessary if you will be serving different builds optimized for different browsers. You can define your own named builds, or use presets. See the documentation on [building your project for production](https://www.polymer-project.org/3.0/toolbox/build-for-production) for more information.

The Polymer Starter Kit is configured to create three builds. These builds will be output to a subdirectory under the `build/` directory as follows:

```
build/
  es5-bundled/
  es6-bundled/
  esm-bundled/
```

* `es5-bundled` is a bundled, minified build with a service worker. ES6 code is compiled to ES5 for compatibility with older browsers.
* `es6-bundled` is a bundled, minified build with a service worker. ES6 code is served as-is. This build is for browsers that can handle ES6 code - see [building your project for production](https://www.polymer-project.org/3.0/toolbox/build-for-production#compiling) for a list.
* `esm-bundled` is a bundled, minified build with a service worker. It uses standard ES module import/export statements for browsers that support them.

Run `polymer help build` for the full list of available options and optimizations. Also, see the documentation on the [polymer.json specification](https://www.polymer-project.org/3.0/docs/tools/polymer-json) and [building your Polymer application for production](https://www.polymer-project.org/3.0/toolbox/build-for-production).

### Preview the build

This command serves your app. Replace `build-folder-name` with the folder name of the build you want to serve.

    npm start build/build-folder-name/

### Run tests

This command will run [Web Component Tester](https://github.com/Polymer/web-component-tester)
against the browsers currently installed on your machine:

    npm test

If running Windows you will need to set the following environment variables:

- LAUNCHPAD_BROWSERS
- LAUNCHPAD_CHROME

Read More here [daffl/launchpad](https://github.com/daffl/launchpad#environment-variables-impacting-local-browsers-detection)

---

Looking for our older PSK2 Polycast or migration blog post? See [the previous README](https://github.com/Polymer/polymer-starter-kit/blob/v3.2.1/README.md).
