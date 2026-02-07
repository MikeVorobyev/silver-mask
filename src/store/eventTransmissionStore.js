import { create } from "zustand";

const useEventTransmission = create((set) => ({
    initEvent: {
                    id: ``,
                    visible: false,
                    dateEvent: "",
                    titleEvent: "",
                    subtitleEvent: <p></p>,
                    durationEvent: <p></p>,
                    photoFolderName: "",
                    imgURLEvent: [],
                    descriptionEvent: <p></p>,
    },
    
    setEvent: (newEvent) => set((state) => ({initEvent: newEvent}))
            
}))

export default useEventTransmission 