<template>
  <main
    class="
      h-screen
      min-h-[864px]
      relative
      container
      flex
      items-center
      text-light
    "
  >
    <div class="text-center w-full pt-4 xl:pt-40">
      <div class="absolute top-44 xl:top-16 inset-x-24">
        <div class="w-36 mx-auto">
          <SVGLogoWName />
        </div>
      </div>
      <h1 class="font-ginger capitalize mb-5 text-l xl:text-xl">
        we'll be right back!
      </h1>
      <p class="mb-10 max-w-xl mx-auto font-thin">
        We appreciate your patience as we prepare our website for its big
        relaunch on July 4th 2022. In the meantime, send us an email with any
        questions or enquiries you may have, and we will get back to you within
        the next 48h.
      </p>
      <UIUnderlineAnim>
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
