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
      "Before ET5131, my understanding of entrepreneurship was surface-level: ideas, startups, pitches. Six weeks with Prof. Lerwen Liu and her collaborators changed that. The course asked harder questions, about purpose, systems, and whether I genuinely have what it takes, not just to start something, but to build something worth starting.",

      "This reflection traces how those questions changed my mindset, deepened my knowledge, and sharpened skills I did not know I was developing.",
    ],
  },

  efforts: {
    heading: "Efforts & Comprehensiveness",
    intro:
      "Five weeks, four areas of learning, each building on the last. Here is what each demanded and what it gave back.",
    lectures: [
      {
        title: "Entrepreneurship Framework",
        icon: "\uD83E\uDDED", // compass
        summary:
          "Weeks 2 and 3 built the foundational lens: how entrepreneurs identify problems, create value, and think in systems before they think in solutions.",
        reflectionPoints: [
          "Shifted from asking 'what can I build' to 'what problem is worth solving'",
          "Zoom fireside chats surfaced the gap between entrepreneurship theory and the lived reality of practitioners",
        ],
      },
      {
        title: "BugBoom: Purpose-Driven Entrepreneurship",
        icon: "\uD83D\uDC1B", // bug
        summary:
          "Week 4 examined purpose-driven entrepreneurship through BugBoom, pushing the team to interrogate why a business should exist and who it truly serves.",
        reflectionPoints: [
          "Explored the difference between a business that earns money and one that earns its place",
          "Prompted honest reflection on what problems I personally care enough about to pursue",
        ],
      },
      {
        title: "Circular Economy & Cultural Intelligence",
        icon: "\u267B\uFE0F", // recycle
        summary:
          "Week 5 introduced two interlocking ideas: designing systems that eliminate waste by design, and developing cultural fluency to collaborate and lead across difference.",
        reflectionPoints: [
          "Connected circular economy thinking directly to our group project concept",
          "Recognised that cultural intelligence is not about avoiding conflict but using difference as a resource",
        ],
      },
      {
        title: "Group Project: Pitching a Real Idea",
        icon: "\uD83D\uDCA1", // lightbulb
        summary:
          "Week 6 required the team to present a fully developed concept to the class and collaborators, turning weeks of thinking into a live pitch.",
        reflectionPoints: [
          "I applied systems thinking and circular economy principles to a tangible product concept",
          "Learned that a compelling pitch is not about confidence; it is about clarity",
        ],
      },
    ],
  },

  authenticity: {
    heading: "Authenticity & Self-Discovery",
    intro:
      "The assignment asked how this experience changed my mindset, knowledge, and skills. This is my honest answer.",
    reflections: [
      {
        title: "Mindset",
        content:
          "I came in thinking entrepreneurship was a personality trait, something you either had or you did not. What shifted was understanding that it is a practice: problem analysis, tolerating uncertainty, staying curious when things stop working. The fireside chats were the most effective vehicle for this. Hearing entrepreneurs describe pivoting and failing in detail made the mindset shift feel achievable, not just aspirational.",
        quote:
          "The idea is just the beginning. What you do when it stops working is the real test.",
      },
      {
        title: "Knowledge",
        content:
          "The most significant knowledge shift was understanding entrepreneurship as a system, not a sequence. The circular economy framework changed how I analyse problems: I now ask where the waste is in a process, not just where the profit is. Applying this to our group project made the learning concrete rather than conceptual, and I began to see how environment and society are not external factors but design constraints.",
      },
      {
        title: "Skills",
        content:
          "This course built skills I did not expect to develop. Analytically, I learned to pressure-test ideas rather than defend them. In teamwork, our group faced genuine scheduling conflicts and disagreements about direction; working through them taught me to communicate with more directness and less ego. The pitch sharpened the skill of distilling complex thinking into something another person can quickly understand and act on.",
        quote:
          "Collaboration is not the absence of conflict. It is what you build through it.",
      },
    ],
  },

  takeaways: {
    heading: "Key Takeaways",
    insights: [
      "An entrepreneurial mindset is built through practice, not possessed by personality.",
      "System thinking means asking where the waste is, not just where the value is.",
      "Cultural intelligence is a competitive advantage, especially in a diverse team.",
      "The clearest measure of learning is whether you think differently than you did before.",
    ],
    closingParagraph:
      "I came into ET5131 with assumptions about what entrepreneurship is. I leave with better questions, sharper instincts, and a more honest understanding of what I still need to develop. That feels like the right place to end a reflection.",
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
          "The Zoom fireside chats hit differently from the lectures. Hearing practitioners describe failure and course-correction made the theory feel lived-in, not theoretical.",
      },
      {
        date: "Week 4",
        title: "BugBoom: Finding Purpose",
        content:
          "This week raised the hardest question: what do I actually care about? Not what sounds good, but what I would genuinely commit to solving.",
      },
      {
        date: "Week 5",
        title: "Circular Economy & Cultural Intelligence",
        content:
          "Two frameworks, one insight: good design and good collaboration both require you to account for what you would normally ignore.",
      },
      {
        date: "Week 6",
        title: "The Pitch",
        content:
          "Standing up and presenting something we built from scratch was uncomfortable in the best way. Prof's feedback sharpened how I communicate ideas under pressure.",
      },
      {
        date: "Week 9-10",
        title: "Proposal & Reflection",
        content:
          "Writing the executive summary and personal reflection forced me to slow down and be honest about what actually changed, not just what I learned on paper.",
      },
    ],
  },
};
