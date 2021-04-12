export function load() {
  return JSON.parse(localStorage.getItem('travel-app-team-v'));
}

export const gameSave = {}

export function parseSave() {
  const saveData = load();
  Object.keys(saveData).forEach((key) => {
    gameSave[key] = saveData[key];
  });
}

export function save(data = {}) {
  const savedGame = JSON.parse(localStorage.getItem('travel-app-team-v'));
  const newData = { ...savedGame, ...data };
  localStorage.setItem('travel-app-team-v', JSON.stringify(newData));
  parseSave();
}

export function setDefault() {
  save({
    music: '1',
    sounds: '1',
  });
}
