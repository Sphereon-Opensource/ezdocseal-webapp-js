export const state = () => ({
  noScroll: false,
  layout: 'content'
});

export const mutations = {
  setNoScroll(state, value) {
    state.noScroll = value;
  },
  setLayout(state, value) {
    state.layout = value;
  }
};
