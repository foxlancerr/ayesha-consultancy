// Color references: deep navy (#1B2A4A), professional blue (#2563EB), dark green (#166534)

import type { Service, Persona, DocumentCategory, FAQ, Location, TrustItem, Testimonial } from "@/types";

// ---------------------------------------------------------------------------
// SERVICES
// Grouped by category: Individual Services, Business Services, FBR & Compliance, Other Confirmed Services
// ---------------------------------------------------------------------------

export const services: Service[] = [
  // ---- Individual Services ----
  {
    id: "individual-income-tax",
    title: "Individual Income Tax Return Filing",
    description: "End-to-end preparation and filing of your annual income tax return with the Federal Board of Revenue (FBR).",
    audience: "Salaried individuals, pensioners, and freelancers",
    whatWeHelp: "We help you accurately compute your taxable income, claim all eligible deductions, and submit your return before the deadline — avoiding penalties and legal complications.",
    documents: [
      { id: "ind-1", label: "CNIC Copy", documents: ["Photocopy of valid CNIC"] },
      { id: "ind-2", label: "Salary Certificates", documents: ["Yearly salary slips", "Form-16 from employer"] },
      { id: "ind-3", label: "Bank Statements", documents: ["Bank statements for the tax year"] },
      { id: "ind-4", label: "Proof of Deductions", documents: ["Investment receipts", "Insurance premium receipts", "Loan statements"] },
    ],
    category: "Individual Services",
    slug: "individual-income-tax",
    whatsappMessage: "I need help with Individual Income Tax Return Filing. Please call [PHONE NUMBER].",
  },
  {
    id: "individual-tax-planning",
    title: "Individual Tax Planning",
    description: "Strategic tax planning to minimize your tax liability within the legal framework throughout the fiscal year.",
    audience: "Salaried individuals seeking to optimize their tax outgo",
    whatWeHelp: "We design a personalized tax plan that leverages all available allowances, exemptions, and investment incentives so you keep more of your earnings — legally.",
    documents: [
      { id: "tp-1", label: "Income Details", documents: ["Income sources summary"] },
      { id: "tp-2", label: "Investment Portfolio", documents: ["Current investment statements"] },
      { id: "tp-3", label: "Previous Returns", documents: ["Filed returns from prior years"] },
    ],
    category: "Individual Services",
    slug: "individual-tax-planning",
    whatsappMessage: "I need Individual Tax Planning services. Please call [PHONE NUMBER].",
  },
  {
    id: "salary-tax-optimization",
    title: "Salary & Perquisites Tax Optimization",
    description: "Review of salary structure and perquisites to ensure maximum tax efficiency for salaried taxpayers.",
    audience: "Salaried professionals",
    whatWeHelp: "We restructure your salary components (house rent allowance, conveyance, medical, etc.) to reduce your taxable income and increase your net take-home pay.",
    documents: [
      { id: "so-1", label: "Salary Structure", documents: ["Current payslips", "Employment contract"] },
      { id: "so-2", label: "Rent Agreement", documents: ["Rent agreement / landlord CNIC"] },
    ],
    category: "Individual Services",
    slug: "salary-tax-optimization",
    whatsappMessage: "I need Salary Tax Optimization. Please call [PHONE NUMBER].",
  },

  // ---- Business Services ----
  {
    id: "business-tax-return-filing",
    title: "Business Tax Return Filing",
    description: "Comprehensive corporate and business tax return preparation and filing for all business types.",
    audience: "Sole proprietors, partnerships, and companies",
    whatWeHelp: "We prepare and file accurate business tax returns, ensuring compliance with all FBR regulations and optimizing your business tax position.",
    documents: [
      { id: "btr-1", label: "Business Registration", documents: ["NTN certificate", "Registration documents"] },
      { id: "btr-2", label: "Financial Statements", documents: ["Balance sheet", "Profit & loss statement", "Cash flow statement"] },
      { id: "btr-3", label: "Bank Statements", documents: ["All business account statements"] },
      { id: "btr-4", label: "Invoices & Receipts", documents: ["Sales invoices", "Purchase receipts"] },
    ],
    category: "Business Services",
    slug: "business-tax-return-filing",
    whatsappMessage: "I need Business Tax Return Filing. Please call [PHONE NUMBER].",
  },
  {
    id: "sales-tax-registration",
    title: "Sales Tax Registration & Compliance",
    description: "Full-service sales tax registration, monthly/quarterly filing, and ongoing compliance management.",
    audience: "Businesses registered under Sales Tax Act",
    whatWeHelp: "We handle your entire sales tax lifecycle — registration, return preparation, e-filing, and correspondence with FBR — so you can focus on your business.",
    documents: [
      { id: "str-1", label: "Business Details", documents: ["NTN", "Registration certificate"] },
      { id: "str-2", label: "Sales Records", documents: ["Sales invoices", "Export documents"] },
      { id: "str-3", label: "Purchase Records", documents: ["Purchase invoices", "Import documents"] },
    ],
    category: "Business Services",
    slug: "sales-tax-registration",
    whatsappMessage: "I need Sales Tax Registration & Compliance. Please call [PHONE NUMBER].",
  },
  {
    id: "corporate-tax-advisory",
    title: "Corporate Tax Advisory",
    description: "Strategic corporate tax advisory services to help businesses make tax-efficient decisions.",
    audience: "Medium to large businesses and corporations",
    whatWeHelp: "We provide expert advice on corporate tax implications of business decisions, restructuring, mergers, and expansion plans.",
    documents: [
      { id: "cta-1", label: "Corporate Documents", documents: ["Memorandum & Articles of Association", "Board resolutions"] },
      { id: "cta-2", label: "Financial Reports", documents: ["Audited financials", "Management reports"] },
    ],
    category: "Business Services",
    slug: "corporate-tax-advisory",
    whatsappMessage: "I need Corporate Tax Advisory. Please call [PHONE NUMBER].",
  },
  {
    id: "withholding-tax",
    title: "Withholding Tax Management",
    description: "End-to-end management of withholding tax obligations — from registration to monthly filing.",
    audience: "Businesses making payments subject to withholding tax",
    whatWeHelp: "We ensure correct deduction, deposit, and reporting of withholding taxes on all applicable payments, preventing penalties and disputes.",
    documents: [
      { id: "wht-1", label: "Payment Records", documents: ["Payment vouchers", "Contracts"] },
      { id: "wht-2", label: "Withholding Statements", documents: ["Monthly withholding statements"] },
    ],
    category: "Business Services",
    slug: "withholding-tax",
    whatsappMessage: "I need Withholding Tax Management. Please call [PHONE NUMBER].",
  },

  // ---- FBR & Compliance ----
  {
    id: "fbr-notice-response",
    title: "FBR Notice Response & Resolution",
    description: "Expert handling of FBR notices, inquiries, and audits with professional representation on your behalf.",
    audience: "Taxpayers receiving FBR notices or facing audits",
    whatWeHelp: "We analyze the notice, prepare a comprehensive response, represent you before FBR authorities, and work to resolve the matter favorably.",
    documents: [
      { id: "fnr-1", label: "FBR Notice", documents: ["Copy of FBR notice"] },
      { id: "fnr-2", label: "Supporting Documents", documents: ["Relevant financial records", "Previous returns"] },
    ],
    category: "FBR & Compliance",
    slug: "fbr-notice-response",
    whatsappMessage: "I have received an FBR Notice and need help. Please call [PHONE NUMBER].",
  },
  {
    id: "fbr-registration",
    title: "FBR Registration (NTN & STRN)",
    description: "Complete registration with FBR for NTN (National Tax Number) and STRN (Sales Tax Registration Number).",
    audience: "New businesses and individuals requiring tax registration",
    whatWeHelp: "We manage the entire registration process — document preparation, application submission, and follow-up — ensuring you receive your NTN/STRN promptly.",
    documents: [
      { id: "fr-1", label: "Identity Proof", documents: ["CNIC copy"] },
      { id: "fr-2", label: "Business Proof", documents: ["Business license", "Rent agreement"] },
    ],
    category: "FBR & Compliance",
    slug: "fbr-registration",
    whatsappMessage: "I need FBR Registration (NTN/STRN). Please call [PHONE NUMBER].",
  },
  {
    id: "tax-audit-representation",
    title: "Tax Audit Representation",
    description: "Professional representation during FBR tax audits to protect your rights and interests.",
    audience: "Businesses and individuals selected for tax audit",
    whatWeHelp: "We represent you throughout the audit process, prepare necessary documentation, and negotiate on your behalf to achieve the best possible outcome.",
    documents: [
      { id: "ta-1", label: "Audit Notice", documents: ["FBR audit notice"] },
      { id: "ta-2", label: "Financial Records", documents: ["Complete financial records"] },
    ],
    category: "FBR & Compliance",
    slug: "tax-audit-representation",
    whatsappMessage: "I need Tax Audit Representation. Please call [PHONE NUMBER].",
  },
  {
    id: "tax-compliance-review",
    title: "Tax Compliance Review",
    description: "A thorough review of your past tax filings and compliance status to identify and rectify any gaps.",
    audience: "Businesses wanting to ensure full compliance",
    whatWeHelp: "We audit your tax compliance history, identify risks, and recommend corrective actions to keep you in good standing with FBR.",
    documents: [
      { id: "tcr-1", label: "Historical Returns", documents: ["Previously filed returns"] },
      { id: "tcr-2", label: "Assessment Records", documents: ["FBR assessment records"] },
    ],
    category: "FBR & Compliance",
    slug: "tax-compliance-review",
    whatsappMessage: "I need a Tax Compliance Review. Please call [PHONE NUMBER].",
  },

  // ---- Other Confirmed Services ----
  {
    id: "estate-and-trust-tax",
    title: "Estate & Trust Tax Planning",
    description: "Tax planning and compliance services for estates, trusts, and wealth transfer.",
    audience: "High-net-worth individuals and families",
    whatWeHelp: "We help you structure your estate and trusts in a tax-efficient manner, ensuring compliance with all relevant tax provisions.",
    documents: [
      { id: "ett-1", label: "Estate Documents", documents: ["Will", "Trust deed"] },
      { id: "ett-2", label: "Asset Valuation", documents: ["Property valuations", "Asset list"] },
    ],
    category: "Other Confirmed Services",
    slug: "estate-and-trust-tax",
    whatsappMessage: "I need Estate & Trust Tax Planning. Please call [PHONE NUMBER].",
  },
  {
    id: "foreign-income-tax",
    title: "Foreign Income & Assets Reporting",
    description: "Assistance with reporting foreign income and assets as required under Pakistani tax law.",
    audience: "Pakistani residents with foreign income or assets",
    whatWeHelp: "We help you declare foreign income and assets in compliance with FBR requirements, minimizing tax exposure and legal risk.",
    documents: [
      { id: "fit-1", label: "Foreign Income Proof", documents: ["Foreign bank statements", "Employment contract abroad"] },
      { id: "fit-2", label: "Asset Declaration", documents: ["Property deeds abroad", "Investment statements"] },
    ],
    category: "Other Confirmed Services",
    slug: "foreign-income-tax",
    whatsappMessage: "I need Foreign Income & Assets Reporting. Please call [PHONE NUMBER].",
  },
  {
    id: "tax-dispute-resolution",
    title: "Tax Dispute Resolution & Litigation",
    description: "Professional dispute resolution and litigation support for tax-related conflicts with FBR.",
    audience: "Taxpayers involved in disputes with FBR",
    whatWeHelp: "We provide end-to-end litigation support including drafting appeals, representing you at tribunal hearings, and negotiating settlements.",
    documents: [
      { id: "tdr-1", label: "Dispute Documents", documents: ["Assessment order", "Show cause notice"] },
      { id: "tdr-2", label: "Supporting Evidence", documents: ["All relevant evidence"] },
    ],
    category: "Other Confirmed Services",
    slug: "tax-dispute-resolution",
    whatsappMessage: "I need Tax Dispute Resolution. Please call [PHONE NUMBER].",
  },
  {
    id: "property-tax-services",
    title: "Property Tax Advisory",
    description: "Advisory services on property-related taxes including capital gains tax and property valuation.",
    audience: "Property buyers, sellers, and owners",
    whatWeHelp: "We advise on property tax obligations, help calculate capital gains, and ensure proper documentation for property transactions.",
    documents: [
      { id: "pts-1", label: "Property Documents", documents: ["Property title", "Registry documents"] },
      { id: "pts-2", label: "Transaction Records", documents: ["Purchase/sale agreement"] },
    ],
    category: "Other Confirmed Services",
    slug: "property-tax-services",
    whatsappMessage: "I need Property Tax Advisory. Please call [PHONE NUMBER].",
  },
];

