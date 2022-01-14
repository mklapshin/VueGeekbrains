<template>
  <div>
    <Tab
      v-for="tab in tabs"
      :key="tab.id"
      :tabText="tab.text"
      :tabChecked="tab.isChecked"
    />
  </div>
</template>

<script>
import Tab from "../atoms/Tab.vue";

export default {
  data() {
    return {
      tabs: [
        {
          text: "All",
          id: 1,
          isChecked: true,
        },
        {
          text: "Active",
          id: 2,
          isChecked: false,
        },
        {
          text: "Completed",
          id: 3,
          isChecked: false,
        },
      ],
    };
  },
  components: {
    Tab,
  },
};
</script>