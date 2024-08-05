import React, { createContext, useContext, useState } from 'react';

const LoadingContext = createContext();

export function useLoading() {
    const context = useContext(LoadingContext);
    if (!context) {
        throw new Error("useLoading must be used within a LoadingProvider");
    }
    return context;
}

export function LoadingProvider({ children }) {
    const [isLoading, setIsLoading] = useState(false);

    const LoadingSpinner = () => (
        isLoading ? (
            <div className="loading-spinner">
                {/* Your spinner or loading indicator here */}
                <div className="spinner"></div>
            </div>
        ) : null
    );

    return (
        <LoadingContext.Provider value={{ isLoading, setIsLoading, LoadingSpinner }}>
            {children}
        </LoadingContext.Provider>
    );
}
