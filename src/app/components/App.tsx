import React from 'react';
import '../styles/ui.css';

function App() {
  const textbox = React.useRef<HTMLInputElement>(undefined);

  const countRef = React.useCallback((element: HTMLInputElement) => {
    if (element) element.value = 'New Layer Name';
    textbox.current = element;
  }, []);

  const onClick = () => {
    const selectedName = textbox.current.value;
    parent.postMessage({ pluginMessage: { type: 'rename-layers', selectedName } }, '*');
  };

  React.useEffect(() => {
    // Read messages sent from the plugin controller
    window.onmessage = (event) => {
      const { type, message } = event.data.pluginMessage;
      if (type === 'rename-layers') {
        console.log(`Figma Says: ${message}`);
      }
    };
  }, []);

  return (
    <div>
      <h2>Renaming Layers</h2>
      <p>Automatically and quickly rename your layer names! In the input space below, type in the name of your choice. The text input will rename to whatever naming convention of your choice. </p>
      <input id="text" ref={countRef} />
      <button id="create" onClick={onClick}>Rename</button>
    </div>
  );
}

export default App;
