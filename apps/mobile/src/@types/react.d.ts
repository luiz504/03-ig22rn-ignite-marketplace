import React from 'react'

declare module 'react' {
  export type FCC<T = object> = React.FC<React.PropsWithChildren<T>>
}
