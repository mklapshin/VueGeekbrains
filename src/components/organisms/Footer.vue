<template>
  <footer :class="$style.footer">
    <div :class="$style.footerWrapper">
      <p :class="$style.footerCount">1/3 left</p>
      <Tabs />
    </div>
  </footer>
</template>

<script>
import Tabs from "../molecules/Tabs.vue";

export default {
  name: "App",
  components: {
    Tabs,
  },
};
</script>

<style lang="scss" module>
@import "@/assets/scss/main.scss";

.footerWrapper {
  padding: 0.75rem 1.875rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: $peachOrange;
}

.footerCount {
  margin-right: 1rem;
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: $twineOpacity;
}

.tabsLabel {
  cursor: pointer;
  border: 0.125rem solid $peachOrange;
  border-radius: 0.25rem;
  &:hover {
    border-color: $carrotOrange;
    &:after {
      background-color: $carrotOrange;
    }
    &:before {
      background-color: $carrotOrange;
    }
  }
  padding: 0.25rem 0.625rem;

  font-size: 1.25rem;
  line-height: 1.75rem;
  color: $twineOpacity;
  background-color: transparent;
  border: 0.125rem solid transparent;
  border-radius: 0.625rem;
  cursor: pointer;
  transition: border-color 0.5s, color 0.5s;
  &:not(:last-child) {
    margin-right: 1.5rem;
  }
}

.input {
  display: none;
}

.fake {
  cursor: pointer;
  display: inline-block;
  width: 5.3rem;
  height: 0.875rem;
  margin: 0 0.2rem 0 0;
  text-align: center;
  border-radius: 0.25rem;
  position: relative;

  &:before {
    cursor: pointer;
    content: "";
    position: absolute;
    display: block;
    width: 5.7rem;
    margin: 0 0 0 0.3rem;
    height: 2rem;
    border-radius: 0.7rem;
    border: 0.2rem solid $rajah;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: 0.2s;
    z-index: 3;
  }
}

.input:checked + .fake:before {
  opacity: 1;
  cursor: pointer;
}
</style>
 