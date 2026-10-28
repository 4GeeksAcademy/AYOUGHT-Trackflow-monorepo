# Milestone 1 — Company Selection: HealthCore

## 1. Selected Company

**Company:** HealthCore

**Industry:** Healthcare — Outpatient Clinical Services

**Operating Locations:** Texas, Florida, and Georgia in the United States; London and Manchester in the United Kingdom.

## 2. Why I Selected HealthCore

I selected HealthCore because it provides an opportunity to apply artificial intelligence, automation, and data-driven decision-making to improve healthcare operations and patient access. HealthCore operates outpatient clinics across the United States and the United Kingdom, where appointment scheduling, patient onboarding, insurance verification, and specialist referrals must follow different administrative policies.

The briefing identifies several documented operational challenges: a 22% appointment no-show rate, no shared online booking system or proactive outreach, a 14% US claims denial rate, and clinical staff spending 35 minutes per day on documentation. It does not specify a specialist referral-time baseline or a five-business-day escalation policy. I am interested in exploring referral coordination as a proposed workflow, with any thresholds confirmed by HealthCore before implementation.

The briefing describes a fragmented technology estate, including separate EHRs and manual or phone-based booking processes; it does not establish that a patient portal, automated reminders, or referral-routing system already exists. I chose HealthCore because the project combines predictive analytics, workflow optimization, administrative rules, privacy protection, and human oversight in a practical healthcare environment.

## 3. Departments I Find Most Interesting

### Department 1: Clinical Operations and Referral Management

**Department Lead:** Marcus Reid, Director of Clinical Operations.

This department oversees clinical operations across 12 locations. The briefing does not specify a specialist-referral workflow or its completion time, so referral coordination would be a proposed area to investigate rather than an established baseline.

I am interested in developing an AI-powered referral coordination system that identifies available specialists, monitors pending referrals, recommends scheduling options, and automatically alerts authorized staff when referrals require escalation.

### Department 2: Patient Access and Appointment Coordination

**Responsible Team:** Patient Coordinators.

This department manages patient access and appointments. US patients currently book by phone and UK patients contact a front desk; the briefing says there is no shared online booking system or proactive outreach to prevent no-shows.

I am interested in developing machine learning models that identify appointments at risk of being missed. The system could recommend additional reminders, help staff manage scheduling capacity, and support appropriate rescheduling.

### Department 3: Billing, Insurance Verification, and Patient Onboarding

**Responsible Team:** Billing and Patient Coordination, including Tom Callahan.

The briefing documents manual US claims submission, inconsistent coding practices, and a 14% claims denial rate. It does not specify state-level Medicaid acceptance rules or other payer-specific policies. Any policy-checking tool would need approved, current rules supplied by HealthCore and reviewed by authorized billing staff.

I am interested in creating an AI-supported administrative rules engine that helps staff verify applicable policies, identify missing information, and refer uncertain cases to authorized personnel.

## 4. AI Automation Challenge

**Project Title: AI Patient Access & Referral Orchestration Agent**

My preferred automation challenge is to design an intelligent healthcare administrative assistant that supports appointment coordination, insurance verification, patient onboarding, and specialist referral management.

The system would combine rule-based decision support, machine learning, workflow automation, and a conversational AI interface.

Its objectives would include:

- Supporting appointment booking and rescheduling.
- Identifying patients who may benefit from additional appointment reminders.
- Checking applicable insurance and onboarding policies.
- Recommending specialist referral options.
- Tracking pending referrals and escalation deadlines.
- Generating alerts for authorized healthcare administrators.
- Producing operational reports and performance indicators.

## 5. My AI Agent Idea

### What the Agent Would Do

The AI Patient Access & Referral Orchestration Agent would help HealthCore employees manage routine administrative workflows.

When a patient requests an appointment, the agent would check available appointment slots and applicable administrative policies before presenting suitable options to a coordinator.

For specialist referrals, the proposed agent could monitor referral status, examine specialist availability, and identify cases requiring attention. Escalations would follow a threshold and policy approved by HealthCore; the briefing does not define a five-business-day target.

The agent would assist staff rather than make independent medical decisions.

### What Information the Agent Would Need

The system would require appropriately authorized access to:

1. Clinic locations and appointment availability.
2. Appointment and cancellation history.
3. Referral records and creation dates.
4. Specialist schedules and referral status.
5. Administrative insurance rules.
6. Patient onboarding and consent status.
7. Applicable escalation policies.
8. Approved reminder and notification templates.

Development and testing would use synthetic or properly de-identified data rather than real patient records.

### What the Agent Would Produce or Trigger

The agent would generate:

1. Appointment availability recommendations.
2. Reminder and rescheduling suggestions.
3. Insurance-verification status reports.
4. Patient onboarding checklist updates.
5. Specialist referral recommendations.
6. Referral delay alerts.
7. Escalation notifications to authorized personnel.
8. Administrative performance dashboards.

### Proposed Technologies

Potential technologies include Python, SQL, machine learning, large language models, retrieval-augmented generation, APIs, and workflow automation tools.

These technologies would be introduced progressively according to the course milestones.

### Safety and Human Oversight

The agent must protect patient information, apply the appropriate administrative policies, and refer uncertain cases to authorized personnel.

It must not provide diagnoses, independently determine medical treatment, or guarantee insurance coverage without appropriate verification.

## 6. Expected Project Outcomes

The project could aim to improve appointment access, reduce avoidable missed appointments, and improve administrative efficiency. Referral completion time and escalation thresholds would need to be baselined and approved before setting targets.

Potential evaluation measures include appointment no-show rates, referral completion time (if reliable data is available), and administrative policy-verification accuracy. HealthCore would need to confirm baselines, data access, and targets.

## 7. Conclusion

HealthCore is my selected company for the AI Engineering course. I look forward to developing an AI Patient Access & Referral Orchestration Agent that integrates predictive analytics, workflow automation, administrative policy checks, and human oversight to improve outpatient healthcare operations.
