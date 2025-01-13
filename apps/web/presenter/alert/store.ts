import { generateUUID } from '@repo/core/utils'
import StoreKeys from 'common/constants/store-key'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { AlertDialogModel } from './model'

interface AlertDialogState {
  items: AlertDialogModel[]
  addItem: (item: Omit<AlertDialogModel, 'id'>) => string
  updateItems: (items: AlertDialogModel[]) => void
  deleteItem: (id: string) => void
  reset: () => void
}

const initState = () => ({ items: [] })

const useAlertDialogStore = create<AlertDialogState>()(
  devtools(
    set => ({
      ...initState(),
      addItem: (item: Omit<AlertDialogModel, 'id'>) => {
        const id = generateUUID()
        set(state => ({ items: [...state.items, { id, ...item }] }))
        return id
      },
      updateItems: (newItems: AlertDialogModel[]) => set({ items: newItems }),
      deleteItem: (id: string) => set(state => ({ items: state.items.filter(item => item.id !== id) })),
      reset: () => set(initState()),
    }),
    { name: StoreKeys.alertDialog.default },
  ),
)

export default useAlertDialogStore
