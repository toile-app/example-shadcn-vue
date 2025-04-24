import type { ToileConfig } from '@toile.app/cli'

export const config: ToileConfig = {
  tsconfig: 'tsconfig.app.json',
  entrySrc: './src/components.ts',
  entry: './dist/toile-example-shadcn-vue.js',
  style: './dist/toile-example-shadcn-vue.css',
}

export default config
