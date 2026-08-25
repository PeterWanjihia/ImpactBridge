

<!-- Start of picture text -->
<>) IMPACT<br>©} BRIDGE<br>Sa<br><!-- End of picture text -->



<!-- Start of picture text -->
==) IMPACT<br>“0 BRIDGE<br><!-- End of picture text -->



**WEBSITE ARCHITECTURE  /  2026** 

**DOCUMENT MAP** 



# **What this blueprint covers** 

This document is deliberately more comprehensive than the first architecture note. It specifies the shape of every supplied public page, the reusable frontend system behind them, the backend modules and data model, and the operational workflows that make the transactional pages real applications rather than static forms. 

|**Part**|**Coverage**|
|---|---|
|1. System shape|Application boundaries, stack, route map, rendering and data flow.|
|2. Frontend architecture|Design system, component layers, page composition, forms and media.|
|3. Every public page|Homepage, Our Story, Our Model, Impact, Stories, Partnerships, Donate, Donate Equipment, Transparency.|
|4. Backend architecture|Go service structure, modules, application services, repositories, workers and integrations.|
|5. Data model|Core entities, content, impact, payments, equipment and partnership records.|
|6. Workflows|Donation, recurring giving, Stripe webhooks, equipment lifecycle and partnership pipeline.|
|7. Operations|Admin/RBAC, security, privacy, observability, testing, deployment and delivery order.|



## **Scope assumptions** 

- The supplied designs are the public website baseline and should be reproduced with a shared visual system rather than page-specific styling. 

- The site needs structured editorial content and operational workflows. A headless CMS is used for content; the Go API owns transactional and integrity-sensitive state. 

- The architecture optimizes for a small team: one frontend deployable, one backend deployable, one managed PostgreSQL service, plus focused third-party services. 

- Crypto giving is treated as an external-provider integration boundary unless there is a separate strategic reason to own blockchain payment infrastructure. 

IMPACT BRIDGE  •  FRONTEND + BACKEND SYSTEM BLUEPRINT 

PAGE 2 

**WEBSITE ARCHITECTURE  /  2026** 

**01 / SYSTEM SHAPE** 



# **One public experience, three system responsibilities** 

### **Explain** 

Story, model, impact, governance and reports establish what the organisation does and how it works. 

**Prove Convert** Metrics, schools, pilot evidence, reports, trustees Donations, corporate partnerships and and stories connect claims to evidence. equipment offers turn trust into concrete action. 

## **Recommended topology** 

|**Layer**|**Responsibility**|**Technology**|
|---|---|---|
|Web|Public pages, SEO, SSR, forms, visual system, client interactions.|Nuxt 4 + Vue 3 + TypeScript + Tailwind|
|Content|Editorial content, media references, stories, reports, policies, FAQs, people.|Directus headless CMS|
|Application API|Donations, payments, impact records, equipment workflow, partnerships, audit.|Go modular monolith|
|Primary data|Structured application and public programme data.|PostgreSQL|
|Media|Original images, PDFs, video/audio assets and transformed delivery.|Cloudflare R2 or S3 + CDN|
|Payments|Card/wallet checkout and recurring giving.|Stripe Checkout + Billing + webhooks|
|Messaging|Receipts, enquiry acknowledgements and staff notifications.|Resend/Postmark or equivalent|



## **Request flow** 

**Browser -> Nuxt SSR/page loaders -> CMS for editorial data and Go API for operational/domain data -> PostgreSQL / Stripe / media / email. The browser never talks directly to PostgreSQL or decides that a payment succeeded.** 

## **Deployment rule** 

- Do not split into microservices. Keep strong internal module boundaries inside one Go service. 

- Use page-level caching for public content and dynamic server rendering for transactional flows. 

- Prefer external services for commodity concerns - payments, email, media CDN - and keep core organisational state in your own database. 

IMPACT BRIDGE  •  FRONTEND + BACKEND SYSTEM BLUEPRINT 

PAGE 3 

**WEBSITE ARCHITECTURE  /  2026** 

**02 / PUBLIC ROUTE MAP** 



# **Pages and the system capabilities behind them** 

