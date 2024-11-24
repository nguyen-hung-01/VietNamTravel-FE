<template>
  <section class="statistical py-20">
    <div class="container flex gap-6 justify-center pt-[200px]">
      <div class="border">
        <div class="content">
          <h3>12</h3>
          <p>Số năm kinh nghiệm</p>
        </div>
      </div>
      <div class="border">
        <div class="content">
          <h3>97%</h3>
          <p>Tỷ lệ duy trì</p>
        </div>
      </div>
      <div class="border">
        <div class="content">
          <h3>8k</h3>
          <p>Tour đã hoàn thành</p>
        </div>
      </div>
      <div class="border">
        <div class="content">
          <h3>19K</h3>
          <p>Du khách yêu thích</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup></script>
<style scoped>
.border {
  @apply w-[300px] h-[300px] flex justify-center items-center;
  border-radius: 50%;
  border: 1px solid #1ca8cb;
}
.statistical .border:nth-child(2),
.statistical .border:nth-child(4) {
  transform: translateY(-170px);
}
.content {
  background-color: #e9f6f9;
  border-radius: 50%;
  @apply flex justify-center items-center flex-col w-[250px] h-[250px];
}
.content h3 {
  @apply text-4xl font-bold;
}
.content p {
  @apply text-base mt-3;
}
</style>
