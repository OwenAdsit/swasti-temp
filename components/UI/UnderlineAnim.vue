<template>
  <span
    v-once
    class="
      inline-block
      py-[0.34em]
      relative
      before:w-0
      before:h-[.09em]
      before:bg-light
      before:absolute
      before:bottom-0
      underline-anim
      hover:before:w-full
    "
    :class="opacityEffectClasses"
  >
    <slot></slot>
  </span>
</template>

<script>
export default {
  props: {
    opacityEffect: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    opacityEffectClasses() {
      return this.opacityEffect
        ? 'before:opacity-0 hover:before:opacity-100'
        : ''
    },
  },
}
</script>

<style scoped>
.underline-anim:before {
  transition: width 0.4s, opacity 0.4s;
}
</style>
