'use client'

import { ReactNode, createContext, use } from 'react'
import { AlertViewModel, useAlertViewModel } from './view-model'

export const AlertContext = createContext({} as AlertViewModel)

export const AlertContextProvider = ({ children }: { children: ReactNode }) => {
  const viewModel: AlertViewModel = useAlertViewModel()
  return <AlertContext.Provider value={viewModel}>{children}</AlertContext.Provider>
}

export const useAlert = () => {
  return use(AlertContext)
}
