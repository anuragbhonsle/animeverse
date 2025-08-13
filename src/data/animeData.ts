export interface Anime {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  genres: string[];
  episodes: number;
  rating: number;
  releaseYear: number;
}

export type WatchStatus =
  | "plan_to_watch"
  | "watching"
  | "completed"
  | "on_hold"
  | "dropped";

export interface UserAnimeEntry {
  animeId: number;
  status: WatchStatus;
  progress: number;
  rating?: number;
  notes?: string;
}

export const animeData: Anime[] = [
  {
    id: 1,
    title: "Attack on Titan",
    imageUrl:
      "https://i.pinimg.com/originals/d9/23/21/d92321190c1a18eb974c093122ceece0.gif",
    description:
      "In a world where humanity lives within cities surrounded by enormous walls due to the Titans, giant humanoid creatures who devour humans seemingly without reason, a young boy vows to exterminate them after they destroy his hometown and kill his mother.",
    genres: ["Action", "Dark Fantasy", "Post-Apocalyptic"],
    episodes: 75,
    rating: 9.0,
    releaseYear: 2013,
  },
  {
    id: 2,
    title: "Fullmetal Alchemist: Brotherhood",
    imageUrl:
      "https://i.pinimg.com/originals/3a/35/b6/3a35b6bb7f00fe6346ff81559d36e945.gif",
    description:
      "Two brothers search for a Philosopher's Stone after an attempt to revive their deceased mother goes wrong, leaving them in damaged physical forms.",
    genres: ["Adventure", "Dark Fantasy", "Steampunk"],
    episodes: 64,
    rating: 9.1,
    releaseYear: 2009,
  },
  {
    id: 3,
    title: "Death Note",
    imageUrl:
      "https://i.pinimg.com/originals/b2/f3/eb/b2f3eb41b12064f908ecd1a337e46658.gif",
    description:
      "A high school student discovers a supernatural notebook that grants him the power to kill anyone whose name he writes in it.",
    genres: ["Thriller", "Psychological", "Supernatural"],
    episodes: 37,
    rating: 8.6,
    releaseYear: 2006,
  },
  {
    id: 4,
    title: "One Punch Man",
    imageUrl:
      "https://i.pinimg.com/originals/8b/db/89/8bdb893b8a9eb36ceb1995c861d7063b.gif",
    description:
      "The story of Saitama, a hero who can defeat any enemy with a single punch but seeks a worthy opponent after growing bored by a lack of challenge.",
    genres: ["Action", "Comedy", "Superhero"],
    episodes: 24,
    rating: 8.7,
    releaseYear: 2015,
  },
  {
    id: 5,
    title: "My Hero Academia",
    imageUrl:
      "https://i.pinimg.com/originals/70/10/78/7010784f339c46c69eb4ec9a90fe68b8.gif",
    description:
      "In a world where most people have superpowers, a boy without them aims to become a hero and enrolls in a prestigious hero academy.",
    genres: ["Superhero", "Action", "School"],
    episodes: 113,
    rating: 8.4,
    releaseYear: 2016,
  },
  {
    id: 6,
    title: "Demon Slayer",
    imageUrl:
      "https://i.pinimg.com/originals/dc/f3/7a/dcf37a91bd27c05db5cfa4906176513d.gif",
    description:
      "A young boy is determined to become a demon slayer after his family is slaughtered and his sister is turned into a demon.",
    genres: ["Adventure", "Dark Fantasy", "Martial Arts"],
    episodes: 44,
    rating: 8.9,
    releaseYear: 2019,
  },
  {
    id: 7,
    title: "Steins;Gate",
    imageUrl:
      "https://i.pinimg.com/originals/50/f9/47/50f9471c5cc7f9675f407b09f7a8db8d.gif",
    description:
      "A self-proclaimed mad scientist and his friends discover a way to send text messages to the past, with unforeseen consequences.",
    genres: ["Sci-Fi", "Thriller", "Drama"],
    episodes: 24,
    rating: 9.0,
    releaseYear: 2011,
  },
  {
    id: 8,
    title: "Hunter x Hunter",
    imageUrl:
      "https://i.pinimg.com/originals/49/ab/24/49ab24125bf09bad9a774628b1b1fd70.gif",
    description:
      "A young boy sets out to become a Hunter, a specialized profession that requires hunting down treasures, beasts, or even other people.",
    genres: ["Adventure", "Fantasy", "Martial Arts"],
    episodes: 148,
    rating: 9.1,
    releaseYear: 2011,
  },
  {
    id: 9,
    title: "Your Name",
    imageUrl:
      "https://i.pinimg.com/originals/4b/cf/aa/4bcfaacc3c497169cd788c574fb446ba.gif",
    description:
      "Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?",
    genres: ["Romance", "Supernatural", "Drama"],
    episodes: 1,
    rating: 8.9,
    releaseYear: 2016,
  },
  {
    id: 10,
    title: "Jujutsu Kaisen",
    imageUrl:
      "https://i.pinimg.com/originals/da/f8/da/daf8da8dc5af87b72c1242bb2bf77551.gif",
    description:
      "A high school student is enlisted in a secret organization that combats curses, supernatural creatures that plague humanity.",
    genres: ["Dark Fantasy", "Supernatural", "Action"],
    episodes: 24,
    rating: 8.7,
    releaseYear: 2020,
  },
  {
    id: 11,
    title: "Cowboy Bebop",
    imageUrl:
      "https://i.pinimg.com/originals/d3/f7/e3/d3f7e3c37d8fb937ad1762578048c2d2.gif",
    description:
      "The futuristic misadventures of a ragtag crew of bounty hunters as they travel the solar system looking for the next job.",
    genres: ["Space Western", "Neo-noir", "Sci-Fi"],
    episodes: 26,
    rating: 8.9,
    releaseYear: 1998,
  },
  {
    id: 12,
    title: "Naruto Shippuden",
    imageUrl:
      "https://i.pinimg.com/originals/af/97/5a/af975a5c338c2d8b89598dc9211ed3d4.gif",
    description:
      "The story follows Naruto's quest to become Hokage, the ninja who is acknowledged by the village as the leader and strongest of all.",
    genres: ["Adventure", "Martial Arts", "Fantasy"],
    episodes: 500,
    rating: 8.6,
    releaseYear: 2007,
  },
  {
    id: 13,
    title: "Violet Evergarden",
    imageUrl:
      "https://i.pinimg.com/originals/63/e1/b9/63e1b9f5fecf61c03c4f8396fc5b47a1.gif",
    description:
      "A former soldier who was trained to be a weapon, struggles to find her own identity and understand the concept of love by working as an Auto Memory Doll, which writes letters for others.",
    genres: ["Drama", "Slice of Life", "Fantasy"],
    episodes: 13,
    rating: 8.7,
    releaseYear: 2018,
  },
  {
    id: 14,
    title: "One Piece",
    imageUrl:
      "https://i.pinimg.com/originals/9c/f5/0c/9cf50c5cde5a32614e100cb44bb1fe2f.gif",
    description:
      "Monkey D. Luffy sets out to sea to become the King of Pirates and find the legendary One Piece treasure.",
    genres: ["Adventure", "Fantasy", "Comedy"],
    episodes: 1000,
    rating: 8.7,
    releaseYear: 1999,
  },
  {
    id: 15,
    title: "Spirited Away",
    imageUrl:
      "https://i.pinimg.com/originals/6d/71/e2/6d71e24e6d6ef7bf33b36637c0c117c2.gif",
    description:
      "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, where humans are changed into beasts.",
    genres: ["Adventure", "Fantasy", "Supernatural"],
    episodes: 1,
    rating: 8.8,
    releaseYear: 2001,
  },
  {
    id: 16,
    title: "Fruits Basket",
    imageUrl:
      "https://i.pinimg.com/originals/b6/2a/59/b62a599a9870b68960231e2259eca694.gif",
    description:
      "After a family tragedy turns her life upside down, a kind-hearted high school girl ends up living with members of the mysterious Soma family, who are each possessed by a spirit of the Chinese zodiac.",
    genres: ["Drama", "Romance", "Slice of Life", "Supernatural"],
    episodes: 63,
    rating: 8.6,
    releaseYear: 2019,
  },
  {
    id: 17,
    title: "Mob Psycho 100",
    imageUrl:
      "https://i.pinimg.com/originals/8c/55/58/8c55589f5eef5722c406d5a29cf42dcf.gif",
    description:
      "A powerful young psychic tries to live a normal life and suppress his abilities, but trouble always finds him in this visually intense and emotionally rich story.",
    genres: ["Action", "Supernatural", "Comedy"],
    episodes: 37,
    rating: 8.7,
    releaseYear: 2016,
  },
  {
    id: 18,
    title: "Tokyo Ghoul",
    imageUrl:
      "https://i.pinimg.com/originals/c8/59/0d/c8590df6490391836f2e78732d27fcf4.gif",
    description:
      "After a date gone wrong, a college student becomes part-ghoul and must navigate his dual life in a world where ghouls and humans clash.",
    genres: ["Horror", "Psychological", "Dark Fantasy"],
    episodes: 48,
    rating: 7.9,
    releaseYear: 2014,
  },
  {
    id: 19,
    title: "Black Clover",
    imageUrl:
      "https://i.pinimg.com/originals/55/56/33/5556337a9f822696a13d7cc5f9159ee3.gif",
    description:
      "In a world where magic is everything, two boys born without magic strive to become the Wizard King — proving that determination can overcome fate.",
    genres: ["Action", "Fantasy", "Shounen"],
    episodes: 170,
    rating: 8.0,
    releaseYear: 2017,
  },
  {
    id: 20,
    title: "Erased",
    imageUrl:
      "https://i.pinimg.com/originals/e2/ac/cb/e2accbd8b2be19937e464259e3828dca.gif",
    description:
      "A man with a mysterious ability to go back in time is sent 18 years into the past to prevent a series of kidnappings and murders — including his mother's.",
    genres: ["Mystery", "Psychological", "Supernatural"],
    episodes: 12,
    rating: 8.5,
    releaseYear: 2016,
  },
  {
    id: 26,
    title: "Vinland Saga",
    imageUrl:
      "https://i.pinimg.com/originals/12/28/e9/1228e930999b8e2beeab65c8df5a98df.gif",
    description:
      "Set in the Viking era, a young warrior seeks revenge for his father’s death while navigating the brutal world of warfare, politics, and personal growth.",
    genres: ["Action", "Adventure", "Historical"],
    episodes: 24,
    rating: 8.8,
    releaseYear: 2019,
  },
  {
    id: 27,
    title: "The Promised Neverland",
    imageUrl:
      "https://i.pinimg.com/originals/ef/fc/7e/effc7e79a5a82bb665033aef6f1ac67e.gif",
    description:
      "A group of children at an orphanage discovers a dark secret about their fate and plans a daring escape. A psychological thriller full of suspense and twists.",
    genres: ["Thriller", "Horror", "Mystery"],
    episodes: 12,
    rating: 8.5,
    releaseYear: 2019,
  },
  {
    id: 28,
    title: "Your Lie in April",
    imageUrl:
      "https://i.pinimg.com/originals/3e/b1/53/3eb1532f87ee35e0d54805774b86f8b6.gif",
    description:
      "A piano prodigy who lost his ability to play after his mother's death finds new meaning in life through a violinist with a lively spirit. An emotional journey of music, love, and loss.",
    genres: ["Drama", "Music", "Romance"],
    episodes: 22,
    rating: 8.7,
    releaseYear: 2014,
  },
  {
    id: 29,
    title: "Neon Genesis Evangelion",
    imageUrl:
      "https://i.pinimg.com/originals/8e/69/60/8e696084f36bcac49dba529498ed7119.gif",
    description:
      "In a post-apocalyptic world, teenagers pilot giant bio-mechanical robots to protect humanity from mysterious beings known as Angels. A deeply psychological and symbolic mecha series.",
    genres: ["Mecha", "Psychological", "Sci-Fi"],
    episodes: 26,
    rating: 8.5,
    releaseYear: 1995,
  },
  {
    id: 30,
    title: "Bleach",
    imageUrl:
      "https://i.pinimg.com/originals/27/d8/0e/27d80eca9c8246357149c1315ed2fc25.gif",
    description:
      "The story follows Ichigo Kurosaki, a teenager with the ability to see ghosts, who is given the powers of a Soul Reaper to protect the living from evil spirits.",
    genres: ["Action", "Supernatural", "Shounen"],
    episodes: 366,
    rating: 8.2,
    releaseYear: 2004,
  },
  {
    id: 31,
    title: "Tokyo Revengers",
    imageUrl:
      "https://i.pinimg.com/originals/d8/56/1e/d8561e8998a67bb74795ac22f0b28021.gif",
    description:
      "Takemichi Hanagaki, a man who regrets his past life, is given a chance to travel back in time and save his childhood girlfriend from a tragic fate.",
    genres: ["Action", "Supernatural", "Drama"],
    episodes: 24,
    rating: 8.0,
    releaseYear: 2021,
  },
  {
    id: 32,
    title: "A Silent Voice",
    imageUrl:
      "https://i.pinimg.com/originals/a1/a6/6c/a1a66c90e7884ebc43e8506234655df5.gif",
    description:
      "Shoya Ishida seeks redemption for bullying a deaf girl, Shoko Nishimiya, in his childhood. As he tries to make amends, he learns about the consequences of his past actions and begins to understand the value of true friendship.",
    genres: ["Drama", "Romance", "Slice of Life"],
    episodes: 1,
    rating: 8.2,
    releaseYear: 2016,
  },
  {
    id: 33,
    title: "Anohana: The Flower We Saw That Day",
    imageUrl:
      "https://i.pinimg.com/originals/f2/c6/ba/f2c6ba5ecacebfd7c56e83b60e5b2e9e.gif",
    description:
      "Years after the death of their childhood friend, Menma, the group of friends must confront their unresolved grief when Menma’s spirit reappears and asks for their help to fulfill her final wish.",
    genres: ["Drama", "Slice of Life", "Supernatural"],
    episodes: 11,
    rating: 8.6,
    releaseYear: 2011,
  },
  {
    id: 34,
    title: "Gintama",
    imageUrl:
      "https://i.pinimg.com/originals/00/dc/be/00dcbef2478116f39637f4493d263420.gif",
    description:
      "In an alternate Edo-period Japan invaded by aliens, a samurai named Gintoki runs an odd-jobs business with his friends, blending slapstick comedy with heartfelt moments and epic battles.",
    genres: ["Comedy", "Action", "Sci-Fi", "Parody"],
    episodes: 367,
    rating: 8.9,
    releaseYear: 2006,
  },
  {
    id: 35,
    title: "Haikyuu!!",
    imageUrl:
      "https://i.pinimg.com/originals/60/e7/af/60e7af6c4c0e65c95b3016b273847dc9.gif",
    description:
      "Inspired by a professional volleyball player, a short high school student joins his school's team, striving to overcome challenges and lead his team to nationals.",
    genres: ["Sports", "Comedy", "Drama"],
    episodes: 85,
    rating: 8.7,
    releaseYear: 2014,
  },
  {
    id: 36,
    title: "Made in Abyss",
    imageUrl:
      "https://i.pinimg.com/originals/98/02/61/9802617bbe337210e87a3245e6349710.gif",
    description:
      "A young girl and her robot companion descend into a mysterious, dangerous abyss to uncover its secrets, facing beauty and horror in equal measure.",
    genres: ["Adventure", "Fantasy", "Horror"],
    episodes: 25,
    rating: 8.8,
    releaseYear: 2017,
  },
  {
    id: 37,
    title: "Code Geass: Lelouch of the Rebellion",
    imageUrl:
      "https://i.pinimg.com/originals/b2/ff/d9/b2ffd9de76ce9385a2577daad6505575.gif",
    description:
      "An exiled prince gains the power of absolute obedience and leads a rebellion against a tyrannical empire, weaving a complex tale of strategy and betrayal.",
    genres: ["Mecha", "Sci-Fi", "Drama"],
    episodes: 50,
    rating: 8.7,
    releaseYear: 2006,
  },
  {
    id: 38,
    title: "Re:Zero - Starting Life in Another World",
    imageUrl:
      "https://i.pinimg.com/originals/ab/2e/95/ab2e95e23e90983c4acf69ab0b9039b8.gif",
    description:
      "A young man is transported to a fantasy world where he discovers he can return to a checkpoint after death, using this ability to save those he loves.",
    genres: ["Fantasy", "Drama", "Thriller"],
    episodes: 50,
    rating: 8.6,
    releaseYear: 2016,
  },
  {
    id: 39,
    title: "Kimi no Todoke: From Me to You",
    imageUrl:
      "https://i.pinimg.com/originals/6e/f0/5d/6ef05ddfc397c0b6ecc942d3a9fde064.gif",
    description:
      "A shy girl, misunderstood due to her resemblance to a horror character, slowly opens up to her classmates and finds love with a popular boy.",
    genres: ["Romance", "Slice of Life", "Comedy"],
    episodes: 38,
    rating: 8.0,
    releaseYear: 2009,
  },
  {
    id: 40,
    title: "Fate/Zero",
    imageUrl:
      "https://i.pinimg.com/originals/6b/7c/92/6b7c920154e278956e245dc19bd96849.gif",
    description:
      "Seven mages summon heroic spirits to fight in a deadly battle for the Holy Grail, exploring themes of sacrifice, ambition, and morality.",
    genres: ["Action", "Fantasy", "Thriller"],
    episodes: 25,
    rating: 8.6,
    releaseYear: 2011,
  },
  {
    id: 41,
    title: "Berserk",
    imageUrl:
      "https://i.pinimg.com/originals/4c/3e/42/4c3e4262fffe97f8fecdfbcdf2407945.gif",
    description:
      "A lone mercenary, Guts, wanders a dark medieval world, battling demonic forces and his own tragic past in a brutal tale of fate and revenge.",
    genres: ["Dark Fantasy", "Action", "Horror"],
    episodes: 25,
    rating: 8.6,
    releaseYear: 1997,
  },
  {
    id: 42,
    title: "Dr. Stone",
    imageUrl:
      "https://i.pinimg.com/originals/f5/f9/5e/f5f95e8aa2e582c965b290b9181811dd.gif",
    description:
      "After a mysterious phenomenon petrifies humanity, a scientifically inclined teenager awakens to rebuild civilization using the power of science.",
    genres: ["Adventure", "Sci-Fi", "Shounen"],
    episodes: 35,
    rating: 8.3,
    releaseYear: 2019,
  },
  {
    id: 43,
    title: "Clannad: After Story",
    imageUrl:
      "https://i.pinimg.com/originals/12/bc/6a/12bc6a091b282e34a43c28abbed47eda.gif",
    description:
      "Tomoya and Nagisa face the challenges of adulthood, family, and loss in this emotional continuation of their high school romance.",
    genres: ["Drama", "Romance", "Supernatural"],
    episodes: 24,
    rating: 8.9,
    releaseYear: 2008,
  },
  {
    id: 44,
    title: "Blue Lock",
    imageUrl:
      "https://i.pinimg.com/originals/95/13/c9/9513c90be5af985db65f85da4307ec44.gif",
    description:
      "A group of high school soccer players compete in a ruthless training program to become Japan’s ultimate striker and dominate the world stage.",
    genres: ["Sports", "Drama", "Psychological"],
    episodes: 24,
    rating: 8.4,
    releaseYear: 2022,
  },
  {
    id: 45,
    title: "JoJo’s Bizarre Adventure",
    imageUrl:
      "https://i.pinimg.com/originals/56/60/47/56604719fe6970d7b8406bd792ba81e8.gif",
    description:
      "The Joestar family battles supernatural foes across generations, wielding unique powers called Stands in a stylish, action-packed saga.",
    genres: ["Action", "Adventure", "Supernatural"],
    episodes: 190,
    rating: 8.5,
    releaseYear: 2012,
  },
  {
    id: 46,
    title: "Princess Mononoke",
    imageUrl:
      "https://i.pinimg.com/originals/c4/a7/1c/c4a71c2fe8e97e4f2f44cb83d4ff6dd7.gif",
    description:
      "A young warrior becomes entangled in a conflict between forest gods and human industrialization, exploring themes of nature and humanity.",
    genres: ["Adventure", "Fantasy", "Historical"],
    episodes: 1,
    rating: 8.7,
    releaseYear: 1997,
  },
  {
    id: 47,
    title: "Fairy Tail",
    imageUrl:
      "https://i.pinimg.com/originals/b2/8b/0b/b28b0b00cbed89672bb641ec77ba9f30.gif",
    description:
      "A young mage joins the rowdy Fairy Tail guild, embarking on magical adventures filled with friendship, battles, and quests.",
    genres: ["Action", "Fantasy", "Comedy"],
    episodes: 328,
    rating: 7.9,
    releaseYear: 2009,
  },
  {
    id: 48,
    title: "March Comes in Like a Lion",
    imageUrl:
      "https://i.pinimg.com/originals/27/fa/86/27fa86949ef8d96ffd5e7b52cc0806f1.gif",
    description:
      "A young professional shogi player battles depression and loneliness, finding solace in a kind family and his passion for the game.",
    genres: ["Drama", "Slice of Life", "Psychological"],
    episodes: 44,
    rating: 8.6,
    releaseYear: 2016,
  },
  {
    id: 49,
    title: "Overlord",
    imageUrl:
      "https://i.pinimg.com/originals/3e/1b/15/3e1b1599e538e4c63309883c8b2a9a2c.gif",
    description:
      "A gamer is trapped in a virtual world as a powerful skeletal overlord, leading his NPC followers to conquer a new reality.",
    genres: ["Fantasy", "Action", "Isekai"],
    episodes: 52,
    rating: 7.9,
    releaseYear: 2015,
  },
  {
    id: 50,
    title: "Konosuba: God’s Blessing on This Wonderful World!",
    imageUrl:
      "https://i.pinimg.com/originals/3a/e5/1d/3ae51dcd831643b62cb47bc26538b3e7.gif",
    description:
      "A shut-in is reincarnated in a fantasy world with a useless goddess, leading to hilarious misadventures with a quirky party.",
    genres: ["Comedy", "Fantasy", "Isekai"],
    episodes: 20,
    rating: 8.1,
    releaseYear: 2016,
  },
  {
    id: 51,
    title: "Miss Kobayashi’s Dragon Maid",
    imageUrl:
      "https://i.pinimg.com/originals/e4/88/c1/e488c15dcdeccc03e7cfdc2758108550.gif",
    description:
      "An office worker’s life changes when a dragon transforms into a maid and moves in, leading to comedic chaos.",
    genres: ["Comedy", "Fantasy", "Slice of Life"],
    episodes: 25,
    rating: 7.8,
    releaseYear: 2017,
  },
  {
    id: 52,
    title: "Vinland Saga Season 2",
    imageUrl:
      "https://i.pinimg.com/originals/4d/ae/01/4dae01ef6e6ebdf5cd4bda56a3ab315c.gif",
    description:
      "Thorfinn’s journey continues as he seeks peace after a life of violence, exploring redemption in a harsh Viking world.",
    genres: ["Action", "Adventure", "Historical"],
    episodes: 24,
    rating: 8.7,
    releaseYear: 2023,
  },
  {
    id: 101,
    title: "Golden Time",
    imageUrl:
      "https://i.pinimg.com/originals/9a/dc/29/9adc29cd75e6f101aab784e987220e70.gif",
    description:
      "A college freshman with amnesia navigates love, friendship, and self-discovery, finding warmth and connection with a spirited classmate in a heartfelt romantic journey.",
    genres: ["Romance", "Comedy", "Slice of Life"],
    episodes: 24,
    rating: 7.8,
    releaseYear: 2013,
  },
];

export const sampleUserWatchlist: Record<number, UserAnimeEntry> = {
  1: { animeId: 1, status: "watching", progress: 20 },
  2: { animeId: 2, status: "completed", progress: 64 },
  3: { animeId: 3, status: "plan_to_watch", progress: 0 },
  4: { animeId: 4, status: "dropped", progress: 10 },
  7: { animeId: 7, status: "on_hold", progress: 15 },
};

export const getStatusColor = (status: WatchStatus): string => {
  switch (status) {
    case "watching":
      return "bg-blue-500 text-white";
    case "completed":
      return "bg-green-500 text-white";
    case "plan_to_watch":
      return "bg-purple-500 text-white";
    case "on_hold":
      return "bg-yellow-500 text-white";
    case "dropped":
      return "bg-red-500 text-white";
    default:
      return "bg-gray-500 text-white";
  }
};

export const getStatusLabel = (status: WatchStatus): string => {
  switch (status) {
    case "watching":
      return "Watching";
    case "completed":
      return "Completed";
    case "plan_to_watch":
      return "Plan to Watch";
    case "on_hold":
      return "On Hold";
    case "dropped":
      return "Dropped";
    default:
      return "Unknown";
  }
};
