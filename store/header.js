export const state = () => ({
  sticky: false,
  height: 0
});

export const mutations = {
  setSticky(state, value) {
    state.sticky = value;
  },
  setHeight(state, value) {
    state.height = value;
  }
};
