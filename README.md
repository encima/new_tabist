# Newtabist

## What?

Nothing, really. And I mean that. Eventually, this will be a new tab extension to show Todoist filters. Right now, it is a shambles of builders and codes

## Why?

Vue/Angular/React (Renanguelar?) is fun and all but I want more! Here, I wanted to do some fun templating that was not JSX, some more standalone JS that is not just standalone by being in a separate file. Sure, this could be finished in a day if I used Reanguelar, but where is the fun in that?

## How?

Well, with the use of these friends:
* Pug for templating
* Stimulus JS for standalone logic
* TypeScript for hipster points (and some type checking when dealing with the todoist API)
* Gulp for handling the pug to HTML shiz and Stimulus to JS dist stuff
* Parcel for auto handling of js files and because webpack is a clusterfudge of bastardised configs

## Notes

This uses the `todoist-api-ts` package and the root URL for todoist is wrong. A PR has been opened but, if you feel some weird urge to run this, you will need to run `npm i` and then replace the URL in `dist/TodoistApiREST.js`.

## TODO

* [ ] Load task lists from browser storage
* [ ] Load API key for user from storage
* [ ] Create settings page
* [ ] Complete build steps for stimulus to a single `bundle.js` file