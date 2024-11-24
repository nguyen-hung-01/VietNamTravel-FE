<template>
  <section class="main-banner relative h-[350px]">
    <img
      src="/src/assets/images/main-banner.jpg"
      alt="banner"
      class="h-full w-full object-cover object-center"
    />
    <div class="overlay"></div>
    <div class="title text-white text-center absolute">
      <h1 class="text-5xl font-extrabold mb-4">{{ namePage }}</h1>
      <div class="flex gap-3 items-center">
        <span>Trang chủ</span>
        <i class="fa-solid fa-arrow-right-long"></i>
        <span>{{ namePage }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  namePage: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.title {
  @apply absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;
}
.overlay {
  @apply absolute top-0 left-0 right-0 bottom-0;
  background-color: rgba(0, 7, 40, 0.414);
  z-index: 10;
}
</style>
