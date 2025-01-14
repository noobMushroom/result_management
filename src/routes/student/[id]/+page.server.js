import { db } from '$lib/firebase.js';
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
    const { id } = params;
    let studentData = null;
    let resultData = null;

    if (id) {
        const docRef = doc(db, 'students', id);
        const docSnap = await getDoc(docRef);
        const result = await getDocs(query(collection(db, 'results'), where('studentId', '==', id)));

        result.forEach((data) => {
            // console.log(data.data());
        });

        if (docSnap.exists()) {
            studentData = { ...docSnap.data(), id };
        } else {
            error(500, 'failed to retrive student data');
        }
    }

    return { studentData, resultData };
}
