import { v4 as uuidv4 } from 'uuid';

export default {
  state: {
    tabStatus: "All",
    tasks: [
      {
        title: "Task1",
        id: uuidv4(),
        isChecked: true,
      },
      {
        title: "Task2",
        id: uuidv4(),
        isChecked: false,
      },
      {
        title: "Task3",
        id: uuidv4(),
        isChecked: false,
      },
    ],
    tabs: [
      {
        tabTitle: 'All',
        isChecked: true,
      },
      {
        tabTitle: 'Active',
        isChecked: false,
      },
      {
        tabTitle: 'Completed',
        isChecked: false,
      },
    ],


  },
  getters: {


    getTasks(state) {
      return state.tasks;
    },
    getTasksCount(state) {
      return state.tasks.length;
    },
    getTasksFiltered(state, getters) {

      switch (state.tabStatus) {
        case "Active": return getters.getActive;
        case "Completed": return state.tasks.filter((task) => (task.isChecked == true));
        default: return getters.getTasks;
      }

    },
    getActive(state) {
      return state.tasks.filter((task) => (task.isChecked == false));
    },


    getTabs(state) {
      return state.tabs;
    },



  },
  mutations: {


    addTask(state, text) {
      state.tasks.push({
        id: uuidv4(),
        title: text,
        isChecked: false,
      });
    },
    removeTask(state, id) {
      state.tasks = state.tasks.filter(task => task.id !== id);
    },
    changeCompleted(state, id) {
      state.tasks.forEach(task => {
        if (task.id === id) {
          task.isChecked = !task.isChecked;
        }
      });
    },
    filterTasks(state, tabTitle) {
      state.filter = tabTitle;
    },
    changeTabText(state, text) {
      state.tabs.map((tab) => {
        if (tab.tabTitle == text) {
          state.tabStatus = tab.tabTitle;
        }
      })
    },
  },
  actions: {},
};