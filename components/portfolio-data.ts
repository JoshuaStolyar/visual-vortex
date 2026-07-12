export type PortfolioItem = {
  id: number;
  title: string;
  category: "thumbnails" | "longform" | "shortform";
  image: string;
  client: string;
  views: string;
  videoId: string;
  isShort?: boolean;
};

export const portfolioItems: PortfolioItem[] = [
  { id: 7,  title: "I Investigated a REAL Amber Alert..",         category: "thumbnails", image: "https://i.ytimg.com/vi/zdI_sVNUPr8/maxresdefault.jpg", client: "Tyler Vitelli",   views: "1.1M",  videoId: "zdI_sVNUPr8" },
  { id: 3,  title: 'I Investigated The "Gates To Hell"',           category: "thumbnails", image: "/isaac-gates.jpg",                                      client: "Isaac Explores", views: "2.2M",  videoId: "" },
  { id: 5,  title: "The Insane Engineering of the B-2 Bomber",     category: "thumbnails", image: "https://i.ytimg.com/vi/1wMM87UKr_c/maxresdefault.jpg", client: "MegaBuilds",     views: "4.8M",  videoId: "1wMM87UKr_c" },
  { id: 4,  title: "I got Revenge on My Childhood Bully..",        category: "thumbnails", image: "https://i.ytimg.com/vi/6zxA4gFLohE/maxresdefault.jpg", client: "Tyler Vitelli",   views: "2.6M",  videoId: "6zxA4gFLohE" },
  { id: 1,  title: "Bali's Insane Plan to Build a $20B Subway",   category: "thumbnails", image: "https://i.ytimg.com/vi/Ta2bj5lpeg0/maxresdefault.jpg", client: "Mega Builds",     views: "150K",  videoId: "Ta2bj5lpeg0" },
  { id: 6,  title: "Lies We All Believed As Kids",                 category: "thumbnails", image: "/lies.jpg",                                             client: "Tyler Vitelli",   views: "1.4M",  videoId: "h7oha8aXuSU" },
  { id: 10, title: "Ranking On Chad LeaderBoard",                  category: "shortform",  image: "https://i.ytimg.com/vi/_ZwL7EVpcRY/hqdefault.jpg",    client: "Simpletics",      views: "",      videoId: "_ZwL7EVpcRY", isShort: true },
  { id: 20, title: "Arch Burger Contreversay",                     category: "shortform",  image: "https://i.ytimg.com/vi/166u7JPkZ5s/hqdefault.jpg",    client: "Dillon Latham",   views: "",      videoId: "166u7JPkZ5s", isShort: true },
  { id: 11, title: "Never Try Skipping School",                    category: "longform",   image: "https://i.ytimg.com/vi/dsUH02Lq_Bk/maxresdefault.jpg", client: "Tyler Vitelli",   views: "400K+", videoId: "dsUH02Lq_Bk" },
  { id: 12, title: "Our Group Chat Got Leaked",                    category: "longform",   image: "https://i.ytimg.com/vi/KYz2LzMF4hk/maxresdefault.jpg", client: "Tyler Vitelli",   views: "2.5M",  videoId: "KYz2LzMF4hk" },
  { id: 13, title: "School Drills Are Dumb",                       category: "longform",   image: "https://i.ytimg.com/vi/gALKT9BeMsQ/maxresdefault.jpg", client: "Tyler Vitelli",   views: "1.5M",  videoId: "gALKT9BeMsQ" },
  { id: 14, title: "The Bees RUINED My Life..",                    category: "longform",   image: "https://i.ytimg.com/vi/j_tLSuKBdbw/maxresdefault.jpg", client: "Tyler Vitelli",   views: "1.2M",  videoId: "j_tLSuKBdbw" },
  { id: 15, title: "Never pick up a Hitchhiker at night..",        category: "longform",   image: "https://i.ytimg.com/vi/VjtXbWL5fnU/maxresdefault.jpg", client: "Tyler Vitelli",   views: "2M",    videoId: "VjtXbWL5fnU" },
  { id: 16, title: "Never Fall Asleep FIRST at a Sleepover..",     category: "longform",   image: "https://i.ytimg.com/vi/Q0M2PEPgTcg/maxresdefault.jpg", client: "Tyler Vitelli",   views: "1M",    videoId: "Q0M2PEPgTcg" },
  { id: 17, title: "I Got My Creepy Teacher FIRED..",              category: "longform",   image: "https://i.ytimg.com/vi/qyG0lVZF7ZA/maxresdefault.jpg", client: "Tyler Vitelli",   views: "2.5M",  videoId: "qyG0lVZF7ZA" },
  { id: 18, title: "We Have A STALKER..",                          category: "longform",   image: "https://i.ytimg.com/vi/1fYpW2jpDx0/maxresdefault.jpg", client: "Tyler Vitelli",   views: "1.6M",  videoId: "1fYpW2jpDx0" },
  { id: 19, title: "I Survived a REAL Kidnapping..",               category: "longform",   image: "https://i.ytimg.com/vi/ohhJIge1sKE/maxresdefault.jpg", client: "Tyler Vitelli",   views: "1.8M",  videoId: "ohhJIge1sKE" },
];
