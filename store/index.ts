import { createStore } from 'vuex';

export default createStore({
  state: {
    projects: [],
    user: null,
  },
  mutations: {
    setProjects(state, projects) {
      state.projects = projects;
    },
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    async fetchProjects({ commit }) {
      const response = await fetch('/api/projects');
      const projects = await response.json();
      commit('setProjects', projects);
    },
    async fetchUser({ commit }) {
      const response = await fetch('/api/user');
      const user = await response.json();
      commit('setUser', user);
    },
  },
  getters: {
    allProjects: (state) => state.projects,
    currentUser: (state) => state.user,
  },
});