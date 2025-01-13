'use client'

import { useEffect, useState } from 'react'
import type { AlertDialogProps } from './alert-dialog'

const ALERTDIALOG_LIMIT = 10
const ALERTDIALOG_REMOVE_DELAY = 0

type AlertDialoger = AlertDialogProps & { id: string }

const actionTypes = {
  ADD_ALERTDIALOG: 'ADD_ALERTDIALOG',
  UPDATE_ALERTDIALOG: 'UPDATE_ALERTDIALOG',
  DISMISS_ALERTDIALOG: 'DISMISS_ALERTDIALOG',
  REMOVE_ALERTDIALOG: 'REMOVE_ALERTDIALOG',
} as const

let count = 0

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

type ActionType = typeof actionTypes

type Action =
  | {
      type: ActionType['ADD_ALERTDIALOG']
      alertDialog: AlertDialoger
    }
  | {
      type: ActionType['UPDATE_ALERTDIALOG']
      alertDialog: Partial<AlertDialoger>
    }
  | {
      type: ActionType['DISMISS_ALERTDIALOG']
      alertDialogId?: AlertDialoger['id']
    }
  | {
      type: ActionType['REMOVE_ALERTDIALOG']
      alertDialogId?: AlertDialoger['id']
    }

interface State {
  alertDialogs: AlertDialoger[]
}

const alertDialogTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

const addToRemoveQueue = (alertDialogId: string) => {
  if (alertDialogTimeouts.has(alertDialogId)) {
    return
  }

  const timeout = setTimeout(() => {
    alertDialogTimeouts.delete(alertDialogId)
    dispatch({ type: 'REMOVE_ALERTDIALOG', alertDialogId: alertDialogId })
  }, ALERTDIALOG_REMOVE_DELAY)

  alertDialogTimeouts.set(alertDialogId, timeout)
}

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_ALERTDIALOG':
      return { ...state, alertDialogs: [action.alertDialog, ...state.alertDialogs].slice(0, ALERTDIALOG_LIMIT) }

    case 'UPDATE_ALERTDIALOG':
      return {
        ...state,
        alertDialogs: state.alertDialogs.map(t =>
          t.id === action.alertDialog.id ? { ...t, ...action.alertDialog } : t,
        ),
      }

    case 'DISMISS_ALERTDIALOG': {
      const { alertDialogId } = action

      if (alertDialogId) {
        addToRemoveQueue(alertDialogId)
      } else {
        state.alertDialogs.forEach(alertDialog => {
          addToRemoveQueue(alertDialog.id)
        })
      }

      return {
        ...state,
        alertDialogs: state.alertDialogs.map(t =>
          t.id === alertDialogId || alertDialogId === undefined ? { ...t, open: false } : t,
        ),
      }
    }
    case 'REMOVE_ALERTDIALOG':
      if (action.alertDialogId === undefined) {
        return { ...state, alertDialogs: [] }
      }
      return { ...state, alertDialogs: state.alertDialogs.filter(t => t.id !== action.alertDialogId) }
  }
}

const listeners: Array<(state: State) => void> = []

let memoryState: State = { alertDialogs: [] }

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action)
  listeners.forEach(listener => {
    listener(memoryState)
  })
}

type AlertDialog = Omit<AlertDialoger, 'id'>

function alertDialog({ ...props }: AlertDialog) {
  const id = genId()
  const update = (props: AlertDialoger) => dispatch({ type: 'UPDATE_ALERTDIALOG', alertDialog: { ...props, id } })
  const dismiss = () => dispatch({ type: 'DISMISS_ALERTDIALOG', alertDialogId: id })
  dispatch({ type: 'ADD_ALERTDIALOG', alertDialog: { ...props, id } })
  return { id, dismiss, update }
}

function useAlertDialog() {
  const [state, setState] = useState<State>(memoryState)

  useEffect(() => {
    listeners.push(setState)
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [state])

  return {
    ...state,
    alertDialog,
    dismiss: (alertDialogId?: string) => dispatch({ type: 'DISMISS_ALERTDIALOG', alertDialogId }),
  }
}

export { alertDialog, useAlertDialog }
