<template>
  <div class="accordion__item">
    <div
      class="accordion__trigger"
      :class="{ 'accordion__trigger_active': accordion.active }"
      @click.stop="triggerHandler"
    >
      <!-- slot 插槽 處理accordion標題 -->
      <slot name="accordion-trigger"></slot>
      <!-- plus dynamic 開關 -->
      <div class="plus" :class="{ 'plus-open': accordion.active }"></div>
    </div>

    <transition
      name="accordion"
      @enter="accordionStart"
      @after-enter="accordionEnd"
      @before-leave="accordionStart"
      @after-leave="accordionEnd"
    >
      <ul class="accordion__content" v-show="accordion.active">
        <!-- slot 插槽 處理傳遞accordion內容 -->
        <slot name="accordion-content"></slot>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  inject: ["accordion"],
  methods: {
    triggerHandler() {
      this.accordion.active = !this.accordion.active;
    },
    accordionStart(el) {
      el.style.height = el.scrollHeight + "px";
    },
    accordionEnd(el) {
      el.style.height = "";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/utils/_utils.scss";

.accordion__item {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  a {
    width: 100%;
    height: 100%;
    display: block;
  }
}

// 多個 link common 收合
.accordion__trigger {
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  .ac-icon {
    display: flex;
    align-items: center;
    font-size: map-get($font-size, 5);

    &::before {
      content: "";
      width: 50px;
      height: 50px;
      display: block;
      margin-right: 1rem;
      background: {
        size: contain;
        position: center;
        repeat: no-repeat;
      }
    }
  }

}

// plus

.plus {
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: transform 0.25s linear;

  &::after {
    content: "";
    width: 20px;
    height: 2px;
    display: inline-block;
    position: absolute;
    background-color: #444;
    transition: transform 0.25s linear;
  }

  &::before {
    content: "";
    width: 20px;
    height: 2px;
    display: inline-block;
    position: absolute;
    background-color: #444;
    transition: transform 0.25s linear;
    transform: rotate(90deg);
    opacity: 1;
  }

  &-open {
    transform: rotate(180deg);

    &::before {
      content: "";
      opacity: 0;
    }
  }
}

.accordion-enter-active,
.accordion-leave-active {
  will-change: height, opacity;
  transition: height 0.3s ease, opacity 0.3s ease;
  overflow: hidden;
}

.accordion-enter,
.accordion-leave-to {
  height: 0 !important;
  opacity: 0;
}
</style>
