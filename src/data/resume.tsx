import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Hailey Tu",
  initials: "HT",
  url: "https://dillion.io",
  location: "Atlanta, GA",
  locationLink: "https://www.google.com/maps/place/atlanta",
  description:
    "Born entrepreneur who turned childhood snack business into lifelong passion. Now a Business student at Georgia Tech, driven to transform innovative ideas into impactful ventures.",
  summary:
    "Back in 4th grade, I accidentally became an entrepreneur. I saw a demand for snacks and essentials not sold at the school canteen, so I invested my Tet holiday savings into products I knew would sell. During break time, I set up a small booth, used persuasion skills to attract customers, and even started referral incentives. Soon, upperclassmen pitched product ideas, and classmates wanted to collaborate. Everything was great—until the principal shut us down for cutting into the canteen’s profits. But that experience shaped my future. While other kids explored their interests, I knew business was my calling. I loved strategy, innovation, communication, and turning ideas into reality. Now, as a Scheller Business student at Georgia Tech—my dream school—I’ve honed my passion with technical skills and hands-on experience. Whether in Sales, Marketing, Strategy, or IT Management, I’m all in. Ambitious, driven, and creative, I’m ready to make an impact in the business world. Let’s connect—I’d love to hear your story too!",
  avatarUrl: "/me2.png",
  skills: [
    "Python",
    "Java",
    "C++",
    "Leadership",
    "Communication",
    "Critical Thinking",
    "Microsoft Word",
    "Excel",
    "SQL",
    "PowerPoint",
    "English (Native)",
    "Vietnamese (Native)",
    "Spanish (Beginner)",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "btu9@gatech.edu",
    tel: "+1 678.779.7218",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/hailey-tu-a90381299/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "SATÉ Grille",
      href: "https://sategrille.com/",
      badges: [],
      location: "Atlanta, Georgia",
      title: "Assistant Store Manager",
      logoUrl: "/sategrill.png",
      start: "Sep 2024",
      end: "Present",
      description:
        "Oversee Daily Operations, Manage Inventory, Enhance Guest Experience, Promotions and Upselling",
    },
    {
      company: "Cap't Loui",
      badges: [],
      href: "https://www.captlouiduluth.com/",
      location: "Atlanta, Georgia",
      title: "Server",
      logoUrl: "/captloui.png",
      start: "Jun 2023",
      end: "Sep 2024",
      description:
        "Delivered exceptional dining experiences by providing attentive and personalized service to each guest, making long-term connections with customers.",
    },
  ],
  education: [
    {
      school: "Georgia Institute of Technology",
      href: "https://www.gatech.edu/",
      degree: "Bachelor's Degree of Business Administration and Management",
      logoUrl: "/GT.png",
      start: "Jun 2024",
      end: "Present",
    },
    {
      school: "Georgia State University",
      href: "https://www.gsu.edu/",
      degree: "Bachelor's Degree of Business Administration and Management",
      logoUrl: "/gsu.png",
      start: "Aug 2023",
      end: "May 2024",
    },
  ],
  projects: [
    {
      title:
        "Delta Sigma Pi (DSP) - Professional Business Fraternity at Georgia Tech",
      href: "https://vpmgatechdsp.wixsite.com/zetalambda",
      dates: "Start Date - End Date",
      active: true,
      description:
        "Member of the Professional Business Fraternity at Georgia Tech, Delta Sigma Pi. Participated in professional development, community service, and social events.",
      technologies: [],
      links: [
        {
          type: "Website",
          href: "https://vpmgatechdsp.wixsite.com/zetalambda",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/deltasigmapi.png",
      video: "",
    },
    {
      title: "Georgia Tech Marketing Association",
      href: "https://georgiatechmarketi.wixsite.com/website",
      dates: "Start Date - End Date",
      active: true,
      description:
        "Member of the Georgia Tech Marketing Association. Participated in marketing events, workshops, and networking opportunities.",
      technologies: [],
      links: [
        {
          type: "Website",
          href: "https://georgiatechmarketi.wixsite.com/website",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/GTmarketing.png",
      video: "",
    },
    {
      title: "Diversity in Business at Georgia Tech",
      href: "https://gatech.campuslabs.com/engage/organization/diversity-in-business",
      dates: "Start Date - End Date",
      active: true,
      description:
        "Member of Diversity in Business at Georgia Tech. Participated in diversity and inclusion events, workshops, and networking opportunities.",
      technologies: [],
      links: [
        {
          type: "Website",
          href: "https://gatech.campuslabs.com/engage/organization/diversity-in-business",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/DIB.png",
      video: "",
    },
    {
      title: "Velocity Mentoring Program - Boy with a Ball (Mentor)",
      href: "https://gatech.campuslabs.com/engage/organization/diversity-in-business",
      dates: "Start Date - End Date",
      active: true,
      description: "Become a mentor for the Velocity Mentoring Program",
      technologies: [],
      links: [
        {
          type: "Website",
          href: "https://gatech.campuslabs.com/engage/organization/diversity-in-business",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/BOYWITHABALL.png",
      video: "",
    },
  ],
  hackathons: [],
} as const;
