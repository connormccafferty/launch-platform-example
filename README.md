## Launch Platform Example

Example of a platform being launched from an OpenFin application that was started with a standard manifest. The Platform provider is initiated in the `App` component's `useEffect` by calling [Platform.start](https://cdn.openfin.co/docs/javascript/stable/tutorial-Platform.start.html). Then you can create a Platform window with views by clicking the `launch platform` button which creates a new window with [Platform.createWindow](https://cdn.openfin.co/docs/javascript/stable/tutorial-Platform.createWindow.html).

### How to use this:

- Clone this repository: `git clone https://github.com/connormccafferty/launch-platform-example.git`
- Install the dependencies: `cd launch-platform-example & npm install`
- Start the live-server and launch the application: `npm start`
