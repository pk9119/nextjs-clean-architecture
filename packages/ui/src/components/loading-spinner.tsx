import { LoaderCircleIcon } from 'lucide-react'

export function LoadingSpinner() {
  return (
    <div className='fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-slate-300/50'>
      <LoaderCircleIcon className='stroke-background h-12 w-12 animate-spin' />
    </div>
  )
}
