const readingsBlock = document.querySelector('.readings__container');
const playName = readingsBlock.querySelector('.readings__play');
const readingsWatchBlock = readingsBlock.querySelector('.readings__watch');
const readingsDownloadBlock = readingsBlock.querySelector('.readings__download');

playName.addEventListener('mouseover', function() {
  readingsWatchBlock.classList.add('readings__watch_visible');
  readingsDownloadBlock.classList.add('readings__download_visible');
});

readingsBlock.addEventListener('mouseleave', function() {
  if (readingsWatchBlock.classList.contains('readings__watch_visible')) {
    readingsWatchBlock.classList.remove('readings__watch_visible');
    readingsDownloadBlock.classList.remove('readings__download_visible')
  }
})
