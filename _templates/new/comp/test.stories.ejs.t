---
to: _skeleton/<%=h.inflection.dasherize(name)%>/test.story.tsx
---
// import { State, Store } from '@sambego/storybook-state'
// import { action } from '@storybook/addon-actions'
// import { FormattedMessage, IntlProvider } from 'react-intl'
// import withPropsCombinations from 'react-storybook-addon-props-combinations'

import React from 'react'
import { <%=h.inflection.camelize(name)%> } from '.'
import * as stories from './test.stories.css'

export default {
  title: __dirname,
  decorators: [
    storyFn => <><div className={stories.frame}>{storyFn()}</div></>,
  ],
}

export const component = () => <<%=h.inflection.camelize(name)%> />
