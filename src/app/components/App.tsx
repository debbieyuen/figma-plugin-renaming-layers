import React from 'react';
import '../styles/ui.css';

function App() {
  const textbox = React.useRef<HTMLInputElement>(undefined);

  const countRef = React.useCallback((element: HTMLInputElement) => {
    if (element) element.value = 'New Layer Name';
    textbox.current = element;
  }, []);



  const onClick = () => {
    const count = textbox.current.value;
    // const count = parseInt(textbox.current.value, 10);
    parent.postMessage({ pluginMessage: { type: 'create-rectangles', count } }, '*');
    // Print out input from user
    console.log(count);
  };

  // const onCancel = () => {
  //   parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*');
  // };

  React.useEffect(() => {
    // This is how we read messages sent from the plugin controller
    window.onmessage = (event) => {
      const { type, message } = event.data.pluginMessage;
      if (type === 'create-rectangles') {
        console.log(`Figma Says: ${message}`);
      }
    };
  }, []);

  return (
    <div>
      {/* <img src={logo} /> */}
      <h2>Renaming Layers</h2>
      <p>
      Automatically and quickly rename your layer names! In the input space below, type in the name of your choice. The text input will rename to whatever naming convention of your choice. 
      </p>
      <input id="text" ref={countRef} />
      <button id="create" onClick={onClick}>
        Rename
      </button>
      
      {/* <button onClick={onCancel}>Cancel</button> */}
    </div>
  );
}

export default App;
