const instrumentSelect = document.getElementById("selectInstrument");
let instrument = instrumentSelect.value.split(':');

let generalMIDINumber = instrument[0];
let generalMIDIInstrument = instrument[1];

let delay = 0; // play one note every quarter second
let velocity = 127; // how hard the note hits
let volume = 63; // how loud the note is

function initAudio() {
	instrumentSelect.addEventListener('change', function() {
		instrument = instrumentSelect.value.split(':');
		generalMIDINumber = instrument[0];
		generalMIDIInstrument = instrument[1];
		LoadMIDIPlugin();
	});
	LoadMIDIPlugin();
}

/**
 * MIDI instrument codes:
 * https://en.wikipedia.org/wiki/General_MIDI
 *
 * Alternative external soundfont URL:
 * "http://www.song-data.com/3rd/MIDIjs/soundfont/"
 */
function LoadMIDIPlugin() {
	MIDI.loadPlugin({
		soundfontUrl: "res/soundfont/",
		instrument: generalMIDIInstrument,
		onsuccess: function() {
			MIDI.programChange(0, generalMIDINumber);
			MIDI.setVolume(0, volume);
		}
	});
}

/**
 * MIDI note table (Piano with 88 keys starts with index 21):
 * https://www.inspiredacoustics.com/en/MIDI_note_numbers_and_center_frequencies
 */
function playAudio(parent, noteIndex, octave) {
	let noteName = notesWhite[noteIndex];
	if (parent == buttonsBlack) noteName = notesBlack[noteIndex];
	noteName += octave;
	
	let note = 21 + Object.keys(videos).indexOf(noteName);
	playMIDI(note);
}

function playMIDI(note) {
	MIDI.noteOn(0, note, velocity, delay);
	MIDI.noteOff(0, note, delay + 0.75);
}