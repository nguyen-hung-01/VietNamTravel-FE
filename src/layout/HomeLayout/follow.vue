<template>
  <section class="follow relative h-[700px] mt-16">
    <img
      src="/src/assets/images/vecteezy_blue-color-background-abstract-art-smooth-vibrant-soft-blue_47411938.jpg"
      alt="follow"
      class="w-full h-full object-cover object-center opacity-40"
    />
    <div class="container absolute top-0 left-0 right-0 bottom-0">
      <div class="title text-center my-20">
        <p class="sub-title">Chúng tôi đang ở trên Facebook</p>
        <h2 class="main-title">Theo dõi chúng tôi</h2>
      </div>
      <div class="list-fl-wrapper overflow-hidden">
        <div class="list-fl flex" :style="carouselStyle">
          <div
            class="item flex-shrink-0"
            v-for="(image, index) in imagesWithClone"
            :key="index"
          >
            <img :src="image" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";

const images = [
  "/src/assets/images/fl1.png",
  "/src/assets/images/fl2.webp",
  "/src/assets/images/fl3.webp",
  "/src/assets/images/fl4.webp",
  "/src/assets/images/fl5.jpg",
  "/src/assets/images/fl7.jpg",
  "/src/assets/images/fl6.jpg",
  "/src/assets/images/fl8.webp",
];

// Thêm một slide ảo để quay lại đầu mượt mà
const imagesWithClone = [...images, images[0]];

const activeSlide = ref(0);
const itemsPerSlide = 4;
const slideWidth = 280 + 20; // item width + margin

const carouselStyle = computed(() => {
  return {
    transform: `translateX(-${activeSlide.value * slideWidth}px)`,
    transition:
      activeSlide.value === imagesWithClone.length - 1
        ? "none"
        : "transform 1s ease", // Bỏ hiệu ứng khi đến slide cuối
  };
});

const startSlideShow = () => {
  setInterval(() => {
    if (activeSlide.value < imagesWithClone.length - 1) {
      activeSlide.value += 1; // Tiến đến slide tiếp theo
    } else {
      activeSlide.value = 0; // Reset về đầu
    }
  }, 3000);
};

onMounted(() => {
  startSlideShow();
});
</script>

<style scoped>
.list-fl-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.list-fl {
  display: flex;
}

.item {
  width: 280px;
  height: 350px;
  overflow: hidden;
  border-radius: 30px;
  margin: 0 10px;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
</style>
