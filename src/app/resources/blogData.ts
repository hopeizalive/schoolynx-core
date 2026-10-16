export type BlogArticle = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  image: string;
  imageAlt: string;
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
};

export const blogArticles: BlogArticle[] = [
  {
    slug: "school-management-trends",
    title: "The school management trends shaping better-run schools",
    excerpt:
      "A practical look at connected systems, useful data, and the small operational changes making school days run more smoothly.",
    category: "School operations",
    readTime: "6 min read",
    image: "/assets/school_management.png",
    imageAlt: "Illustration of connected school management tools",
    sections: [
      {
        heading: "Less fragmented work",
        paragraphs: [
          "School teams rely on a surprising number of small processes: taking attendance, updating records, sharing notices, coordinating timetables, and following up on fees. When each process lives in a separate place, staff spend time moving information around instead of acting on it.",
          "A growing priority is bringing routine workflows into a shared system. The aim is not to automate every interaction. It is to make everyday information easier to find, keep records consistent, and reduce repetitive hand-offs between teams.",
        ],
      },
      {
        heading: "Useful data, not more dashboards",
        paragraphs: [
          "Digital tools can make school information easier to review, but more charts do not automatically lead to better decisions. Teams benefit most when the information answers a real question, is kept up to date, and can be understood by the people who need it.",
          "Start with one operational question—such as whether attendance follow-up is happening on time—and agree on what information would help answer it. A focused view is often more useful than a long list of metrics.",
        ],
      },
      {
        heading: "Technology that fits the school day",
        paragraphs: [
          "The most promising school technology is often the least disruptive. Clear interfaces, dependable access to records, and workflows that reflect how staff already work make adoption easier than introducing a tool simply because it is new.",
          "Before choosing a system, map the tasks it should improve, involve the people who will use it, and plan time for training. A thoughtful rollout gives a school a better chance of making new tools part of its everyday routine.",
        ],
      },
    ],
  },
  {
    slug: "digital-transformation-in-education",
    title: "A thoughtful approach to digital transformation in education",
    excerpt:
      "Digital change works best when it starts with people and processes—not with a shopping list of new technology.",
    category: "Digital learning",
    readTime: "5 min read",
    image: "/assets/home2.png",
    imageAlt: "School administration software shown on a laptop and phone",
    sections: [
      {
        heading: "Begin with the everyday friction",
        paragraphs: [
          "Digital transformation can sound like a large, abstract project. For a school, it is more useful to begin with the ordinary moments that consume time: duplicate data entry, information that is hard to locate, or messages that do not reach the right people.",
          "Ask staff, families, and administrators where communication or routine work breaks down. Their answers help turn a broad ambition into a manageable set of improvements that can be tested and measured.",
        ],
      },
      {
        heading: "Make adoption part of the plan",
        paragraphs: [
          "A platform only helps when the people it serves can use it confidently. Involve representatives from different roles early, provide practical training, and leave space for questions as new workflows are introduced.",
          "Rolling out changes in stages can make it easier to learn what is working. A school might start with one well-defined workflow, gather feedback, refine it, and then move on to another area.",
        ],
      },
      {
        heading: "Protect trust and continuity",
        paragraphs: [
          "Student and family information deserves careful handling. Schools should understand who can access records, how information is backed up, and what support is available when staff need help.",
          "Digital transformation is an ongoing practice, not a single installation. Regularly review whether tools remain useful, whether processes are clear, and whether the school has a reliable plan for maintaining service.",
        ],
      },
    ],
  },
  {
    slug: "building-student-success",
    title: "Building the conditions for student success",
    excerpt:
      "Consistent communication, timely support, and clear routines help create a school environment where students can thrive.",
    category: "Student wellbeing",
    readTime: "5 min read",
    image: "/assets/home4.png",
    imageAlt: "A school management dashboard with academic tools",
    sections: [
      {
        heading: "Make support easier to coordinate",
        paragraphs: [
          "Student success is shaped by many people: teachers, school leaders, support staff, and families. When everyone has a clear way to share relevant updates, it is easier to notice when a student may need additional attention.",
          "Schools can strengthen coordination by agreeing on simple processes for documenting concerns, assigning follow-up, and communicating with families. Clear ownership helps ensure that important conversations do not get lost between busy days.",
        ],
      },
      {
        heading: "Build predictable routines",
        paragraphs: [
          "Reliable routines around attendance, learning updates, and family communication help students and caregivers know what to expect. Consistency also gives staff a better foundation for noticing changes and responding early.",
          "Choose a small number of routines that matter most to your school community. Explain them clearly, make them accessible, and review them with the people who use them.",
        ],
      },
      {
        heading: "Use information with care",
        paragraphs: [
          "School records can help teams understand patterns, but they should support thoughtful conversations rather than replace them. Context matters, and a number by itself rarely tells the whole story of a student's experience.",
          "Use information to prompt questions and coordinate support, while keeping student dignity, privacy, and individual circumstances at the centre of every decision.",
        ],
      },
    ],
  },
];
