import { v4 as uuidv4 } from 'uuid';

export default {
  state: {
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
        title: 'All',
        isChecked: true,
      },
      {
        title: 'Active',
        isChecked: false,
      },
      {
        title: 'Completed',
        isChecked: false,
      },
    ],
    text: "Hello Misha",

  },
  getters: {
    getText(state) {
      return state.text
    },
    getTasks1(state) {
      return state.tasks
    },
    getTasks(state) {
      return state.tasks;
    },
    getTasksCount(state) {
      return state.tasks.length;
    },
    getTasksFiltered(state) {
      if (state.filter == 'All') {
        return state.tasks;
      } else if (state.filter == 'Active') {
        return state.tasks.filter(task => !task.isChecked);
      } else if (state.filter == 'Completed') {
        return state.tasks.filter(task => task.isChecked);
      }
      return state.tasks;
    },
    getCompleted(state) {
      return state.tasks.filter(task => task.isChecked).length;
    },
    getTabs(state) {
      return state.tabs;
    }


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
  },
  actions: {},
};