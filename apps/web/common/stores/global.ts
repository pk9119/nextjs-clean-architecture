import StoreKeys from 'common/constants/store-key'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

export interface GlobalState {
  isLoading: boolean
  memberId: number | null
  setIsLoading: (isLoading: boolean) => void
  setMemberId: (memberId: number | null) => void
}

const initState = () => ({ isLoading: false, memberId: 1 })

const useGlobalStore = create<GlobalState>()(
  devtools(
    set => ({
      ...initState(),
      setIsLoading: (isLoading: boolean) => set({ isLoading }),
      setMemberId: (memberId: number | null) => set({ memberId }),
    }),
    { name: StoreKeys.global.default },
  ),
)

export default useGlobalStore
