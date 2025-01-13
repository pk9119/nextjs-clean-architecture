'use client'

import { AlertDialog } from './alert-dialog'
import { useAlertDialog } from './use-alert-dialog'

export const AlertDialoger = () => {
  const { alertDialogs } = useAlertDialog()

  return (
    <>
      {alertDialogs.map(function ({ id, ...props }) {
        return <AlertDialog key={id} {...props} defaultOpen={true} id={id} overlay={props?.overlay ?? true} />
      })}
    </>
  )
}
