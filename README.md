# Ionic-HockeyApp
Need HockeyApp in your Ionic application, add this package!
This is an Ionic wrapper of the [cordova-plugin-hockeyapp](https://github.com/bitstadium/HockeySDK-Cordova) to make it easier to add [HockeyApp](http://hockeyapp.net/) into your Ionic application.

[![NPM](https://nodei.co/npm/ionic-hockeyapp.png)](https://npmjs.org/package/ionic-hockeyapp)

- [Supported Ionic Platforms](#supported-ionic-platforms)
- [Getting Started](#getting-started)
- [How to use](#how-to-use)
- [Example](#example)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)

## Supported Ionic Platforms
Ionic 2 & 3 are fully supported, the latest version of Ionic that was tested is v3.0.1.

## Getting Started
Start by creating a [HockeyApp account](http://hockeyapp.net/) and register your app with the service.

### Install the official [HockeyApp plugin](https://github.com/bitstadium/HockeySDK-Cordova) by running this command:
```bash
ionic plugin add cordova-plugin-hockeyapp@latest --save
```

### install ionic-hockeyapp
```bash
npm install ionic-hockeyapp --save
```

### Add the HockeyApp provider to [app.module.ts](https://github.com/hicsail/ionic-hockeyapp/blob/master/example/src/app/app.module.ts)
```ts
import { HockeyApp } from "ionic-hockeyapp";

providers: [
  HockeyApp
]
```

## How to use

After following the Getting Started guide. Import HockeyApp provider into your class and call HockeyApp.
Start the HockeyApp Service in [app.component.ts](https://github.com/hicsail/ionic-hockeyapp/blob/master/example/src/app/app.component.ts)
```ts
import { HockeyApp } from "ionic-hockeyapp";

constructor(..., private hockeyapp:HockeyApp) {
  platform.ready().then(() => {
    ...
    this.hockeyapp.start("9e49aeddaa96488891f0a46b52b27618","7ea7b82b9b6e4366a8c8dd57e07b2743",false,true);
  });
}
```

After starting HockeyApp, import into pages, providers, and components and you are good to go.

```ts
import { HockeyApp } from "ionic-hockeyapp";

constructor(..., private hockeyApp:HockeyApp) {
  this.hockeyApp.trackEvent('Hello World');
}
```

## Example
Check out the example Ionic application in the [example folder](https://github.com/hicsail/ionic-hockeyapp/tree/master/example).

Android Screenshot | iOS Screenshot
:-------------------------:|:-------------------------:
![android screenshot](https://cloud.githubusercontent.com/assets/864507/25199180/eb55e0f4-2517-11e7-9c34-c720004532eb.png)  |  ![ios screenshot](https://cloud.githubusercontent.com/assets/864507/25199222/0fc8a110-2518-11e7-9d6a-b48cdab500e7.png)

## API Reference
Read the [Cordova HockeyApp API Reference](https://github.com/bitstadium/HockeySDK-Cordova#api-reference) for official documentation.

## Contributing
Want to make an improvement, fork this repo and submit a pull request!

Possible enhancements:
- Update HockeyApp start command to add Login Mode.
- Make library promise based.

## License

### MIT License

Copyright (c) 2017 Boston University - Software and Application Innovation Lab

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
