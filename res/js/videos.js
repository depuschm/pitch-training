const videoParent = document.getElementById("videos");
let videos;

const videosCheckbox = document.getElementById("checkboxVideos");
let lastParent, lastNoteIndex, lastOctave;

const selectedFileText = document.getElementById("selectedFile");

function initVideos() {
	videosCheckbox.addEventListener('change', function() {
		if (lastParent != null) {
			loadVideos(lastParent, lastNoteIndex, lastOctave);
		}
	});
	loadJSON("default");
	initSelectButton();
}

function loadJSON(name) {
	fetch("res/json/" + name + ".json")
	.then(response => response.json())
	.then(json => videos = json);
}

function loadVideos(parent, noteIndex, octave) {
	videoParent.innerHTML = "";
	
	if (videosCheckbox.checked) {
		let note = notesWhite[noteIndex];
		if (parent == buttonsBlack) note = notesBlack[noteIndex];
		note += octave;
		
		for (const [key, value] of Object.entries(videos)) {
			if (note == key) {
				addVideo(videoParent, value);
			}
		}
	}
	lastParent = parent;
	lastNoteIndex = noteIndex;
	lastOctave = octave;
}

function addVideo(parent, sources) {
	for (i = 0; i < sources.length; i++) {
		let source = sources[i];
		let video = document.createElement('iframe');
		video.width = 560;
		video.height = 315;
		video.src = source;
		video.frameBorder = 0;
		parent.appendChild(video);
	}
}

// Inspired by: https://web.dev/read-files/
function initSelectButton() {
	const buttonSelect = document.getElementById("buttonSelect");
	const buttonSelectHidden = document.getElementById("buttonSelectHidden");
	
	buttonSelect.addEventListener('click', (event) => {
		buttonSelectHidden.click();
	});
	buttonSelectHidden.addEventListener('change', (event) => {
		const files = event.target.files;
		const file = files.item(0);
		
		// Check if the file is a json file
		if (file.type && file.type.indexOf('json') === -1) {
			alert("Wrong format. Select a JSON file!");
			return;
		}
		
		// Read the file
		const reader = new FileReader();
		reader.addEventListener('load', (event) => {
			let result = event.target.result;
			let json = JSON.parse(result);
			videos = json;
			selectedFileText.innerHTML = file.name;
			
			const e = new Event("change");
			videosCheckbox.dispatchEvent(e);
		});
		reader.readAsText(file);
	});
}
