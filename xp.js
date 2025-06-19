const STORAGE_KEY = 'userProgress';
const LEVELS = [
  { level: 1, xp: 0 },
  { level: 2, xp: 100 },
  { level: 3, xp: 250 },
  { level: 4, xp: 500 },
];

function loadProgress() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : { xp: 0, completed: [] };
}

function saveProgress(progress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function addXP(amount) {
  const progress = loadProgress();
  progress.xp += amount;
  saveProgress(progress);
}

function hasCompleted(id) {
  const progress = loadProgress();
  return progress.completed.includes(id);
}

function completeLesson(id, xp = 50) {
  const progress = loadProgress();
  if (!progress.completed.includes(id)) {
    progress.completed.push(id);
    progress.xp += xp;
    saveProgress(progress);
  }
}

function currentLevel(xp) {
  for (let i = LEVELS.length - 1; i >= 0; i--) {
    if (xp >= LEVELS[i].xp) return LEVELS[i].level;
  }
  return 1;
}

function nextLevelXP(xp) {
  for (let i = 0; i < LEVELS.length; i++) {
    if (xp < LEVELS[i].xp) return LEVELS[i].xp;
  }
  return LEVELS[LEVELS.length - 1].xp;
}

function getProgress() {
  return loadProgress();
}
