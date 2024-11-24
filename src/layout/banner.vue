<template>
  <div class="banner w-full h-screen min-h-screen relative">
    <video
      src="/src/assets/videos/intro2.mp4"
      class="w-full h-full object-cover"
      muted
      loop
      autoplay
    ></video>
    <div class="overlay"></div>

    <div class="slider container overflow-hidden relative">
      <div class="carousel-wrapper w-full flex justify-center items-center">
        <div
          v-for="(slide, index) in slides"
          :key="index"
          :class="['carousel-item', { active: index === currentIndex }]"
        >
          <h1 class="animate__animated animate__fadeInLeft">
            {{ slide.title }}
          </h1>
          <p class="animate__animated">{{ slide.description }}</p>
          <button class="animate__animated">
            <div class="over-lay"></div>
            <span>Khám phá</span>
          </button>
        </div>
      </div>
    </div>
    <div class="btn-slide absolute">
      <button class="prev" @click="prevSlide">
        <i class="fa-solid fa-angle-left"></i>
      </button>
      <button class="next" @click="nextSlide">
        <i class="fa-solid fa-angle-right"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const currentIndex = ref(0);

const slides = ref([
  {
    title: "Khám Phá Những Điểm Đến Tuyệt Vời Của Việt Nam",
    description:
      "Việt Nam mang đến những cảnh quan thiên nhiên tuyệt đẹp, từ những bãi biển xinh đẹp đến các dãy núi hùng vĩ, mỗi điểm đến là một trải nghiệm khó quên.",
  },
  {
    title: "Trải Nghiệm Văn Hóa Đặc Sắc Và Độc Đáo Của Việt Nam",
    description:
      "Khám phá sự đa dạng văn hóa, từ các lễ hội truyền thống đến ẩm thực phong phú, mỗi chuyến đi là một cơ hội để hiểu thêm về lịch sử và con người nơi đây.",
  },
  {
    title: "Chuyến Du Lịch Thú Vị Cho Mọi Lứa Tuổi Và Sở Thích",
    description:
      "Việt Nam là điểm đến lý tưởng cho mọi du khách, từ những người yêu thiên nhiên, khám phá mạo hiểm đến những ai tìm kiếm sự thư giãn, nghỉ dưỡng.",
  },
]);

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.value.length;
};

const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + slides.value.length) % slides.value.length;
};

let slideInterval;

onMounted(() => {
  slideInterval = setInterval(nextSlide, 5000);
});

onBeforeUnmount(() => {
  clearInterval(slideInterval);
});
</script>

<style scoped>
.overlay {
  @apply w-full h-full absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.28);
  z-index: 1;
}

.slider {
  @apply w-full h-full absolute flex justify-center items-center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 222;
}

.carousel-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.carousel-item {
  color: #fff;
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
  left: 100%;
  opacity: 0;
  transition: 1s ease-in-out;
  @apply flex flex-col justify-center;
}
.carousel-item h1 {
  transform: translateY(-40px);
  transition: 0.3s ease;
}
.carousel-item.active h1 {
  transform: translateY(0);
}
.carousel-item.active {
  left: 0;
  opacity: 1;
}

.carousel-item h1 {
  @apply text-6xl font-bold leading-tight w-[90%] mb-2;
}

.carousel-item p {
  @apply text-lg leading-6 w-[60%] opacity-80;
}

.carousel-item button {
  background-color: transparent;
  color: #fff;
  font-weight: 600;
  font-size: 20px;
  border: 1px solid #ffffffb9;
  width: 250px;
  height: 65px;
  border-radius: 50px;
  position: relative;
  margin-top: 60px;
  overflow: hidden;
}

.carousel-item button:hover .over-lay {
  transform: translate(0);
  border-radius: 50px;
}

.carousel-item button:hover span {
  color: black;
}

.carousel-item button .over-lay {
  position: absolute;
  z-index: 1;
  background-color: #fff;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  transform: translateX(-100%);
  transition: 0.3s ease-in-out;
}

.carousel-item button span {
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 50%;
  z-index: 2;
  transition: 0.3s ease-in-out;
}

.btn-slide {
  @apply flex justify-between items-center;
  width: 100%;
  padding: 0 170px;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  z-index: 111111;
}

.btn-slide button {
  @apply w-[60px] h-[60px];
  border-radius: 50%;
  color: white;
  background-color: #d7d4bc53;
  transition: 0.3s ease-in-out;
}

.btn-slide button i {
  opacity: 0.6;
  transition: 0.3s ease-in-out;
}

.btn-slide button:hover {
  background-color: #000000a1;
}

.btn-slide button:hover i {
  opacity: 1;
}
</style>
