const videoParent = document.getElementById("videos");
const videos = {
	"A0": [],
	"A#0": [],
	"B0": [],
	
	"C1": [],
	"C#1": [],
	"D1": [],
	"D#1": [],
	"E1": [],
	"F1": [],
	"F#1": [],
	"G1": [],
	"G#1": [],
	"A1": [],
	"A#1": [],
	"B1": [],
	
	"C2": [],
	"C#2": [],
	"D2": [],
	"D#2": [],
	"E2": [],
	"F2": [],
	"F#2": [],
	"G2": [],
	"G#2": [],
	"A2": [],
	"A#2": [],
	"B2": [],
	
	"C3": [],
	"C#3": [],
	"D3": [],
	"D#3": [],
	"E3": [],
	"F3": [],
	"F#3": [],
	"G3": [],
	"G#3": [],
	"A3": [],
	"A#3": [],
	"B3": [],
	
	"C4": [],
	"C#4": [
		"https://www.youtube.com/embed/4HIKME11MUk?start=10&end=14"
	],
	"D4": [
		"https://www.youtube.com/embed/6QW4mQwmxec?start=16&end=22",
		"https://www.youtube.com/embed/jS_ykANWJlg?start=4&end=10",
		"https://www.youtube.com/embed/lBcnlJclqxs?start=46&end=54",
		"https://www.youtube.com/embed/Z98nLn4u158?start=18&end=25"
	],
	"D#4": [],
	"E4": [
		"https://www.youtube.com/embed/3jOsHod6zWM?start=7&end=19"
	],
	"F4": [
		"https://www.youtube.com/embed/eFVaaRO_KoI?start=1&end=9"
	],
	"F#4": [
		"https://www.youtube.com/embed/UanB-mS1vgk?start=4&end=9"
	],
	"G4": [
		"https://www.youtube.com/embed/r2Sf8_X3R90?start=19&end=26"
	],
	"G#4": [
		"https://www.youtube.com/embed/hiTclNHIZU4?start=30&end=36"
	],
	"A4": [
		"https://www.youtube.com/embed/7nGp7rIpM0E?start=25&end=29",
		"https://www.youtube.com/embed/5i-DwAl-rhU?start=1&end=7"
	],
	"A#4": [
		"https://www.youtube.com/embed/UIXthxvnSwY?start=3&end=12"
	],
	"B4": [
		"https://www.youtube.com/embed/90ZZYY98NPo?start=18&end=26",
		"https://www.youtube.com/embed/pouxqiySdI8?start=56&end=62"
	],
	
	"C5": [],
	"C#5": [],
	"D5": [],
	"D#5": [],
	"E5": [],
	"F5": [],
	"F#5": [],
	"G5": [],
	"G#5": [],
	"A5": [],
	"A#5": [],
	"B5": [],
	
	"C6": [],
	"C#6": [],
	"D6": [],
	"D#6": [],
	"E6": [],
	"F6": [],
	"F#6": [],
	"G6": [],
	"G#6": [],
	"A6": [],
	"A#6": [],
	"B6": [],
	
	"C7": [],
	"C#7": [],
	"D7": [],
	"D#7": [],
	"E7": [],
	"F7": [],
	"F#7": [],
	"G7": [],
	"G#7": [],
	"A7": [],
	"A#7": [],
	"B7": [],
	
	"C8": []
};

function loadVideos(parent, noteIndex, octave) {
	videoParent.innerHTML = "";
	
	let note = notesWhite[noteIndex];
	if (parent == buttonsBlack) note = notesBlack[noteIndex];
	note += octave;
	
	for (const [key, value] of Object.entries(videos)) {
		if (note == key) {
			addVideo(videoParent, value);
		}
	}
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
