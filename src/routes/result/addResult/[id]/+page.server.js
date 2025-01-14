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
            error(500, 'failed to retrive student data wrong user id');
        }
    }

    return { studentData };
}
