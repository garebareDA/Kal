import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    User,
    signInWithPopup,
    signOut,
    TwitterAuthProvider
} from 'firebase/auth'

import { useFirebase } from './firebase';
import { FirebaseError } from 'firebase/app';

export const useAuth = ():{
    logIn: () => Promise<void>,
    logOut: () => Promise<void>,
    user: User | null,
} => {
    const [user, setUser] = useState<User | null>(null);
    const firebase = useFirebase();
    const auth = firebase?.auth || null;
    const firestore = firebase?.firestore || null;
    const navigate = useNavigate();

    useEffect(() => {
        if (!auth) return;
        auth.onAuthStateChanged((user) => {
            setUser(user);
        });
    }, [auth])

    useEffect(() => {
        if (!user) {
            navigate('/login');
        } else {
            console.log(user.providerData[0].uid);
        }
    }, [user]);

    const logIn = async (): Promise<void> => {
        return new Promise((resolve, reject) => {
            auth &&
                signInWithPopup(auth, new TwitterAuthProvider())
                    .then((result) => {
                        setUser(result.user);
                        resolve();
                    })
                    .catch((error: FirebaseError) => {
                        reject(error);
                    })
        });
    }

    const logOut = async (): Promise<void> => {
        return new Promise((resolve, reject) => {
            auth &&
                signOut(auth).then(() => {
                    setUser(null);
                    resolve();
                }).catch((error: FirebaseError) => {
                    reject(error);
                })
        });
    }

    return {
        logIn,
        logOut,
        user,
    }
}