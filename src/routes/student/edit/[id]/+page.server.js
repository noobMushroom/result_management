import { db } from '$lib/firebase.js';
import { addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
    const { id } = params;
    let studentData = null;

    if (id) {
        const docRef = doc(db, 'students', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            studentData = { ...docSnap.data(), id };
        } else {
            error(500, 'failed to retrive student data');
        }
    }

    return { studentData };
}

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const id = data.get('id');

        const student = {
            firstName: data.get('firstName'),
            lastName: data.get('lastName'),
            fatherName: data.get('fatherName'),
            class: data.get('class'),
            section: data.get('section'),
            admNo: data.get('admNo'),
            dob: data.get('dob')
        };

        try {
            const docRef = doc(db, 'students', id);
            await updateDoc(docRef, student, { merge: true });
            return { success: true };
        } catch (e) {
            return { success: false, error: e.message };
        }
    }
};
