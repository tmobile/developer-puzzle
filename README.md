# T-Mobile Coding Challenge

### Important! Read this First !

Do **not** submit a pull request to this repository.  You PR wil be rejected and your submission ignored.

To _properly_ submit a coding challenge you must:

1. fork this repository
2. make the necessary changes
3. push changes to your forked origin 
4. send address of your fork to t-mobile.

We will review your fork online before and during your interview.


# Stocks coding challenge

## How to run the application

There are two apps: `stocks` and `stocks-api`.

- `stocks` is the front-end. It uses Angular 7 and Material. You can run this using `yarn serve:stocks`
- `stocks-api` uses Hapi and has a very minimal implementation. You can start the API server with `yarn serve:stocks-api`

A proxy has been set up in `stocks` to proxy calls to `locahost:3333` which is the port that the Hapi server listens on.

> You need to register for a token here: https://iexcloud.io/cloud-login#/register/ Use this token in the `environment.ts` file for the `stocks` app.

> The charting library is the Google charts API: https://developers.google.com/chart/

## Problem statement

[Original problem statement](https://github.com/tmobile/developer-kata/blob/master/puzzles/web-api/stock-broker.md)

### Task 1

Please provide a short code review of the base `master` branch:

1. What is done well?

The stock application has been created with modularized structure and utilize angular features on the app. The front end (stock) and back end/middle ware apps(stocks-api) are into the repository. As application grows, it can be straight forward to maintain with structure of application.

External Google chart component created as shared library component. The component can be used to display chart when other part of the application requires to display chart using Google plugin.

Ngrx store used to manage state of the application. Stock data price query Module created to have ngrx store information. Types(PriceQuery and PriceQueryResponse) are defined and Transformation utils created to transform response. If there are any model changes are happened and new attribute introduced, can be directly managed at the price query type file.Also, transformation utilize can be utilized only to send required information on the application.

Material - Angular material utilized for the material design for creating UX component

2. What would you change?

StoreDevToolsModule not requires to be used on prod mode.

Transform utils can be modified to send only required information in the application. The application does utilize date and close information from api response May be, If application requires to be extended in the future, then we may require few more information from the application.

Material and other common imports can be moved to separate module in order to manage common imports for the application. For stock application, we can have import dependent material module on the same component. When the application grows, it may requires multiple material module added into the application. It's better to manage dependency on common module.

Add error message for the period required validation.

Chart Component - Line Chart type is added directly on the shared component. Changes may not be required on the application since Line chart utilized on component. If different chart types requires to be utilized on the application, chart information could have been moved to parent component and passed the data to the shared chart component.

Accessibility tags are not added into the applications.

Stock API application - May not be required to change since it’s a just a Hello World route.When it requires to be implement multiple, its better to have separate file for route information and injected as plugin in the application.

3. Are there any code smells or problematic implementations?

Chart data will not get displayed since data are fetched from the async from the stock api., The issue can be resolved couple of different ways. Async operator can be used in the query observable or response data can be subscribed and binded to the component.

> Make a PR to fix at least one of the issues that you identify
 
 Issue is resolved on the master branch of the fork.

### Task 2

```
Business requirement: As a user I should be able to type into
the symbol field and make a valid time-frame selection so that
the graph is refreshed automatically without needing to click a button.
```

_**Make a PR from the branch `feat_stock_typeahead` to `master` and provide a code review on this PR**_

> Add comments to the PR. Focus on all items that you can see - this is a hypothetical example but let's treat it as a critical application. Then present these changes as another commit on the PR.

### Task 3

```
Business requirement: As a user I want to choose custom dates
so that I can view the trends within a specific period of time.
```

_**Implement this feature and make a PR from the branch `feat_custom_dates` to `master`.**_

> Use the material date-picker component

> We need two date-pickers: "from" and "to". The date-pickers should not allow selection of dates after the current day. "to" cannot be before "from" (selecting an invalid range should make both dates the same value)

### Task 4

```
Technical requirement: the server `stocks-api` should be used as a proxy
to make calls. Calls should be cached in memory to avoid querying for the
same data. If a query is not in cache we should call-through to the API.
```

_**Implement the solution and make a PR from the branch `feat_proxy_server` to `master`**_

> It is important to get the implementation working before trying to organize and clean it up.