// ---------------------------------------------------------------------------
// PERSONAS
// ---------------------------------------------------------------------------

export const personas: Persona[] = [
  {
    id: "salaried",
    title: "Salaried Individuals",
    description: "If you earn a salary and want to optimize your tax returns, ensure compliance, and maximize deductions — we've got you covered.",
    icon: "briefcase",
  },
  {
    id: "business",
    title: "Business Owners & Entrepreneurs",
    description: "Running a business means complex tax obligations. We handle your corporate tax, sales tax, and compliance so you can focus on growth.",
    icon: "store",
  },
  {
    id: "pensioner",
    title: "Pensioners",
    description: "Navigating pension-related tax rules can be confusing. We simplify the process and ensure you claim every benefit you're entitled to.",
    icon: "shield-check",
  },
  {
    id: "freelancer",
    title: "Freelancers & Consultants",
    description: "Freelancing comes with unique tax challenges. We help you manage self-employment income, deductions, and quarterly filings with ease.",
    icon: "laptop",
  },
  {
    id: "property",
    title: "Property & Vehicle Owners",
    description: "Property and vehicle taxes can be complex. We provide expert guidance on capital gains, withholding, and registration compliance.",
    icon: "home",
  },
  {
    id: "fbr-notice",
    title: "FBR Notice Recipients",
    description: "Received an FBR notice? Don't panic. We provide professional representation and handle your communication with FBR authorities.",
    icon: "alert-circle",
  },
  {
    id: "other",
    title: "Other Clients",
    description: "Have a unique tax situation? We offer personalized consultation for any tax-related need not covered above.",
    icon: "more-horizontal",
  },
];

