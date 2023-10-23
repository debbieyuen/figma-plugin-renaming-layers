figma.showUI(__html__);

figma.ui.onmessage = (msg) => {
  // Print out input from user
  console.log(msg.count);

  // Grab specific layers
  const takeActionButton = figma.root.findOne(node => "COMPONENT" && node.name == "Take action") as ComponentNode;
  const twoWheelsTile = figma.root.findOne(node => "COMPONENT" && node.name == "Square buttons") as ComponentNode;
  const homeAddress = figma.root.findOne(node => "COMPONENT" && node.name == "list #1") as ComponentNode;
  
  // Select user's selected component
  const selectedComponent = figma.currentPage.selection;

  // Change the name of the component
  if (selectedComponent) {
    selectedComponent[0].name = msg.count;
  }

  // Change the name of specific layers
  // takeActionButton.name = msg.count;
  // twoWheelsTile.name = msg.count;
  // homeAddress.name = msg.count;

  // Debugging
  console.log(takeActionButton);
  console.log(takeActionButton.name);

  console.log(twoWheelsTile);
  console.log(twoWheelsTile.name);

  console.log(homeAddress);
  console.log(homeAddress.name);

  if (msg.type === 'rename-layers') {

    figma.currentPage.selection = selectedComponent;
    figma.viewport.scrollAndZoomIntoView(selectedComponent);

    // This is how figma responds back to the ui
    figma.ui.postMessage({
      type: 'rename-layers',
      message: `Modified layer's name to ${msg.count}`,
    });
  }

  figma.closePlugin();
};
