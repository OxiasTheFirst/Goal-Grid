/**
 * Verified Landing Page Content & Structured Data for Goal Grid
 * Source: Goal Grid Landing Page Content (BMB Strategy & Advisory Ltd.)
 */

export interface KeyFact {
  title: string;
  detail: string;
}

export interface IllustrativeExperience {
  quote: string;
  theme: string;
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

export interface HowToJoinStep {
  step: number;
  title: string;
  description: string;
}

export const landingPageData = {
  // Hero Section Data
  hero: {
    badge: "A 3-MONTH PROGRAMME FOR BUSINESS OWNERS · JANUARY TO MARCH 2027",
    headline: "Don't Just Set the Goal. Build the Path to Achieve It.",
    subheadline:
      "The Goal Grid Project is a 3-month programme that takes the goal you have carried from one year to the next and turns it into a clear, step-by-step plan, then stays with you while you carry it out.",
    ctaText: "Join the Waitlist",
    pricingNote: "₦50,000 · Instalments available",
    keyFacts: [
      {
        title: "3 Months",
        detail: "January to March 2027",
      },
      {
        title: "Daily Tasks",
        detail: "Action tasks that keep you moving",
      },
      {
        title: "Every Friday",
        detail: "Live teaching sessions on Google Meet",
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
      "Every January, you write the goal down. By March, the business is busy again and the goal is still on the page. You are not lazy and you are not alone. A goal tells you where you want to go. It does not tell you what to do on Monday.",
    subtitle:
      "Common experiences business owners share when turning goals into daily execution:",
    experiences: [
      {
        quote: "I set goals every year, but I don't follow through.",
        theme: "Follow-through",
      },
      {
        quote: "I want more sales, but I don't know what to focus on first.",
        theme: "Prioritisation",
      },
      {
        quote: "I am busy all day, every day, and I still don't see enough progress.",
        theme: "Productive Focus",
      },
      {
        quote: "I try to do everything alone, and I can't stay consistent.",
        theme: "Accountability",
      },
    ] as IllustrativeExperience[],
    closingStatement:
      "You can be busy every day and still feel like your business is not moving forward. Goal Grid changes that.",
    ctaText: "I Want a Clear Plan",
  },

  // GRID Method Framework Data
  gridMethod: {
    badge: "THE METHOD",
    headline: "Four Steps From \"I Want\" to \"I Did\"",
    subtitle:
      "Knowing what you want is not enough. You also need to know what to do, where to start, what comes first, who can help, when each thing should happen and how you will know it is working. The Goal Grid is the structure that answers all of that.",
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
    headline: "Everything Built to Keep You Moving for 3 Months",
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
        id: "friday-sessions",
        number: "04",
        title: "Friday Teaching Sessions",
        description:
          "Every Friday, a live teaching session on Google Meet shows you how to plan, prioritise and push through, with practical lessons you can use that same week.",
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
    ctaText: "Join the Waitlist",
  },

  // Outcomes Section Data ("What You Stand to Gain")
  outcomes: {
    badge: "WHAT YOU STAND TO GAIN",
    headline:
      "By March, Your Goal Stops Being a Wish and Becomes a Record of Work Done",
    subtitle:
      "Intended programme outcomes and execution habits developed over three months:",
    items: [
      {
        number: "01",
        title: "One goal, made clear",
        description:
          "You will know exactly what you are working towards and why it matters to your business.",
      },
      {
        number: "02",
        title: "A roadmap you can follow",
        description:
          "Your goal broken into steps, each with a place in your week, so you stop guessing what to do first.",
      },
      {
        number: "03",
        title: "Real daily momentum",
        description:
          "Daily tasks mean you take action every day for 3 months, not only when you feel motivated.",
      },
      {
        number: "04",
        title: "Focus on what moves the business",
        description:
          "You will learn to choose the few actions that matter most, so being busy turns into being productive.",
      },
      {
        number: "05",
        title: "Support you do not get alone",
        description:
          "A group, a group leader and a host who will see whether you showed up. Trying to do everything alone is the reason many goals stall, and you will not be doing it alone.",
      },
      {
        number: "06",
        title: "Habits that outlast the programme",
        description:
          "The GRID method is a way of working you can reuse on every goal after this one.",
      },
    ] as OutcomeItem[],
    ctaText: "Join the Waitlist",
  },

  // Audience Qualifier Data ("Is This For You?")
  qualifier: {
    badge: "IS THIS FOR YOU?",
    headline: "Built for Business Owners Ready to Act, Not Just Plan",
    subtitle:
      "Goal Grid is for you if you sell products, offer services, run an online business or manage a small business, and you are:",
    criteriaForYou: [
      "Tired of setting goals you do not finish.",
      "Wanting more sales but unsure what to focus on first.",
      "Busy all the time without seeing enough progress.",
      "Doing everything alone and struggling to stay consistent.",
      "Determined to start 2027 with a clear plan.",
    ],
    criteriaNotForYou: [
      "Looking only for passive inspiration or motivational talks without doing the daily work.",
      "Unable to allocate dedicated daily time to complete execution tasks.",
      "Unwilling to attend weekly Friday sessions and participate in group accountability reviews.",
    ],
    ctaText: "This Is for Me",
  },

  // Host Section Data (Strictly Verified Facts; No Fabricated Credentials or Quotes)
  host: {
    badge: "MEET THE HOST",
    headline: "Programme Leadership & Host Advisory",
    name: "@Bolaji Babalola",
    role: "Programme Host",
    organization: "BMB Strategy & Advisory Ltd.",
    biography:
      "Goal Grid is hosted and led under BMB Strategy & Advisory Ltd., designed as an intensive, practical 3-month programme bridging the gap between setting business goals and daily operational execution.",
    duties: [
      "Leads the live weekly Friday teaching sessions on Google Meet",
      "Guides the cohort curriculum, group structure, and weekly priorities",
      "Conducts your private 1-on-1 diagnostic session focused on your specific business goal",
    ],
    credentialsConfirmationNote:
      "Official host biography, credentials, and executive profile are to be confirmed by the client prior to launch.",
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
          "A clear task each day so you always know your next move and maintain steady daily momentum throughout the 3 months.",
      },
      {
        title: "Weekly Live Sessions",
        description:
          "Friday teaching sessions on Google Meet to plan, prioritise, and learn practical lessons you can use that same week.",
      },
      {
        title: "Group Support & 1-on-1 Access",
        description:
          "An assigned group and group leader for peer support, progress reports to see momentum, and a private 1-on-1 session with the host.",
      },
    ],
    disclaimer:
      "These structures provide consistent guidance and accountability. Individual results depend on active participant participation, consistency, and daily execution.",
  },

  // Pricing & Investment Section Data (Scarcity Claims Removed)
  pricing: {
    badge: "YOUR INVESTMENT",
    headline: "₦50,000 for 3 Months of Structure, Support and Accountability",
    fee: "₦50,000",
    feePeriod: "per person",
    instalmentNote: "Instalments available",
    deliverables: [
      "3 months of daily tasks (January to March 2027)",
      "Weekly Friday teaching sessions on Google Meet",
      "Dedicated group and assigned group leader",
      "Structured progress reporting system",
      "Group presentations and peer reviews",
      "Private 1-on-1 diagnostic session with the host",
    ],
    persuasion:
      "Think about how long you have carried your goal. Think about what another year without a plan would cost your business. Compare that with ₦50,000, which you can pay in instalments.",
    ctaText: "Join the Waitlist",
  },

  // How to Join Data (4 Simple Steps on WhatsApp — Pure Direct Chat Flow)
  howToJoin: {
    badge: "HOW IT WORKS",
    headline: "Four Simple Steps on WhatsApp",
    subtitle:
      "Registration for Goal Grid is managed directly via WhatsApp conversation. There are no online forms or complex portals.",
    steps: [
      {
        step: 1,
        title: "Click the WhatsApp button",
        description:
          "Click any 'Join the Waitlist' or 'Chat with us' button across this page to open WhatsApp.",
      },
      {
        step: 2,
        title: "Send the prefilled enquiry message",
        description:
          "Your WhatsApp will open with a ready-to-send enquiry message addressed to the advisory team.",
      },
      {
        step: 3,
        title: "Receive programme and waitlist information",
        description:
          "The advisory team will reply directly with official details on the January–March 2027 cohort.",
      },
      {
        step: 4,
        title: "Follow the instructions provided for registration",
        description:
          "Review the schedule, instalment details, and complete your registration directly with the team.",
      },
    ] as HowToJoinStep[],
    clarificationNote:
      "Clicking the WhatsApp button opens an enquiry conversation with our team; it does not automatically register your place until confirmed.",
    ctaText: "Enquire on WhatsApp",
  },

  // FAQ Section Data (All 9 Questions Audited Strictly Against Brief)
  faq: {
    badge: "QUESTIONS",
    headline: "Frequently Asked Questions",
    items: [
      {
        question: "Who is Goal Grid for?",
        answer:
          "Business owners: people who sell products, offer services, run online businesses or manage small businesses, and who want to make real progress on a goal.",
      },
      {
        question: "What exactly is Goal Grid?",
        answer:
          "A 3-month programme that helps you take a goal you have struggled to achieve and build a practical, step-by-step structure for making it happen, using four steps: Goal, Roadmap, Implementation and Discipline.",
      },
      {
        question: "When does it run?",
        answer:
          "From January to March 2027. The waitlist opens in December 2026.",
      },
      {
        question: "What will I do each week?",
        answer:
          "You complete daily tasks, join a live teaching session every Friday on Google Meet, send progress reports and work with your group and group leader. You also present to your group, and you have one private session with the host.",
      },
      {
        question: "How much time do I need?",
        answer:
          "The exact daily time commitment and Friday session duration are currently being finalized. If you have questions about whether your schedule is a good fit, please contact the team on WhatsApp for clarification.",
        statusNote: "Contact team on WhatsApp for schedule clarification.",
      },
      {
        question: "How much does it cost? Can I pay in instalments?",
        answer:
          "The fee is ₦50,000 per person, and instalments are available. Specific instalment dates and amounts are being finalized; please message the team on WhatsApp for clarification on instalment options.",
        statusNote: "Contact team on WhatsApp for instalment details.",
      },
      {
        question: "Is my business too small or too new for this?",
        answer:
          "Goal Grid is for business owners who want clearer goals and steady action. If you have a goal you want to reach, you can benefit from the structure.",
      },
      {
        question: "What if I miss a session or a task?",
        answer:
          "Attendance requirements and arrangements for missed sessions or tasks are currently being finalized. Please contact the team on WhatsApp for clarification on participation guidelines.",
        statusNote: "Contact team on WhatsApp for attendance guidelines.",
      },
      {
        question: "Will sessions be recorded?",
        answer:
          "Session recording and replay availability policies are currently being decided. Please contact the team on WhatsApp for clarification on recording availability before joining.",
        statusNote: "Contact team on WhatsApp for recording policy clarification.",
      },
    ] as FaqItem[],
    helpPrompt: "Have another question?",
    ctaText: "Message us on WhatsApp",
  },

  // Final Call to Action Section Data
  finalCta: {
    badge: "YOUR 2027 STARTS NOW",
    headline:
      "Another Year With the Same Unfinished Goal, or Three Months That Change It?",
    subheadline:
      "You already know what you want. What you need is a clear plan, daily action and people who help you keep going. Goal Grid gives you all three, from January to March 2027.",
    pricingNote: "₦50,000 · Instalments available",
    closingNote: "Tell us one business goal you want to work on in 2027. Start there.",
    ctaText: "Join the Goal Grid Waitlist",
  },

  // Footer Data
  footer: {
    programmeName: "The Goal Grid Project",
    duration: "January–March 2027",
    advisoryEntity: "BMB Strategy & Advisory Ltd.",
    copyright: "© 2026 BMB Strategy & Advisory Ltd. All rights reserved.",
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
