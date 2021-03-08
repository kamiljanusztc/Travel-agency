export const formatTime = (time) => {
  if (typeof time === 'undefined' || isNaN(time) || time < 0) {
    return null;
  } else {
    const seconds = Math.floor(time % 60);
    const minutes = Math.floor(time / 60 % 60);
    const hours = Math.floor(time / 3600);

    const correctSeconds = seconds.toString().padStart(2, '0');
    const correctMinutes = minutes.toString().padStart(2, '0');
    const correctHours = hours.toString().padStart(2, '0');

    const correctTime = correctHours + ':' + correctMinutes + ':' + correctSeconds;

    return correctTime;
  }
};
