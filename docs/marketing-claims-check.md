# Marketing site vs the real app: claims check

Checked on 2026-10-06. Marketing site: `schoolynx-core` (branch `main`). App: `admin-frontend` and `edutech-app` (branch `deployment_qa`).

**How it was checked.** Every feature named on the marketing site was matched against the app's own code: a screen (frontend route) and an API (backend controller). A claim counts as **Built** only when both exist. This is a code check, not a click through, so "Built" means the feature exists, not that every detail of the wording was tested.

## Summary

| Result | Count |
|---|---|
| Built | 19 |
| Partly built (exists, but less than the site says) | 9 |
| Not built | 12 |
| Business claims we can't back up from the code | 8 |

The core school ERP is real and strong: admissions, students, classes and batches, attendance, timetable, exams and report center, fees and finance, HR and payroll, news, polls, calendar, custom reports. The gaps are mostly the **extra modules and integrations** (hostel, library, transport, ID cards, certificates, online classes, payment gateway, messaging, mobile app) and the **business numbers and testimonials**.

## 1. Built

| Claim on the site | Evidence in the app |
|---|---|
| Student Admission, Student Information | `/student/admission1`, `/student/profile`, `api/config/student-entity` |
| Courses and Batches | `/courses`, `/batches`, `api/config/class`, `api/config/batch` |
| Student Attendance | `/attendances`, `/attendance_reports`, `api/timetable/attendance` |
| Timetable, assign subjects to teachers, classroom allocation | `/timetable/*`, `/employee/subject_assignment`, `/classroom_allocations`, `api/timetable/*` |
| Examination, Gradebook, automated grading | `/exam/*`, `/course_exam_groups`, `/grading_levels`, `api/exam/*` |
| Online assessments | `/online_exam`, `api/exam/online` |
| Report Center, digital results | `/exam/report_center`, exam wise, subject wise and grouped reports |
| Custom Student Remarks | `/exam/report_settings`, `api/exam/report-remarks` |
| Fees: collection, late fines, tax, discounts, defaulters, instant fees | `/finance/*`, `/instant_fees`, `/tax_slabs`, `api/finance/generate-fines`, `tax-slabs`, `creating-discounts` |
| Finance (income, expenses, assets, donations, refunds) | `/finance/*`, `api/finance/*` |
| Human Resources, payroll and payslips | `/employee/*`, `/payroll_groups`, `/employee_payslips/*`, `api/hr/*` |
| News Management | `/news`, `api/collaboration/news` |
| Polls | `/poll_questions`, `api/collaboration/poll` |
| School / Events Calendar | `/calendar`, `api/academic/calender-event` |
| Homework / assignments | `/assignments`, `api/academic/assignments` |
| Report Center and custom reports | `/reports`, `/custom_reports`, `api/reports/custom-reports` |
| Multiple Dashboards | `/dashboard`, `/dashboard_widgets`, `api/reports/dashboard-widgets` |
| User Management, role based access | `/user`, `/user/edit_roles`, `@EntityAuthorization` on every API |
| Employee / Teacher login, Student login | the `EMPLOYEE` and `STUDENT` login types |

## 2. Partly built

| Claim on the site | What actually exists |
|---|---|
| **Parents login and collaboration** ("parents communicate with teachers") | Parents can sign in, and shared screens allow them. There are **no parent specific screens** and **no parent to teacher messaging**. One login per child (`PAR<id>`), so no single login for siblings. |
| **SMS Integration / SMS Alerts** | An SMS provider (Infobip) can be configured at `/configuration/sms`, with a test send. **No feature sends SMS automatically** (no fee, attendance or exam alerts). |
| **Real time notifications** | In app notifications exist for news and assignments (`/administrator/notification-center`). There are no SMS or email alerts to parents for events. |
| **Admission: inquiries, custom forms, document validation** | Admission works and documents can be uploaded (`/doc_managers`, `/student_document_categories`). There is **no inquiry tracking**, and no digital document validation step. |
| **Biometric** (integrations section) | Employees have a `biometricId` field, and there is a fingerprint **demo page** (`/finger`, browser WebAuthn). There is **no connection to a biometric attendance device**. |
| **8+ languages / multilingual** | The language files (English, German, Italian, Russian, Spanish) came with the admin template. Only the header and menu are translated (22 calls); **page screens are English only**. Urdu and Arabic are absent. |
| **Modules can be activated or deactivated** | Menus can be configured per role (`api/config/menu-settings`). There is no switch that turns a whole module off. |
| **Branding personalized** | Logo, name, theme and sidebar name are set per organization (spec 0004). Report branding is limited to receipt and PDF settings. |
| **Finance "Asset management" as inventory** | Asset and liability records exist in finance. There is no stock or inventory module. |

## 3. Not built

None of these has a screen or an API in the app.

| Claim on the site | Where the site says it |
|---|---|
| Hostel | Feature tour text |
| Library | Feature tour text |
| Transportation | Feature tour text (employees only have an `assignTransport` yes or no field) |
| Certificate Generator, Transfer Certificate | Feature list, feature tour text |
| ID Card Generator | Feature list |
| Online Classes (Google Meet, Zoom, BigBlueButton) | Homepage module, integrations, live demo form |
| Payment Gateway, online fee payment | Integrations, FAQ ("integrated payment gateways") |
| Messaging System (internal messaging) | Feature list, feature tour text |
| Location integration | Integrations section |
| Task, Discussion, Blog, Videoconference plugins | Feature tour text |
| Parent teacher meeting scheduling | "Why Schoolynx" text |
| Dedicated mobile app with the school's name | Mobile app section, live demo form ("Parent App") |

The mobile app may live in a repository outside this workspace. If it does, move it to "Built" or "Partly built" after a check.

## 4. Business claims we can't back up from the code

These need a person to confirm or remove. Several look copied from another product's site (one component is still named `WhyFedena.tsx`).

| Claim | Where |
|---|---|
| 300+ schools, 30+ countries, 8+ languages | Stats strip on the homepage |
| "50+ powerful modules", "24/7 support" | "Why Schoolynx" text |
| "Introducing Schoolynx 4.0, 4 new features, 6 upgrades" | Banner |
| Testimonials from Laksh Career Academy, Wellspring International School (Vietnam), Brighton School, NCA Academy, Brighton Academy, Westlake High School, Maple Grove Elementary | Pricing page, homepage sliders |
| "Administrative burden reduced by 60%", "efficiency improved by 200%" (ABC School, XYZ Academy) | Testimonials, Resources page |
| "Data fully encrypted when stored", "data backup facility" | FAQ. Passwords are hashed and the server is backed up by hand; encryption of all stored data isn't set up in the app. |
| Enterprise plan includes "Product source code" | Pricing page |
| White label, "Complete API access", partner program | Partner page (also not linked from the menu) |

## Recommended next steps

1. **Remove or reword the "Not built" items now.** Hostel, library, transport, ID cards, certificates, online classes, payment gateway and messaging are the claims a demo visitor will ask to see.
2. **Replace the stats and testimonials** with real numbers and real customers, or remove them. Unverified customer names and percentages are the biggest trust risk.
3. **Reword the "Partly built" items** to match what exists, for example "SMS provider setup" instead of "SMS alerts", and "Parent login" instead of "Parent collaboration".
4. **Turn the gaps into a roadmap.** The most requested ones (payment gateway, SMS alerts, parent portal, certificates and ID cards) can go to `/scope` as candidate features.
