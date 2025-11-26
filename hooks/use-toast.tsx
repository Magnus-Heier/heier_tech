"use client"

import * as React from "react"

type ToastRecord = {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: React.ReactNode
  duration?: number
  variant?: "default" | "destructive"
}

type ToastContextValue = {
  toasts: ToastRecord[]
  toast: (toast: Omit<ToastRecord, "id">) => void
  dismiss: (id: string) => void
}

const ToastContext = React.createContext<ToastContextValue | null>(null)

export function ToastProviderClient({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<ToastRecord[]>([])

  const dismiss = React.useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  const toast = React.useCallback((toast: Omit<ToastRecord, "id">) => {
    const id = Math.random().toString(36).slice(2)
    const next: ToastRecord = { id, ...toast }
    setToasts((prev) => [...prev, next])
    if (next.duration && next.duration > 0) {
      setTimeout(() => dismiss(id), next.duration)
    }
  }, [dismiss])

  const value = React.useMemo(() => ({ toasts, toast, dismiss }), [toasts, toast, dismiss])

  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
}

export function useToast() {
  const ctx = React.useContext(ToastContext)
  if (!ctx) {
    throw new Error("useToast must be used within ToastProviderClient")
  }
  return ctx
}


