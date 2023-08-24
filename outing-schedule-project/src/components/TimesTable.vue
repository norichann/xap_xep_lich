<script setup>
import { ref } from "vue";

const times = [];
for (let i = 0; i <= 24; i++) {
  const time = i < 10 ? `0${i}:00` : `${i}:00`;
  times.push(time);
}

const schedule = ref([
  {
    timeStart: "420px",
    time: "180px",
  },
  {
    timeStart: "480px",
    time: "200px",
  },
  {
    timeStart: "510px",
    time: "300px",
  },
]);
</script>

<template>
  <div class="w-full card bg-black-alpha-50">
    <ScrollPanel style="width: 100%; height: 20rem">
      <div style="width: 1500px" class="flex bg-black-alpha-30">
        <div
          v-for="(h, index) in times"
          :key="index"
          style="min-width: 60px"
          class="text-center border-left-1"
        >
          {{ h }}
        </div>
      </div>
      <br />
      <div class="flex flex-column gap-2">
        <div v-for="(item, index) in schedule" :key="index" class="flex">
          <div
            :style="{ width: `${item?.timeStart}` }"
            class="h-5rem bg-black-alpha-20 opacity-0"
          >
            Start
          </div>
          <div
            :style="{ width: `${item?.time}` }"
            class="h-5rem bg-white border-left-1"
          >
            Time
          </div>
        </div>
      </div>
    </ScrollPanel>
  </div>
</template>
