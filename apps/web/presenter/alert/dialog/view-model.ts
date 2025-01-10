'use client'

import { useEffect, useRef } from 'react'
import { useAlert as useAlertViewModel } from '../di'

export const useAlertDialogViewModel = ({ id }: { id: string }) => {
  const { deleteItem } = useAlertViewModel()

  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleChangeOpen = (open: boolean) => {
    if (!open) deleteItem(id)
  }

  useEffect(() => {
    setTimeout(() => {
      if (document.body.style.pointerEvents === 'none') document.body.style.pointerEvents = 'auto'

      // 컴포넌트가 마운트되면 버튼에 포커스
      buttonRef.current?.focus()
    }, 0)
  }, [])

  return { buttonRef, handleChangeOpen }
}
