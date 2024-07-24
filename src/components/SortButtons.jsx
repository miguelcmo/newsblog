import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownAZ } from '@fortawesome/free-solid-svg-icons';
import { faArrowDownZA } from '@fortawesome/free-solid-svg-icons';

export default function SortButtons({ sortAlpha, alphaSort }) {
    let customIcon;
    
    if (sortAlpha) {
        customIcon = faArrowDownZA;
    } else {
        customIcon = faArrowDownAZ;
    }

    return (
        <>
            <button className="btn btn-secondary mx-1" onClick={() => alphaSort()}><FontAwesomeIcon icon={customIcon} /></button>
        </>
    );
}