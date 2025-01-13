import { useShallow } from 'zustand/react/shallow'
import { AlertDialogModel } from './model'
import useAlertDialogStore from './store'

export const alertDialog = ({ ...props }: Omit<AlertDialogModel, 'id'>) => {
  return useAlertDialogStore.getState().addItem({ ...props, defaultOpen: true })
}

export const useAlertViewModel = () => {
  const { items, deleteItem } = useAlertDialogStore(
    useShallow(state => ({ items: state.items, deleteItem: state.deleteItem })),
  )
  return { items, deleteItem }
}

export interface AlertViewModel extends ReturnType<typeof useAlertViewModel> {}
