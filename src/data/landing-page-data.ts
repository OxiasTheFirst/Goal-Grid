/**
 * Landing Page Content & Structured Data for Goal Grid
 * Source: Goal Grid Landing Page Content + Phase 2 correction brief, 24 Nov 2026
 * (BMB Strategy and Advisory Limited).
 * Strings may contain **emphasis** markers, rendered by <Rich />.
 */

export interface KeyFact {
  title: string;
  detail: string;
}

export interface IllustrativeExperience {
  quote: string;
}

export interface GridStep {
  letter: string;
  name: string;
  question: string;
  description: string;
}

export interface InclusionItem {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: string;
}

export interface OutcomeItem {
  number: string;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  statusNote?: string;
}

export interface HowToJoinRoute {
  kind: "signUp" | "startHere" | "contact";
  title: string;
  description: string;
  /** Shown only while the external destination (Sellar / Google Form) is still pending. */
  pendingNote?: string;
}

export const landingPageData = {
  // Hero Section Data
  hero: {
    badge: "A 12-WEEK PROGRAMME FOR BUSINESS OWNERS & CAREER PROFESSIONALS",
    headline: "Don't Just Set the Goal. Build the Path to Achieve It.",
    subheadline:
      "The Goal Grid Project is a 12-week programme that takes the goal you have carried from one year to the next and turns it into a clear, step-by-step plan, then stays with you while you carry it out.",
    registrationNote: "Registration opens 1 December 2026",
    keyFacts: [
      {
        title: "12 Weeks",
        detail: "Registration opens 1 December 2026",
      },
      {
        title: "Daily Tasks",
        detail: "Action tasks that keep you moving",
      },
      {
        title: "Friday Night Business Class",
        detail: "Weekly Live Call",
      },
      {
        title: "1-on-1 Session",
        detail: "A private diagnostic session with the host",
      },
    ] as KeyFact[],
  },

  // Problem Section Data (Illustrative Business-Owner Experiences)
  problem: {
    badge: "SOUND FAMILIAR?",
    headline: "You Have the Goal. Where Is the Plan?",
    context:
      "Every year, you write the goal down. A few weeks later, work is busy again and the goal is still on the page. **You are not lazy and you are not alone.** A goal tells you where you want to go. It does not tell you what to do on Mondays.",
    subtitle:
      "Common business experiences when turning goals into daily execution:",
    experiences: [
      {
        quote: "I set goals every year, but **I don't follow through.**",
      },
      {
        quote: "I want more sales, but **I don't know what to focus on first.**",
      },
      {
        quote: "I am busy all day, every day, and **I still don't see enough progress.**",
      },
      {
        quote: "I try to do everything alone, and **I can't stay consistent.**",
      },
    ] as IllustrativeExperience[],
    closingStatement:
      "You can be busy every day and still feel like your business is not moving forward. Goal Grid changes that.",
    
  },

  // GRID Method Framework Data
  gridMethod: {
    badge: "THE METHOD",
    headline: "Four Steps From \"I Want\" to \"I Did\"",
    subtitle:
      "Knowing what you want is not enough. You also need to know **what to do, where to start, what comes first, who can help**, when each thing should happen and how you will know it is working. The Goal Grid is the structure that answers all of that.",
    steps: [
      {
        letter: "G",
        name: "Goal",
        question: "What exactly do you want to achieve?",
        description:
          "Get clear on one goal, in plain words, so you know what you are aiming at.",
      },
      {
        letter: "R",
        name: "Roadmap",
        question: "What steps will take you there?",
        description:
          "Break the goal into steps you can follow, and decide what to do first.",
      },
      {
        letter: "I",
        name: "Implementation",
        question: "What will you actually do, and when?",
        description:
          "Start the work, one step at a time, with a task for every day.",
      },
      {
        letter: "D",
        name: "Discipline",
        question: "How will you stay on track when things change?",
        description:
          "Keep showing up, check your progress and adjust when the plan meets reality.",
      },
    ] as GridStep[],
    closingStatement:
      "Setting the goal is only the first step. Goal Grid is built for everything that comes after it.",
  },

  // Inclusions Section Data ("What You Get")
  inclusions: {
    badge: "WHAT YOU GET",
    headline: "Everything Built to Keep You Moving for 12 Weeks",
    subtitle:
      "Advice is easy to find. Following through is the hard part. So every part of Goal Grid is designed to give you a plan, a reason to act and people who will notice if you stop.",
    items: [
      {
        id: "daily-tasks",
        number: "01",
        title: "Daily Tasks",
        description:
          "A clear task each day, so you always know your next move and never have to wonder what to work on.",
        iconName: "CalendarCheck",
      },
      {
        id: "group-leaders",
        number: "02",
        title: "Group Leaders",
        description:
          "You are placed in a group with a leader who guides you, answers questions and keeps the group moving together.",
        iconName: "Users",
      },
      {
        id: "progress-reports",
        number: "03",
        title: "Progress Reports",
        description:
          "Regular reports make you look at what you did, what you did not do and what to change. Progress you can see is progress you can build on.",
        iconName: "LineChart",
      },
      {
        id: "friday-night-business-class",
        number: "04",
        title: "Friday Night Business Class",
        description:
          "Weekly live teaching hosted on Google Meet. Learn how to plan, prioritise and push through, with practical lessons you can use that same week.",
        iconName: "Video",
      },
      {
        id: "group-presentations",
        number: "05",
        title: "Group Presentations",
        description:
          "Present your progress to your group. Knowing you will speak about your results gives you a good reason to show up with something to say, and you learn from what others are doing.",
        iconName: "Presentation",
      },
      {
        id: "private-session",
        number: "06",
        title: "Your Private 1-on-1 Session",
        description:
          "One session for you and the host, focused on your goal and your business. Bring your biggest obstacle and leave with a clear next step.",
        iconName: "UserCheck",
      },
    ] as InclusionItem[],
  },

  // Outcomes Section Data ("What You Stand to Gain")
  outcomes: {
    badge: "WHAT YOU STAND TO GAIN",
    headline:
      "By Week 12, Your Goal Stops Being a Wish and Becomes a Record of Work Done",
    subtitle:
      "Intended programme outcomes and execution habits developed over 12 weeks:",
    items: [
      {
        number: "01",
        title: "One goal, made clear",
        description:
          "You will know **exactly what you are working towards** and why it matters to your business.",
      },
      {
        number: "02",
        title: "A roadmap you can follow",
        description:
          "Your goal broken into steps, each with a place in your week, so **you stop guessing what to do first.**",
      },
      {
        number: "03",
        title: "Real daily momentum",
        description:
          "Daily tasks mean you take action every day for 12 weeks, **not only when you feel motivated.**",
      },
      {
        number: "04",
        title: "Focus on what moves the business",
        description:
          "You will learn to choose **the few actions that matter most**, so being busy turns into being productive.",
      },
      {
        number: "05",
        title: "Support you do not get alone",
        description:
          "A group, a group leader and a host who will see whether you showed up. Trying to do everything alone is the reason many goals stall, and **you will not be doing it alone.**",
      },
      {
        number: "06",
        title: "Habits that outlast the programme",
        description:
          "The GRID method is a way of working you can reuse on every goal after this one.",
      },
    ] as OutcomeItem[],
  },

  // Audience Qualifier Data ("Is This For You?")
  qualifier: {
    badge: "IS THIS FOR YOU?",
    headline: "Built for Business Owners and Career Professionals Ready to Act, Not Just Plan",
    subtitle:
      "Goal Grid is for you if you run a business (selling products, offering services, online or small-scale) or you are building your career, and you are:",
    criteriaForYou: [
      "Tired of setting goals you do not finish.",
      "Wanting stronger results in your business or career but unsure what to focus on first.",
      "Busy all the time without seeing enough progress.",
      "Doing everything alone and struggling to stay consistent.",
      "Determined to start with a clear plan.",
    ],
    criteriaNotForYou: [
      "Looking only for passive inspiration or motivational talks without doing the daily work.",
      "Unable to allocate dedicated daily time to complete execution tasks.",
      "Unwilling to attend the weekly Friday Night Business Class and participate in group accountability reviews.",
    ],
    
  },

  // Host Section Data (Strictly Verified Facts; No Fabricated Credentials or Quotes)
  host: {
    badge: "MEET THE HOST",
    headline: "Programme Leadership & Host Advisory",
    name: "@Bolaji Babalola",
    role: "Programme Host",
    organization: "BMB Strategy and Advisory Limited",
    biography:
      "Goal Grid is hosted and led under BMB Strategy and Advisory Limited, designed as an intensive, practical 12-week programme bridging the gap between setting goals and daily execution.",
    duties: [
      "Leads Friday Night Business Class, the weekly live teaching on Google Meet",
      "Guides the cohort curriculum, group structure, and weekly priorities",
      "Conducts your private 1-on-1 diagnostic session focused on your specific business goal",
    ],
    // NOTE: the approved host biography and credentials have NOT been supplied. Nothing is invented and no
    // placeholder is shown publicly; the outstanding item is tracked in docs/HANDOVER.md.
  },

  // Accountability Architecture (Credibility / Integrity Focus)
  accountability: {
    badge: "EXECUTION GOVERNANCE",
    headline: "The Programme Structure That Drives Follow-Through",
    subtitle:
      "Goal Grid is organized around three confirmed structural pillars designed to replace solitary struggle with structured accountability.",
    pillars: [
      {
        title: "Daily Tasks",
        description:
          "A clear task each day so you always know your next move and maintain steady daily momentum throughout the 12 weeks.",
      },
      {
        title: "Friday Night Business Class",
        description:
          "Weekly live teaching on Google Meet to plan, prioritise, and learn practical lessons you can use that same week.",
      },
      {
        title: "Group Support & 1-on-1 Access",
        description:
          "An assigned group and group leader for peer support, progress reports to see momentum, and a private 1-on-1 session with the host.",
      },
    ],
  },

  // Pricing & Investment Section Data (Scarcity Claims Removed)
  pricing: {
    badge: "YOUR INVESTMENT",
    headline: "₦50,000 for 12 Weeks of Structure, Support and Accountability",
    fee: "₦50,000",
    feePeriod: "per person",
    options: [
      { label: "Standard payment", amount: "₦50,000", note: "One payment for the full 12-week programme." },
      { label: "Instalment option", amount: "₦60,000", note: "Spread your payment across instalments." },
    ],
    deliverables: [
      "12 weeks of daily tasks",
      "Friday Night Business Class: weekly live teaching on Google Meet",
      "Dedicated group and assigned group leader",
      "Structured progress reporting system",
      "Group presentations and peer reviews",
      "Private 1-on-1 diagnostic session with the host",
    ],
    persuasion:
      "Think about how long you have carried your goal. Think about what another year without a plan would cost your business. Compare that with ₦50,000 for the full programme.",
  },

  // How to Join: three distinct routes, each with its own action (Phase 2 CTA architecture)
  howToJoin: {
    badge: "HOW TO JOIN",
    headline: "Three Ways to Begin",
    subtitle:
      "Choose the route that fits where you are. Each one has its own purpose: register, share your goals, or talk to us first.",
    registrationOpens: "Registration is scheduled to open on 1 December 2026.",
    routes: [
      {
        kind: "signUp",
        title: "Ready to join? Sign up.",
        description:
          "Complete your registration and payment directly on our Sellar page.",
        pendingNote: "The Sign Up link will be available here when registration opens.",
      },
      {
        kind: "startHere",
        title: "Want to share your goals first? Start here.",
        description:
          "Tell us your full name, email address, WhatsApp number and the business goals you want to work on.",
        pendingNote: "The Start Here form link will be available here shortly.",
      },
      {
        kind: "contact",
        title: "Have a question? Talk to us.",
        description:
          "Chat with the host on WhatsApp, or make an enquiry about the programme, pricing or participation.",
      },
    ] as HowToJoinRoute[],
    clarificationNote:
      "Starting a WhatsApp chat or filling in the Start Here form does not register your place. Registration and payment are completed through Sign Up.",
  },

  // FAQ Section Data
  faq: {
    badge: "QUESTIONS",
    headline: "Frequently Asked Questions",
    items: [
      {
        question: "Who is Goal Grid for?",
        answer:
          "Business owners and career professionals: people who sell products, offer services, run online businesses or manage small businesses, or who are building their careers, and who want to make real progress on a goal.",
      },
      {
        question: "What exactly is Goal Grid?",
        answer:
          "A 12-week programme that helps you take a goal you have struggled to achieve and build a practical, step-by-step structure for making it happen, using four steps: Goal, Roadmap, Implementation and Discipline.",
      },
      {
        question: "How long does it run, and when can I register?",
        answer:
          "Goal Grid runs for 12 weeks. Registration is scheduled to open on 1 December 2026.",
      },
      {
        question: "What will I do each week?",
        answer:
          "You complete daily tasks, join Friday Night Business Class (weekly live teaching on Google Meet), send progress reports and work with your group and group leader. You also present to your group, and you have one private session with the host.",
      },
      {
        question: "How much time do I need?",
        answer:
          "The exact daily time commitment and class duration are currently being finalized. If you have questions about whether your schedule is a good fit, please make an enquiry on WhatsApp.",
        statusNote: "Make an enquiry on WhatsApp about schedule fit.",
      },
      {
        question: "How much does it cost? Can I pay in instalments?",
        answer:
          "The standard fee is ₦50,000 per person. An instalment option is available at ₦60,000. For questions about how paying in instalments works, make an enquiry on WhatsApp.",
        statusNote: "Make an enquiry on WhatsApp about instalments.",
      },
      {
        question: "Is my business too small or too new for this?",
        answer:
          "Goal Grid is for people who want clearer goals and steady action. If you have a goal you want to reach, you can benefit from the structure.",
      },
      {
        question: "What if I miss a session or a task?",
        answer:
          "Attendance requirements and arrangements for missed sessions or tasks are currently being finalized. Please make an enquiry on WhatsApp for participation guidelines.",
        statusNote: "Make an enquiry on WhatsApp about attendance.",
      },
      {
        question: "Will sessions be recorded?",
        answer:
          "Session recording and replay availability are currently being decided. Please make an enquiry on WhatsApp before joining if this matters to you.",
        statusNote: "Make an enquiry on WhatsApp about recordings.",
      },
    ] as FaqItem[],
    helpPrompt: "Have another question?",
  },

  // Final Call to Action Section Data
  finalCta: {
    badge: "REGISTRATION OPENS 1 DECEMBER 2026",
    headline:
      "Another Year With the Same Unfinished Goal, or 12 Weeks That Change It?",
    subheadline:
      "You already know what you want. What you need is a clear plan, daily action and people who help you keep going. Goal Grid gives you all three, over 12 weeks.",
    pricingNote: "₦50,000 standard · ₦60,000 instalment option",
    closingNote: "Not ready to sign up? Start here and tell us the business goal you want to work on.",
  },

  // Footer Data
  footer: {
    programmeName: "The Goal Grid Project",
    advisoryEntity: "BMB Strategy and Advisory Limited",
    copyright: "© 2026 BMB Strategy and Advisory Limited. All rights reserved.",
    links: [
      { label: "The Programme", href: "#programme" },
      { label: "The GRID Method", href: "#method" },
      { label: "What You'll Gain", href: "#outcomes" },
      { label: "About the Host", href: "#host" },
      { label: "Investment", href: "#investment" },
      { label: "FAQs", href: "#faqs" },
    ],
  },
};
