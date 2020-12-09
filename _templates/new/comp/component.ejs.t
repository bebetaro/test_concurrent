---
to: _skeleton/<%=h.inflection.dasherize(name)%>/component.tsx
---
import React from 'react'

import style from './style.css'

export type Props = {}

/**
* <%=h.inflection.camelize(name)%> Component
*/
export const <%=h.inflection.camelize(name)%>: React.FC<Props> = React.memo(function <%=h.inflection.camelize(name)%>(props) {
  return <div className={style.root}>{String(props)}</div>
})

  <%=h.inflection.camelize(name)%>.defaultProps = {}
