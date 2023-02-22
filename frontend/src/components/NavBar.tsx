import React from 'react';
import {LanguageButton} from '../i18n/LanguageButton';
import {useNavigate} from "react-router";

export function NavBar() {
    const navigate = useNavigate()
    return (
        <div className="px-2 sm:px-6 lg:px-8 bg-zinc-900 text-white sticky top-0">
            <div className="flex h-16 items-center justify-between">
                <h2 className="font-bold cursor-pointer" onClick={() => navigate('/')}>Textadventuregame v2</h2>
                <LanguageButton/>
            </div>
        </div>
    );
}
