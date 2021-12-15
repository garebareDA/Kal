import React, { useState, useEffect } from 'react';

import { Analytics, getAnalytics } from 'firebase/analytics'
import { initializeApp, FirebaseApp, FirebaseOptions } from 'firebase/app'
import { Auth, getAuth } from 'firebase/auth'
import { Firestore, getFirestore } from 'firebase/firestore'

import config from './firebaseConfig.json'

export const useFirebase = (): {
    app: FirebaseApp|null,
    analytics: Analytics|null,
    auth: Auth|null,
    firestore: Firestore|null
}
    | undefined => {
    const [app, setApp] = useState<FirebaseApp | null>(null);
    const [analytics, setAnalytics] = useState<Analytics | null>(null);
    const [auth, setAuth] = useState<Auth | null>(null);
    const [firestore, setFirestore] = useState<Firestore | null>(null);

    setApp(initializeApp(config as FirebaseOptions));
    useEffect(() => {
        if (!app) return;
        setAnalytics(getAnalytics(app));
        setAuth(getAuth(app));
        setFirestore(getFirestore(app));
    }, [app]);
    return { app, analytics, auth, firestore };
}