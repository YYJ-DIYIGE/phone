function resizeRem() {
  let docElement = document.documentElement;
  let width = docElement.getBoundingClientRect().width;
  let rem = width/10;
  docElement.style.fontSize=rem+'px';
}
window.addEventListener('pageshow', resizeRem);
window.addEventListener('resize', resizeRem);

