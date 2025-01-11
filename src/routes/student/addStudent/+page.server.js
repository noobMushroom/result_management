import { db } from '$lib/firebase.js';
import { addDoc, collection } from 'firebase/firestore';
export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();

        const student = {
            firstName: data.get('first-name'),
            lastName: data.get('last-name'),
            fatherName: data.get('father-name'),
            class: data.get('class'),
            section: data.get('section'),
            admNo: data.get('admNo'),
            dob: data.get('dob')
        };

        try {
            const docref = await addDoc(collection(db, 'students'), student);
            return { success: true };
        } catch (e) {
            return { success: false, error: e };
        }
    }
};
