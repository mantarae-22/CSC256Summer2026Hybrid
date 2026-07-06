 // we use the document object model to change the text of the first paragraph using the id that we set
// textContent is the best way to change text on the page from a performance perspective; if you need to add HTML to your text, you can use innerHTML
document.getElementById("pLab").textContent = "Try to escape the lab before the bacteria.";

// add the island description
document.getElementById("pIsland").textContent = "Swim away before time is up.";

// add the pyramid description
document.getElementById("pPyramid").textContent = "Find your way out of the pyramid before the mummy awakens.";