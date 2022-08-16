export const netflexInfo = {
  title: "Netflex",
  overview: {
    description: [
      "NetFlex is a production-ready, open-source Netflix clone built with React, Next.js, Styled-component, and MongoDB. It reproduces the experience of browsing real Netflix by using React hooks and components along with complex CSS and multiple API calls.",
      "This project got 3.6k upvotes on Reddit and will be the best Netflix clone you have ever seen.",
    ],
    keyword: [
      {
        listTitle: "Stack",
        isLink: false,
        listItem: ["React", "Mext.js", "MongoDb", "Next-Auth"],
      },
      {
        listTitle: "Live",
        isLink: true,
        listItem: [
          { title: "Site", src: "#" },
          { title: "Code", src: "#" },
        ],
      },
    ],
    gallery: "/images/hotflix/hotflix.gif",
  },
  features: [
    {
      featureTitle: "Project purpose and goal",
      description: [],
      gridAreaContent: [
        {
          isImage: false,
          detail: [
            "After 8 months of self-teaching, I decided to build a big and comprehensive project without help from tutorials. The first idea that came into my mind was a Netflix clone. Simply because I watch it every day! I'm very familiar with its UI and UX, as well as all the basic functionalities. Wouldn't it be so cool if I could make my own Netflix?",
            "So my initial goal was to make a Netflix clone that could offer users the same functionalities like sign up, sign in, create, edit, save, delete the profile, and most importantly, they could watch videos on my website!",
          ],
        },
        {
          isImage: true,
          detail: "/images/hotflix/signup.gif",
        },
      ],
    },
    {
      featureTitle: "Web Stack and Explanation",
      description: [
        "React made the most sense for the web application due to its simplicity and flexibility. Based on React, I choose Next.js as its framework. It offers: 3(CSR, SSR, SSG) rendering systems, Built-in Routing, and Image Optimization. These features make the app super fast as well as super easy to develop.",
        "Vercel is also an obvious choice for NextJs application deployment because of its speed and reliability.",
      ],
      gridAreaContent: [],
    },
    {
      featureTitle: "Implementing CRUD operations",
      description: [
        " There is a saying that every junior web developer has a CRUD app in their portfolio, well, I have one too. CRUD operations are crucial for web developers to fully understand how React state works.",
        "But I don't think I should make an app that only does CRUD, it would be deadly boring, isn't it?",
      ],
      gridAreaContent: [
        {
          isImage: true,
          detail: "/images/hotflix/signin.gif",
        },
        {
          isImage: true,
          detail: "/images/hotflix/add_profile.gif",
        },
        {
          isImage: true,
          detail: "/images/hotflix/edit_profile.gif",
        },
        {
          isImage: true,
          detail: "/images/hotflix/delete_profile.gif",
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
          detail: "/images/hotflix/card.gif",
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
