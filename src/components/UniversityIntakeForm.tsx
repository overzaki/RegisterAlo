/**
 * @file UniversityIntakeForm component implementing a multi-section
 * Arabic RTL form styled to match the OverZaki promotional design.
 */

import type { FC, FormEvent, ReactNode } from 'react'

/**
 * Props for the reusable form section component.
 */
interface FormSectionProps {
  /** Section title displayed in the header bar. */
  title: string
  /** Optional small description under the title. */
  description?: string
  /** Section body content. */
  children: ReactNode
}

/**
 * Reusable card-like form section with a glowing header strip.
 */
const FormSection: FC<FormSectionProps> = ({ title, description, children }) => {
  return (
    <section className="rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-[#041621]/80 via-[#021f2f]/80 to-[#020917]/90 p-[1px] shadow-[0_0_35px_rgba(16,185,129,0.25)]">
      <div className="rounded-[22px] bg-[#020917]/90">
        <header className="rounded-t-[22px] bg-gradient-to-l from-emerald-500/15 via-emerald-400/10 to-transparent px-5 py-4 border-b border-emerald-500/20 flex flex-col gap-1">
          <h2 className="text-lg sm:text-xl font-bold text-emerald-300">
            {title}
          </h2>
          {description ? (
            <p className="text-xs sm:text-sm text-emerald-100/75">
              {description}
            </p>
          ) : null}
        </header>
        <div className="px-5 pb-5 pt-4 space-y-4">{children}</div>
      </div>
    </section>
  )
}

/**
 * Props for a labeled field row.
 */
interface FieldProps {
  /** Label text displayed above the field. */
  label: string
  /** Optional hint text displayed under the label. */
  hint?: string
  /** Optional indicator for required fields. */
  required?: boolean
  /** Field input element. */
  children: ReactNode
}

/**
 * Vertical field group with label, optional hint and input element.
 */
const Field: FC<FieldProps> = ({ label, hint, required, children }) => {
  return (
    <div className="space-y-1.5">
      <label className="block text-sm font-medium text-emerald-50">
        <span>
          {label}
          {required ? <span className="text-emerald-300"> *</span> : null}
        </span>
      </label>
      {hint ? (
        <p className="text-xs text-emerald-100/70 leading-relaxed">{hint}</p>
      ) : null}
      {children}
    </div>
  )
}

/**
 * Simple Yes/No radio group.
 */
const YesNoGroup: FC<{ name: string }> = ({ name }) => {
  return (
    <div className="flex flex-wrap gap-3 text-sm">
      <label className="inline-flex items-center gap-1.5">
        <input
          type="radio"
          name={name}
          value="yes"
          className="h-4 w-4 accent-emerald-400"
        />
        <span>نعم</span>
      </label>
      <label className="inline-flex items-center gap-1.5">
        <input
          type="radio"
          name={name}
          value="no"
          className="h-4 w-4 accent-emerald-400"
        />
        <span>لا</span>
      </label>
    </div>
  )
}

/**
 * Main multi-section intake form component for universities.
 */
