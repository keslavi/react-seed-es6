semi documenting as I go...
rebuilding the react seed from scratch using create-react-app. 

As I go, I'll continue adding to this document.

if windows, I encourage this portion in Command Window
> npx create-react-app app
> cd ./app
> npm i axios axios-mock-adapter font-awesome jquery lodash moment popper.js react-hook-form react-redux react-router-dom react-toastify redux redux-logger redux-logger redux-mock-store redux-promise redux-saga redux-saga-test-plan sass yup

now clean up any package audit issue
> cls && npm audit
> (run commands as specified in audit)

when building SPA apps, the data model is most important. 
therefore, I prioritize getting a store in place for global state management.

[side note]
components should be built up from: 
	api or mock sending data
	store action:  build unit test with mock from the live endpoint
	store reducer: build unit test with mock from live endpoint
	attach to store in rootReducer
	NOW build a component
		I use helper/textareadebug to display the results in JSON
	if the data requires massaging, either
		create a transform for the reducer to adjust (preferred)
		adjust in saga and send to reducer


open in Visual Code
  file/preferences/settings
  	search tab
  		editor tab size: 2
  		editor insert spaces: true
  extensions: 
  	not being exhaustive, these are what i consider high priority
  	prettier:		autoformatting code, json, etc
  	gitlens:		helps see changes better
  	jest:				helps with testing
  	jest snippets: autocomplete common scenarios


improve import statement handling:
	adjust so that import statements don't have to use relative pathing
	example:   import {item} from 'components' knows it's src/components

	add /jsonconfig.json  
	{
	    "compilerOptions": {
	      "baseUrl": "src"
	    },
	    "include": ["src"]
	}

package.json changes:
	usually, in development, you can face CORS issues connecting to an api. 
	in package.json, introduce a proxy to account for this

	"proxy": "http://localhost:5000", //for seed, this is the koa server location

	this can be more complex with multiples but i try to have only one api endpoint

	also, as personal preference, i move dependancy devdependancies to the bottom of the file


add configuration folder: 
	most projects need some configuration for different environments to handle
		api location
		env name
		debug settings  //different from react's debug, can be viewed in prod

		1. copy the seed config folder
		2. in package.json, scripts, add:

  "scripts": {
    "start": "npm run dev",
    "dev": "set REACT_APP_CONFIG=dev & react-scripts start",
    "pl1": "set REACT_APP_CONFIG=pl1 & react-scripts start",
    "pl2": "set REACT_APP_CONFIG=pl2 & react-scripts start",
    "prod": "set REACT_APP_CONFIG=prod & react-scripts start",
    "start0": "cls & clear & react-scripts start",
    "build": "react-scripts build", //default config port should be prod
    "test": "set REACT_APP_CONFIG=test & react-scripts test --testURL=http://localhost:5000",
  },

  usage: 
  import config from 'config';


add Redux store
	normally, when performing CRUD operations, you'll want to include global state management. 
	I'm assuming a larger system will be built so I add redux out of the gate
	
	copy from react-seed, copy /src/store
		this store has the following already set: 
			actions,
			reducers,
			a store helper function (most examples build it in /src/index.js)
			axios helper for http that has intercepts to display and handle common errors

			redux-promise for handling simple requests
			redux-saga for handling complex requests (multiple calls combined)			

	in /src/index.js, add the import, Provider and store 

	actions will use config (discussed earlier) to find the api location
	http requests in dev mode will use proxy to avoid CORS errors

	in general, I try to use a single api location, even if it's a gateway to other api locations

InitState.jsx
	InitState is a component that fires various initial actions as needed
	examples: 
		actProfile_R   (retrieve the user profile or re-route to a logon)
		actOptions_R   (retrieve the list of potential options for dropdowns)

notification messages 
	using React-Toastify, so in /src/index.js we add the toast container

styling: 
	react easily uses sass (after installing npm i sass)
	/src/scss is the location to add css framework of choice.
		(note:material ui handles things differently, but custom css should be applied in here)
		
Routing: 
  add routing via react-router-dom@6 
	https://reactrouter.com/docs/en/v6/getting-started/tutorial

		/router.jsx holds the menu object and routing
		/index implements routing
		/app.jsx is called INSIDE router and displays route paths via <Outlet/>

		developers used to index, app paradigm still navigate without thinking, but see the router file.













