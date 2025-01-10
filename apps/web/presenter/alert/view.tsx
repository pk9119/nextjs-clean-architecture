'use client'

import { AlertContextProvider, useAlert as useAlertViewModel } from './di'
import { AlertDialogView } from './dialog/view'
import { AlertViewModel } from './view-model'

export function AlertView() {
  return (
    <AlertContextProvider>
      <AlertView.Content />
    </AlertContextProvider>
  )
}

function AlertViewContent() {
  const { items }: AlertViewModel = useAlertViewModel()

  return (
    <>
      {items.map(function (item) {
        return <AlertDialogView key={item.id} item={item} />
      })}
    </>
  )
}
AlertView.Content = AlertViewContent
