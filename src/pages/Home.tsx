/**
 * @file Home page that renders the university AI assistant intake form
 * with OverZaki-inspired branding and layout.
 */

import type { FC } from 'react'
import { UniversityIntakeForm } from '../components/UniversityIntakeForm'
import { UniversityIntakeFormEn } from '../components/UniversityIntakeFormEn'
import { useLanguage } from '../context/LanguageContext'

/**
 * Home page component providing the full-screen background,
 * language switcher and centering the main intake form card.
 */
const Home: FC = () => {
  const { language, setLanguage } = useLanguage()

  const isArabic = language === 'ar'

  return (
    <div className="min-h-screen w-full bg-[#020917] bg-gradient-to-br from-[#020917] via-[#021f2f] to-[#001019] text-white flex items-center justify-center px-4 py-8 print:bg-[#020917] print:text-white">
      <style>{`
        @media print {
          body {
            background-color: #020917 !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
            color: #ffffff !important;
          }
          #root {
            background-color: #020917 !important;
          }
        }
      `}</style>
      <div className="w-full max-w-6xl">
        {/* Language switcher */}
        <div className="mb-4 flex justify-end">
          <div className="inline-flex items-center rounded-full border border-emerald-500/40 bg-[#020917]/80 p-1 shadow-md shadow-emerald-500/30">
            <button
              type="button"
              onClick={() => setLanguage('ar')}
              className={`px-3 py-1 text-xs sm:text-sm rounded-full transition ${
                isArabic
                  ? 'bg-emerald-400 text-[#020917] font-semibold'
                  : 'text-emerald-100 hover:bg-emerald-500/10'
              }`}
            >
              عربي
            </button>
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 text-xs sm:text-sm rounded-full transition ${
                !isArabic
                  ? 'bg-emerald-400 text-[#020917] font-semibold'
                  : 'text-emerald-100 hover:bg-emerald-500/10'
              }`}
            >
              English
            </button>
          </div>
        </div>

        <div
          className={`mb-6 flex flex-col items-center gap-3 text-center ${
            isArabic ? 'rtl' : 'ltr'
          }`}
        >
          <div className="flex items-center justify-center mb-2">
            <img
              src="https://pub-cdn.sider.ai/u/U024HZ02YAN/web-coder/6978eb1c749110c6a258f1ff/resource/25925e48-22ad-4972-91d6-f1b01b109c99.png"
              alt="OverZaki logo"
              className="h-16 sm:h-20 md:h-24 object-contain"
            />
          </div>
          {isArabic ? (
            <>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-emerald-300">
                نموذج جمع معلومات مشروع المساعد الذكي الجامعي
              </h1>
              <p className="max-w-2xl text-sm sm:text-base text-emerald-100/80">
                يرجى تعبئة الحقول التالية بدقة قدر الإمكان حتى نتمكن من إعداد
                عرض فني ومالي مناسب لاحتياجات الجامعة.
              </p>
            </>
          ) : (
            <>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-emerald-300">
                University Smart Assistant Project Intake Form
              </h1>
              <p className="max-w-2xl text-sm sm:text-base text-emerald-100/80">
                Please fill in the following fields as accurately as possible so
                we can prepare a tailored technical and commercial proposal for
                your university.
              </p>
            </>
          )}
        </div>

        {isArabic ? <UniversityIntakeForm /> : <UniversityIntakeFormEn />}
      </div>
    </div>
  )
}

export default Home
