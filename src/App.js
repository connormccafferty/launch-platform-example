import React, { useState, useEffect } from "react";

const App = () => {
  const [version, setVersion] = useState(null);

  useEffect(() => {
    async function getVersion() {
      const v = await window.fin.System.getVersion();
      setVersion(v);
    }
    async function initPlatform() {
      await window.fin.Platform.start({
        uuid: "example-platform",
        autoShow: false,
        defaultWindowOptions: {
          cornerRounding: {
            height: 10,
            width: 10
          },
          contextMenu: true
        }
      });
    }
    initPlatform();
    getVersion();
  }, []);

  const launchPlatform = async () => {
    const platform = await fin.Platform.wrap({
      uuid: "example-platform"
    });
    platform
      .createWindow({
        uuid: "example-platform",
        name: "test_window",
        layout: {
          content: [
            {
              type: "stack",
              content: [
                {
                  type: "component",
                  componentName: "view",
                  componentState: {
                    name: "test_view_1",
                    url: "https://example.com"
                  }
                },
                {
                  type: "component",
                  componentName: "view",
                  componentState: {
                    name: "test_view_2",
                    url: "https://www.google.com" // The URL of the View
                  }
                }
              ]
            }
          ]
        }
      })
      .then(console.log);
  };

  return (
    <div className="main">
      <div className="logo-container">
        <img src="assets/logo.svg" />
      </div>
      <div>
        <h1>Hello, world!</h1>
        <p>This is a template for an OpenFin React Application</p>
        <p>Current Version: {version}</p>
        <button onClick={() => launchPlatform()}>launch platform</button>
      </div>
    </div>
  );
};

export default App;