|**Route**|**Page**|**Primary dependencies**|**Rendering**|
|---|---|---|---|
|/|Homepage|Content + campaign + impact summary + featured evidence|Cached SSR / prerender|
|/our-story|Our Story|Narrative content + milestones + pilot evidence + people|Cached SSR|
|/our-model|Our Model|Model components + technical specs + teacher/process content|Cached SSR|
|/impact|Impact|Programme/school context + measurements + reports + stories|ISR / cached SSR|
|/stories|Stories|Featured story + filters + list + audio/video/media|ISR / cached SSR|
|/stories/:slug|Story detail|Long-form story + media + related programme/impact|ISR|
|/corporate-partnerships|Corporate Partnerships|Partnership content + contribution types + enquiry write|SSR|
|/donate|Donate|Campaign + payment methods + donation workflow + FAQs|SSR|
|/donate/complete|Donation completion|Authoritative donation lookup after provider redirect|SSR, no-store|
|/donate-equipment|Donate Equipment|Requirements + process + equipment offer workflow|SSR|
|/transparency|Transparency / Accountability|Financials + trustees + policies + impact snapshot|ISR / cached SSR|



## **SEO and metadata** 

- Each content page receives CMS-managed title, description, canonical URL, Open Graph image and optional noindex control. 

- Story detail pages generate structured article metadata and social cards from the story record. 

- Donation completion and operational/private routes must not be indexed. 

IMPACT BRIDGE  •  FRONTEND + BACKEND SYSTEM BLUEPRINT 

PAGE 4 

**WEBSITE ARCHITECTURE  /  2026** 

**03 / FRONTEND ARCHITECTURE** 



# **Design system first, page composition second** 

The screenshots reuse the same visual grammar: editorial serif headings, compact sans-serif body copy, strong navy/blue contrast, light bordered cards, evidence metrics, process timelines, split media sections and recurring CTA bands. Encode those patterns as primitives. 

## **Component layers** 

|**Layer**|**Examples**|**Rule**|
|---|---|---|
|UI primitives|Button, Badge, Input, Select, Checkbox, Modal, Tabs, Accordion, IconBadge|No business knowledge.|
|Layout|SiteHeader, Footer, SubNav, Container, Section, TwoColumn, CardGrid|Own spacing and responsive behavior.|
|Marketing sections|HeroOverlay, HeroSplit, MetricStrip, QuotePanel, CTASection, MediaSplit|Reusable across multiple pages.|
|Domain components|DonationAmount, CampaignProgress, EquipmentNeedCard, ImpactMetric,<br>StoryCard|Know one domain, not one page.|
|Page composition|HomePage, ImpactPage, DonatePage etc.|Mostly arrange sections + load page data.|



## **Design tokens** 

|**Typography**|**Color**|
|---|---|
|Georgia/serif display for editorial headings; Arial/sans for body, controls,<br>metrics and navigation.|Navy foundation; cobalt/bright blue actions; teal secondary accent;<br>restrained semantic green/orange/red.|
|**Spacing**|**Elevation**|



**Spacing Elevation** Named section and component spacing scales; avoid arbitrary per-page Mostly borders and subtle shadow. Reserve stronger elevation for donation margins. and key action cards. 

## **State strategy** 

- Do not introduce a global store for ordinary content pages. 

- Use composables for server data fetching and local workflow state. Add Pinia only for cross-route state that genuinely needs persistence. 

- Multi-step forms should persist draft state explicitly if users may leave and resume; otherwise keep state local to the page. 

IMPACT BRIDGE  •  FRONTEND + BACKEND SYSTEM BLUEPRINT 

PAGE 5 

**WEBSITE ARCHITECTURE  /  2026** 

**04 / FRONTEND IMPLEMENTATION SHAPE** 



# **Suggested Nuxt project structure** 

```
app/
  pages/
    index.vue
    our-story.vue
    our-model.vue
    impact/index.vue
    stories/index.vue
    stories/[slug].vue
    corporate-partnerships.vue
    donate/index.vue
    donate/complete.vue
    donate-equipment.vue
    transparency.vue
  components/
    ui/
    layout/
    marketing/
    stories/
    impact/
    donations/
    equipment/
    partnerships/
  composables/
    useContent.ts
    useImpact.ts
    useStories.ts
    useDonation.ts
    useEquipmentOffer.ts
    usePartnershipEnquiry.ts
  types/
  utils/
  assets/
```

