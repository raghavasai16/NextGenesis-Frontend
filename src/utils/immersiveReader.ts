// Immersive Reader utility using Web Speech API

let synth: SpeechSynthesis | null = typeof window !== 'undefined' ? window.speechSynthesis : null;
let utterance: SpeechSynthesisUtterance | null = null;

export function readTextAloud(text: string) {
  if (!synth) return;
  stopReading();
  utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 1;
  utterance.pitch = 1;
  utterance.lang = 'en-US';
  synth.speak(utterance);
}

export function pauseReading() {
  if (synth && synth.speaking && !synth.paused) {
    synth.pause();
  }
}

export function resumeReading() {
  if (synth && synth.paused) {
    synth.resume();
  }
}

export function stopReading() {
  if (synth && synth.speaking) {
    synth.cancel();
  }
}

export function readSelectedTextOr(text: string) {
  let selected = '';
  if (typeof window !== 'undefined') {
    selected = window.getSelection ? window.getSelection()?.toString() || '' : '';
  }
  readTextAloud(selected || text);
} 