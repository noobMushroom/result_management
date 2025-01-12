import { db } from '$lib/firebase.js';
import { error } from '@sveltejs/kit';
import { collection, getDocs } from 'firebase/firestore';

export async function load(event) {
    try {
        const studentCollection = collection(db, 'students');
        const snapshot = await getDocs(studentCollection);

        const students = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }));
        return { students };
    } catch (e) {
        error(500, 'failed to retrive students data');
    }
}
