# Reproduction of react-navigation not working in StrictMode on web

### Setup
 - basic expo app made with `blank` template + react-native-web 
 - `react-navigation/native` + `/stack` installed

## Bug
 - the bug happens only on **Web** and only when we use linking config
 - on native apps linking and navigation work correctly
 - when we wrap the navigation root in `<React.StrictMode>` on web, then navigating breaks completely, and deeplinking also breaks;
  - when using `navigation.navigate` nothing happens
  - when entering app from a link we always land on the first screen in Stack

### Steps to reproduce
 - `npm install` + `npm run web`
 - go to `App.tsx` and make sure the const `USE_STRICT_MODE` is set to true
 - verify that deeplinking does not work and clicking Buttons on `Screen1` also do nothing
 - when we switch `USE_STRICT_MODE` to false everything works as expected