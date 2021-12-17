import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    User,
    signInWithPopup,
    signOut,
    deleteUser,
    TwitterAuthProvider
} from 'firebase/auth'

import { useFirebase } from './firebase';
import { FirebaseError } from 'firebase/app';

export const useAuth = (): {
    logIn: () => Promise<void>,
    logOut: () => Promise<void>,
    deleteAccount: () => Promise<void>,
    user: User | null,
} => {
    const [user, setUser] = useState<User | null>(null);
    const [init, setInit] = useState<boolean>(false);
    const [unmounted, setUnmounted] = useState<boolean>(false);
    const firebase = useFirebase();
    const auth = firebase?.auth;
    const navigate = useNavigate();

    useEffect(() => {
        if (!auth) return;
        auth.onAuthStateChanged((user) => {
            if(unmounted) return;
            setUser(user);
            setInit(true);
        });

        return () => {
            setUnmounted(true);
        }
    }, [auth])

    useEffect(() => {
        if (!user && init) {
            navigate('/login');
        } else if(user && init) {
            navigate('/');
        }
    }, [init, user]);

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

    const deleteAccount = async (): Promise<void> => {
        return new Promise((resolve, reject) => {
            auth && user &&
                deleteUser(user).then(() => {
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
        deleteAccount,
        user,
    }
}