## **Page data composition** 

- Content pages can load CMS records directly from Nuxt server-side code or through a thin content client. 

- Pages that mix content and operational data should use a page loader/BFF function inside Nuxt server code so the browser receives one coherent payload. 

- Transactional writes always go through the Go API. Do not let Directus own donations, payment status, equipment workflow or partnership lifecycle. 

## **Performance** 

- Use Nuxt Image and responsive sources for large classroom photography. Serve originals from R2/S3 through an image CDN. 

- Lazy-load below-the-fold galleries, story media and non-critical videos. 

- Preload hero imagery only where it is actually the largest-contentful element; avoid preloading every page image. 

IMPACT BRIDGE  •  FRONTEND + BACKEND SYSTEM BLUEPRINT 

PAGE 6 

<> IMPACT BRIDGE 



<!-- Start of picture text -->
° £. Launch 10<br>The internet ieoyoy - Learning°° Hubs<br>should , oy £18,450<br>not decide _ a 120000<br>who gets to gets to to : I(Ky ("(Ky (" (" @ «hubshubs funded<br>We bring offline digital learning hubs, teacher<br>training and resources to schools without m 38<br><!-- End of picture text -->

° £. The internet ieoyoy - should , oy not decide _ a who gets to gets to to : I(Ky ("(Ky (" (" We bring offline digital learning hubs, teacher training and resources to schools without 

Launch 10 Learning°° Hubs £18,450 120000 @ «hubshubs funded m 38 





<> IMPACT 

ee 

aa——| 

Potential is everywhere 



<!-- Start of picture text -->
F@ Lr-D:<br>Go:<br>be<br><!-- End of picture text -->

In classrooms across Uganda, learners are ready to explore and teachers are ready to leod. But unreliablo connectivity ond limred educationol resources still determine how far that curiosity cen travel 





<> IMPACT BRIDGE 

aa——| 



Overview 

Inside the Hub Teacher Development Deployment 

Support Measurement 

A computer does not transform a classroom. 

Impact Bridge combines offline learning technology, curated resources, trained teachers and local ownership into one practical 



<!-- Start of picture text -->
"| ja<br>9) 9: Ba<br>— ——<br>E et<br><!-- End of picture text -->





<> IMPACT BRIDGE aa——| 



<!-- Start of picture text -->
<> IMPACT<br>BRIDGE<br><!-- End of picture text -->

Overview Reach Outcomes Sustainability Methodology Reports One P / dal = — - FIRST PILOT classroom. 3 | Pilot hub Early evidence of Ae | - Pc y " : ram | eyOo 2 Champion . <P Teachers 2 = Our first pilot is helping us understand how offline aS 50+ ported learning, prepared teachers and sustained classroom 





<> IMPACT 0) BRIDGE 

| 

Every Classroom1 =y hf +g! holds more than --™e madeThe lesson science that = 4 feel visible A learner and her teacher describe rF Meet the learners, teachers, schools and partners 4, é what changed when an offline shaping Impact Bridge—one lesson, one voice simulation entered their classroom. and one classroom at a time. 



<!-- Start of picture text -->
;<br><!-- End of picture text -->





<> IMPACT BRIDGE 

SS 

> Partner for learning.e Transform classrooms 

We work with organisations to bring appropriate technology, teacher development and ongoing support to schools where connectivity should not limit learning. 

- 

Make measurable ae, "> impact i) pe CSR et Q Responsible delivery @) ‘Treneparent reportin 





G7) IMPACT meta.0) BRIDGE 

——— ea 



<!-- Start of picture text -->
@ choose (2) Details 3) Payment<br>Fund the <8> | 3 card& Wallets 7 | ‘Q) Crypto im Bank Transfer<br>°<br>nexte t CiaSsroom.| i> aR Give once Give monthly<br>Helpteachers bringand offlineongoing learningsupport resources,to schools preparedwhere MdCa £25 (ea £100<br>connectivity should not limit opportunity. Peers BAK Bed<br><!-- End of picture text -->





<> IMPACT oi) BRIDGE 

aa——| 



<!-- Start of picture text -->
technology into0 o 7 » [eeiv Why this matters- —> ‘<br>Wesupportedassess, prepare and deploy learning.suitable computers, displays “aX ® €)~ A i uo‘ FJ5n a4 , '<br>and supporting equipment as part of complete teacher-led pal » ee Be NOR g 7<br>learningiJ hubs. : i ‘ yl bo om”sledj’ / r ae .<br><!-- End of picture text -->





<> IMPACT (4) BRIDGE 

———EEEE 



<!-- Start of picture text -->
- Our accountability commitment commitment<br>Clearwe . -<br> about whatAccountable what e » A ma.. oO We share what we know, including our<br>_<br>we do. about whatAccountable what Accountable what ine challenges<br>how we do we do do It.ee Qex: >OoOo AccountabilityWe take responsibilityWe take responsibility take responsibility responsibility for our decisions our decisions decisions<br>Y ~ and results.<br>- ~<br>Trust is eamed eamed through honesty, accountability and<br>Consistent action. On this page you can see how impact action. On this page you can see how impact On this page you can see how impact this page you can see how impact page you can see how impact you can see how impact can see how impact see how impact how impact impact 4, ja ja © eo pee he pee he he ee<br><!-- End of picture text -->

- Our accountability commitment commitment . - » A ma.. oO We share what we know, including our _ challenges Qex: >OoOo AccountabilityWe take responsibilityWe take responsibility take responsibility responsibility for our decisions our decisions decisions Y ~ and results. - ~ 4, ja ja © eo pee he pee he he ee 

Clearwe do. about whatAccountable what ine how we do we do do It.ee Trust is eamed eamed through honesty, accountability and Consistent action. On this page you can see how impact action. On this page you can see how impact On this page you can see how impact this page you can see how impact page you can see how impact you can see how impact can see how impact see how impact how impact impact 





**WEBSITE ARCHITECTURE  /  2026** 

**14 / BACKEND ARCHITECTURE** 



# **Go modular monolith: shape of the service** 

The backend should be one deployable Go application with clear module ownership. Each domain contains its own transport, application/service layer, repository contracts and persistence implementation. Shared platform packages provide infrastructure, not business rules. 

```
cmd/
  api/main.go
  worker/main.go          # optional separate process, same codebase
internal/
  campaign/
  donation/
  payment/
  partnership/
  equipment/
  impact/
  programme/
  storylink/
  report/
  governance/
  organisation/
  notification/
  audit/
  auth/
  platform/
    postgres/
    httpx/
    config/
    logging/
    jobs/
    storage/
    clock/
```

## **Inside a domain module** 

|**Concern**|**Example in donation module**|
|---|---|
|HTTP transport|Decode/validate request, auth context, call application service, map errors to HTTP.|
|Application service|CreateDonation, StartCheckout, GetPublicDonation, CancelSubscription.|
|Domain model|Donation, Fund, DonationStatus, SubscriptionStatus and transition rules.|
|Repository|Queries/transactions over donation, fund and payment records.|
|Events/jobs|DonationPaid -> receipt email, analytics event, CRM/accounting export.|
|Integration boundary|PaymentProvider interface implemented by Stripe adapter.|
|**Avoid a global folde**<br>**domain so ownershi**|**rs-only architecture such as handlers/, services/, models/, repositories/. Organise primarily by**<br>**p remains obvious as the system grows.**|



IMPACT BRIDGE  •  FRONTEND + BACKEND SYSTEM BLUEPRINT 

PAGE 16 

**WEBSITE ARCHITECTURE  /  2026** 

**15 / BACKEND MODULE BOUNDARIES** 



# **What each module owns** 

|**Module**|**Owns**|**Does not own**|
|---|---|---|
|campaign|Campaign target, currency, status, public progress configuration.|Payment provider state.|
|donation|Donation intent, donor-facing public ID, allocation/fund, status.|Stripe signature verification.|
|payment|Checkout sessions, subscriptions, payment attempts, webhook events.|Campaign editorial copy.|
|impact|Metric definitions, measurements, periods, methodology links, approval.|Story body copy.|
|programme|Programmes, hubs, schools, deployment status and relationships.|Equipment donor offers.|
|equipment|Offer, item batches, review, inspection, preparation, deployment linkage.|Payment data.|
|partnership|Enquiries, opportunities, stage transitions and corporate organisation links.|General newsletter.|
|governance|Published financial summaries, trustees/policy references, approval metadata.|Internal accounting ledger.|
|notification|Templates, send requests, delivery result; consumes domain events.|Business status transitions.|
|audit|Actor/action/entity/time/metadata log for significant changes.|Source domain state itself.|



## **Transaction rule** 

- A domain service owns the transaction boundary for changes that must succeed together. 

- External network calls should not hold database transactions open. Persist intent/state, commit, then call the provider or use an outbox/job when appropriate. 

- Webhook processing should be idempotent and record provider event IDs before applying domain transitions. 

IMPACT BRIDGE  •  FRONTEND + BACKEND SYSTEM BLUEPRINT 

PAGE 17 

**WEBSITE ARCHITECTURE  /  2026** 

**16 / DATA MODEL** 



# **Core relational shape** 

|**Entity**|**Key relationships**|**Purpose**|
|---|---|---|
|organisations|partnership enquiries, equipment offers, partnerships|Corporate donors/partners and institutional contacts.|
|programmes|hubs, schools, measurements, stories, reports|Top-level delivery programme or initiative.|
|hubs|programme, school, deployments|Physical/offline learning hub instance.|
|schools|programme/hub, location, stories, measurements|School context without becoming a learner-record<br>system.|
|campaigns|funds, donations, programme|Public fundraising objective and target.|
|funds|donations, programme|Where a contribution is allocated: unrestricted, hub,<br>teacher development, content etc.|
|metric_definitions|measurements|Canonical meaning/unit for a published metric.|
|measurements|metric, programme/school/hub, period, methodology|Approved evidence values and provenance.|
|stories|CMS record + optional programme/school links|Published narrative and media.|
|reports|programme/period + media asset|Pilot, measurement, annual and governance reports.|



## **Identity strategy** 

- Use UUIDs internally; expose opaque public IDs/slugs where users need stable URLs or donation references. 

- Never expose sequential database IDs for donation/equipment records. 

- Keep user-facing route slugs separate from immutable primary keys. 

IMPACT BRIDGE  •  FRONTEND + BACKEND SYSTEM BLUEPRINT 

PAGE 18 

<> IMPACT 0) BRIDGE 

