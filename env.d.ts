// / <reference types="vite/client" />

interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly VITE_ENV: string
  readonly VITE_BASE: string
  readonly VITE_HISTORY_BASE: string
  readonly VITE_BASE_URL: string
  readonly VITE_LANG: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}