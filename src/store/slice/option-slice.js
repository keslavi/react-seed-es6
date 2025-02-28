import api from "@/store/api";
import { toast } from "react-toastify";

export const optionSlice = (set, get) => ({
  option: {},

  optionList: async () => {
    const url = "mock/option";
    try {
      let option = get().option;
      const res = await api.get(url);
      option = { ...option, ...res.data };
      set({ option }, undefined, url);
    } catch (e) {
      toast.error(`<>${url} error<br/>${e.message}</>`);
    }
  },
  optionRetrieve: async (id) => {
    const url = `mock/option/${id}`;
    try {
      let option = get().option;
      if (!option.hasOwnProperty(id)) {
        const res = await api.get(url);
        option = { ...option, ...res.data };
        set({ option }, undefined, url);
      }
    } catch (e) {
      toast.error(`<>${url} error<br/>${e.message}</>`);
    }
  },
});

export default optionSlice;
