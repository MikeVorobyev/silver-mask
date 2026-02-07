// Передача клика от кнопок со страницы Main в PageContainer

import { create } from "zustand";

const useNavigationButton = create((set) => ({
    initText: '',
    setText: (newClickText) => set((state) => ({initText: newClickText}))
            
}))

export default useNavigationButton