# Task

## What to build

Using Smarkets public API https://docs.smarkets.com, build a single page application which performs the following actions:
- Display a list/table of upcoming events for a given event type. The url for this is https://api.smarkets.com/v3/events/?state=upcoming&type=event_type
- Dropdown of event types (for a full list of event types check the API documentation for GET/v3/events/)
- When one selects a new event type from the dropdown, the app should update the list of events accordingly.


## Choices Made:

- Given this is a Senior React Native position, I decided to use React Native Web (RNW). Expo provides a good RNW experience. As a result of this, I opted to use Managed Expo.
- Expo web is in late beta (you can follow the V1 release for more info: https://github.com/expo/expo/issues/6782), as a result I wouldn't use this approach for a production app, I'd probably choose Next and a React focused design system, antd for example. 
- Instead of a Sass framework, Due to using RNW, I decided to use an RNW compatible component library - React Native Paper 

## How to run:
- Run Proxy Server: `$ cd server && yarn start`
- Install Expo CLI: `$ npm i -g expo-cli`
- and then choose a Platform to view the App:
    - Run Web Version: `$ yarn web` 
    - Run Android with an installed Emulator: `adb reverse tcp:3000 tcp:3000 && yarn android`
    - Run iOS with XCode installed: `adb reverse tcp:3000 tcp:3000 && yarn android`

## Tests

- I added a simple Cypress test to demonstrate RNW can be tested e2e. I've left a TODO, as I was unable to get the <select/> box working with Cypress. I'm more familiar with Detox. 
- If I had more time I would create tests to mock the API endpoint with jest and [Nock](https://github.com/nock/nock) or [MirageJS](https://miragejs.com/), and assert the Select component updates the list using [React Native Testing Library](https://github.com/callstack/react-native-testing-library). 
  
## Screenshots

View the screenshots folder to see examples across Web, iOS and Android.
