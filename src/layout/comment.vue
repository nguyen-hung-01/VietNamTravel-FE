<template>
  <section class="comment h-[700px] relative">
    <img
      src="/src/assets/images/vecteezy_blue-color-background-abstract-art-smooth-vibrant-soft-blue_47411938.jpg"
      alt="comment"
      class="w-full h-full object-cover object-top opacity-40"
    />
    <div
      class="container absolute top-0 left-0 right-0 bottom-0 flex items-center gap-8"
    >
      <div class="w-1/2 h-full py-24 relative">
        <div class="img h-full">
          <img
            src="/src/assets/images/picture-100658486-1726391131-331-width850height939.jpg"
            class="w-full h-full object-cover object-center"
          />
        </div>
        <div
          class="img2 h-[400px] w-[280px] absolute bottom-[10%] right-[100px]"
        >
          <img
            src="/src/assets/images/108019999294151970694837530688971354568776n-1525769252336204409999.jpg"
            class="w-full h-full object-cover object-center"
          />
        </div>
      </div>
      <div class="w-1/2">
        <div class="title">
          <p class="sub-title">Nhận xét</p>
          <h1 class="main-title">Khách hàng nói gì về <br />chúng tôi</h1>
        </div>
        <div class="customer w-full h-[240px] overflow-hidden relative mt-8">
          <div
            class="item"
            v-for="(customer, index) in customers"
            :key="customer.id"
            :class="{
              active: index === activeIndex,
              next: index === nextIndex,
              prev: index === prevIndex,
            }"
          >
            <div class="content w-full h-full flex flex-col justify-between">
              <p class="text-lg font-semibold mb-7">
                {{ `"${customer.comment}"` }}
              </p>
              <div class="info flex items-center gap-6">
                <img :src="customer.avatar" :alt="customer.name" />
                <div>
                  <h5>{{ customer.name }}</h5>
                  <p class="opacity-60 text-sm mb-2">Traveller</p>
                  <div class="flex gap-1">
                    <i class="fa-solid fa-star" v-for="n in 5" :key="n"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="btn flex gap-6">
            <button @click="prev">prev</button>
            <button @click="next">next</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const customers = [
  {
    id: 1,
    name: "Nguyên Hùng",
    avatar:
      "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-1/332876245_1318915528957404_7730218585985673496_n.jpg?stp=dst-jpg_s200x200&_nc_cat=110&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeHDfrcEkAMgcoKDclOoPFBl0AVOaphSthLQBU5qmFK2EuZBCYj_bdVcaJPpVtgHIC6BMdXm120pElBJto6HqoNs&_nc_ohc=n56nd99_D40Q7kNvgFN1mGG&_nc_zt=24&_nc_ht=scontent.fdad3-1.fna&_nc_gid=Agh_Gc1zwkhwlRU_8kgITtz&oh=00_AYDZ7loHQHEp_zxP_bRFPUKUrmLPjO6UIVYl9q4_EEJ9dg&oe=6747E700",
    comment:
      "Việt Nam là một điểm đến tuyệt vời với thiên nhiên đa dạng và phong cảnh hùng vĩ. Từ những ruộng bậc thang ở Sapa đến vịnh Hạ Long, mỗi nơi đều mang đến cảm giác choáng ngợp với vẻ đẹp độc đáo.",
  },
  {
    id: 2,
    name: "Quốc Tuấn",
    avatar:
      "https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-1/444481805_1246183893022612_3353995945170295126_n.jpg?stp=dst-jpg_s200x200&_nc_cat=106&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeFwzZe1XWIiM-f0t4s1liUH6tb42o8G_wHq1vjajwb_AbtmrRpuiYBuV-xBpwvSICJdOVKRkHeABaWE00cHNwOd&_nc_ohc=UFFhfQdy4sYQ7kNvgHVYHy4&_nc_zt=24&_nc_ht=scontent.fdad3-5.fna&_nc_gid=A-yZafOJu5sm4bGVqtMEuaQ&oh=00_AYC7kWGLPRHFXgLbrRxeQkrWja5dEsk3Td9sS7dfnF1A7A&oe=6747DB80",
    comment:
      "Người Việt Nam vô cùng thân thiện và hiếu khách. Chúng tôi luôn cảm thấy được chào đón và hỗ trợ nhiệt tình ở bất kỳ đâu, từ thành phố lớn đến những làng quê xa xôi.",
  },
  {
    id: 3,
    name: "Trọng Quân",
    avatar:
      "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-1/464733525_1301218041019561_7557215675652419824_n.jpg?stp=dst-jpg_s200x200&_nc_cat=111&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeFkrNF8sS4ix7eIMvN924Q9RclVlcH-Bs5FyVWVwf4Gzv-MNf6MAmHVaEboeZL2cp2zgPK-aBk6vcLC5YiPZhnq&_nc_ohc=brZwY0nP4UQQ7kNvgGjylC4&_nc_zt=24&_nc_ht=scontent.fdad3-1.fna&_nc_gid=Aq2M0hWaKbbqQHJudOXqC5U&oh=00_AYBVlhQ0gIiKiZGL54OYQOcAOAHVZsYPp93ra5xDPM258Q&oe=6747CB28",
    comment:
      "Ẩm thực Việt Nam thực sự là một trải nghiệm không thể bỏ qua. Món phở, bánh mì và những món ăn đường phố khác khiến tôi muốn quay lại nhiều lần nữa để khám phá thêm hương vị mới.",
  },
];

const activeIndex = ref(0);
const prevIndex = ref(customers.length - 1);
const nextIndex = ref(1);

const next = () => {
  prevIndex.value = activeIndex.value;
  activeIndex.value = nextIndex.value;
  nextIndex.value = (nextIndex.value + 1) % customers.length;
};

const prev = () => {
  nextIndex.value = activeIndex.value;
  activeIndex.value = prevIndex.value;
  prevIndex.value = (prevIndex.value - 1 + customers.length) % customers.length;
};
</script>

<style scoped>
.customer i {
  color: #ffa944;
  font-size: 14px;
}
.customer h5 {
  color: #113d48;
  @apply text-xl font-bold;
}
.customer img {
  @apply w-[80px] h-[80px] rounded-full;
  border: 4px solid #1ca8cb;
}
.item {
  display: none;
  position: absolute;
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
}
.item.active {
  display: block;
  opacity: 1;
  transform: translateX(0);
}
.item.next {
  display: block;
  opacity: 0;
  transform: translateX(100%);
}
.item.prev {
  display: block;
  opacity: 0;
  transform: translateX(-100%);
}
.btn {
  position: absolute;
  right: 0;
  bottom: 20px;
  z-index: 1111;
}
.btn button {
  background-color: #fff;
  border-radius: 30px;
  border: 1px solid #113d48;
  color: #113d48;
  transition: 0.4s ease-in-out;
  padding: 12px 20px;
}
.btn button:hover {
  background-color: #1ca8cb;
  color: #fff;
}
.img {
  border: 10px solid white;
  border-radius: 40% 0% 40% 0%;
  overflow: hidden;
  width: 320px;
}
.img2 {
  border: 10px solid white;
  border-radius: 40% 0% 40% 0%;
  overflow: hidden;
}
</style>
