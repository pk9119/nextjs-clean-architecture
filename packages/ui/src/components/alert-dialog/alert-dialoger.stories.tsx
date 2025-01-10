import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../../primitives/button'
import { AlertDialoger } from './alert-dialoger'
import { alertDialog } from './use-alert-dialog'

const meta = {
  title: 'Components/AlertDialoger',
  component: AlertDialoger,
  render: () => {
    return (
      <div>
        <Button
          onClick={() => {
            alertDialog({
              title: '상품 정보를 업로드 해주세요.',
              description: '필수 정보 업로드 후, 다시 시도해주세요.',
              actionButton: { children: '확인' },
            })
          }}
        >
          다이얼로그 나오는 버튼
        </Button>
        <AlertDialoger />
      </div>
    )
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
    docs: {
      story: {
        inline: false,
        iframeHeight: 400,
      },
    },
  },
} satisfies Meta<typeof AlertDialoger>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
