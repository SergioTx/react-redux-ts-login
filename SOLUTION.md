# React Redux Ts Login

The app was created with CRA for convenience. In previous apps I have been creating a boilerplate with snowpack, but here the main topics were Redux and TS.

## Libraries

As mentioned earlier, I used React, Redux and Ts as the main libraries.

I also used react-router-dom for the router, redux-thunk for asynchonous calls inside Redux and redux-devtools-extension to setup the browser extension. It is a simple official library to set it up easily. It is set for both production and develpment (the extension has a only-dev mode) as I do not store any sensitive data. Besides, all data in the frontend can be found easily by someone with enough knowledge.

For the http calls I used the default fetch API. I did not find necessary to add another library to use it 3 times.

### Redux

I split up the store into 3 different parts:

- auth: stores the login credentials.
- settings: stores the data in the settings tab.
- dashboard: stores the data in the dashboard tab.

All the redux-related code can be found inside the store folder. Each of the parts has a folder with all the related files.

I did not use the Redux Toolkit although I think everything looks way cleaner with it. The reason is the same as before with other packages, it is a tiny app and I have tried to use as less libraries as possible.

### Typescript

Typescript was set to strict to force typing of everything.

I normally create a interfaces folder for the typescript interfaces, but here I stored the interfaces in each of the redux parts because I feel they fit better in there.

I did not set up the eslint for typescript either. I find it really useful in larger projects.

In the Redux part I did not have expertise with Typescript so I followed the official guide that has a specific TS part.

## Login and data

Login is performed against Firebase. It returns a JWT. All the data of the app is behind that login and all the subsequent data fetches need that jwt to work.

In the description it was requested to obtain the user name from the JWT, but as Firebase returns it directly, I found it unnecesary. Instead, I stored the user email and the JWT inside Redux to use them. Calculating data that was also returned by the backend did not make sense for me (and also would have meant adding a library).

## Git

I didn't follow any git flow pattern. If I had to work in a bigger project I would have created a feature branch for each of the parts.

Also, commits were not atomic at all. I started testing different ideas and when I finally had something stable I commited. Normally I try to create commits as small as possible to revert them if needed.

## Testing

The app now lacks testing. In a real app I would have added testing, but I just wanted to focus on the react-redux-ts part.
