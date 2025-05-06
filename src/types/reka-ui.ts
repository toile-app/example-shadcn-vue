import type { Component } from 'vue'
import 'reka-ui'

declare module 'reka-ui' {
  /**
   * Copy and extend of the corresponding type of reka-ui with @toile JSDoc tags
   */
  interface PrimitiveProps {
    /**
     * Change the default rendered element for the one passed as a child, merging their props and behavior.
     * Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.
     * @toile hide
     */
    asChild?: boolean
    /**
     * The element or component this component should render as. Can be overwritten by `asChild`.
     * @defaultValue "div"
     * @toile hide
     */
    as?: AsTag | Component
  }
}
