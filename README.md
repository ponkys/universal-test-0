# First

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.0.

So please, make sure you are running the latest angular CLI before starting.

# Comments
In this app I tried to follow the look and feel of OneFootball. Additionally, I tried two fairly
new features.

1. new angular "HttpClient".

2. In the standings component I used css grids. I am aware on the state of this technology in terms
of browser compatibility but it will soon be properly implemented in IE and Edge. However, the feed section
makes use of flexbox.

Furthermore, in the Feed section I rendered 3 different Feeds:
1. Native_article
2. Twitter
3. Both with conditional rendering.

Finally, the test suite provides basic coverage of every component.

# APP structure
    one/
        |--e2e/ *end to end tests
        |
        |--karma.conf.js
        |
        |--package-lock.json
        |
        |--package.json
        |
        |-protractor.conf.js
        |
        |-README.md
        |
        |-src/
        |   |
        |   |-app/
        |       |
        |       |-app-routing.module.ts
        |       |
        |       |-app.component.css
        |       |
        |       |-app.component.html
        |       |
        |       |-app.component.spec.ts
        |       |
        |       |-app.component.ts
        |       |
        |       |-app.module.ts
        |       |
        |       |-app.server.ts
        |       |
        |       |-fedd-list/                        ** Main component for Feed
        |       |       |
        |       |       |-feed-list.component.css
        |       |       |
        |       |       |-feed-list.component.html
        |       |       |
        |       |       |-feed-list.component.spec.ts
        |       |       |
        |       |       |-feed-list.component.ts
        |       |
        |       |-models/
        |       |       |
        |       |       |-item.ts
        |       |       |
        |       |       |-standings.ts
        |       |
        |       |-native-article/
        |       |       |
        |       |       |-native-article.component.css
        |       |       |
        |       |       |-native-article.component.html
        |       |       |
        |       |       |-native-article.component.spec.ts
        |       |       |
        |       |       |-native-article.component.ts
        |       |
        |       |-resource.service.spec.ts
        |       |
        |       |-resource.service.ts
        |       |
        |       |-services/
        |       |       |
        |       |       |-feed.service.spec.ts
        |       |       |
        |       |       |-feed.service.ts
        |       |       |
        |       |       |-standings.service.spec.ts
        |       |       |
        |       |       |-standings.service.ts
        |       |
        |       |-standings-chart/                    ** Main component for standings
        |       |       |
        |       |       |-standings-chart.component.css
        |       |       |
        |       |       |-standings-chart.component.html
        |       |       |
        |       |       |-standings-chart.component.spec.ts
        |       |       |
        |       |       |-standings-chart.component.ts
        |       |
        |       |-tweet/
        |       |       |
        |       |       |-tweet.component.css
        |       |       |
        |       |       |-tweet.component.html
        |       |       |
        |       |       |-tweet.component.spec.ts
        |       |       |
        |       |       |-tweet.component.ts
        |
        |-assets/
        |        |
        |        |-data/
        |       |       |
        |       |       |-17-feed.json
        |       |       |
        |       |       |-17-standings.json  
        |       |
        |       |-images/
        |                |
        |                |-logo_twitter_LR.png     
        |
        |-environments/
        |       |
        |       |-environment.prod.ts
        |       |
        |       |-environment.ts
        |
        |-favicon.ico
        |
        |-index.html
        |
        |-main.ts
        |
        |-polyfills.ts
        |
        |-server.ts                                     ** server that gets every request and sends angular app.
        |
        |-styles.css
        |
        |-test.ts
        |
        |-tsconfig.app.json
        |
        |-tsconfig.spec.json
        |
        |-typings.d.ts


## Running Universal app

Important: If your are running the app for the first time run `ng serve` before.

Run `npm run start` to compiles the app and runs the server app. Navigate to `http://localhost:4000/`.

this command also generates the client app in production.

## Running dev client app

Run `ng serve` and navigate to `http://localhost:4200/`.

## Code scaffolding

Run `ng generate component component-name --module=app.module.ts` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## 