———EEEE 





**WEBSITE ARCHITECTURE  /  2026** 

**18 / DATA MODEL** 



# **Equipment and partnership operations** 

|**Aggregate**|**Essential records**|
|---|---|
|Equipment Offer|organisation/contact, status, notes, submitted_at, decision_at, logistics preferences|
|Offer Item Batch|category, manufacturer/model, quantity, condition, specifications, ownership declaration|
|Inspection|offer/batch, accepted_quantity, rejected_quantity, test results, data-erasure status, technician, timestamp|
|Deployment|hub/school, batch/items, quantity, deployed_at, responsible staff, deployment notes|
|Partnership Enquiry|organisation, contact, contribution_type, estimated_value_band, goals, stage, source|
|Partnership Opportunity|qualified enquiry, owner, stage, expected value, next action, closed reason|



## **Equipment lifecycle** 

|**State**|**Meaning**|
|---|---|
|SUBMITTED|Donor has completed the offer; no shipment yet.|
|UNDER_REVIEW|Team validates need, condition, specs, ownership and logistics.|
|NEEDS_INFORMATION|Offer incomplete or clarification required.|
|PROVISIONALLY_ACCEPTED|Items may proceed to transfer once terms/logistics are confirmed.|
|TRANSFER_ARRANGED / RECEIVED|Custody moves to Impact Bridge intake process.|
|INSPECTION / PREPARED|Technical tests, data erasure, repair, configuration and inventory.|
|DEPLOYED / CLOSED|Assigned to a hub/school and stewardship reporting can begin.|
|REJECTED / WITHDRAWN|Terminal alternatives.|



