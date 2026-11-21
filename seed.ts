export type Channel = {
  id: string;
  name: string;
  topic: string;
  kind: "channel" | "dm";
  members: number;
};

export type Message = {
  id: string;
  author: string;
  avatar: string;
  time: string;
  text: string;
  self?: boolean;
};

export const channels: Channel[] = [
  {
    id: "general",
    name: "general",
    topic: "Company-wide announcements and watercooler talk",
    kind: "channel",
    members: 128,
  },
  {
    id: "design",
    name: "design",
    topic: "Design reviews, mockups, and critique",
    kind: "channel",
    members: 24,
  },
  {
    id: "engineering",
    name: "engineering",
    topic: "Builds, releases, and technical discussion",
    kind: "channel",
    members: 41,
  },
  {
    id: "billing",
    name: "billing-revamp",
    topic: "Spec and rollout for the billing overhaul",
    kind: "channel",
    members: 12,
  },
  {
    id: "dm-priya",
    name: "Priya Raman",
    topic: "Direct message",
    kind: "dm",
    members: 2,
  },
  {
    id: "dm-marco",
    name: "Marco Silva",
    topic: "Direct message",
    kind: "dm",
    members: 2,
  },
  {
    id: "dm-lena",
    name: "Lena Fischer",
    topic: "Direct message",
    kind: "dm",
    members: 2,
  },
];

export const messagesByChannel: Record<string, Message[]> = {
  general: [
    {
      id: "g1",
      author: "Priya Raman",
      avatar: "PR",
      time: "9:02 AM",
      text: "Morning everyone! Reminder that the design review moved to 2pm today.",
    },
    {
      id: "g2",
      author: "Marco Silva",
      avatar: "MS",
      time: "9:05 AM",
      text: "Thanks Priya — I'll bring the updated onboarding flow mockups.",
    },
    {
      id: "g3",
      author: "Lena Fischer",
      avatar: "LF",
      time: "9:11 AM",
      text: "Perfect. I'll prep the analytics numbers so we can tie the flow to activation.",
    },
    {
      id: "g4",
      author: "You",
      avatar: "YO",
      time: "9:20 AM",
      text: "Coffee run at 10:30 if anyone wants in ☕",
      self: true,
    },
  ],
  design: [
    {
      id: "d1",
      author: "Marco Silva",
      avatar: "MS",
      time: "8:40 AM",
      text: "Do you have five minutes to look at the empty states?",
    },
    {
      id: "d2",
      author: "Priya Raman",
      avatar: "PR",
      time: "8:44 AM",
      text: "Sure — send them over and I'll leave comments.",
    },
    {
      id: "d3",
      author: "Lena Fischer",
      avatar: "LF",
      time: "8:51 AM",
      text: "Thanks for unblocking the API contract, saved me a day.",
    },
  ],
  engineering: [
    {
      id: "e1",
      author: "Lena Fischer",
      avatar: "LF",
      time: "7:30 AM",
      text: "Nightly build is green again after the cache fix.",
    },
    {
      id: "e2",
      author: "Marco Silva",
      avatar: "MS",
      time: "7:33 AM",
      text: "Nice. I'll cut the release branch after lunch.",
    },
  ],
  billing: [
    {
      id: "b1",
      author: "Priya Raman",
      avatar: "PR",
      time: "Yesterday",
      text: "Draft spec for the billing revamp is up. Feedback welcome before Friday.",
    },
    {
      id: "b2",
      author: "Marco Silva",
      avatar: "MS",
      time: "Yesterday",
      text: "Skimmed it — the upgrade path section needs a rollback plan.",
    },
    {
      id: "b3",
      author: "Lena Fischer",
      avatar: "LF",
      time: "Yesterday",
      text: "Agreed. I'll add a rollback checklist and a feature-flag gate.",
    },
  ],
  "dm-priya": [
    {
      id: "p1",
      author: "Priya Raman",
      avatar: "PR",
      time: "10:12 AM",
      text: "Do you have five minutes to look at the empty states?",
    },
  ],
  "dm-marco": [
    {
      id: "m1",
      author: "Marco Silva",
      avatar: "MS",
      time: "11:04 AM",
      text: "Thanks for unblocking the API contract, saved me a day.",
    },
  ],
  "dm-lena": [
    {
      id: "l1",
      author: "Lena Fischer",
      avatar: "LF",
      time: "11:30 AM",
      text: "Nightly build is green again after the cache fix.",
    },
  ],
};