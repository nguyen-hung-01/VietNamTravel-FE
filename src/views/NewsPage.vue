<template>
  <MainBannerLayout namePage="Tin tức" />
  <section class="main-news py-20">
    <div class="container">
      <div class="w-3/5">
        <div class="list-news">
          <div v-for="(news, index) in newsList" :key="index" class="item">
            <div class="img">
              <img :src="news.imageUrl" :alt="news.title" />
            </div>
            <div class="content">
              <div class="date flex gap-4 items-center text-sm">
                <span
                  ><i class="fa-solid fa-user"></i> Bởi {{ news.author }}</span
                >
                <span>|</span>
                <span>
                  <i class="fa-solid fa-calendar-days"></i> {{ news.date }}
                </span>
                <span>|</span>
                <span
                  ><i class="fa-brands fa-guilded"></i>
                  {{ news.category }}</span
                >
              </div>
              <div class="name text-2xl font-bold">
                {{ news.title }}
              </div>
              <p class="opacity-60 font-semibold">
                {{ news.content }}
              </p>
              <a :href="news.link" class="see-more">
                <span>Đọc thêm</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="w-2/5"></div>
    </div>
  </section>
</template>

<script setup>
import { MainBannerLayout } from "@/layout/index";

const newsList = [
  {
    title: "5 điểm đến ở Việt Nam cho người thích đi một mình",
    author: "Lê Nguyên Hùng",
    date: "20 tháng 11, 2024",
    category: "Hướng dẫn du lịch",
    content:
      "Hà Nội, Huế, Hội An, Ninh Bình, Phan Thiết thích hợp cho khách đi một mình với những trải nghiệm thiên nhiên và văn hóa.",
    imageUrl:
      "https://i1-dulich.vnecdn.net/2024/11/19/19-the-anam-mui-ne-1731987463-3503-1731987472.jpg?w=500&h=300&q=100&dpr=1&fit=crop&s=gbMzRTbm0-GFbuJi4VPYpQ",
    link: "#",
  },
  {
    title: "10 địa điểm du lịch không thể bỏ qua tại Việt Nam",
    author: "Nguyễn Trọng Quân",
    date: "15 tháng 11, 2024",
    category: "Khám phá",
    content:
      "Cùng khám phá những địa điểm tuyệt đẹp trải dài khắp Việt Nam, từ đồi núi đến biển cả.",
    imageUrl:
      "https://i1-dulich.vnecdn.net/2024/10/17/1-1729155398-5264-1729155442.jpg?w=500&h=300&q=100&dpr=1&fit=crop&s=a3NSP57A2afqZJx9n_K8Jw",
    link: "#",
  },
  {
    title: "Lên kế hoạch du lịch miền Trung",
    author: "Phan Quốc Tuấn",
    date: "10 tháng 11, 2024",
    category: "Kế hoạch",
    content:
      "Miền Trung là nơi hội tụ vẻ đẹp văn hóa và thiên nhiên, phù hợp cho chuyến du lịch gia đình.",
    imageUrl:
      "https://i1-dulich.vnecdn.net/2024/10/18/2021-jpeg-1718097410-172924386-7603-3629-1729243873.jpg?w=500&h=300&q=100&dpr=1&fit=crop&s=t8M3dOxZCeZn7y8f-03ROA",
    link: "#",
  },
];
</script>

<style scoped>
.date i {
  margin-right: 10px;
}
.name {
  margin: 15px 0;
  transition: 0.4s ease-in-out;
}
.name:hover {
  color: #1ca8cb;
  cursor: pointer;
}
.item {
  overflow: hidden;
  margin-bottom: 50px;
}
.item .img {
  width: 100%;
  height: 400px;
  border-radius: 10px;
  margin-bottom: 20px;
  overflow: hidden;
}
.item img {
  @apply w-full h-full object-center object-cover;
  transition: transform 0.5s ease-in-out;
}
.item:hover img {
  transform: scale(1.1);
}
.see-more {
  display: inline-block;
  width: 220px;
  height: 55px;
  border-radius: 30px;
  border: 1px solid black;
  color: black;
  font-weight: 600;
  font-size: 18px;
  position: relative;
  overflow: hidden;
  margin-top: 30px;
}

.see-more span {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  transform: translate(-50%, -50%);
  transition: 0.4s ease-in-out;
}

.see-more::before {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: 0.4s ease-in-out;
  transform: translateX(-100%);
  background-color: #1ca8cb;
}

.see-more:hover {
  color: #e9f6f9;
  border: 1px solid #1ca8cb;
}

.see-more:hover::before {
  transform: translateX(0);
  border-radius: 30px;
}
</style>
