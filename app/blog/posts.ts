export type BlogSection = {
  heading: string;
  paragraphs: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  category: string;
  readTime: string;
  excerpt: string;
  intro: string;
  sections: BlogSection[];
  takeaway: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "the-fourth-ai-launch-checklist",
    title: "The fourth AI launch checklist nobody asked for",
    date: "June 2026",
    category: "Launch playbook",
    readTime: "4 min read",
    excerpt:
      "A highly polished guide to making a product feel one status banner away from Series A.",
    intro:
      "Every modern AI launch needs the same ingredients: a bold claim, a gradient, three numbers, and a chatbot that says yes to everything. This checklist keeps the parody honest.",
    sections: [
      {
        heading: "1. Lead with a promise nobody can measure",
        paragraphs: [
          "The homepage should announce an outcome that sounds transformational and conveniently avoids any concrete proof.",
          "If the claim can be summarized in one breath, make it bigger, blurrier, and more self-assured.",
        ],
      },
      {
        heading: "2. Stack social proof like furniture",
        paragraphs: [
          "Add testimonials, badges, and partner logos until the page feels like it has been trusted by several invisible committees.",
          "The goal is not truth. The goal is perceived inevitability.",
        ],
      },
      {
        heading: "3. End with a button",
        paragraphs: [
          "The final CTA should imply progress even when the only thing that happens is a mock interaction and a tiny confidence boost.",
          "That is enough to make the landing page feel complete.",
        ],
      },
    ],
    takeaway: "If it looks launch-ready, the market may do the rest.",
  },
  {
    slug: "why-every-saas-needs-a-cookie-banner",
    title: "Why every SaaS needs a cookie banner now",
    date: "May 2026",
    category: "UX theater",
    readTime: "3 min read",
    excerpt:
      "A field guide to the tiny confirmation panel that makes everything feel more legitimate.",
    intro:
      "No glossy SaaS site is complete without a privacy surface that politely interrupts the experience and reminds everyone that compliance is a mood.",
    sections: [
      {
        heading: "Consent as set dressing",
        paragraphs: [
          "The banner does not need to do much. It only needs to exist in the right corner with enough contrast to suggest responsibility.",
          "Use friendly language, a big confirm button, and just enough seriousness to keep the illusion stable.",
        ],
      },
      {
        heading: "The more options, the more credible",
        paragraphs: [
          "A manage-preferences button implies complexity. Complexity implies systems. Systems imply value.",
          "That is the whole trick, and it works disturbingly well.",
        ],
      },
    ],
    takeaway: "Compliance theater is still theater.",
  },
  {
    slug: "turning-features-into-feelings",
    title: "Turning features into feelings",
    date: "April 2026",
    category: "Messaging",
    readTime: "5 min read",
    excerpt:
      "How to make a product page sound like it understands ambition, momentum, and tasteful overuse of the word intelligent.",
    intro:
      "Great AI marketing does not describe the product first. It describes the version of you that uses the product, ideally with a little more posture and a little less sleep.",
    sections: [
      {
        heading: "From capabilities to identity",
        paragraphs: [
          "Instead of saying what the app does, explain what kind of operator it turns the user into.",
          "That framing is vague, uplifting, and weirdly effective.",
        ],
      },
      {
        heading: "Keep the copy clean enough to skim",
        paragraphs: [
          "Long explanations feel honest, but short and shiny lines feel premium.",
          "If the feature list reads like a vibe deck, you are on the right track.",
        ],
      },
    ],
    takeaway: "Sell the feeling, then let the page backfill the details.",
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

