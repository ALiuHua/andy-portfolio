export const netflexInfo = {
  title: "Netflex",
  overview: {
    description: [
      "NetFlex is a production-ready, open-source Netflix clone built with React, Next.js, Styled-component, NextAuth.js and MongoDB. It reproduces the experience of browsing real Netflix by using React hooks and components along with complex CSS, multiple API calls and fully secured authentication.",
    ],
    keyword: [
      {
        listTitle: "Stacks",
        isLink: false,
        listItem: ["React", "Next.js", "NextAuth.js", "MongoDB"],
      },
      {
        listTitle: "Links",
        isLink: true,
        listItem: [
          { title: "Site", src: "https://next-media-andy.vercel.app/" },
          { title: "Code", src: "https://github.com/ALiuHua/netFlex" },
        ],
      },
    ],
    gallery: "/images/netflex/netflex.gif",
  },
  features: [
    {
      featureTitle: "Project purpose and goal",
      description: [],
      gridAreaContent: [
        {
          isImage: false,
          detail: [
            "After 10 months of self-teaching, I decided to build a big and comprehensive project without help from tutorials. The first idea that came into my mind was a Netflix clone. Simply because I love watching movies and using Netflix almost every day! I'm very familiar with its UI and UX, as well as all the basic functionalities. Wouldn't it be so cool if I could make my own Netflix?",
            "So my initial goal was to make a Netflix clone that could offer users the same functionalities like sign up, sign in, create, edit, save, delete the profile, and most importantly, they could watch videos on my website!",
          ],
        },
      ],
    },
    {
      featureTitle: "Web Stack and Explanation",
      description: [
        "React made the most sense for the web application due to its simplicity and flexibility. Based on React, I choose Next.js as its framework. It offers hybrid static and server rendering systems, File-system Routing, API Routes which gives me power to talk with my own backend data and Image Optimization. These features make the app super fast as well as super easy to develop.",
        "Vercel is also an obvious choice for NextJs application deployment because of its speed and reliability.",
      ],
      gridAreaContent: [],
    },
    {
      featureTitle: "Implementing CRUD operations",
      description: [
        " There is a saying that every junior web developer has a CRUD app in their portfolio. So in this project I implemented these functionalities makes you can manage your own profiles and personal list. CRUD operations are crucial for web developers to fully understand how React state works.",
        "But I don't think I should make an app that only does CRUD, it would be deadly boring, isn't it?",
      ],
      gridAreaContent: [
        {
          isImage: true,
          detail: "/images/netflex/signup.gif",
          alt: "signUp screen",
        },
        {
          isImage: true,
          detail: "/images/netflex/add_profile.gif",
          alt: "add profile screen",
        },
        {
          isImage: true,
          detail: "/images/netflex/edit_profile.gif",
          alt: "edit profile screen",
        },
        {
          isImage: true,
          detail: "/images/netflex/delete_profile.gif",
          alt: "delete profile screen",
        },
      ],
    },
    {
      featureTitle: "Problems and Thought Process",
      description: [
        "Like most projects, I ran into a few bumps along the way, one particularly difficult area was building the slider along with card components. I spent up to 3 days trying to figure out how Netflix makes their slider and card animation so smooth and fast. I searched on Google, StackOverflow, tech blogs, and even Reddit but got nothing.",
        "That was when I realized based on my current knowledge, there was no way I could implement the same functionality as Netflix does. So I decided to try another way, a totally different way. Then that finally worked!",
      ],
      gridAreaContent: [
        {
          isImage: true,
          detail: "/images/netflex/card.gif",
          alt: "netflex card view",
        },
      ],
    },
    {
      featureTitle: "Lessons Learned",
      description: [
        "As my first large project using React and Next.Js, I learned a lot of lessons regarding React hooks and state management.",
        "When I first began, I would write sloppy code and move on, but now I know how doing so can come back to bite you; I now spend a lot more time refactoring and improving every line I write, for the best readability and far fewer headaches.",
      ],
      gridAreaContent: [],
    },
  ],
};