IMPACT BRIDGE  •  FRONTEND + BACKEND SYSTEM BLUEPRINT 

PAGE 20 

<> IMPACT oi) BRIDGE 

———EEEE 





**WEBSITE ARCHITECTURE  /  2026** 

**20 / CONTENT ARCHITECTURE** 



# **CMS for publishing, Go for integrity-sensitive workflows** 

|**CMS collections**|**Representative fields**|
|---|---|
|pages|route key, SEO metadata, hero copy, modular section references, publish status|
|stories|title, slug, type, summary, body, media, quote, transcript, consent/publication metadata, related IDs|
|people|name, role, short bio, portrait, profile content, display order|
|reports|title, type, period, summary, PDF/media reference, related programme, published_at|
|policies|title, category, summary, file/link, effective date, review date|
|faqs|question, answer, page/category, order, active|
|resources|partnership pack, equipment guidelines, technical specifications and downloadable documents|



## **Do not put in CMS** 

- Donation/payment truth, subscription state, provider webhooks or refund state. 

- Equipment workflow status, inspection results or deployment custody records. 

- Partnership opportunity stages if those stages drive operational follow-up. 

- Canonical impact measurement values that require approval/provenance controls. 

## **Media** 

- Store originals in object storage; CMS/database stores metadata and references. 

