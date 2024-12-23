'use client'

import { LoadingSpinner } from '@repo/ui/components/loading-spinner'
import { useIsFetching, useIsMutating } from '@tanstack/react-query'
import useGlobalStore from 'common/stores/global'
import { useShallow } from 'zustand/react/shallow'

export default function Loading() {
  const isFetching = useIsFetching()
  const isMutating = useIsMutating()
  const { isLoading } = useGlobalStore(useShallow(state => ({ isLoading: state.isLoading })))

  return (isLoading || isFetching > 0 || isMutating > 0) && <LoadingSpinner />
}