export const UniversityIntakeForm: FC = () => {
  /**
   * Handles basic form submission by preventing default navigation and
   * logging serialized form data. Integration can be added later.
   */
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    // Convert to a simple object for quick inspection during development.
    const data: Record<string, unknown> = {}
    formData.forEach((value, key) => {
      data[key] = value
    })
    // eslint-disable-next-line no-console
    console.log('Submitted intake form:', data)
  }

  /**
   * Triggers the browser print dialog so the user can save the page
   * as a PDF and fill it offline.
   */
  const handlePrintAsPdf = () => {
    if (typeof window !== 'undefined') {
      window.print()
    }
  }

  return (
    <form
      dir="rtl"
      className="space-y-5 text-right"
      onSubmit={handleSubmit}
    >
      {/* 1) معلومات عامة */}
      <FormSection title="1) معلومات عامة">
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="اسم الجامعة" required>
            <input
              name="universityName"
              type="text"
              className="w-full rounded-xl border border-emerald-500/40 bg-[#020917] px-3 py-2.5 text-sm focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
              placeholder="مثال: جامعة المستقبل"
            />
          </Field>
          <Field label="المدينة / الدولة" required>
            <input
              name="cityCountry"
              type="text"
              className="w-full rounded-xl border border-emerald-500/40 bg-[#020917] px-3 py-2.5 text-sm focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
              placeholder="مثال: الرياض، السعودية"
            />
          </Field>
          <Field label="اسم الشخص المسؤول" required>
            <input
              name="contactName"
              type="text"
              className="w-full rounded-xl border border-emerald-500/40 bg-[#020917] px-3 py-2.5 text-sm focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
            />
          </Field>
          <Field label="المسمى الوظيفي" required>
            <input
              name="jobTitle"
              type="text"
              className="w-full rounded-xl border border-emerald-500/40 bg-[#020917] px-3 py-2.5 text-sm focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
            />
          </Field>
          <Field label="رقم التواصل" required>
            <input
              name="phone"
              type="tel"
              className="w-full rounded-xl border border-emerald-500/40 bg-[#020917] px-3 py-2.5 text-sm focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
              placeholder="مثال: +966xxxxxxxxx"
            />
          </Field>
          <Field label="البريد الإلكتروني" required>
            <input
              name="email"
              type="email"
              className="w-full rounded-xl border border-emerald-500/40 bg-[#020917] px-3 py-2.5 text-sm focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
            />
          </Field>
          <Field label="أفضل وقت للتواصل">
            <input
              name="bestTimeToContact"
              type="text"
              className="w-full rounded-xl border border-emerald-500/40 bg-[#020917] px-3 py-2.5 text-sm focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
              placeholder="مثال: 10 صباحًا – 2 ظهرًا"
            />
          </Field>
          <Field label="هل يوجد موعد نهائي لاستلام العرض؟ (تاريخ)">
            <input
              name="deadline"
              type="date"
              className="w-full rounded-xl border border-emerald-500/40 bg-[#020917] px-3 py-2.5 text-sm text-emerald-50 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
            />
          </Field>
        </div>
      </FormSection>

      {/* 2) الهدف من المشروع */}
      <FormSection title="2) الهدف من المشروع">
        <div className="space-y-4">
          <Field
            label="ما الهدف الرئيسي؟"
            hint="يمكن اختيار أكثر من هدف إن رغبت."
          >
            <div className="grid gap-2 text-sm md:grid-cols-2">
              {[
                'تقليل ضغط الموظفين',
                'رفع جودة الخدمة',
                'توفر 24/7',
                'تقليل وقت الانتظار',
                'توحيد الردود'
              ].map((goal) => (
                <label
                  key={goal}
                  className="inline-flex items-center justify-between gap-2 rounded-xl border border-emerald-500/40 bg-[#020917] px-3 py-2 hover:border-emerald-300/80"
                >
                  <span>{goal}</span>
                  <input
                    type="checkbox"
                    name="projectGoals"
                    value={goal}
                    className="h-4 w-4 accent-emerald-400"
                  />
                </label>
              ))}
            </div>
          </Field>

          <Field label="هل المطلوب استبدال كول سنتر بالكامل أم مساعد ذكي بجانب الموظفين؟">
            <div className="flex flex-wrap gap-3 text-sm">
              <label className="inline-flex items-center gap-1.5">
                <input
                  type="radio"
                  name="callcenterScope"
                  value="full-replacement"
                  className="h-4 w-4 accent-emerald-400"
                />
                <span>استبدال الكول سنتر بالكامل</span>
              </label>
              <label className="inline-flex items-center gap-1.5">
                <input
                  type="radio"
                  name="callcenterScope"
                  value="assistant"
                  className="h-4 w-4 accent-emerald-400"
                />
                <span>مساعد ذكي بجانب الموظفين</span>
              </label>
            </div>
          </Field>

          <Field
            label="ما نطاق المرحلة الأولى (MVP)؟"
            hint="مثال: القبول + المالية فقط، أو أقسام محددة."
          >
            <textarea
              name="mvpScope"
              rows={3}
              className="w-full rounded-xl border border-emerald-500/40 bg-[#020917] px-3 py-2.5 text-sm focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
            />
          </Field>
        </div>
      </FormSection>

      {/* 3) الأقسام المطلوبة + حجم المكالمات لكل قسم */}
      <FormSection
        title="3) الأقسام المطلوبة + حجم المكالمات لكل قسم"
        description="يرجى إدخال عدد المكالمات اليومية لكل قسم + نسبة المكالمات المتوقعة خارج أوقات الدوام."
      >
        <div className="grid gap-3 md:grid-cols-2">
          {[
            'القبول',
            'المالية',
            'شؤون الطلبة',
            'الدراسات العليا',
            'العلاقات العامة',
            'خدمة المجتمع',
            'شؤون الموظفين',
            'IT',
            'المكتبة',
            'الامتحانات',
            'المرافق',
            'الأمن والسلامة',
            'العيادة الطبية',
            'مركز الاستشارات',
            'مركز اللغات',
            'مركز التدريب',
            'مركز التوظيف',
            'مركز الابتكار',
            'مركز الجودة',
            'مركز البحث العلمي'
          ].map((dept) => (
            <div
              key={dept}
              className="rounded-2xl border border-emerald-500/30 bg-[#020917] px-3 py-2.5 space-y-2"
            >
              <p className="text-sm font-medium text-emerald-50">{dept}</p>
              <div className="grid grid-cols-[1.3fr,0.9fr] gap-2 text-xs">
                <div>
                  <label className="block mb-1 text-emerald-100/80">
                    مكالمات/يوم
                  </label>
                  <input
                    name={`dept-${dept}-daily`}
                    type="number"
                    min={0}
                    className="w-full rounded-lg border border-emerald-500/40 bg-[#020917] px-2 py-1.5 text-xs focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-emerald-100/80">
                    خارج الدوام %
                  </label>
                  <input
                    name={`dept-${dept}-offhours`}
                    type="number"
                    min={0}
                    max={100}
                    className="w-full rounded-lg border border-emerald-500/40 bg-[#020917] px-2 py-1.5 text-xs focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                  />
                </div>
              </div>
            </div>
          ))}

          <div className="md:col-span-2">
            <Field label="أقسام أخرى (اذكرها)">
              <textarea
                name="otherDepartments"
                rows={2}
                className="w-full rounded-xl border border-emerald-500/40 bg-[#020917] px-3 py-2 text-sm focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                placeholder="مثال: مركز ريادة الأعمال، مركز الاختبارات الدولية..."
              />
            </Field>
          </div>
        </div>
      </FormSection>

      {/* 4) حجم المكالمات الكلي */}
      <FormSection title="4) حجم المكالمات الكلي">
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="متوسط عدد المكالمات اليومية (كل الجامعة)">
            <input
              name="totalDailyCalls"
              type="number"
              min={0}
              className="w-full rounded-xl border border-emerald-500/40 bg-[#020917] px-3 py-2.5 text-sm focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
            />
          </Field>
          <Field label="أعلى ذروة للمكالمات (Peak/يوم)">
            <input
              name="peakDailyCalls"
              type="number"
              min={0}
              className="w-full rounded-xl border border-emerald-500/40 bg-[#020917] px-3 py-2.5 text-sm focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
            />
          </Field>
          <Field label="ساعات الذروة">
            <input
              name="peakHours"
              type="text"
              className="w-full rounded-xl border border-emerald-500/40 bg-[#020917] px-3 py-2.5 text-sm focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
              placeholder="مثال: 10–12 صباحًا، 1–3 ظهرًا"
            />
          </Field>
          <Field label="عدد موظفي الكول سنتر الحاليين">
            <input
              name="currentAgents"
              type="number"
              min={0}
              className="w-full rounded-xl border border-emerald-500/40 bg-[#020917] px-3 py-2.5 text-sm focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
            />
          </Field>
          <Field label="متوسط مدة المكالمة الحالية (إن وجد) - دقيقة">
            <input
              name="avgCallDuration"
              type="number"
              min={0}
              className="w-full rounded-xl border border-emerald-500/40 bg-[#020917] px-3 py-2.5 text-sm focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
            />
          </Field>
          <Field label="نسبة المكالمات الفائتة/المعلقة (إن وجد) %">
            <input
              name="missedCallsPercent"
              type="number"
              min={0}
              max={100}
              className="w-full rounded-xl border border-emerald-500/40 bg-[#020917] px-3 py-2.5 text-sm focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
            />
          </Field>
        </div>
      </FormSection>

      {/* 5) اللغات المطلوبة */}
      <FormSection title="5) اللغات المطلوبة">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            'العربية',
            'الإنجليزية',
            'الفرنسية',
            'التركية',
            'الهندية',
            'الأردية'
          ].map((lang) => (
            <Field key={lang} label={`${lang} (%)`}>
              <input
                name={`lang-${lang}`}
                type="number"
                min={0}
                max={100}
                className="w-full rounded-xl border border-emerald-500/40 bg-[#020917] px-3 py-2 text-sm focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
              />
            </Field>
          ))}
          <Field label="لغات أخرى">
            <div className="flex gap-2">
              <input
                name="otherLanguageName"
                type="text"
                className="w-2/3 rounded-xl border border-emerald-500/40 bg-[#020917] px-3 py-2 text-sm focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                placeholder="اسم اللغة"
              />
              <input
                name="otherLanguagePercent"
                type="number"
                min={0}
                max={100}
                className="w-1/3 rounded-xl border border-emerald-500/40 bg-[#020917] px-3 py-2 text-sm focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                placeholder="%"
              />
            </div>
          </Field>
        </div>
      </FormSection>

      {/* 6) نوع القنوات المطلوبة */}
      <FormSection title="6) نوع القنوات المطلوبة">
        <div className="space-y-4">
          <Field label="القنوات المطلوبة">
            <div className="grid gap-2 text-sm md:grid-cols-2">
              {[
                'صوت فقط (IVR ذكي)',
                'صوت + SMS',
                'صوت + WhatsApp',
                'صوت + Email',
                'صوت + بوابة إلكترونية / Chat Widget'
              ].map((channel) => (
                <label
                  key={channel}
                  className="inline-flex items-center justify-between gap-2 rounded-xl border border-emerald-500/40 bg-[#020917] px-3 py-2 hover:border-emerald-300/80"
                >
                  <span>{channel}</span>
                  <input
                    type="checkbox"
                    name="channels"
                    value={channel}
                    className="h-4 w-4 accent-emerald-400"
                  />
                </label>
              ))}
              <label className="md:col-span-2 space-y-1.5 rounded-xl border border-emerald-500/40 bg-[#020917] px-3 py-2">
                <span className="block text-sm">أخرى</span>
                <input
                  name="channelsOther"
                  type="text"
                  className="w-full rounded-lg border border-emerald-500/40 bg-[#020917] px-2 py-1.5 text-sm focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                  placeholder="اذكر القنوات الإضافية إن وجدت"
                />
              </label>
            </div>
          </Field>

          <Field label="هل تريدون رقم موحد واحد أم أرقام متعددة لكل قسم؟">
            <input
              name="numbersPreference"
              type="text"
              className="w-full rounded-xl border border-emerald-500/40 bg-[#020917] px-3 py-2 text-sm focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
              placeholder="مثال: رقم موحد واحد + تحويلات داخلية"
            />
          </Field>
        </div>
      </FormSection>

      {/* 7) سيناريوهات المكالمات */}
      <FormSection
        title="7) سيناريوهات المكالمات (Use Cases)"
        description="حدد السيناريوهات المطلوبة وهل تحتاج تحقق هوية، واذكر أهم الأسئلة إن أمكن."
      >
        <div className="space-y-4">
          <Field label="السيناريوهات المطلوبة + هل تحتاج تحقق هوية؟">
            <div className="grid gap-2 md:grid-cols-2 text-sm">
              {[
                'رسوم / سداد / متأخرات',
                'تسجيل مواد / حذف وإضافة',
                'قبول / حالة طلب',
                'متابعة معاملة / رقم طلب',
                'طلب شهادة / إفادة',
                'مواعيد (عيادة/استشارات/مقابلات)',
                'امتحانات / جداول / قاعات',
                'شكاوى / تصعيد',
                'دعم فني (L1)'
              ].map((scenario) => (
                <div
                  key={scenario}
                  className="space-y-1.5 rounded-xl border border-emerald-500/40 bg-[#020917] px-3 py-2"
                >
                  <label className="inline-flex items-center justify-between gap-2">
                    <span>{scenario}</span>
                    <input
                      type="checkbox"
                      name="scenarios"
                      value={scenario}
                      className="h-4 w-4 accent-emerald-400"
                    />
                  </label>
                  <div className="flex items-center justify-between gap-2 text-xs text-emerald-100/80">
                    <span>يحتاج تحقق هوية؟</span>
                    <YesNoGroup
                      name={`scenario-${scenario}-identity`}
                    />
                  </div>
                </div>
              ))}

              <div className="md:col-span-2 space-y-2 rounded-xl border border-emerald-500/40 bg-[#020917] px-3 py-2">
                <p className="text-sm font-medium text-emerald-50">
                  سيناريوهات أخرى
                </p>
                <textarea
                  name="otherScenarios"
                  rows={2}
                  className="w-full rounded-lg border border-emerald-500/40 bg-[#020917] px-2 py-1.5 text-sm focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                  placeholder="اذكر أي سيناريوهات إضافية مطلوبة"
                />
              </div>
            </div>
          </Field>

          <Field label="لكل سيناريو: هل الرد معلومة عامة أم يحتاج بيانات طالب/موظف؟ وما أهم 20 سؤال؟">
            <textarea
              name="scenariosDetails"
              rows={4}
              className="w-full rounded-xl border border-emerald-500/40 bg-[#020917] px-3 py-2 text-sm focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
              placeholder="مثال: سيناريو الرسوم يحتاج رقم جامعي + تفاصيل الرصيد، وأهم الأسئلة هي..."
            />
          </Field>
        </div>
      </FormSection>

      {/* 8) البيانات المتاحة لتغذية النظام */}
      <FormSection title="8) البيانات المتاحة لتغذية النظام (Knowledge Base)">
        <div className="grid gap-4 md:grid-cols-2">
          {[
            'الأسئلة الشائعة FAQ',
            'دليل الطالب',
            'التقويم الأكاديمي',
            'شروط القبول',
            'الرسوم الدراسية',
            'البرامج الأكاديمية',
            'السياسات واللوائح',
            'دليل الموظفين',
            'روابط الأنظمة'
          ].map((item) => (
            <Field key={item} label={item}>
              <YesNoGroup name={`kb-${item}`} />
            </Field>
          ))}
          <Field label="ملفات (PDF/Excel/Word)">
            <div className="flex items-center gap-3">
              <YesNoGroup name="kb-files-exist" />
              <input
                name="kb-files-count"
                type="number"
                min={0}
                className="w-24 rounded-xl border border-emerald-500/40 bg-[#020917] px-2 py-1.5 text-sm focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                placeholder="كم ملف؟"
              />
            </div>
          </Field>
          <Field label="أخرى">
            <textarea
              name="kb-other"
              rows={2}
              className="w-full rounded-xl border border-emerald-500/40 bg-[#020917] px-3 py-2 text-sm focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
            />
          </Field>
          <Field label="لغة المحتوى وتحديثه">
            <input
              name="kb-languageUpdate"
              type="text"
              className="w-full rounded-xl border border-emerald-500/40 bg-[#020917] px-3 py-2 text-sm focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
              placeholder="مثال: عربي/إنجليزي ويتم التحديث شهريًا"
            />
          </Field>
        </div>
      </FormSection>

      {/* 9) الأنظمة الموجودة داخل الجامعة */}
      <FormSection title="9) الأنظمة الموجودة داخل الجامعة (Integrations)">
        <div className="space-y-4">
          <Field label="الأنظمة الأكاديمية">
            <input
              name="systems-academic"
              type="text"
              className="w-full rounded-xl border border-emerald-500/40 bg-[#020917] px-3 py-2 text-sm focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
              placeholder="مثال: Banner, PeopleSoft, EduWave, نظام داخلي..."
            />
          </Field>
          <Field label="أنظمة الكول سنتر / السنترال">
            <input
              name="systems-callcenter"
              type="text"
              className="w-full rounded-xl border border-emerald-500/40 bg-[#020917] px-3 py-2 text-sm focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
              placeholder="مثال: Avaya, Cisco, Asterisk, 3CX..."
            />
          </Field>
          <Field label="CRM">
            <input
              name="systems-crm"
              type="text"
              className="w-full rounded-xl border border-emerald-500/40 bg-[#020917] px-3 py-2 text-sm focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
            />
          </Field>
          <Field label="أنظمة إضافية (LMS / ERP / بوابة الطالب ...)">
            <textarea
              name="systems-other"
              rows={2}
              className="w-full rounded-xl border border-emerald-500/40 bg-[#020917] px-3 py-2 text-sm focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
            />
          </Field>
        </div>
      </FormSection>

      {/* 10) صلاحيات الوصول والقيود الأمنية */}
      <FormSection title="10) صلاحيات الوصول والقيود الأمنية">
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="API">
            <YesNoGroup name="security-api" />
          </Field>
          <Field label="Webhooks">
            <YesNoGroup name="security-webhooks" />
          </Field>
          <Field label="قاعدة بيانات للقراءة فقط">
            <YesNoGroup name="security-readonly-db" />
          </Field>
          <Field label="SSO (Azure AD / Google / LDAP)">
            <YesNoGroup name="security-sso" />
          </Field>
          <Field label="قيود أمنية / امتثال إضافية">
            <textarea
              name="security-constraints"
              rows={3}
              className="w-full rounded-xl border border-emerald-500/40 bg-[#020917] px-3 py-2 text-sm focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
              placeholder="مثال: استضافة داخلية، تشفير، سجلات تدقيق، منع خروج البيانات..."
            />
          </Field>
        </div>
      </FormSection>

      {/* 11) أسئلة تسعير أساسية */}
      <FormSection title="11) أسئلة تسعير أساسية">
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="هل تريدون الحل Cloud أم On-Premise داخل الجامعة؟">
            <input
              name="pricing-deployment"
              type="text"
              className="w-full rounded-xl border border-emerald-500/40 bg-[#020917] px-3 py-2 text-sm focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
            />
          </Field>
          <Field label="عدد الفروع / الحرم الجامعي إن وجد">
            <input
              name="pricing-campuses"
              type="number"
              min={0}
              className="w-full rounded-xl border border-emerald-500/40 bg-[#020917] px-3 py-2 text-sm focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
            />
          </Field>
          <Field label="هل المطلوب 24/7؟">
            <YesNoGroup name="pricing-247" />
          </Field>
          <Field label="نسبة التحويل لموظف (Escalation) المتوقعة %">
            <input
              name="pricing-escalation-percent"
              type="number"
              min={0}
              max={100}
              className="w-full rounded-xl border border-emerald-500/40 bg-[#020917] px-3 py-2 text-sm focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
            />
          </Field>
          <Field label="هل تريدون تسجيل المكالمات والاحتفاظ بها؟ (اذكر المدة)">
            <input
              name="pricing-recording"
              type="text"
              className="w-full rounded-xl border border-emerald-500/40 bg-[#020917] px-3 py-2 text-sm focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
              placeholder="مثال: نعم، 90 يوم"
            />
          </Field>
          <Field label="هل مطلوب لوحة تحكم وتقارير؟ (يومي/أسبوعي/شهري + KPIs)">
            <YesNoGroup name="pricing-dashboard" />
          </Field>
          <Field label="هل مطلوب SLA؟ (مثلاً 99.9%)">
            <YesNoGroup name="pricing-sla" />
          </Field>
        </div>
      </FormSection>

      {/* 12) تجربة المستخدم */}
      <FormSection title="12) تجربة المستخدم (Voice & Flow)">
        <div className="space-y-4">
          <Field label="هل يوجد سكربت ترحيبي رسمي؟">
            <YesNoGroup name="ux-greeting-script" />
          </Field>
          <Field label="نوع الصوت المطلوب">
            <input
              name="ux-voice-type"
              type="text"
              className="w-full rounded-xl border border-emerald-500/40 bg-[#020917] px-3 py-2 text-sm focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
              placeholder="مثال: عربي فصيح / لهجة محلية (خليجية، شامية...)"
            />
          </Field>
          <Field label="خيارات IVR تقليدية + ذكاء اصطناعي أم ذكاء فقط؟">
            <input
              name="ux-ivr-type"
              type="text"
              className="w-full rounded-xl border border-emerald-500/40 bg-[#020917] px-3 py-2 text-sm focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
            />
          </Field>
          <Field label="هل تريدون رقم تذكرة تلقائي للشكاوى والمتابعة؟">
            <YesNoGroup name="ux-ticket-number" />
          </Field>
        </div>
      </FormSection>

      {/* 13) ملاحظات إضافية */}
      <FormSection title="13) ملاحظات إضافية">
        <Field label="أي ملاحظات أو متطلبات إضافية">
          <textarea
            name="additional-notes"
            rows={4}
            className="w-full rounded-xl border border-emerald-500/40 bg-[#020917] px-3 py-2 text-sm focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
          />
        </Field>
      </FormSection>

      {/* Submit actions & PDF download (hidden when printing) */}
      <div className="sticky bottom-0 z-10 mt-2 bg-gradient-to-t from-[#020917] via-[#020917]/95 to-transparent pt-3 print:hidden">
        <div className="flex flex-col items-stretch justify-between gap-3 rounded-2xl border border-emerald-500/40 bg-[#020917]/95 px-4 py-3 md:flex-row md:items-center md:gap-4">
          <p className="text-xs sm:text-sm text-emerald-100/80">
            عند الإرسال سيقوم الفريق بمراجعة البيانات والتواصل معكم لتحضير
            العرض الأنسب. يمكنكم أيضًا حفظ النموذج كملف PDF وملؤه لاحقًا من زر
            "تحميل كنموذج PDF".
          </p>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={handlePrintAsPdf}
              className="inline-flex items-center justify-center rounded-xl border border-emerald-400/70 bg-transparent px-4 py-2 text-sm font-semibold text-emerald-200 hover:bg-emerald-500/10 hover:border-emerald-300 transition"
            >
              تحميل كنموذج PDF
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}
