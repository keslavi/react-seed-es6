import { create } from "zustand";
import api from "@/store/api";
import { toast } from "react-toastify";

export const useStore = create((set,get) => ({
  contacts: [],
  contact: {},
  loading: false,
  error: false,
  errorMsg: "",

  //contactCreate: async (values) => {} not needed... upsert handles
  contactRetrieve: async (id) => {
    set({ loading: true });
    try {
      let res = await api.get(`contact/${id}`);
      const contact = res.data;
      res = await api.get(`option/contact`);
      const option = res.data;
      set({ contact, option, loading: false, error: false});
    } catch (e) {
      toast.error("failed to retrieve contact")
      set({ error: true, loading: false, errorMsg: e.message });
    }
  },

  contactUpsert: async (values) => {
    set({ loading: true });
    try {
      let res = await api.post("contact", values);
      const contact = res.data;
      res = await api.get("option/contact");
      const option = res.data;
      set({ contact, option, loading: false, error: false });
    } catch (e) {
      set({ error: true, loading: false, errorMsg: e.message });
    }
  },

  //contactDelete: async (values) => {} //todo: add

  contactList: async () => {
    set({ loading: true });
    try {
      let res = await api.get("contact");
      const contacts = res.data;
      res = await api.get("option/contact");
      const option = res.data;
      set({ contacts, option, loading: false, error: false });
    } catch (e) {
      set({ error: true, loading: false, errorMsg: e.message });
    }
  },

  contactClear: async () => {
    set({ contact:{}});
  },
}));
