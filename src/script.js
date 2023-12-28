// Array to store logged moods
let moods = [];

// Function to log the selected mood
function logMood(mood) {
  moods.push(mood);
  updateMoodList();
}

// Function to update the mood list in HTML
function updateMoodList() {
  const moodList = document.getElementById('moodList');
  moodList.innerHTML = '';
  moods.slice(-5).forEach(mood => {
    const li = document.createElement('li');
    li.textContent = mood;
    moodList.appendChild(li);
  });
}