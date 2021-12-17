import { doc, getDoc, SnapshotOptions } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useFirebase } from './firebase';

export const useApiKey = (): {
    getApiKey: () => Promise<string|null>,
} => {
    const firebase = useFirebase();
    const firestore = firebase?.firestore;

    const getApiKey = async (): Promise<string | null> => {
        if (!firestore) return null;
        const docs = await getDoc(doc(firestore, 'microcsm', 'api'));
        return docs.data()?.key || "";
    }

    return {
        getApiKey,
    }
}