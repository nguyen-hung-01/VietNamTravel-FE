<template>
  <MainBannerLayout namePage="Giới thiệu" />
  <section class="py-20 intro">
    <div class="container flex gap-14">
      <div class="w-1/2 relative">
        <img
          src="/src/assets/images/img-about.avif"
          alt="about image"
          class="w-[350px] h-[400px] top-0 left-0"
        />
        <img
          src="/src/assets/images/img-about1.jpg"
          alt="about image"
          class="w-[330px] h-[420px] top-[15%] right-0"
        />
        <img
          src="/src/assets/images/img-about2.webp"
          alt="about image"
          class="w-[400px] h-[300px] bottom-[-20px] left-[20px] moving"
        />
      </div>
      <div class="w-1/2">
        <div class="title">
          <p class="sub-title">Chào mừng đến với Tour du lịch</p>
          <h2 class="main-title">
            Chúng tôi là công ty du lịch có uy tín ở Việt Nam
          </h2>
        </div>
        <p class="my-6 opacity-50">
          Chào mừng bạn đến với Explore VietNam! Chúng tôi cung cấp các tour du
          lịch trọn gói đến những địa điểm hấp dẫn trong và ngoài nước...
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
  </section>

  <section class="mt-20 h-[800px] relative guide">
    <img
      src="/src/assets/images/vecteezy_blue-color-background-abstract-art-smooth-vibrant-soft-blue_47411938.jpg"
      alt=""
      class="w-full h-full object-cover object-center opacity-40"
    />
    <div class="container absolute top-0 left-0 right-0 bottom-0 pt-16">
      <div class="title text-center mb-10">
        <p class="sub-title">Hướng dẫn viên</p>
        <h2 class="main-title">Gặp gỡ hướng dẫn viên du lịch</h2>
      </div>
      <div class="list-guide flex gap-6 justify-center">
        <div v-for="(guide, index) in guides" :key="index" class="item">
          <div class="bg">
            <img :src="guide.bg" alt="" />
            <div class="avt">
              <img :src="guide.image" alt="" />
            </div>
          </div>
          <div class="info">
            <p class="name">{{ guide.name }}</p>
            <p class="job">{{ guide.job }}</p>
            <div class="social">
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-linkedin"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-tiktok"></i>
            </div>
          </div>
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

<script setup>
import { MainBannerLayout } from "@/layout/index";

const guides = [
  {
    name: "Lê Nguyên Hùng",
    job: "Hướng dẫn viên",
    image:
      "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-1/332876245_1318915528957404_7730218585985673496_n.jpg?stp=dst-jpg_s200x200&_nc_cat=110&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeHDfrcEkAMgcoKDclOoPFBl0AVOaphSthLQBU5qmFK2EuZBCYj_bdVcaJPpVtgHIC6BMdXm120pElBJto6HqoNs&_nc_ohc=n56nd99_D40Q7kNvgFkeS5C&_nc_zt=24&_nc_ht=scontent.fdad3-1.fna&_nc_gid=AAww1qquP4zbG7I4pVbkkHw&oh=00_AYCschdb-j1XXwbdNPgc9JLFrilQVaz_3GVp3gi0iwRhYg&oe=67488FC0",
    bg: "/src/assets/images/bg-guide1.jpg",
  },
  {
    name: "Phan Quốc Tuấn",
    job: "Hướng dẫn viên",
    image:
      "https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-1/444481805_1246183893022612_3353995945170295126_n.jpg?stp=dst-jpg_s200x200&_nc_cat=106&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeFwzZe1XWIiM-f0t4s1liUH6tb42o8G_wHq1vjajwb_AbtmrRpuiYBuV-xBpwvSICJdOVKRkHeABaWE00cHNwOd&_nc_ohc=UFFhfQdy4sYQ7kNvgFnH6lu&_nc_zt=24&_nc_ht=scontent.fdad3-5.fna&_nc_gid=AW0FaGARqyjvS1tNIO7ALyC&oh=00_AYDd7zxGkDvI6xX63cnRTUSk4UUjlwPLrZ3vn1NW0vJZQg&oe=6748BC80",
    bg: "/src/assets/images/bg-guide.webp",
  },
  {
    name: "Nguyễn Trọng Quân",
    job: "Hướng dẫn viên",
    image:
      "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-1/464733525_1301218041019561_7557215675652419824_n.jpg?stp=dst-jpg_s200x200&_nc_cat=111&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeFkrNF8sS4ix7eIMvN924Q9RclVlcH-Bs5FyVWVwf4Gzv-MNf6MAmHVaEboeZL2cp2zgPK-aBk6vcLC5YiPZhnq&_nc_ohc=R9XfM1eCtdMQ7kNvgE-ad-M&_nc_zt=24&_nc_ht=scontent.fdad3-1.fna&_nc_gid=AYB_6XWQy4nOP6-v77rUx5V&oh=00_AYAd9AC7rNmEiw-FJGQBUfd9h5BRGcfdJBN0p6DEdfYneg&oe=6748AC28",
    bg: "/src/assets/images/bg-guide2.jpg",
  },
];
</script>

