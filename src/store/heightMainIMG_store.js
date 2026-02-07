// Высота рисунка заднего фона в Main. Так как он всегда остается на одном месте, 
// его высоту можно ипользовать как ориентир для элементов на всех отсальных страницах

import { create } from "zustand";

const useHeightMainIMG = create((set) => ({
    initHeight: 0,
    setHeight: (newHeight) => set((state) => ({initHeight: newHeight}))
            
}))

export default useHeightMainIMG