// ---------------------------------------------------------------------------
// DOCUMENT CATEGORIES
// Note: All documents listed below are generic examples for illustration.
// Actual document requirements may vary per case.
// ---------------------------------------------------------------------------

export const documentCategories: DocumentCategory[] = [
  {
    id: "tab-salaried",
    label: "Salaried",
    documents: [
      "CNIC Copy (Example)",
      "Salary Certificate / Form-16 (Example)",
      "Bank Statements for the Tax Year (Example)",
      "Investment Receipts (Example)",
      "Rent Agreement & Landlord CNIC (Example)",
      "Insurance Premium Receipts (Example)",
    ],
  },
  {
    id: "tab-business",
    label: "Business",
    documents: [
      "NTN Certificate (Example)",
      "Business Registration Documents (Example)",
      "Audited Financial Statements (Example)",
      "Sales & Purchase Invoices (Example)",
      "Bank Statements (Example)",
      "Employee Salary Register (Example)",
    ],
  },
  {
    id: "tab-pensioner",
    label: "Pensioner",
    documents: [
      "CNIC Copy (Example)",
      "Pension Payment Order / Statement (Example)",
      "Bank Statements (Example)",
      "Medical Allowance Proofs (Example)",
      "Investment Income Statements (Example)",
    ],
  },
  {
    id: "tab-freelancer",
    label: "Freelancer",
    documents: [
      "CNIC Copy (Example)",
      "Bank Statements Showing Freelance Income (Example)",
      "Client Contracts / Agreements (Example)",
      "Business Expense Receipts (Example)",
      "Foreign Income Declarations (Example)",
    ],
  },
  {
    id: "tab-fbr-notice",
    label: "FBR Notice",
    documents: [
      "Copy of FBR Notice (Example)",
      "Relevant Financial Records (Example)",
      "Previously Filed Returns (Example)",
      "Supporting Evidence & Documents (Example)",
      "Correspondence with FBR (Example)",
    ],
  },
];

