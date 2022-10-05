import React from 'react';

export interface MobileContextProps {
    mobile: boolean;
    setMobile: (mobile: boolean) => void;
}

const initialValue: MobileContextProps = {
    mobile: false,
    setMobile: () => {},
};

export const MobileContext = React.createContext(initialValue);
