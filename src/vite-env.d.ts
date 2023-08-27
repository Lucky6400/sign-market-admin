interface ImportMetaEnv {
  VITE_BASE_API_URL: string;
}

// Extend the global ImportMeta interface to include your custom environment variables
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
