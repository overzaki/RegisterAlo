/**
 * @file UniversityIntakeFormEn component implementing the English
 * LTR version of the multi-section university AI assistant intake form.
 */

import type { FC, FormEvent, ReactNode } from 'react'

/**
 * Props for the reusable form section component (English version).
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
 * Reusable card-like form section for the English form
 * with the same visual style as the Arabic version.
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
 * Vertical field group with label, optional hint and input element (English).
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
 * Simple Yes/No radio group for English labels.
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
        <span>Yes</span>
      </label>
      <label className="inline-flex items-center gap-1.5">
        <input
          type="radio"
          name={name}
          value="no"
          className="h-4 w-4 accent-emerald-400"
        />
        <span>No</span>
      </label>
    </div>
  )
}

/**
 * Main English intake form component for universities.
 * Mirrors the Arabic structure but with English labels and LTR layout.
 */
export const UniversityIntakeFormEn: FC = () => {
  /**
   * Handles basic form submission by preventing default navigation and
   * logging serialized form data for inspection.
   */
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data: Record<string, unknown> = {}
    formData.forEach((value, key) => {
      data[key] = value
    })
    // eslint-disable-next-line no-console
    console.log('Submitted intake form (EN):', data)
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
      dir="ltr"
      className="space-y-5 text-left"
      onSubmit={handleSubmit}
    >
      {/* 1) General Information */}
      <FormSection title="1) General Information">
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="University name" required>
            <input
              name="universityName"
              type="text"
              className="w-full rounded-xl border border-emerald-500/40 bg-[#020917] px-3 py-2.5 text-sm focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
              placeholder="e.g. Future University"
            />
          </Field>
          <Field label="City / Country" required>
            <input
              name="cityCountry"
              type="text"
              className="w-full rounded-xl border border-emerald-500/40 bg-[#020917] px-3 py-2.5 text-sm focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
              placeholder="e.g. Riyadh, Saudi Arabia"
            />
          </Field>
          <Field label="Contact person name" required>
            <input
              name="contactName"
              type="text"
              className="w-full rounded-xl border border-emerald-500/40 bg-[#020917] px-3 py-2.5 text-sm focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
            />
          </Field>
          <Field label="Job title" required>
            <input
              name="jobTitle"
              type="text"
              className="w-full rounded-xl border border-emerald-500/40 bg-[#020917] px-3 py-2.5 text-sm focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
            />
          </Field>
          <Field label="Phone number" required>
            <input
              name="phone"
              type="tel"
              className="w-full rounded-xl border border-emerald-500/40 bg-[#020917] px-3 py-2.5 text-sm focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
              placeholder="e.g. +966xxxxxxxxx"
            />
          </Field>
          <Field label="Email" required>
            <input
              name="email"
              type="email"
              className="w-full rounded-xl border border-emerald-500/40 bg-[#020917] px-3 py-2.5 text-sm focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
            />
          </Field>
          <Field label="Best time to contact">
            <input
              name="bestTimeToContact"
              type="text"
              className="w-full rounded-xl border border-emerald-500/40 bg-[#020917] px-3 py-2.5 text-sm focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
              placeholder="e.g. 10 AM – 2 PM"
            />
          </Field>
          <Field label="Deadline to receive proposal (date)">
            <input
              name="deadline"
              type="date"
              className="w-full rounded-xl border border-emerald-500/40 bg-[#020917] px-3 py-2.5 text-sm text-emerald-50 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
            />
          </Field>
        </div>
      </FormSection>

      {/* 2) Project Objective */}
      <FormSection title="2) Project Objective">
        <div className="space-y-4">
          <Field
            label="What is the primary objective?"
            hint="You can select more than one objective."
          >
            <div className="grid gap-2 text-sm md:grid-cols-2">
              {[
                'Reduce staff workload',
                'Improve service quality',
                '24/7 availability',
                'Reduce waiting time',
                'Standardize responses'
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

          <Field label="Do you want to fully replace the call center or add an AI assistant beside agents?">
            <div className="flex flex-wrap gap-3 text-sm">
              <label className="inline-flex items-center gap-1.5">
                <input
                  type="radio"
                  name="callcenterScope"
                  value="full-replacement"
                  className="h-4 w-4 accent-emerald-400"
                />
                <span>Full call center replacement</span>
              </label>
              <label className="inline-flex items-center gap-1.5">
                <input
                  type="radio"
                  name="callcenterScope"
                  value="assistant"
                  className="h-4 w-4 accent-emerald-400"
                />
                <span>AI assistant beside agents</span>
              </label>
            </div>
          </Field>

          <Field
            label="What is the scope of phase one (MVP)?"
            hint="Example: Admissions + Finance only, or selected departments."
          >
            <textarea
              name="mvpScope"
              rows={3}
              className="w-full rounded-xl border border-emerald-500/40 bg-[#020917] px-3 py-2.5 text-sm focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
            />
          </Field>
        </div>
      </FormSection>

      {/* 3) Required Departments + Call Volume */}
      <FormSection
        title="3) Required Departments + Call Volume per Department"
        description="Please enter the average daily calls per department and the percentage of calls expected outside working hours."
      >
        <div className="grid gap-3 md:grid-cols-2">
          {[
            'Admissions',
            'Finance',
            'Student Affairs',
            'Graduate Studies',
            'Public Relations',
            'Community Service',
            'HR / Staff Affairs',
            'IT',
            'Library',
            'Examinations',
            'Facilities',
            'Security & Safety',
            'Clinic / Medical Center',
            'Advisory Center',
            'Language Center',
            'Training Center',
            'Career Center',
            'Innovation Center',
            'Quality Center',
            'Research Center'
          ].map((dept) => (
            <div
              key={dept}
              className="rounded-2xl border border-emerald-500/30 bg-[#020917] px-3 py-2.5 space-y-2"
            >
              <p className="text-sm font-medium text-emerald-50">{dept}</p>
              <div className="grid grid-cols-[1.3fr,0.9fr] gap-2 text-xs">
                <div>
                  <label className="block mb-1 text-emerald-100/80">
                    Calls / day
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
                    After-hours %
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
            <Field label="Other departments (please list)">
              <textarea
                name="otherDepartments"
                rows={2}
                className="w-full rounded-xl border border-emerald-500/40 bg-[#020917] px-3 py-2 text-sm focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                placeholder="e.g. Entrepreneurship Center, International Testing Center..."
              />
            </Field>
          </div>
        </div>
      </FormSection>

      {/* 4) Overall Call Volume */}
      <FormSection title="4) Overall Call Volume">
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Average total daily calls (all university)">
            <input
              name="totalDailyCalls"
              type="number"
              min={0}
              className="w-full rounded-xl border border-emerald-500/40 bg-[#020917] px-3 py-2.5 text-sm focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
            />
          </Field>
          <Field label="Peak daily calls (max in a single day)">
            <input
              name="peakDailyCalls"
              type="number"
              min={0}
              className="w-full rounded-xl border border-emerald-500/40 bg-[#020917] px-3 py-2.5 text-sm focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
            />
          </Field>
          <Field label="Peak hours">
            <input
              name="peakHours"
              type="text"
              className="w-full rounded-xl border border-emerald-500/40 bg-[#020917] px-3 py-2.5 text-sm focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
              placeholder="e.g. 10–12 AM, 1–3 PM"
            />
          </Field>
          <Field label="Current number of call center agents">
            <input
              name="currentAgents"
              type="number"
              min={0}
              className="w-full rounded-xl border border-emerald-500/40 bg-[#020917] px-3 py-2.5 text-sm focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
            />
          </Field>
          <Field label="Average handling time per call (if known) - minutes">
            <input
              name="avgCallDuration"
              type="number"
              min={0}
              className="w-full rounded-xl border border-emerald-500/40 bg-[#020917] px-3 py-2.5 text-sm focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
            />
          </Field>
          <Field label="Missed / abandoned calls (if known) %">
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

      {/* 5) Required Languages */}
      <FormSection title="5) Required Languages">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            'Arabic',
            'English',
            'French',
            'Turkish',
            'Hindi',
            'Urdu'
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
          <Field label="Other languages">
            <div className="flex gap-2">
              <input
                name="otherLanguageName"
                type="text"
                className="w-2/3 rounded-xl border border-emerald-500/40 bg-[#020917] px-3 py-2 text-sm focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                placeholder="Language name"
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

      {/* 6) Required Channels */}
      <FormSection title="6) Required Channels">
        <div className="space-y-4">
          <Field label="Preferred channels">
            <div className="grid gap-2 text-sm md:grid-cols-2">
              {[
                'Voice only (smart IVR)',
                'Voice + SMS',
                'Voice + WhatsApp',
                'Voice + Email',
                'Voice + Web portal / Chat widget'
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
                <span className="block text-sm">Other</span>
                <input
                  name="channelsOther"
                  type="text"
                  className="w-full rounded-lg border border-emerald-500/40 bg-[#020917] px-2 py-1.5 text-sm focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                  placeholder="List any additional channels"
                />
              </label>
            </div>
          </Field>

          <Field label="Do you prefer a single unified number or multiple numbers per department?">
            <input
              name="numbersPreference"
              type="text"
              className="w-full rounded-xl border border-emerald-500/40 bg-[#020917] px-3 py-2 text-sm focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
              placeholder="e.g. one unified number with internal extensions"
            />
          </Field>
        </div>
      </FormSection>

      {/* 7) Call Scenarios (Use Cases) */}
      <FormSection
        title="7) Call Scenarios (Use Cases)"
        description="Specify the scenarios you need, whether identity verification is required, and list key questions when possible."
      >
        <div className="space-y-4">
          <Field label="Required scenarios + whether identity verification is needed">
            <div className="grid gap-2 md:grid-cols-2 text-sm">
              {[
                'Fees / Payments / Overdues',
                'Course registration / Add & Drop',
                'Admissions / Application status',
                'Follow-up on a request / ticket',
                'Certificates / Letters',
                'Appointments (clinic / advisory / interviews)',
                'Exams / schedules / halls',
                'Complaints / escalation',
                'Technical support (L1)'
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
                    <span>Requires identity verification?</span>
                    <YesNoGroup
                      name={`scenario-${scenario}-identity`}
                    />
                  </div>
                </div>
              ))}

              <div className="md:col-span-2 space-y-2 rounded-xl border border-emerald-500/40 bg-[#020917] px-3 py-2">
                <p className="text-sm font-medium text-emerald-50">
                  Other scenarios
                </p>
                <textarea
                  name="otherScenarios"
                  rows={2}
                  className="w-full rounded-lg border border-emerald-500/40 bg-[#020917] px-2 py-1.5 text-sm focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                  placeholder="List any additional scenarios you require"
                />
              </div>
            </div>
          </Field>

          <Field label="For each scenario: is the answer general information or does it require student/staff data? What are the top 20 questions?">
            <textarea
              name="scenariosDetails"
              rows={4}
              className="w-full rounded-xl border border-emerald-500/40 bg-[#020917] px-3 py-2 text-sm focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
              placeholder="Example: Fees scenario requires student ID + balance details. Key questions are..."
            />
          </Field>
        </div>
      </FormSection>

      {/* 8) Available Data for Knowledge Base */}
      <FormSection title="8) Available Data for Knowledge Base">
        <div className="grid gap-4 md:grid-cols-2">
          {[
            'FAQ',
            'Student handbook',
            'Academic calendar',
            'Admission requirements',
            'Tuition fees',
            'Academic programs',
            'Policies and regulations',
            'Staff directory',
            'System links'
          ].map((item) => (
            <Field key={item} label={item}>
              <YesNoGroup name={`kb-${item}`} />
            </Field>
          ))}
          <Field label="Files (PDF/Excel/Word)">
            <div className="flex items-center gap-3">
              <YesNoGroup name="kb-files-exist" />
              <input
                name="kb-files-count"
                type="number"
                min={0}
                className="w-24 rounded-xl border border-emerald-500/40 bg-[#020917] px-2 py-1.5 text-sm focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                placeholder="How many?"
              />
            </div>
          </Field>
          <Field label="Other sources">
            <textarea
              name="kb-other"
              rows={2}
              className="w-full rounded-xl border border-emerald-500/40 bg-[#020917] px-3 py-2 text-sm focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
            />
          </Field>
          <Field label="Content language and update frequency">
            <input
              name="kb-languageUpdate"
              type="text"
              className="w-full rounded-xl border border-emerald-500/40 bg-[#020917] px-3 py-2 text-sm focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
              placeholder="e.g. Arabic/English and updated monthly"
            />
          </Field>
        </div>
      </FormSection>

      {/* 9) Existing University Systems (Integrations) */}
      <FormSection title="9) Existing University Systems (Integrations)">
        <div className="space-y-4">
          <Field label="Academic systems">
            <input
              name="systems-academic"
              type="text"
              className="w-full rounded-xl border border-emerald-500/40 bg-[#020917] px-3 py-2 text-sm focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
              placeholder="e.g. Banner, PeopleSoft, EduWave, in-house system..."
            />
          </Field>
          <Field label="Call center / PBX systems">
            <input
              name="systems-callcenter"
              type="text"
              className="w-full rounded-xl border border-emerald-500/40 bg-[#020917] px-3 py-2 text-sm focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
              placeholder="e.g. Avaya, Cisco, Asterisk, 3CX..."
            />
          </Field>
          <Field label="CRM">
            <input
              name="systems-crm"
              type="text"
              className="w-full rounded-xl border border-emerald-500/40 bg-[#020917] px-3 py-2 text-sm focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
            />
          </Field>
          <Field label="Additional systems (LMS / ERP / Student portal...)">
            <textarea
              name="systems-other"
              rows={2}
              className="w-full rounded-xl border border-emerald-500/40 bg-[#020917] px-3 py-2 text-sm focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
            />
          </Field>
        </div>
      </FormSection>

      {/* 10) Access and Security Constraints */}
      <FormSection title="10) Access and Security Constraints">
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="API access">
            <YesNoGroup name="security-api" />
          </Field>
          <Field label="Webhooks">
            <YesNoGroup name="security-webhooks" />
          </Field>
          <Field label="Read-only database">
            <YesNoGroup name="security-readonly-db" />
          </Field>
          <Field label="SSO (Azure AD / Google / LDAP)">
            <YesNoGroup name="security-sso" />
          </Field>
          <Field label="Additional security / compliance requirements">
            <textarea
              name="security-constraints"
              rows={3}
              className="w-full rounded-xl border border-emerald-500/40 bg-[#020917] px-3 py-2 text-sm focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
              placeholder="e.g. on-prem hosting, encryption, audit logs, data residency..."
            />
          </Field>
        </div>
      </FormSection>

      {/* 11) Basic Pricing Questions */}
      <FormSection title="11) Basic Pricing Questions">
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Preferred deployment: Cloud or on-premise (inside university)?">
            <input
              name="pricing-deployment"
              type="text"
              className="w-full rounded-xl border border-emerald-500/40 bg-[#020917] px-3 py-2 text-sm focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
            />
          </Field>
          <Field label="Number of campuses / branches (if any)">
            <input
              name="pricing-campuses"
              type="number"
              min={0}
              className="w-full rounded-xl border border-emerald-500/40 bg-[#020917] px-3 py-2 text-sm focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
            />
          </Field>
          <Field label="Is 24/7 operation required?">
            <YesNoGroup name="pricing-247" />
          </Field>
          <Field label="Expected escalation rate to human agents %">
            <input
              name="pricing-escalation-percent"
              type="number"
              min={0}
              max={100}
              className="w-full rounded-xl border border-emerald-500/40 bg-[#020917] px-3 py-2 text-sm focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
            />
          </Field>
          <Field label="Do you require call recording? For how long?">
            <input
              name="pricing-recording"
              type="text"
              className="w-full rounded-xl border border-emerald-500/40 bg-[#020917] px-3 py-2 text-sm focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
              placeholder="e.g. Yes, 90 days"
            />
          </Field>
          <Field label="Do you need dashboard and reports? (daily/weekly/monthly + KPIs)">
            <YesNoGroup name="pricing-dashboard" />
          </Field>
          <Field label="Do you require an SLA? (e.g. 99.9%)">
            <YesNoGroup name="pricing-sla" />
          </Field>
        </div>
      </FormSection>

      {/* 12) User Experience (Voice & Flow) */}
      <FormSection title="12) User Experience (Voice & Flow)">
        <div className="space-y-4">
          <Field label="Do you already have an official greeting script?">
            <YesNoGroup name="ux-greeting-script" />
          </Field>
          <Field label="Preferred voice type">
            <input
              name="ux-voice-type"
              type="text"
              className="w-full rounded-xl border border-emerald-500/40 bg-[#020917] px-3 py-2 text-sm focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
              placeholder="e.g. Modern Standard Arabic / local dialect (Gulf, Levant, ...)"
            />
          </Field>
          <Field label="Traditional IVR options + AI, or AI only?">
            <input
              name="ux-ivr-type"
              type="text"
              className="w-full rounded-xl border border-emerald-500/40 bg-[#020917] px-3 py-2 text-sm focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
            />
          </Field>
          <Field label="Do you want automatic ticket numbers for complaints and follow-up?">
            <YesNoGroup name="ux-ticket-number" />
          </Field>
        </div>
      </FormSection>

      {/* 13) Additional Notes */}
      <FormSection title="13) Additional Notes">
        <Field label="Any additional notes or requirements">
          <textarea
            name="additional-notes"
            rows={4}
            className="w-full rounded-xl border border-emerald-500/40 bg-[#020917] px-3 py-2 text-sm focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
          />
        </Field>
      </FormSection>

      {/* Sticky bottom bar with PDF download (hidden when printing) */}
      <div className="sticky bottom-0 z-10 mt-2 bg-gradient-to-t from-[#020917] via-[#020917]/95 to-transparent pt-3 print:hidden">
        <div className="flex flex-col items-stretch justify-between gap-3 rounded-2xl border border-emerald-500/40 bg-[#020917]/95 px-4 py-3 md:flex-row md:items-center md:gap-4">
          <p className="text-xs sm:text-sm text-emerald-100/80">
            Once you complete this form, our team will review the information
            and contact you with a tailored technical and commercial proposal.
            You can also save the form as a PDF and fill it later using the
            &quot;Download as PDF form&quot; button.
          </p>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={handlePrintAsPdf}
              className="inline-flex items-center justify-center rounded-xl border border-emerald-400/70 bg-transparent px-4 py-2 text-sm font-semibold text-emerald-200 hover:bg-emerald-500/10 hover:border-emerald-300 transition"
            >
              Download as PDF form
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}
