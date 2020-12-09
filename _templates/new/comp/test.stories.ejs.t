---
to: _skeleton/<%=h.inflection.dasherize(name)%>/test.stories.tsx
---
// import { State, Store } from '@sambego/storybook-state'
// import { action } from '@storybook/addon-actions'

import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0';
import { <%=h.inflection.camelize(name)%>, Props  } from '.'
import stories from './test.stories.css'

export default {
  title: __dirname,
  component: <%=h.inflection.camelize(name)%>,
  decorators: [
    storyFn => <><div className={stories.frame}>{storyFn()}</div></>,
  ],
} as Meta

const Template: Story<Props> = (args) => <<%=h.inflection.camelize(name)%> {...args} />

export const Component = Template.bind({});