import { createContext, useContext, useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import './useLoading.css';

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

  const LoadingSpinner = () =>
    isLoading ? (
      <div className="loading-spinner">
        <BeatLoader color="#164e63" />
      </div>
    ) : null;

  return (
    <LoadingContext.Provider
      value={{ isLoading, setIsLoading }}
    >
      <LoadingSpinner />
      {children}
    </LoadingContext.Provider>
  );
}
