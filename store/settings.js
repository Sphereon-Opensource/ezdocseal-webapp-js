import {uid} from '@/assets/js/uid';

export const state = () => {
  const navBarItems = [];

  if (!process.env.disablePageHowTo) {
    navBarItems.push({
      name: 'Zo werkt het!',
      to: '/zo-werkt-het'
    });
  }

  if (!process.env.disablePageMoreInfo) {
    navBarItems.push({
      name: 'Meer informatie',
      to: '/informatie'
    });
  }

  if (!process.env.disablePageContact) {
    navBarItems.push({
      name: 'Contact',
      to: '/contact'
    });
  }

  return ({
    mainNav: navBarItems.map(value => ({...value, _uid: uid()}))
  });
};
