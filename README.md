# webpack-template-lp
Webpack template for landingpage

1. Instal deps ```npm i```

2. For development run server ```npm run dev```

3. All works through PUG. Styles and scripts includes from main layout file ```./src/pug/layout/main.pug```

4. Folder for all pages: ```./src/pug/pages/```. Index page is: ```./src/pug/pages/index.pug```

5. Styles index file is ```./src/assets/css/style.scss```

6. Scripts index file is ``./src/assets/js/main.js```

7. To add new pages edit ```./build/webpack.base.conf.js```:

```
  entry: {
    index: './src/pug/pages/index.pug',      // output dist/index.html
    // 'page_name': './src/pug/pages/page.pug',
    // ...
  },
```

!Don't forget to reload server to apply changes

8. If you need beautify output html make PugPlugin {pretty: true} if ```./build/webpack.base.conf.js```:

```
  plugins: [
    new PugPlugin({
      //...
      pretty: true, // enable formatting of HTML
    })
  ],
```

9. To generate prod build run ```npm run build```. After compiling you will find the build in ```./dist/``` folder