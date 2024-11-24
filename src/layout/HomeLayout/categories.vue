<template>
  <section class="categories py-20">
    <div class="container">
      <div class="title text-center mb-10">
        <p class="sub-title">Danh mục Tour</p>
        <h2 class="main-title">Khám phá vùng miền</h2>
      </div>

      <div class="flex justify-center gap-16 text-center">
        <div class="item">
          <div class="img">
            <img src="/src/assets/images/mien_bac.jpg" alt="Tour Miền Bắc" />
            <div class="overlay"></div>
          </div>
          <p>Tour Miền Bắc</p>
          <a href="#">Xem thêm</a>
        </div>
        <div class="item">
          <div class="img">
            <img
              src="/src/assets/images/mien_trung.jpg"
              alt="Tour Miền Trung"
            />
            <div class="overlay"></div>
          </div>
          <p>Tour Miền Trung</p>
          <a href="#">Xem thêm</a>
        </div>
        <div class="item">
          <div class="img">
            <img src="/src/assets/images/mien_nam.jpg" alt="Tour Miền Nam" />
            <div class="overlay"></div>
          </div>
          <p>Tour Miền Nam</p>
          <a href="#">Xem thêm</a>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup></script>

<style scoped>
.img {
  @apply w-[350px] h-[350px] overflow-hidden;
  border-radius: 50%;
  border: 10px solid;
  border-color: #e9f6f9;
  transition: 0.7s ease-in-out;
  position: relative;
}
.overlay {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to top,
    rgba(255, 255, 255, 0.222),
    rgba(255, 255, 255, 0)
  );
  box-shadow: 0 5px 10px 10px #ffffff44;
  transition: 0.6s ease-in-out;
  transform: translateY(-100%);
}
.img img {
  @apply w-full h-full object-cover object-center;
  transition: 0.7s ease-in-out;
}
.item:hover {
  cursor: pointer;
}
.item:hover .img {
  border: 10px solid;
  border-color: #1ca8cb;
}
.item:hover img {
  transform: scale(1.3);
}
.item:hover .overlay {
  transform: translateY(0);
}
.item p {
  @apply text-xl font-bold mt-5;
  transition: 0.4s ease-in-out;
}
.item p:hover {
  color: #1ca8cb;
}
.item a {
  @apply font-bold opacity-60;
}
</style>
