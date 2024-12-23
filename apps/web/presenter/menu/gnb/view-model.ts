import { useQuery } from '@tanstack/react-query'
import QueryKeys from 'common/constants/query-key'
import { useUseCase } from 'common/di/usecase'
import useGlobalStore from 'common/stores/global'
import { useEffect, useState } from 'react'
import { useShallow } from 'zustand/react/shallow'
import { MemberModel } from './model'

export const useGNBViewModel = () => {
  const usecase = useUseCase()
  const { memberId } = useGlobalStore(useShallow(state => ({ memberId: state.memberId })))
  const [memberInfo, setMemberInfo] = useState<MemberModel>()

  const memberQuery = useQuery({
    queryKey: QueryKeys.member.detail(memberId!),
    queryFn: () => usecase.member.get(memberId!),
    enabled: !!memberId,
  })

  useEffect(() => {
    if (!memberQuery.isSuccess || !memberQuery.data) return
    setMemberInfo({ loginId: memberQuery.data.loginId, name: memberQuery.data.name })
  }, [memberQuery.isSuccess, memberQuery.data])

  return { memberInfo }
}
export interface GNBViewModel extends ReturnType<typeof useGNBViewModel> {}
