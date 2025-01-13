import { useRouter } from 'next/navigation'
import { alertDialog } from 'presenter/alert/view-model'

export const useHomeViewModel = () => {
  const router = useRouter()

  const handleGotoMedium = () => {
    alertDialog({
      title: 'Medium 사이트로 이동하시겠습니까?',
      description: '사이트가 이동됩니다.',
      cancelButton: { children: '취소' },
      actionButton: {
        children: '이동',
        onClick: () => {
          router.push('https://medium.com/@loveless.cherry/react-clean-architecture-1-6d853f563e70')
        },
      },
    })
  }

  return { handleGotoMedium }
}
