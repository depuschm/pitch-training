const videoParent = document.getElementById("videos");
let videos;

const videosCheckbox = document.getElementById("checkboxVideos");
let lastParent, lastNoteIndex, lastOctave;

const octaveCheckbox = document.getElementById("checkboxOctave");
const selectedFileText = document.getElementById("selectedFile");

const videosSelect = document.getElementById("selectVideos");
const videosDownload = document.getElementById("downloadVideos");

function initVideos() {
	videosCheckbox.addEventListener('change', function() {
		reloadVideos();
	});
	octaveCheckbox.addEventListener('change', function() {
		reloadVideos();
	});
	videosSelect.addEventListener('change', function() {
		loadJSON(videosSelect.value);
	});
	loadJSON(videosSelect.value);
	initSelectButton();
}

function loadJSON(name) {
	let path = "res/json/" + name + ".json";
	fetch(path)
	.then(response => response.json())
	.then(json => {
		videos = json;
		videosDownload.href = path;
		reloadVideos();
	});
}

function reloadVideos() {
	if (lastParent != null) {
		loadVideos(lastParent, lastNoteIndex, lastOctave);
	}
}

function loadVideos(parent, noteIndex, octave) {
	videoParent.innerHTML = "";
	
	if (videosCheckbox.checked) {
		let note = notesWhite[noteIndex];
		if (parent == buttonsBlack) note = notesBlack[noteIndex];
		note += octave;
		
		if (octaveCheckbox.checked) {
			note = note.substring(0, note.length - 1);
			for (let [key, value] of Object.entries(videos)) {
				key = key.substring(0, key.length - 1);
				if (note == key) {
					addVideo(videoParent, value);
				}
			}
		}
		else {
			for (const [key, value] of Object.entries(videos)) {
				if (note == key) {
					addVideo(videoParent, value);
				}
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
			reloadVideos();
		});
		reader.readAsText(file);
	});
}
