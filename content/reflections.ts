// ============================================================
// CONTENT DATA FILE - Edit this file to replace placeholder
// reflections with your own. All sections of the website
// pull their text from this single file.
// ============================================================

export interface LectureReflection {
  title: string;
  summary: string;
  reflectionPoints: string[];
  icon: string; // emoji icon for visual flair
}

export interface PersonalReflection {
  title: string;
  content: string;
  quote?: string;
}

export interface TimelineEntry {
  date: string;
  title: string;
  content: string;
}

export interface SiteContent {
  hero: {
    heading: string;
    subtitle: string;
    ctaText: string;
  };
  about: {
    heading: string;
    paragraphs: string[];
  };
  efforts: {
    heading: string;
    intro: string;
    lectures: LectureReflection[];
  };
  authenticity: {
    heading: string;
    intro: string;
    reflections: PersonalReflection[];
  };
  takeaways: {
    heading: string;
    insights: string[];
    closingParagraph: string;
    closingQuote?: string;
  };
  timeline: {
    heading: string;
    entries: TimelineEntry[];
  };
}

export const siteContent: SiteContent = {
  hero: {
    heading: "Ray'En's Reflections",
    subtitle: "My journey through ET5131\nVenturing into Entrepreneurship",
    ctaText: "Begin the Reflection",
  },

  about: {
    heading: "About This Reflection",
    paragraphs: [
      "This is my personal reflection on six weeks inside ET5131: Venturing into Entrepreneurship, guided by Prof. Lerwen Liu and her ecosystem of collaborators. The course moved fast, covered a lot of ground, and asked more of me than I expected, not just intellectually, but personally.",

      "From zoom fireside chats in the early weeks to pitching a live product concept by Week 6, the experience challenged how I think, what I value, and how I show up in a team. This reflection is my attempt to make sense of all of it honestly.",
    ],
  },

  efforts: {
    heading: "Efforts & Comprehensiveness",
    intro:
      "The course covered three distinct areas of learning, each building on the last. Here is how I engaged with each and what shifted as a result.",
    lectures: [
      {
        title: "Entrepreneurship Framework",
        icon: "\uD83E\uDDED", // compass
        summary:
          "Weeks 2 and 3 introduced the foundational thinking behind entrepreneurship, through lectures and fireside chats held over Zoom with practitioners who had walked the path themselves.",
        reflectionPoints: [
          "Learned to reframe problems as opportunities rather than obstacles",
          "Fireside chats showed that real entrepreneurship is rarely linear or glamorous",
        ],
      },
      {
        title: "BugBoom: Purpose-Driven Entrepreneurship",
        icon: "\uD83D\uDC1B", // bug
        summary:
          "Week 4 took us into the world of BugBoom, an exploration of purpose-driven entrepreneurship that pushed the group to think beyond profit and ask why a business should exist.",
        reflectionPoints: [
          "Examined what it means to build something with genuine social purpose",
          "Challenged the group to connect personal values to entrepreneurial direction",
        ],
      },
      {
        title: "Circular Economy & Cultural Intelligence",
        icon: "\u267B\uFE0F", // recycle
        summary:
          "Week 5 brought together two powerful lenses: how circular systems can replace wasteful ones, and how cultural awareness shapes the way we collaborate and lead.",
        reflectionPoints: [
          "Understood how circular economy principles can be embedded into product design",
          "Recognized the role cultural intelligence plays in diverse team dynamics",
        ],
      },
    ],
  },

  authenticity: {
    heading: "Authenticity & Self-Discovery",
    intro:
      "The course gave me frameworks to think with, but it also gave me something harder to quantify: a clearer sense of who I am when things get difficult.",
    reflections: [
      {
        title: "Mindset Shift",
        content:
          "Coming in, I thought entrepreneurship was about having the right idea. By Week 3, I understood it is really about having the right mindset. The fireside chats made this concrete. Every speaker described uncertainty, pivoting, and learning through failure. That reframe changed how I approached everything that followed, including the group project.",
        quote:
          "The idea is just the beginning. What you do when it stops working is the real test.",
      },
      {
        title: "Knowledge in Action",
        content:
          "Working on a circular economy concept for our group project made the Week 5 content deeply practical. We were not just studying sustainability, we were trying to design around it. The process of moving from a classroom idea to something we could actually pitch sharpened my understanding of how knowledge needs to connect to real-world constraints to mean anything.",
      },
      {
        title: "Skills Through Friction",
        content:
          "The team had genuine disagreements and scheduling challenges throughout. Rather than seeing this as a failure of teamwork, I now see it as where the real skill-building happened. I learned to communicate more directly, listen more carefully, and hold my ground without closing off other perspectives. Those are skills no lecture could have given me.",
        quote:
          "Collaboration is not the absence of conflict. It is what you build through it.",
      },
    ],
  },

  takeaways: {
    heading: "Key Takeaways",
    insights: [
      "Entrepreneurial mindset is a daily practice, not a personality type.",
      "Sustainability is most powerful when it is built into the product, not added on top.",
      "Cultural intelligence determines how well a team thinks, not just how well it gets along.",
      "The most valuable learning in this course came from the moments of friction and uncertainty.",
    ],
    closingParagraph:
      "ET5131 reshaped how I think, what I know, and how I work with others. The six weeks were short but dense, and I leave with a clearer sense of the kind of entrepreneur I want to be: one who builds with purpose, leads with empathy, and stays curious when things get hard.",
    closingQuote:
      "The fire does not ask where the smoke goes. It simply burns, and in burning, it lights the way.",
  },

  timeline: {
    heading: "Reflection Journal",
    entries: [
      {
        date: "Week 2-3",
        title: "Frameworks & Fireside Chats",
        content:
          "Introduced to the entrepreneurship framework through lectures and Zoom fireside chats with practitioners. The conversations grounded the theory in lived experience early on.",
      },
      {
        date: "Week 4",
        title: "BugBoom: Finding Purpose",
        content:
          "The BugBoom session pushed us to explore purpose-driven entrepreneurship, asking what problem we actually care about solving and why that matters beyond commercial gain.",
      },
      {
        date: "Week 5",
        title: "Circular Economy & Cultural Intelligence",
        content:
          "Two frameworks in one week: how to design out waste through circular thinking, and how cultural intelligence shapes the way we collaborate across difference.",
      },
      {
        date: "Week 6",
        title: "The Pitch",
        content:
          "Presented our group concept to the class, potential partners, and investors. Turning weeks of ideas into a live pitch was the most pressure-filled and rewarding moment of the course.",
      },
      {
        date: "Week 9-10",
        title: "Proposal & Reflection",
        content:
          "Submitted the group proposal and completed this individual reflection. Looking back, the journey covered more ground than I expected, both in the subject and in myself.",
      },
    ],
  },
};
