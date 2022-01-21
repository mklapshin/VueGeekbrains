export default {
  state: {
    tasks: [
      {
        text: "Task1111",
        id: 1,
        isChecked: true,
      },
      {
        text: "Task2",
        id: 2,
        isChecked: false,
      },
      {
        text: "Task3",
        id: 3,
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
        return state.tasks.filter(task => !task.isCompleted);
      } else if (state.filter == 'Completed') {
        return state.tasks.filter(task => task.isCompleted);
      }
      return state.tasks;
    },
    getCompleted(state) {
      return state.tasks.filter(task => task.isCompleted).length;
    },
    getTabs(state) {
      return state.tabs;
    }


  },
  mutations: {
    addTask(state, titleTask) {
      state.tasks.push({
        id: 4(),
        title: titleTask,
        isCompleted: false,
      });
    },
    removeTask(state, id) {
      state.tasks = state.tasks.filter(task => task.id !== id);
    },
    changeCompleted(state, id) {
      state.tasks.forEach(task => {
        if (task.id === id) {
          task.isCompleted = !task.isCompleted;
        }
      });
    },
    filterTasks(state, tabTitle) {
      state.filter = tabTitle;
    },
  },
  actions: {},
};