<template>
  <div :class="$style.container">
    <div :class="$style.wrapper">
      <div :class="$style.app">
        <Header />
        <Main />
        <Footer />
        <div>{{ $store.getters.getText }}</div>
        <div>{{ $store.getters.getTasks1 }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Main from "./Main.vue";
import Footer from "./Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Main,
    Footer,
  },
};
</script>

<style lang="scss" module>
@import "@/assets/scss/main.scss";
.container {
  background: linear-gradient(104.11deg, $rajah 14.52%, $colar 87.26%);
}

.wrapper {
  margin: 0 auto;
  max-width: 65rem;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("../../assets/img/list.png") center right no-repeat;
  @include breakpoint($md) {
    background: none;
  }
}

.app {
  max-width: 27.75rem;
}
</style>