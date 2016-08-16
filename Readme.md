
# Rebel Icons Landing page project

This project aims to be front page to present all features in `rebel-icons`.
Feel free to jump into discussion, just open an issue with your question or idea.

## Contains

- [x] [Webpack](https://webpack.github.io)
- [x] [React](https://facebook.github.io/react/)
- [x] [Redux](https://github.com/reactjs/redux)
- [x] [Babel](https://babeljs.io/)
- [x] [Autoprefixer](https://github.com/postcss/autoprefixer)
- [x] [CSS modules](https://github.com/outpunk/postcss-modules)
- [x] [PostCSS](https://github.com/postcss/postcss)
  - [x] [Rucksack](http://simplaio.github.io/rucksack/docs)
  - [x] [precss](https://github.com/jonathantneal/precss)
  - [x] [lost](https://github.com/peterramsing/lost)
- [x] [React Router Redux](https://github.com/reactjs/react-router-redux)
- [x] [Redux DevTools Extension](https://github.com/zalmoxisus/redux-devtools-extension)

## App Structure

```
app
├── actions
├── constants
├── containers
│   ├── App
│   │   └── css
│   ├── Footer
│   ├── Header
│   ├── IconElement
│   └── Main
├── middleware
├── reducers
└── store
```

## Setup

```
$ git clone git@github.com:SphereConsultingInc/rebel-landing.git
$ cd rebel-landing
$ npm install
```

Now we have to add Rebel Icons to our project

```
$ git clone git@github.com:SphereConsultingInc/rebel-icons.git node_modules/rebel-icons
```

At this point you should be good to go.

## Running

To run this project for development, plz execute the following

```
$ npm start
```

It will start `webpack` dev server on ()[http://localhost:3000]

# License

MIT
