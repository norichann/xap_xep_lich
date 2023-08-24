<script setup>
import { computed, onMounted, ref } from "vue";
import { AppStore } from "@/stores";

const APP_STORE = AppStore();

const listTrip = computed(() => APP_STORE.onGetterListTrip.value);

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

onMounted(async () => {
  await APP_STORE.onActionGetListTrip();
  console.log(listTrip.value);
});
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
      <div style="width: 1500px" class="flex flex-column gap-2">
        <div v-for="(item, index) in listTrip" :key="index" class="flex">
          <div
            :style="{ width: `${item?.coordinates?.widthStart}` }"
            class="h-5rem bg-black-alpha-20 opacity-0"
          >
            {{ item?.coordinates?.widthStart }}
          </div>
          <div
            :style="{ width: `${item?.coordinates?.widthActive}` }"
            class="h-5rem bg-white border-left-1"
          >
            {{ item?.coordinates?.widthActive }}
          </div>
        </div>
      </div>
    </ScrollPanel>
  </div>
</template>