- Track alt text, caption, photographer/source, publication consent status and content classification. 

- Serve transformed image sizes through CDN; do not commit full photographic libraries into the Nuxt repository. 

IMPACT BRIDGE  •  FRONTEND + BACKEND SYSTEM BLUEPRINT 

PAGE 22 

<> IMPACT “2. BRIDGE 

———EEEE 



<> IMPACT ay BRIDGE 

ST 



**WEBSITE ARCHITECTURE  /  2026** 

**23 / WORKFLOW** 



# **Equipment offer to classroom** 

|**Phase**|**Public / internal action**|**Records touched**|
|---|---|---|
|Qualify|Donor submits organisation + inventory. Team reviews specs, ownership, transport<br>economics.|offer, item_batches, review_notes|
|Transfer|Approved offer gets logistics plan; donor ships only after confirmation.|transfer_plan, custody events|
|Inspect|Receive, test, data-erase, accept/reject quantities and document defects.|inspection, item/batch status|
|Prepare|Repair, configure, label/inventory and assign to planned hub.|preparation, asset assignment|
|Deploy|Deliver/install into school/hub with responsible staff and date.|deployment, hub/school linkage|
|Report|Generate donor update from verified deployment and programme impact data.|stewardship/report link|



## **Why the state machine matters** 

- It prevents UI copy and operational reality from diverging. 

- It supports auditability: who approved, received, inspected and deployed what, and when. 

- It makes donor updates and internal dashboards possible without parsing emails or free-text notes. 

IMPACT BRIDGE  •  FRONTEND + BACKEND SYSTEM BLUEPRINT 

PAGE 25 

**WEBSITE ARCHITECTURE  /  2026** 

**24 / WORKFLOW** 



# **Corporate partnership pipeline** 

|**Stage**|**Meaning**|**System behavior**|
|---|---|---|
|NEW|Public enquiry received.|Acknowledgement email + internal owner/queue.|
|CONTACTED|First response sent.|Next action/date captured.|
|DISCOVERY|Goals, fit, contribution type and constraints being<br>explored.|Notes and resource sharing.|
|QUALIFIED|Opportunity is viable.|Expected value, owner and due-diligence tasks.|
|PROPOSAL|Formal scope/terms under discussion.|Proposal/document references.|
|PARTNER|Agreement reached.|Link to programme/campaign/equipment contributions as needed.|
|DECLINED /<br>DORMANT|Not proceeding or paused.|Close reason and future follow-up optional.|



## **Integration path** 

- Start with first-party records and internal notifications. 

- If the organisation adopts HubSpot/Salesforce later, sync via jobs/outbox rather than making the website form directly dependent on CRM uptime. 

- Keep the public enquiry ID and internal opportunity ID stable so the integration can be replayed safely. 

IMPACT BRIDGE  •  FRONTEND + BACKEND SYSTEM BLUEPRINT 

PAGE 26 

<> IMPACT “> BRIDGE 

ST 





**WEBSITE ARCHITECTURE  /  2026** 

**26 / SECURITY & PRIVACY** 



# **Security posture appropriate to donors, children and financial operations** 

