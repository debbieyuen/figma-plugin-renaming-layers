figma.showUI(__html__);

figma.ui.onmessage = (msg) => {
  // Print out input from user
  console.log(msg.count);

  // Grab specific layers
  // const takeActionButton = figma.root.findOne(node => "COMPONENT" && node.name == "Take action") as ComponentNode;
  // const twoWheelsTile = figma.root.findOne(node => "COMPONENT" && node.name == "Square buttons") as ComponentNode;
  // const homeAddress = figma.root.findOne(node => "COMPONENT" && node.name == "list #1") as ComponentNode;
  
  // Select user's selected component
  const selectedComponent = figma.currentPage.selection;
  const selectedSiblings = selectedComponent[0].parent.children;

  // If user is selecting a component
  if (selectedComponent) {
    // Loop through and find its siblings
    for (let i = 0; i < selectedSiblings.length; i++) {
      // Check to make sure its the same type of component 
      if (selectedSiblings[i].type == selectedComponent[0].type && selectedSiblings[i].height == selectedComponent[0].height && selectedSiblings[i].width == selectedComponent[0].width) {
        selectedSiblings[i].name = msg.count;
      }
      
    }
  }

  // for (let i = 0; i < takeActionButton.parent.children.length; i++) {
  //   if (takeActionButton.parent.children[i].type ==)
  //   takeActionButton.parent.children[i].name = msg.count;
  // }

  // Change the name of specific layers
  // takeActionButton.name = msg.count;
  // twoWheelsTile.name = msg.count;
  // homeAddress.name = msg.count;

  // Debugging
  // console.log(takeActionButton);
  // console.log(takeActionButton.name);
  // console.log(homeAddress.children);
  // console.log("Parent Name: " + homeAddress.parent.name);
  // console.log("Siblings: " + homeAddress.parent.children);
  // console.log("Number of Children: " + homeAddress.children.length);

  // console.log(twoWheelsTile);
  // console.log(twoWheelsTile.name);

  // console.log(homeAddress);
  // console.log(homeAddress.name);

  if (msg.type === 'rename-layers') {

    figma.currentPage.selection = selectedComponent;
    figma.viewport.scrollAndZoomIntoView(selectedComponent);

    // This is how figma responds back to the ui
    figma.ui.postMessage({
      type: 'rename-layers',
      message: `Modified layer's name to ${msg.count}`,
    });
  }

  // figma.closePlugin();
};