<style scoped>
.intro .item {
  @apply flex gap-4 items-center justify-between;
}
.intro .item .icon {
  @apply w-[140px] h-[80px] flex items-center justify-center;
  border-radius: 50%;
  background-color: #1ca8cb;
  color: #fff;
}
.intro .item p {
  color: #113d48;
  font-weight: 700;
  font-size: 25px;
}
button {
  @apply h-[65px] w-[200px] font-semibold relative overflow-hidden mt-10;
  background-color: #113d48;
  border-radius: 30px;
  color: white;
}
button span {
  @apply absolute top-[50%] left-[50%] w-full;
  transform: translate(-50%, -50%);
  z-index: 2;
}
button:hover::before {
  transform: translateX(0);
  border-radius: 30px;
}
button::before {
  @apply w-full h-full absolute top-0 left-0;
  content: "";
  transform: translateX(-100%);
  transition: 0.5s ease-in-out;
  background-color: var(--primary-color);
  z-index: 1;
}
.intro img {
  @apply absolute object-cover object-center;
  border-radius: 20px;
  border: 8px solid #fff;
}
.moving {
  animation: moveSideways 2s infinite alternate;
}
@keyframes moveSideways {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(30px);
  }
}
.guide .item:hover .avt img {
  transform: scale(1.1);
}
.guide .item:hover .bg > img {
  transform: scale(1.1);
}
.guide .item {
  border-radius: 30px;
  background-color: #e9f6f9;
  @apply flex flex-col justify-between w-[400px] h-[550px] overflow-hidden text-center;
}
.guide .item .bg {
  width: 100%;
  position: relative;
}
.guide .item .avt {
  border-radius: 50%;
  border: 5px solid #fff;
  transform: translateX(-50%);
  @apply overflow-hidden left-[50%] bottom-[-70%] absolute w-[220px] h-[220px];
}
.guide .item .avt img {
  @apply w-full h-full object-cover object-center;
  transition: transform 0.6s ease-in-out;
}
.guide .item .bg > img {
  @apply w-full h-[200px] object-cover object-center;
  transition: transform 0.6s ease-in-out;
}
.guide .info {
  background-color: #fff;
  border-radius: 20px;
  @apply mx-5 mb-5 px-5 py-5;
  transition: 0.5s ease-in-out;
}
.guide .info .name {
  @apply text-xl font-bold;
  color: #113d48;
  transition: 0.5s ease-in-out;
}
.guide .info .job {
  @apply text-sm font-semibold opacity-60;
  transition: 0.5s ease-in-out;
}
.guide .info .social {
  @apply flex gap-2 justify-center mt-4;
}
.guide .info .social i {
  color: #1ca8cb;
  border-radius: 50%;
  border: 1px solid #1ca8cb;
  @apply text-sm inline-block w-[33px] h-[33px] flex items-center justify-center cursor-pointer;
  transition: 0.5s ease-in-out;
}
.guide .item:hover .info {
  background-color: #25b3d6;
}
.guide .item:hover .name,
.guide .item:hover .job {
  color: #fff;
  opacity: 1;
}
.guide .item:hover .social i {
  color: #fff;

  border: 1px solid #fff;
}
.guide .info .social i:hover {
  transform: rotate3d(0, 1, 1, 90deg);
}
.logo-company img {
  @apply w-[150px] h-[150px] object-cover;
}
</style>
