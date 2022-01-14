<template>
  <ul class="tasks">
    <Task
      v-for="task in tasks"
      :key="task.id"
      :taskText="task.text"
      :taskChecked="task.isChecked"
    />
  </ul>
</template>

<script>
import Task from "../atoms/Task.vue";

export default {
  data() {
    return {
      tasks: [
        {
          text: "Task1",
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
    };
  },
  components: {
    Task,
  },
};
</script>

<style lang="scss" module>
@import "@/assets/scss/main.scss";
.tasks {
  list-style: none;
  width: 100%;
}
</style>