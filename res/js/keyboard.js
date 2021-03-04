const notesWhite = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
const notesBlack = ['C#', 'D#', '', 'F#', 'G#', 'A#', ''];
const startNote = 5;
const amountWhiteNotes = 52;
const offsetXIncreaseWhite = 24;
const offsetXIncreaseBlack = 17;
let button;
let lastButtonClicked;
let totalWidth;
let offsetX;

let buttonsWhite = document.getElementById("button-white");
for (i = 0; i < amountWhiteNotes; i++) {
	let noteIndex = (i + startNote) % notesWhite.length;
	let octave = Math.floor((i + startNote) / notesWhite.length);
	if (notesWhite[noteIndex].length > 0) {
		button = addButton(buttonsWhite, noteIndex, octave);
		button.className += ' white';
		
		// Text
		let octavePart = "";
		if (noteIndex == 0) octavePart = "<sub>" + octave + "</sub>"
		button.innerHTML = notesWhite[noteIndex] + octavePart;
		
		// Position
		offsetX = i * offsetXIncreaseWhite;
		button.style.left = offsetX + "px";
	}
}
totalWidth = offsetX + offsetXIncreaseWhite;

let buttonsBlack = document.getElementById("button-black");
buttons = buttonsBlack.children;
for (i = 0; i < (amountWhiteNotes - 1); i++) {
	let noteIndex = (i + startNote) % notesBlack.length;
	let octave = Math.floor((i + startNote) / notesBlack.length);
	if (notesBlack[noteIndex].length > 0) {
		button = addButton(buttonsBlack, noteIndex, octave);
		button.className += ' black';
		
		// Text
		button.innerHTML = notesBlack[noteIndex];
		
		// Position
		offsetX = i * offsetXIncreaseWhite + offsetXIncreaseBlack;
		button.style.left = offsetX + "px";
	}
}

let buttonsParent = document.getElementById("buttons");
centerButtons(buttonsParent);

function addButton(parent, noteIndex, octave) {
	let button = document.createElement('span');
	button.className = 'button';
	button.style.cursor = 'pointer';
	button.addEventListener("click", function() {
		colorButtons(button);
		playAudio(parent, noteIndex, octave);
		loadVideos(parent, noteIndex, octave);
	});
	return parent.appendChild(button);  
}

function colorButtons(button) {
	if (lastButtonClicked != null) {
		uncolorButton(lastButtonClicked);
	}
	colorButton(button);
	
	lastButtonClicked = button;
}

function uncolorButton(button) {
	if (button.classList.contains("white")) {
		button.style.backgroundColor = "white"; 
	} else {
		button.style.backgroundColor = "black";
	}
}

function colorButton(button) {
	if (button.classList.contains("white")) {
		button.style.backgroundColor = "rgb(190, 230, 230)"; 
	} else {
		button.style.backgroundColor = "rgb(0, 128, 128)";
	}
}

function centerButtons(parent) {
	let marginLeft = 5 - (totalWidth / 2);
	parent.style.marginLeft = marginLeft + "px";
}
