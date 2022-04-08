import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useAuth } from './auth';
import { useFirebase } from './firebase';



export const useApiKey = (): {
    apiKey: string | null,
} => {
    const firebase = useFirebase();
    const firestore = firebase?.firestore;
    const { user } = useAuth();
    const [apiKey, setApiKey] = useState<string|null>(null);

    const getApiKey = async (): Promise<string | null> => {
        if (!firestore) return null;
        try {
            const docs = await getDoc(doc(firestore, 'microcsm', 'api'));
            return docs.data()?.key || "";
        }
        catch(error) {
            return "";
        }
    };

    useEffect(() => {
        if (!firestore) return;
        if (!user) return;
        if (apiKey != "" && apiKey != null) return;
        getApiKey().then((key) => {
            setApiKey(key);
        });
    } , [user]);

    return {
        apiKey
    };
};