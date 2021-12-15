import React, { useState, useEffect } from 'react';
import {
    onAuthStateChanged,
    User,
    signInWithPopup,
    signOut,
    TwitterAuthProvider
} from 'firebase/auth'
export const useAuth = () => {
}