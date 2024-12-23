import type { Preview } from '@storybook/react'
import React from 'react'

import './index.css'

const preview: Preview = {
  decorators: [
    Story => (
      <div style={{ margin: '1em' }}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
