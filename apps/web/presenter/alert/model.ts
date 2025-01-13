import { AlertDialogActionProps, AlertDialogCancelProps } from '@repo/ui/primitives/alert-dialog'

export interface AlertDialogModel {
  id: string
  title: string
  description: React.ReactNode
  defaultOpen?: boolean
  trigger?: React.ReactNode
  cancelButton?: AlertDialogCancelProps
  actionButton?: AlertDialogActionProps
}
