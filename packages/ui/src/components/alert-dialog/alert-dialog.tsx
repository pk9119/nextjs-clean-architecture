'use client'

import { AlertDialogActionProps, AlertDialogCancelProps } from '@radix-ui/react-alert-dialog'
import { isString } from '@repo/core/utils'
import { useEffect, useRef } from 'react'
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialog as AlertDialogUI,
} from '../../primitives/alert-dialog'
import { useAlertDialog } from './use-alert-dialog'

export interface AlertDialogProps {
  id?: string
  title: string
  description: React.ReactNode
  defaultOpen?: boolean
  overlay?: boolean
  trigger?: React.ReactNode
  cancelButton?: AlertDialogCancelProps
  actionButton?: AlertDialogActionProps
}

export function AlertDialog({ ...props }: AlertDialogProps) {
  const { dismiss } = useAlertDialog()

  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    setTimeout(() => {
      if (document.body.style.pointerEvents === 'none') document.body.style.pointerEvents = 'auto'

      // 컴포넌트가 마운트되면 버튼에 포커스
      buttonRef.current?.focus()
    }, 0)
  }, [])

  return (
    <AlertDialogUI
      defaultOpen={props?.defaultOpen}
      onOpenChange={(open: boolean) => {
        if (!open) dismiss(props?.id)
      }}
    >
      {props?.trigger && <AlertDialogTrigger asChild={!isString(props.trigger)}>{props.trigger}</AlertDialogTrigger>}
      <AlertDialogPortal>
        {props.overlay && <AlertDialogOverlay />}
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{props.title}</AlertDialogTitle>
            <AlertDialogDescription>{props.description}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            {props?.cancelButton && <AlertDialogCancel {...props?.cancelButton} />}
            <AlertDialogAction {...props?.actionButton} ref={buttonRef} />
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogPortal>
    </AlertDialogUI>
  )
}
