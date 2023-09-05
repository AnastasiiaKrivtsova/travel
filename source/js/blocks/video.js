const videoBtn = document.querySelector('[data-btn="video"]');
const video = document.querySelector('[data-name="video"]');
const videoContainer = document.querySelector('[data-name="video-wrapper"]');

const showError = () => {
  videoContainer.textContent = 'Видео недоступно';
};

const playVideo = () => {
  video.play()
      .then(() => {
        videoBtn.classList.add('hero-slide__video-btn--play');
      })
      .catch(() => {
        showError();
      });
};

const stopVideo = () => {
  video.pause();
  videoBtn.classList.remove('hero-slide__video-btn--play');
};

const videoPlay = () => video.paused ? playVideo() : stopVideo();

const onVideoBtnClick = () => {
  try {
    videoPlay();
  } catch (error) {
    showError();
  }
};

export {video, videoBtn, onVideoBtnClick};
