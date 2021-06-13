import { backgroundScreen } from '../variables/variables';

export function hideUserInfo() {
  const userInfo = document.querySelector('.user-info');

  userInfo.classList.remove('show');
  backgroundScreen.classList.remove('show-background');
  setTimeout(() => this.parentNode.remove(), 300);
};
