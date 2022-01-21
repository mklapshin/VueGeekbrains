<template>
  <ul class="tasks">
    <Task
      v-for="task in getTasksFiltered"
      :key="task.id"
      :taskText="task.text"
      :id="task.id"
      :taskChecked="task.isChecked"
    />
  </ul>
</template>

<script>
import Task from "../atoms/Task.vue";

import { mapGetters } from "vuex";
export default {
  components: { Task },
  computed: mapGetters(["getTasksFiltered"]),
};
</script>

<style lang="scss" module>
@import "@/assets/scss/main.scss";
.tasks {
  list-style: none;
  width: 100%;
}
</style>