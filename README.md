<p align="center">
  <img height="256px" width="256px" style="text-align: center;" src="https://cdn.rawgit.com/anthonynahas/ngx-material-faq/master/demo/src/assets/logo.svg">
</p>

# ngx-material-faq - Angular Library built with material design in order to provide a reusable faq (frequently asked questions) component for every project. Ask, Answer and List

[![npm version](https://badge.fury.io/js/ngx-material-faq.svg)](https://badge.fury.io/js/ngx-material-faq),
[![npm](https://img.shields.io/badge/demo-online-ed1c46.svg)](https://anthonynahas.github.io/ngx-material-faq)
[![Coverage Status](https://coveralls.io/repos/github/anthonynahas/ngx-material-faq/badge.svg?branch=master)](https://coveralls.io/github/anthonynahas/ngx-material-faq?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/anthonynahas/ngx-material-faq/badge.svg?branch=master)](https://coveralls.io/github/anthonynahas/ngx-material-faq?branch=master)
[![dependency Status](https://david-dm.org/anthonynahas/ngx-material-faq/status.svg)](https://david-dm.org/anthonynahas/ngx-material-faq)
[![devDependency Status](https://david-dm.org/anthonynahas/ngx-material-faq/dev-status.svg?branch=master)](https://david-dm.org/anthonynahas/ngx-material-faq#info=devDependencies)
[![Greenkeeper Badge](https://badges.greenkeeper.io/anthonynahas/ngx-material-faq.svg)](https://greenkeeper.io/)
[![license](https://img.shields.io/github/license/anthonynahas/ngx-material-faq.svg?style=flat-square)](https://github.com/AnthonyNahas/ngx-material-faq/blob/master/LICENSE)


<p align="center">
  <img alt="ngx-material-faq" style="text-align: center;"
   src="assets/demo.gif">
</p>


## Demo

View all the directives in action at https://anthonynahas.github.io/ngx-material-faq

## Dependencies
* [Angular](https://angular.io) (*requires* Angular 2 or higher, tested with 2.0.0)

### Requirements (peer dependencies):
- [angular flex-layout ](https://www.npmjs.com/package/@angular/flex-layout)
- [angular material ](https://www.npmjs.com/package/@angular/material)
- [angular material theme](https://material.angular.io/guide/getting-started#step-4-include-a-theme)
- [angular cdk ](https://www.npmjs.com/package/@angular/cdk)
- [angular animations ](https://www.npmjs.com/package/@angular/animations)
- [angular forms ](https://www.npmjs.com/package/@angular/forms)
- if you need a built in theme --> please let me know


```bash
npm i @angular/cdk @angular/material @angular/flex-layout @angular/animations @angular/forms 
```


## Installation
Install above dependencies via *npm*. 

Now install `ngx-material-faq` via:
```shell
npm install --save ngx-material-faq
```

---
##### SystemJS
>**Note**:If you are using `SystemJS`, you should adjust your configuration to point to the UMD bundle.
In your systemjs config file, `map` needs to tell the System loader where to look for `ngx-material-faq`:
```js
map: {
  'ngx-material-faq': 'node_modules/ngx-material-faq/bundles/ngx-material-faq.umd.js',
}
```
---

Once installed you need to import the main module:
```js
import { LibModule } from 'ngx-material-faq';
```
The only remaining part is to list the imported module in your application module. The exact method will be slightly
different for the root (top-level) module for which you should end up with the code similar to (notice ` LibModule .forRoot()`):
```js
import { LibModule } from 'ngx-material-faq';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [LibModule.forRoot(), ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Other modules in your application can simply import ` LibModule `:

```js
import { LibModule } from 'ngx-material-faq';

@NgModule({
  declarations: [OtherComponent, ...],
  imports: [LibModule, ...], 
})
export class OtherModule {
}
```

## Usage

add the `ngx-material-faq` or the `ngx-material-faq-admin` element to your template:


### ngx-material-faq

<p align="center">
  <img alt="ngx-material-faq" style="text-align: center;"
   src="assets/demo-ngx-material-faq.png">
</p>

```html
<ngx-material-faq [faqList]="list"></ngx-material-faq>
```

```typescript
export class HomeComponent implements OnInit {

  list: FaqItem[] = [
    {
          question: 'Why does it think the jQuery plugin is missing?',
          answer: 'Remember: load jQuery before AngularJS if you are using jQuery plugins!'
        },
        {
          question: 'How do I access the DOM from a controller?',
          answer: 'DO NOT perform DOM selection/traversal from the controller. The HTML hasn\'t rendered yet. Look up \'directives\'.'
        }
  ];
  
 }

### ngx-material-faq-admin

<p align="center">
  <img alt="ngx-material-faq-admin" style="text-align: center;"
   src="assets/demo-ngx-material-faq-admin.png">
</p>

```html
<ngx-material-faq-admin [title]="'Admin'" (onFAQItemAdded)="onNewFaqItem($event)"></ngx-material-faq-admin>
```

in your component

```typescript
export class HomeComponent implements OnInit {

  faq: FaqItem[] = [];
  
  onNewFaqItem(faqItem: FaqItem) {
      console.log('on new faqItem -> ', faqItem);
      this.faq.splice(0, 0, faqItem);
    }
  
 } 
```

### Please checkout the full documentation [here](https://anthonynahas.github.io/ngx-material-faq/doc/index.html) or follow the official [tutorial](https://anthonynahas.github.io/ngx-material-faq/getting-started)

## Development

1. clone this [repo]()
2. Install the dependencies by running `npm i`
3. build the library `npm run build` or `gulp build`
To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

4. Link the library 
  - on windows `gulp link` or `locally npx gulp link`
  - on mac/linux `sudo gulp link` or locally `sudo npx gulp link`
  
 5. Navigate to the demo app
  - `cd demo`
  _ `npm i`
  _ `npm start`

extras
To lint all `*.ts` files:

```bash
$ npm run lint
```


## Other Angular Libraries
- [ngx-auth-firebaseui](https://github.com/AnthonyNahas/ngx-auth-firebaseui)
- [ngx-material-pages](https://github.com/AnthonyNahas/ngx-material-pages)
- [ngx-material-password-strength](https://github.com/AnthonyNahas/ngx-material-password-strength)
- [ngx-material-contacts](https://github.com/AnthonyNahas/ngx-material-contacts)
- [ngx-combination-generator](https://github.com/AnthonyNahas/combination-generator)


## License

Copyright (c) 2018 anthonynahas. Licensed under the MIT License (MIT)

