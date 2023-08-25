<script setup>
import { computed, onMounted, ref } from "vue";
import { AppStore } from "@/stores";
import { useConfirm } from "primevue/useconfirm";

const confirm = useConfirm();

const APP_STORE = AppStore();

const listTrip = computed(() => APP_STORE.onGetterListTrip.value);

const times = [];
for (let i = 0; i <= 24; i++) {
  const time = i < 10 ? `0${i}:00` : `${i}:00`;
  times.push(time);
}

const onClickIconDelete = () => {
  confirm.require({
    message: "Bạn có muốn xóa chuyến đi này?",
    header: "Xác nhận xóa",
    icon: "pi pi-info-circle",
    acceptLabel: "Đồng ý",
    acceptClass: "p-button-danger",
    rejectLabel: "Hủy bỏ",
    rejectClass: "p-button-outlined",
    accept: () => {
      //
    },
  });
};

onMounted(async () => {
  await APP_STORE.onActionGetListTrip();
  console.log(listTrip.value);
});
</script>

<template>
  <div style="background-color: #c7dae8" class="w-full card">
    <ScrollPanel style="width: 100%; height: 30rem">
      <div style="width: 1500px" class="flex">
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
      <ScrollPanel style="width: 1500px; height: 26rem" class="custombar1">
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
              class="item bg-white border-left-1 border-right-1 p-2 relative cursor-pointer"
            >
              <div class="flex gap-2">
                <img
                  :src="item?.image"
                  class="w-5rem h-5rem box-shadow-1 border-circle"
                  alt=""
                />
                <div class="flex flex-column gap-2">
                  <span class="font-bold flex align-items-center gap-1">
                    <i style="font-size: 0.8rem" class="pi pi-map-marker" />
                    {{ item?.place_name }}
                  </span>

                  <span
                    class="fixed-text text-800 line-height-2 flex align-items-center gap-1"
                  >
                    <i style="font-size: 0.8rem" class="pi pi-home" />
                    {{ item?.address }}
                  </span>

                  <div class="flex flex-column gap-1">
                    <span
                      class="text-custom-mini text-800 flex align-items-center gap-1"
                    >
                      <i style="font-size: 0.7rem" class="pi pi-flag" />
                      {{ item?.start_time }}
                    </span>

                    <span
                      class="text-custom-mini text-800 flex align-items-center gap-1"
                    >
                      <i style="font-size: 0.7rem" class="pi pi-stop-circle" />
                      {{ item?.end_time }}
                    </span>
                  </div>
                </div>
              </div>
              <!-- Eidt -->
              <div
                class="option absolute flex align-items-center pl-3 gap-3 h-full top-0 left-0 right-0 bottom-0 bg-black-alpha-60"
              >
                <i
                  class="pi pi-pencil on-click-3 w-3rem h-3rem flex justify-content-center align-items-center border-1 border-circle text-white"
                />

                <i
                  @click="onClickIconDelete"
                  class="pi pi-trash on-click-3 w-3rem h-3rem flex justify-content-center align-items-center border-1 border-circle text-white"
                />
              </div>
            </div>
          </div>
        </div>
      </ScrollPanel>
    </ScrollPanel>
  </div>

  <ConfirmDialog />
</template>

<style scoped>
.option {
  opacity: 0;
  transition: all 0.4s ease;
}

.item:hover .option {
  opacity: 1;
}
</style>
