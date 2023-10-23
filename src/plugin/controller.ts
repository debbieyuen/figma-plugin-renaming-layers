figma.showUI(__html__);

figma.ui.onmessage = (msg) => {
  // Print out input from user
  console.log(msg.selectedName);

  // Select user's selected component
  const selectedComponent = figma.currentPage.selection;
  const selectedSiblings = selectedComponent[0].parent.children;

  // If user is selecting a component
  if (selectedComponent) {
    // Loop through and find its siblings
    for (let i = 0; i < selectedSiblings.length; i++) {
      // Check to make sure its the same type of component 
      if (selectedSiblings[i].type == selectedComponent[0].type && selectedSiblings[i].height == selectedComponent[0].height && selectedSiblings[i].width == selectedComponent[0].width) {
        selectedSiblings[i].name = msg.selectedName;
      }
    }
  }

  if (msg.type === 'rename-layers') {

    figma.currentPage.selection = selectedComponent;
    figma.viewport.scrollAndZoomIntoView(selectedComponent);

    // This is how figma responds back to the UI
    figma.ui.postMessage({
      type: 'rename-layers',
      message: `Modified layer's name to ${msg.selectedName}`,
    });
  }

  // figma.closePlugin();
};
