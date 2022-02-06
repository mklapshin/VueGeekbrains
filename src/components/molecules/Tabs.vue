<template>
  <div>
    <Tab
      v-for="tab in getTabs"
      :key="tab.id"
      :tabText="tab.tabTitle"
      :tabChecked="tab.isChecked"
    />
  </div>
</template>

<script>
import Tab from "../atoms/Tab.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    Tab,
  },
  computed: {
    ...mapGetters(["getTabs"]),
  },
};
</script>