const iframe = document.createElement('iframe');
const audioContainer = document.querySelector('[data-name="audio-container"]');
const FrameSettings = {
  frameborder: 0,
  width: 340,
  height: 220,
  style: 'border:none;width:340px;height:220px;',
  src: 'https://music.yandex.ru/iframe/#track/112912322/25474374',
  tabindex: -1,
};

const createFrame = () => {
  iframe.setAttribute('frameborder', FrameSettings.frameborder);
  iframe.setAttribute('width', FrameSettings.width);
  iframe.setAttribute('height', FrameSettings.height);
  iframe.setAttribute('style', FrameSettings.style);
  iframe.setAttribute('src', FrameSettings.src);
  iframe.setAttribute('tabindex', FrameSettings.tabindex);
};

export const initAudio = () => {
  if (audioContainer) {
    createFrame();
    audioContainer.append(iframe);
  }
};
