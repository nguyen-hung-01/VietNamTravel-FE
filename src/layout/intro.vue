<template>
  <section class="relative h-[900px]">
    <img
      src="/src/assets/images/vecteezy_blue-color-background-abstract-art-smooth-vibrant-soft-blue_47411938.jpg"
      alt="background"
      class="opacity-40 h-full w-full"
    />
    <div class="container absolute flex items-center">
      <div class="flex gap-16">
        <div class="w-1/2">
          <img
            src="/src/assets/images/intro-image.webp"
            class="h-full w-full object-cover rounded-3xl"
          />
        </div>
        <div class="w-1/2">
          <div class="title">
            <p class="sub-title">Việt Nam - Điểm đến của mọi trải nghiệm</p>
            <h2 class="main-title">
              Cùng bạn viết nên câu chuyện du lịch đáng nhớ
            </h2>
          </div>
          <p class="font-semibold text-slate-500 mt-5 mb-8">
            Hãy để chúng tôi đồng hành cùng bạn, từ những chuyến phiêu lưu lý
            thú đến những khoảnh khắc thư giãn yên bình. Cùng nhau, chúng ta sẽ
            viết nên những kỷ niệm khó quên trong chuyến hành trình khám phá vẻ
            đẹp Việt Nam.
          </p>
          <div>
            <div class="item mb-8">
              <div class="icon"><i class="fa-solid fa-person-falling"></i></div>
              <div>
                <p>Chuyến đi độc quyền</p>
                <span class="font-semibold text-slate-500">
                  Khám phá những hành trình đặc biệt, tận hưởng dịch vụ đẳng cấp
                  và trải nghiệm Việt Nam theo cách riêng của bạn.
                </span>
              </div>
            </div>
            <div class="item">
              <div class="icon"><i class="fa-solid fa-person-hiking"></i></div>
              <div>
                <p>Hướng dẫn chuyên nghiệp</p>
                <span class="font-semibold text-slate-500">
                  Đội ngũ hướng dẫn viên giàu kinh nghiệm sẽ giúp bạn khám phá
                  Việt Nam một cách trọn vẹn và tuyệt vời nhất.
                </span>
              </div>
            </div>
          </div>
          <button><span>Tìm hiểu thêm</span></button>
        </div>
      </div>
    </div>
  </section>
  <section class="logo-company py-10">
    <div class="container flex gap-16 justify-center items-center">
      <img src="/src/assets/images/logo1.jpg" alt="logo company" />
      <img src="/src/assets/images/logo2.jpg" alt="logo company" />
      <img src="/src/assets/images/logo3.jpg" alt="logo company" />
      <img src="/src/assets/images/logo4.jpg" alt="logo company" />
      <img src="/src/assets/images/logo5.jpg" alt="logo company" />
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.container {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.item {
  @apply flex gap-4 items-center justify-between;
}
.item .icon {
  @apply w-[140px] h-[80px] flex items-center justify-center;
  border-radius: 50%;
  background-color: #1ca8cb;
  color: #fff;
}
.item p {
  color: #113d48;
  font-weight: 700;
  font-size: 25px;
}
button {
  @apply h-[65px] w-[200px] font-semibold;
  background-color: #113d48;
  border-radius: 30px;
  color: white;
  position: relative;
  overflow: hidden;
  margin-top: 40px;
}
button span {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  z-index: 2;
}
button:hover::before {
  transform: translateX(0);
  border-radius: 30px;
}
button::before {
  @apply w-full h-full;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(-100%);
  transition: 0.5s ease-in-out;
  background-color: var(--primary-color);
  z-index: 1;
}
.logo-company img {
  @apply w-[150px] h-[150px] object-cover;
}
</style>
