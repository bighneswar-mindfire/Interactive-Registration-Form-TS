import { type AppState } from "../types/types"; 

export const state:AppState={
    users:[],
    errors:{},
    editingId: null,
    formData: {
        name: '',
        mail: '',
        phone: '',
        gender: ''
    }
    
};
