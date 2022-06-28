<template>
  <main
    ref="contentContainer"
    class="
      h-screen
      min-h-[864px]
      relative
      container
      flex
      items-center
      text-light
      invisible
    "
  >
    <div class="text-center w-full pt-4 xl:pt-40">
      <div class="absolute top-28 xl:top-16 inset-x-0">
        <div class="w-28 xl:w-36 mx-auto fade-in">
          <SVGLogoWName />
        </div>
      </div>
      <h1 ref="title" class="font-ginger mb-5 text-l xl:text-xl">
        We'll Be Right Back!
      </h1>
      <p class="mb-10 max-w-xl mx-auto font-thin fade-in">
        We appreciate your patience as we prepare our website for its big
        relaunch on July 4th 2022. In the meantime, send us an email with any
        questions or enquiries you may have, and we will get back to you within
        the next 48h.
      </p>
      <UIUnderlineAnim class="fade-in">
        <a
          class="font-ginger text-md--mobile xl:text-md leading-none"
          target="_blank"
          href="mailto:"
          >info@baliswasti.com</a
        >
      </UIUnderlineAnim>
    </div>
  </main>
</template>

<script>
export default {
  mounted() {
    const tl = this.$gsap.timeline()
    const titleSplit = new this.$SplitText(this.$refs.title, { type: 'chars' })
    tl.from(this.$refs.contentContainer, { autoAlpha: 0, duration: 0 })
    tl.fade(titleSplit.chars, { stagger: 0.04 })
    tl.fade('.fade-in', { stagger: 0.3 }, '-=.6')
  },
}
</script>