|**Area**|**Required controls**|
|---|---|
|Payments|Stripe-hosted checkout; webhook signature verification; idempotency; no raw card storage.|
|Forms|Server-side validation, rate limiting, spam protection, CSRF strategy for cookie-auth admin, safe error messages.|
|Secrets|Environment/secret manager only; never expose provider keys in Nuxt public runtime config.|
|Data minimisation|Public learner stories store only approved publication data; avoid building a learner PII database.|
|Media consent|Consent/publication status attached to story/media records; withdrawal process should be supported.|
|Admin auth|MFA-capable identity provider or strong session auth; role checks on every operational endpoint.|
|Files|Signed/admin-only access for internal documents; public reports explicitly published.|
|Database|TLS, private networking where available, automated backups, least-privilege DB users.|



## **Data retention** 

- Define retention separately for failed donation intents, newsletter subscriptions, partnership leads and rejected equipment offers. 

- Do not store payment-provider payloads forever by default. Retain only what is required for operational/audit purposes and redact sensitive fields where possible. 

- Keep published story consent and removal history sufficient to prove why content was made public and when it was withdrawn. 

IMPACT BRIDGE  •  FRONTEND + BACKEND SYSTEM BLUEPRINT 

PAGE 28 

**WEBSITE ARCHITECTURE  /  2026** 

**27 / ASYNC WORK, IDEMPOTENCY & INTEGRATIONS** 



# **Use PostgreSQL-backed jobs before adding messaging infrastructure** 

|**Trigger**|**Async work**|
|---|---|
|Donation paid|Receipt email, donor acknowledgement, analytics, optional accounting/CRM export.|
|Donation refunded|Refund email, finance notification, analytics adjustment.|
|Equipment submitted|Donor acknowledgement, internal review notification.|
|Equipment deployed|Stewardship update job, optional partner notification.|
|Partnership enquiry|Acknowledgement, internal assignment/notification, optional CRM sync.|
|Report published|Cache purge/revalidation and optional subscriber update.|



## **Implementation** 

- Start with an outbox/jobs table and a worker process using the same Go codebase. 

- Job handlers must be retry-safe and record attempts/last error. 

- Introduce Redis, RabbitMQ or Kafka only if actual throughput or integration requirements justify them. 

IMPACT BRIDGE  •  FRONTEND + BACKEND SYSTEM BLUEPRINT 

PAGE 29 

**WEBSITE ARCHITECTURE  /  2026** 

**28 / INFRASTRUCTURE** 



# **Production topology** 

|**Component**|**Recommended shape**|
|---|---|
|Nuxt web|Node-compatible deployment on Vercel, Render, Fly, Railway or container platform with SSR support.|
|Go API|Single stateless service, horizontally scalable, health/readiness endpoints.|
|Worker|Same repository/image, separate process only when async volume justifies it.|
|PostgreSQL|Managed PostgreSQL with automated backups, point-in-time recovery if budget permits.|
|Directus|Managed/container service; separate schema/database ownership from application tables.|
|Object storage|R2/S3 + CDN; lifecycle policy for originals, reports and internal uploads.|
|Email|Transactional provider with delivery webhooks/logs.|
|DNS/TLS|Managed CDN/DNS, HSTS after rollout, HTTPS everywhere.|



## **Environments** 

|**Environment**|**Purpose**|
|---|---|
|local|Docker Compose for PostgreSQL/Directus; Stripe CLI/webhook forwarding; local object storage optional.|
|staging|Production-like integration environment with test Stripe keys and non-production data.|
|production|Separate database/storage/buckets/keys; restricted admin access; monitoring and backups enabled.|



IMPACT BRIDGE  •  FRONTEND + BACKEND SYSTEM BLUEPRINT 

PAGE 30 

**WEBSITE ARCHITECTURE  /  2026** 

**29 / OBSERVABILITY & TESTING** 



# **Know when the system is wrong before a donor tells you** 

|**Layer**|**Minimum coverage**|
|---|---|
|Logs|Structured JSON logs with request ID, module, public entity IDs and safe error context.|
|Metrics|HTTP latency/errors, webhook failures, job retries, checkout creation failures, DB pool pressure.|
|Tracing|Optional initially; useful across Nuxt -> API -> Stripe/email when operational complexity increases.|
|Error reporting|Frontend + backend exception capture with environment/release metadata.|
|Synthetic checks|Homepage, donate page, API health and a safe test-mode checkout flow in staging.|



