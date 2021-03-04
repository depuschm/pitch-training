const videoParent = document.getElementById("videos");
const videos = {
	"C": [
	],
	"C#": [
		"https://www.youtube.com/embed/4HIKME11MUk?start=10&end=14"
	],
	"D": [
		"https://www.youtube.com/embed/6QW4mQwmxec?start=16&end=22",
		"https://www.youtube.com/embed/jS_ykANWJlg?start=4&end=10",
		"https://www.youtube.com/embed/lBcnlJclqxs?start=46&end=54",
		"https://www.youtube.com/embed/Z98nLn4u158?start=18&end=25"
	],
	"D#": [
	],
	"E": [
		"https://www.youtube.com/embed/3jOsHod6zWM?start=7&end=19"
	],
	"F": [
		"https://www.youtube.com/embed/eFVaaRO_KoI?start=1&end=9"
	],
	"F#": [
		"https://www.youtube.com/embed/UanB-mS1vgk?start=4&end=9"
	],
	"G": [
		"https://www.youtube.com/embed/r2Sf8_X3R90?start=19&end=26"
	],
	"G#": [
		"https://www.youtube.com/embed/hiTclNHIZU4?start=30&end=36"
	],
	"A": [
		"https://www.youtube.com/embed/7nGp7rIpM0E?start=25&end=29",
		"https://www.youtube.com/embed/5i-DwAl-rhU?start=1&end=7"
	],
	"A#": [
		"https://www.youtube.com/embed/UIXthxvnSwY?start=3&end=12"
	],
	"B": [
		"https://www.youtube.com/embed/90ZZYY98NPo?start=18&end=26",
		"https://www.youtube.com/embed/pouxqiySdI8?start=56&end=62"
	]
};

function loadVideos(parent, noteIndex) {
	videoParent.innerHTML = "";
	for (const [key, value] of Object.entries(videos)) {
		if (parent == buttonsWhite && notesWhite[noteIndex] == key ||
			parent == buttonsBlack && notesBlack[noteIndex] == key) {
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
