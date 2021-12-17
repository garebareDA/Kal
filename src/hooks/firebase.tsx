import React, { useState, useEffect, createContext, useContext, ReactNode } from 'react';

import { Analytics, getAnalytics } from 'firebase/analytics'
import { initializeApp, FirebaseApp, FirebaseOptions } from 'firebase/app'
import { Auth, getAuth } from 'firebase/auth'
import { Firestore, getFirestore } from 'firebase/firestore'

import config from './firebaseConfig.json'

const FirebaseContext = createContext<FirebaseApp | null> (null)

export const FirebaseProvider:React.VFC<{children:ReactNode}> = ({children}) => {
    const [app] = useState<FirebaseApp>(() => initializeApp(config))
    return (
        <FirebaseContext.Provider value={app}>{children}</FirebaseContext.Provider>
    )
}

export const useFirebase = (): {
    app: FirebaseApp,
    analytics: Analytics,
    auth: Auth,
    firestore: Firestore
}
    | undefined => {
    const app = useContext(FirebaseContext)
    const [analytics, setAnalytics] = useState<Analytics | null>(null);
    const [auth, setAuth] = useState<Auth | null>(null);
    const [firestore, setFirestore] = useState<Firestore | null>(null);
    useEffect(() => {
        if (!app) return;
        setAnalytics(getAnalytics(app));
        setAuth(getAuth(app));
        setFirestore(getFirestore(app));
    }, [app]);

    if (app && analytics && auth && firestore) {
        return {
            app,
            analytics,
            auth,
            firestore
        }
    } else {
        return undefined;
    }
}