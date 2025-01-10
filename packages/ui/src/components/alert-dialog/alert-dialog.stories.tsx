import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../../primitives/button'
import { AlertDialog } from './alert-dialog'

const meta = {
  title: 'Components/AlertDialog',
  component: AlertDialog,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {},
} satisfies Meta<typeof AlertDialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: '상품 등록을 취소하시겠습니까?',
    description: <p>입력한 정보는 저장되지 않습니다.</p>,
    trigger: <Button>다이얼로그 열기</Button>,
    cancelButton: { children: '취소' },
    actionButton: { children: '확인' },
  },
}
