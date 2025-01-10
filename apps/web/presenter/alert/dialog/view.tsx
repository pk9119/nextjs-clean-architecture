import { isString } from '@repo/core/utils'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@repo/ui/primitives/alert-dialog'
import { AlertDialogModel } from '../model'
import { useAlertDialogViewModel } from './view-model'

interface AlertDialogViewProps {
  item: AlertDialogModel
}

export function AlertDialogView({ item }: AlertDialogViewProps) {
  const viewModel = useAlertDialogViewModel({ id: item.id })
  return (
    <AlertDialog defaultOpen={item?.defaultOpen} onOpenChange={viewModel.handleChangeOpen}>
      {item?.trigger && <AlertDialogTrigger asChild={!isString(item.trigger)}>{item.trigger}</AlertDialogTrigger>}
      <AlertDialogPortal>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{item.title}</AlertDialogTitle>
            <AlertDialogDescription>{item.description}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            {item?.cancelButton && <AlertDialogCancel {...item?.cancelButton} />}
            <AlertDialogAction {...item?.actionButton} ref={viewModel.buttonRef} />
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogPortal>
    </AlertDialog>
  )
}
