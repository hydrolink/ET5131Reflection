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

// ============================================================
// TODO: Replace all placeholder text below with your own
// reflections. The structure is ready, just fill in your words.
// ============================================================

export const siteContent: SiteContent = {
  hero: {
    heading: "Ray'En's Reflections",
    subtitle: "My journey through ET5131\nVenturing into Entrepreneurship",
    ctaText: "Begin the Reflection",
  },

  about: {
    heading: "About This Reflection",
    paragraphs: [
      // TODO: Replace with your own description of the assignment's purpose
      "This space is a personal reflection on my journey through ET5131: Venturing into Entrepreneurship. It is not just a summary of what was taught, but a window into how those lessons shaped my thinking, challenged my assumptions, and helped me discover parts of myself I had not fully explored.",

      // TODO: Replace with your own framing of the reflection journey
      "Through each lecture, discussion, and exercise, I found myself returning to the same question: who am I becoming through this process? This website is my attempt to answer that question honestly, to sit by the fire, look back on the path walked, and share what I have found.",

      // TODO: Add more paragraphs as needed
      "The sections that follow trace two threads: the depth and comprehensiveness with which I engaged the course material, and the authentic self-discovery that emerged along the way.",
    ],
  },

  efforts: {
    heading: "Efforts & Comprehensiveness",
    // TODO: Replace with your own introduction to your efforts
    intro:
      "Each lecture offered a new lens through which to view entrepreneurship. Below are the key topics I engaged with, along with reflections on how I applied and internalized the material.",
    lectures: [
      {
        // TODO: Replace with your actual reflection on this lecture topic
        title: "Entrepreneurship Framework",
        icon: "\uD83E\uDDED", // compass
        summary:
          "Understanding the foundational frameworks that guide entrepreneurial thinking, from opportunity recognition to value creation and business model design.",
        reflectionPoints: [
          "Explored how entrepreneurial mindsets differ from traditional business thinking",
          "Reflected on the balance between planning and adaptive execution",
          "Connected framework concepts to real-world startup examples discussed in class",
        ],
      },
      {
        // TODO: Replace with your actual reflection on this lecture topic
        title: "Circular Economy",
        icon: "\u267B\uFE0F", // recycle
        summary:
          "Examining how sustainability and circular business models are reshaping the way we think about resources, waste, and long-term value creation.",
        reflectionPoints: [
          "Analyzed the shift from linear to circular business models",
          "Considered how circular economy principles apply to innovation and product design",
          "Reflected on the ethical responsibility entrepreneurs have toward sustainability",
        ],
      },
      {
        // TODO: Replace with your actual reflection on this lecture topic
        title: "Cultural Intelligence",
        icon: "\uD83C\uDF0D", // globe
        summary:
          "Developing the ability to navigate, understand, and work effectively across different cultural contexts, a vital skill for global entrepreneurship.",
        reflectionPoints: [
          "Assessed my own cultural awareness and areas for growth",
          "Explored how cultural intelligence influences team dynamics and leadership",
          "Connected lessons to personal experiences in multicultural environments",
        ],
      },

      // TODO: Add more lecture reflections as needed by copying the pattern above
    ],
  },

  authenticity: {
    heading: "Authenticity & Self-Discovery",
    // TODO: Replace with your own introduction
    intro:
      "Beyond the academic content, this course became a mirror, reflecting back parts of myself I had not fully examined. These are the honest reflections that emerged.",
    reflections: [
      {
        // TODO: Replace with your own personal reflection
        title: "Personal Growth",
        content:
          "This course challenged me to step outside my comfort zone. I learned that entrepreneurship is not just about business; it is about understanding yourself well enough to lead others. The group discussions, the failures in ideation, and the moments of clarity all contributed to a version of me that is more resilient and more self-aware.",
        quote:
          "Growth does not happen in the comfort zone. It happens in the space between who you are and who you are becoming.",
      },
      {
        // TODO: Replace with your own personal reflection
        title: "Values & Emotions",
        content:
          "I came into this course with assumptions about what matters in business: efficiency, profit, speed. But through the lectures on circular economy and cultural intelligence, I started to question those assumptions. I realized that my values around empathy, sustainability, and connection are not weaknesses in business; they are strengths that define the kind of entrepreneur I want to be.",
        quote:
          "Your values are not separate from your work; they are the foundation of it.",
      },
      {
        // TODO: Replace with your own personal reflection
        title: "Honest Reflection",
        content:
          "If I am being honest, there were moments I felt lost. Moments where the frameworks did not click, where group dynamics were frustrating, where I questioned whether entrepreneurship was even for me. But looking back, those moments of doubt were the most valuable. They forced me to dig deeper, ask better questions, and ultimately arrive at a more grounded understanding of both the subject and myself.",
      },
    ],
  },

  takeaways: {
    heading: "Key Takeaways",
    insights: [
      // TODO: Replace with your own key insights
      "Entrepreneurship is as much about self-awareness as it is about market awareness.",
      "Sustainability is not a constraint; it is a creative challenge that leads to better solutions.",
      "Cultural intelligence is a skill that must be practiced, not just studied.",
      "Failure in a safe environment is one of the most powerful learning tools available.",
      "The best ideas come from the intersection of personal values and real-world problems.",
    ],
    // TODO: Replace with your own closing paragraph
    closingParagraph:
      "This journey through ET5131 has been more than an academic exercise. It has been a process of uncovering what I truly care about, understanding my strengths and blind spots, and building the confidence to pursue ideas that align with who I am. As I move forward, I carry these reflections with me, not as conclusions, but as starting points for the next chapter.",
    closingQuote:
      "The fire does not ask where the smoke goes. It simply burns, and in burning, it lights the way.",
  },

  timeline: {
    heading: "Reflection Journal",
    entries: [
      // TODO: Replace with your own timeline entries
      {
        date: "Week 1-2",
        title: "First Impressions",
        content:
          "Entered the course with curiosity and a bit of uncertainty. The entrepreneurship framework lecture set the stage, helping me understand that entrepreneurship is a mindset, not just a career path.",
      },
      {
        date: "Week 3-4",
        title: "Diving Deeper",
        content:
          "The circular economy sessions challenged my thinking about waste and value. I began to see how sustainability could be a driver of innovation rather than a limitation.",
      },
      {
        date: "Week 5-6",
        title: "Cultural Awakening",
        content:
          "Cultural intelligence brought a new dimension to my understanding. I realized how much my own cultural background shapes the way I approach problems and collaborate with others.",
      },
      {
        date: "Week 7-8",
        title: "Pulling It Together",
        content:
          "As the course progressed, the threads began to weave together. I started to see connections between frameworks, sustainability, and cultural awareness, and how they all inform the kind of entrepreneur I aspire to be.",
      },
      {
        date: "Week 9-10",
        title: "Looking Forward",
        content:
          "The final weeks were about integration and reflection. I spent time journaling, revisiting key concepts, and asking myself what I want to carry forward from this experience.",
      },
    ],
  },
};
