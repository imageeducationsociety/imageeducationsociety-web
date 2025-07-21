"use client";
import { X } from "lucide-react";
import React, { createContext, useContext, useState, useRef } from "react";
import "./style.scss";

type Toast = {
  id: number;
  message: string;
  type: "success" | "error" | "info";
  timeout?: number;
};

interface ToastContextProps {
  addToast: (
    message: string,
    type?: "success" | "error" | "info",
    timeout?: number
  ) => void;
  toasts: Toast[];
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const idCounter = useRef(0);

  const addToast = (
    message: string,
    type: "success" | "error" | "info" = "info",
    timeout: number = 3000
  ) => {
    const newToast = { id: idCounter.current++, message, type, timeout };
    setToasts((prev) => [...prev, newToast]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== newToast.id));
    }, timeout);
  };

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  //console.log("toasts->", toasts);

  return (
    <ToastContext.Provider value={{ addToast, toasts }}>
      {children}
      {toasts.length > 0 && (
        <div className="toast-container">
          {toasts.map((toast) => (
            <div key={toast.id} className={`toast toast-${toast.type}`}>
              <p>{toast.message}</p>
              <button onClick={() => removeToast(toast.id)}>
                <X />
              </button>
            </div>
          ))}
        </div>
      )}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
