import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { API_APP } from "@/api";

export const AppStore = defineStore("AppStore", () => {
  // State
  const listTrip = ref();

  // Getter
  const onGetterListTrip = computed(() => listTrip);

  // Action
  const onActionGetListTrip = async () => {
    return await API_APP.onApiGetListTrip()
      .then(({ data: res }) => {
        if (res.success) {
          listTrip.value = res.data;
        } else {
          throw res.statusValue;
        }
      })
      .catch((error) => {
        console.log(error);
        throw error;
      });
  };

  return {
    onGetterListTrip,

    onActionGetListTrip,
  };
});
