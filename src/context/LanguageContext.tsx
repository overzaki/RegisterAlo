/**
 * @file LanguageContext provides a simple global language state
 * to switch between Arabic and English across the app.
 */

import type { FC, ReactNode } from 'react'
import { createContext, useContext, useState } from 'react'

/**
 * Supported language codes.
 */
export type AppLanguage = 'ar' | 'en'

/**
 * Shape of the language context value.
 */
interface LanguageContextValue {
  /** Currently active language. */
  language: AppLanguage
  /** Updates the active language. */
  setLanguage: (language: AppLanguage) => void
}

/**
 * Internal React context used by the provider and hook.
 */
const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
)

/**
 * Provider component that stores the current language and exposes
 * it via React context to the rest of the application.
 */
export const LanguageProvider: FC<{ children: ReactNode }> = ({
  children
}) => {
  const [language, setLanguage] = useState<AppLanguage>('ar')

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

/**
 * Convenience hook to access the language context safely.
 */
export const useLanguage = (): LanguageContextValue => {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return ctx
}
