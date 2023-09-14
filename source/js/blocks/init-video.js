import {videoBtn, onVideoBtnClick, video} from './video';

const tabletPoster = './img/index/video-tablet.png';
const desktopPoster = './img/index/video-desktop.png';

const breakpoint = window.matchMedia('(max-width:1199px)');

const breakpointChecker = () => {
  if (breakpoint.matches) {
    video.setAttribute('poster', tabletPoster);
  } else {
    video.setAttribute('poster', desktopPoster);
  }
};

export const initVideo = () => {
  videoBtn.addEventListener('click', onVideoBtnClick);
  breakpointChecker();
  window.addEventListener('resize', breakpointChecker);
};