// ---------------------------------------------------------------------------
// FAQS
// ---------------------------------------------------------------------------

export const faqs: FAQ[] = [
  {
    question: "What documents do I need to file my income tax return?",
    answer: "You typically need your CNIC copy, salary certificates or income statements, bank statements for the tax year, proof of eligible deductions (investments, insurance, loans), and any previous year's return. For a full list specific to your situation, consult our [CONSULTANT NAME].",
  },
  {
    question: "What is the deadline for filing tax returns in Pakistan?",
    answer: "The tax return filing deadline is typically September 30th of each year for individuals, though it may be extended by FBR. Late filing results in penalties. Contact us at [PHONE NUMBER] to confirm the current deadline.",
  },
  {
    question: "Can I file my tax return online?",
    answer: "Yes, FBR provides an online filing system (IRIS). However, the process can be complex. We can assist you with online registration, return preparation, and electronic submission. Reach out at [EMAIL] for help.",
  },
  {
    question: "What deductions am I eligible for?",
    answer: "Eligible deductions may include investments in approved schemes, life insurance premiums, charitable donations, home loan interest, and medical expenses — subject to FBR regulations. A personalized assessment by [CONSULTANT NAME] will clarify your specific eligibility.",
  },
  {
    question: "What should I do if I receive an FBR notice?",
    answer: "Do not ignore it. Contact us immediately at [PHONE NUMBER]. We will analyze the notice, prepare a proper response, and represent you before FBR to resolve the matter efficiently and protect your rights.",
  },
  {
    question: "How much does your tax consultancy service cost?",
    answer: "Fees vary based on the complexity of your case and the services required. Please contact us at [PHONE NUMBER] or email [EMAIL] for a detailed and transparent fee quote tailored to your needs.",
  },
  {
    question: "Do you offer services outside Islamabad and Peshawar?",
    answer: "We primarily serve clients in Islamabad and Peshawar but also offer remote consultation and services across Pakistan. Contact us at [PHONE NUMBER] to discuss your location-specific needs.",
  },
  {
    question: "Can you help with late or unfiled tax returns?",
    answer: "Yes, we specialize in back-filing and rectifying unfiled returns. There may be penalties, but we work to minimize them. Contact [CONSULTANT NAME] at [PHONE NUMBER] to get started.",
  },
];

