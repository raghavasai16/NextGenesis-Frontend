// Audio feedback utility for accessibility and UX
// You can replace the URLs with local files if needed

const successSound = new Audio('https://cdn.pixabay.com/audio/2022/03/15/audio_115b9b7b1b.mp3'); // short success
const errorSound = new Audio('https://cdn.pixabay.com/audio/2022/03/15/audio_115b9b7b1b.mp3'); // short error (replace with error sound)
const notificationSound = new Audio('https://cdn.pixabay.com/audio/2022/03/15/audio_115b9b7b1b.mp3'); // short notification (replace with notification sound)

export function playSuccess() {
  successSound.currentTime = 0;
  successSound.play();
}

export function playError() {
  errorSound.currentTime = 0;
  errorSound.play();
}

export function playNotification() {
  notificationSound.currentTime = 0;
  notificationSound.play();
} 