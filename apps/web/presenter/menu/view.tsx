import { GNBView } from './gnb/view'

interface MenuLayoutViewProps {
  children: React.ReactNode
}

export async function MenuLayoutView(props: MenuLayoutViewProps) {
  return (
    <div className='flex h-full w-full flex-col'>
      <GNBView />
      <div className='h-full w-full'>{props.children}</div>
    </div>
  )
}