## **Test pyramid** 

|**Test type**|**Examples**|
|---|---|
|Unit|Donation transitions, equipment state machine, metric aggregation, validation.|
|Repository/integration|PostgreSQL queries and transactions against disposable test DB.|
|Provider contract|Stripe webhook fixtures/signature handling, email adapter contract.|
|API|HTTP request/response behavior, auth/RBAC, idempotency.|
|Frontend component|Donation stepper, filters, form validation, responsive critical components.|
|E2E|Homepage -> donate -> test checkout -> webhook -> completion; equipment submission; partnership enquiry.|



IMPACT BRIDGE  •  FRONTEND + BACKEND SYSTEM BLUEPRINT 

PAGE 31 

<> IMPACT “2. BRIDGE 

———EEEE 



**WEBSITE ARCHITECTURE  /  2026** 

**31 / FINAL ARCHITECTURE** 



# **Recommended stack and boundaries** 

### **Nuxt 4** 

### **Go API** 

### **PostgreSQL** 

Public web, SSR, SEO, page composition, form Transactional workflows, structured impact Source of truth for programme, impact and UX and responsive design system. records, permissions, audit, integrations and operational state. jobs. **Directus Stripe R2 / S3** Editorial publishing for page content, stories, Card/wallet payments and recurring Images, PDFs and media originals delivered reports, policies, people and FAQs. subscriptions. Webhooks are authoritative. through CDN. 

## **What this architecture intentionally avoids** 

- Microservices and distributed messaging before scale demands them. 

- A generic no-code page builder controlling the design system. 

- Mixing payment truth into CMS content. 

- Treating impact metrics as decorative page text. 

- Treating an equipment submission or corporate enquiry as "just a form". 

- Storing unnecessary learner/child personal data inside the website platform. 

**The target system is sophisticated where the organisation needs integrity - money, evidence, equipment, governance - and deliberately simple everywhere else.** 

## **Architecture in one sentence** 

A reusable Nuxt public experience over a structured content layer and a Go modular monolith, with PostgreSQL as the operational source of truth and external providers handling payments, media delivery and transactional email. 

IMPACT BRIDGE  •  FRONTEND + BACKEND SYSTEM BLUEPRINT 

PAGE 33 

**WEBSITE ARCHITECTURE  /  2026** 



### **APPENDIX A** 

# **Public API inventory** 

|**Method**|**Route**|**Purpose**|
|---|---|---|
|GET|/v1/public/home|Homepage aggregate/read model|
|GET|/v1/public/our-story|Our Story aggregate/read model|
|GET|/v1/public/model|Our Model aggregate/read model|
|GET|/v1/impact/overview|Impact page overview|
|GET|/v1/impact/snapshot|Organisation-level approved metrics|
|GET|/v1/programmes/:slug|Programme + hub/school context|
|GET|/v1/programmes/:slug/measurements|Approved measurements for a programme|
|GET|/v1/reports|Published reports and filters|
|GET|/v1/stories|Story index with type/cursor filters|
|GET|/v1/stories/:slug|Published story detail|
|GET|/v1/campaigns/active|Current fundraising campaign|
|GET|/v1/donation-options|Funds, payment method configuration|
|POST|/v1/donations|Create donation intent|
|POST|/v1/donations/:id/checkout|Create Stripe checkout session|
|GET|/v1/donations/:publicId|Read donor-facing status|
|POST|/v1/webhooks/stripe|Stripe webhook receiver|
|GET|/v1/partnerships/options|Public partnership form options|
|POST|/v1/partnership-enquiries|Create corporate enquiry|
|GET|/v1/equipment-requirements|Published equipment needs/criteria|
|POST|/v1/equipment-offers|Create equipment offer draft|
|PATCH|/v1/equipment-offers/:id|Update draft|
|POST|/v1/equipment-offers/:id/submit|Submit offer|
|GET|/v1/transparency/summary|Published financial/governance summary|
|POST|/v1/newsletter/subscriptions|Newsletter opt-in|



IMPACT BRIDGE  •  FRONTEND + BACKEND SYSTEM BLUEPRINT 

PAGE 34 

<> IMPACT “2. BRIDGE 

———EEEE 



