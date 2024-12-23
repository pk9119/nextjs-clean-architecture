'use client'

import { Button } from '@repo/ui/primitives/button'
import { Skeleton } from '@repo/ui/primitives/skeleton'
import { CircleUserRound } from 'lucide-react'
import { MemberModel } from './model'
import { GNBViewModel, useGNBViewModel } from './view-model'

export function GNBView() {
  const viewModel: GNBViewModel = useGNBViewModel()

  return (
    <div className='bg-primary text-background border-primary flex h-16 min-h-16 items-center justify-end border-b pl-10'>
      <Button
        type='button'
        variant={'ghost'}
        size={'xs'}
        className='hover:text-foreground hover:bg-background transition-color group flex h-full items-center justify-center rounded-none border-l px-5'
      >
        <CircleUserRound className='mr-2 stroke-1 group-hover:stroke-2' />
        <GNBView.MemberName memberInfo={viewModel.memberInfo} />
        님, 반갑습니다!
      </Button>
    </div>
  )
}

function GNBViewMemberName({ memberInfo }: { memberInfo?: MemberModel }) {
  return <>{memberInfo?.name ? <strong>{memberInfo?.name}</strong> : <Skeleton className='h-4 w-14' />}</>
}
GNBView.MemberName = GNBViewMemberName