// ---------------------------------------------------------------------------
// LOCATIONS
// Placeholder addresses and phone numbers — replace with actual details
// ---------------------------------------------------------------------------

export const locations: Location[] = [
  {
    city: "Islamabad",
    address: "[ADDRESS], Islamabad, Pakistan",
    phone: "[PHONE NUMBER]",
  },
  {
    city: "Peshawar",
    address: "[ADDRESS], Peshawar, Pakistan",
    phone: "[PHONE NUMBER]",
  },
];

// ---------------------------------------------------------------------------
// TRUST / WHY CHOOSE US ITEMS
// ---------------------------------------------------------------------------

export const trustItems: TrustItem[] = [
  { label: "Licensed & Certified", value: "FBR-licensed professionals with deep expertise in Pakistani tax law" },
  { label: "Years of Experience", value: "[EXPERIENCE YEARS]+ years of trusted tax advisory services" },
  { label: "Client Satisfaction", value: "Hundreds of satisfied clients across Islamabad and Peshawar" },
  { label: "Confidential & Secure", value: "All client data handled with strict confidentiality and security protocols" },
  { label: "Affordable Rates", value: "Transparent and competitive pricing with no hidden charges" },
  { label: "Dedicated Support", value: "Personalized attention and dedicated consultant for every client" },
  { label: "Timely Filing", value: "Guaranteed on-time return filing to avoid penalties" },
  { label: "FBR Representation", value: "Professional representation during audits and disputes" },
];

// ---------------------------------------------------------------------------
// HOW IT WORKS — 4 STEPS
// ---------------------------------------------------------------------------

export const howItSteps = [
  {
    step: 1,
    title: "Initial Consultation",
    description: "Share your tax situation with us via call, WhatsApp, or in-person visit. We listen and understand your needs.",
  },
  {
    step: 2,
    title: "Document Collection",
    description: "We provide a tailored checklist of required documents. You share them, and we review everything carefully.",
  },
  {
    step: 3,
    title: "Preparation & Filing",
    description: "Our experts prepare your returns and file them accurately and on time, keeping you informed at every stage.",
  },
  {
    step: 4,
    title: "Ongoing Support",
    description: "We remain available for any follow-up questions, FBR correspondence, and future tax planning needs.",
  },
];

// ---------------------------------------------------------------------------
// CONSULTANT PROFILE — Placeholder information
// ---------------------------------------------------------------------------

export const consultantProfile = {
  name: "[CONSULTANT NAME]",
  qualification: "[QUALIFICATION]",
  professionalInformation: "[PROFESSIONAL INFORMATION]",
};

// ---------------------------------------------------------------------------
// TESTIMONIALS — Placeholder testimonials
// ---------------------------------------------------------------------------

export const testimonials: Testimonial[] = [
  {
    name: "[Client Name]",
    role: "[Client Role]",
    text: "[Testimonial text placeholder]. I highly recommend their professional and thorough tax services.",
  },
  {
    name: "[Client Name]",
    role: "[Client Role]",
    text: "[Testimonial text placeholder]. Their attention to detail and timely service made the entire process stress-free.",
  },
  {
    name: "[Client Name]",
    role: "[Client Role]",
    text: "[Testimonial text placeholder]. A reliable and knowledgeable tax consultant — truly worth the trust.",
  },
];
