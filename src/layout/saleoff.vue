<template>
  <section class="saleoff relative h-[650px]">
    <img
      src="/src/assets/images/bg-sale0ff.jpg"
      class="h-full w-full object-cover object-top"
    />
    <div
      class="container flex absolute top-0 left-0 right-0 bottom-0 items-center"
    >
      <div class="w-1/2 text-white">
        <p class="sub-title">Ưu đãi mùa hè này</p>
        <h2 class="text-7xl font-extrabold mt-3">GIẢM GIÁ 30%</h2>
        <h3 class="text-3xl font-bold my-6">
          Chuyến đi tiếp theo, <br />Từ ứng dụng di động của chúng tôi
        </h3>
        <span
          >Du lịch từ ngày 25 tháng 8 đến ngày 28 tháng 11 để nhận được những ưu
          đãi hấp dẫn và đảm bảo phần thưởng.</span
        >
        <div class="app flex items-center gap-5 mt-8">
          <img src="/src/assets/icons/app-store-icon.svg" alt="app" />
          <img src="/src/assets/icons/google-play-icon.svg" alt="app" />
        </div>
      </div>
      <div class="w-1/2">
        <div class="w-full h-[500px] flex items-center pl-24 relative">
          <img src="/src/assets/images/phone.png" alt="" class="h-full py-6" />
          <img
            src="/src/assets/images/24064870_6crl_oyvo_211025-removebg-preview.png"
            class="absolute bottom-0 right-[-50px] h-[80%] rotating-image"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.sub-title {
  color: #fff !important;
  font-weight: 800;
  font-size: 28px;
}
.rotating-image {
  animation: rotate 3s linear infinite;
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(20deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>
