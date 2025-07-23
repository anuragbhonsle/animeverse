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
    title: "Akame ga Kill!",
    imageUrl:
      "https://i.pinimg.com/originals/5a/17/79/5a1779467c381b587cf7ccf7c2d5f830.gif",
    description:
      "A young swordsman joins a rebel assassin group to overthrow a corrupt empire, facing brutal battles and moral dilemmas.",
    genres: ["Action", "Dark Fantasy", "Tragedy"],
    episodes: 24,
    rating: 7.8,
    releaseYear: 2014,
  },
  {
    id: 52,
    title: "Monogatari Series",
    imageUrl:
      "https://i.pinimg.com/originals/7a/a8/42/7aa842344a48111a95e77baddeff3e44.gif",
    description:
      "A high school student encounters supernatural oddities and helps girls afflicted by them, blending witty dialogue and psychological depth.",
    genres: ["Supernatural", "Mystery", "Comedy"],
    episodes: 100,
    rating: 8.4,
    releaseYear: 2009,
  },
  {
    id: 53,
    title: "No Game No Life",
    imageUrl:
      "https://i.pinimg.com/originals/73/ff/0e/73ff0e2b5a1619c244af0e73f74a0b45.gif",
    description:
      "Two genius siblings are transported to a world where everything is decided by games, using their intellect to conquer all challenges.",
    genres: ["Fantasy", "Isekai", "Comedy"],
    episodes: 12,
    rating: 8.2,
    releaseYear: 2014,
  },
  {
    id: 54,
    title: "Psycho-Pass",
    imageUrl:
      "https://i.pinimg.com/originals/7b/e3/42/7be34219e3421254e9b870b875f7743a.gif",
    description:
      "In a dystopian future, a young officer enforces justice in a society where a system measures people’s potential to commit crimes.",
    genres: ["Sci-Fi", "Psychological", "Thriller"],
    episodes: 41,
    rating: 8.3,
    releaseYear: 2012,
  },
  {
    id: 55,
    title: "Assassination Classroom",
    imageUrl:
      "https://i.pinimg.com/originals/5d/96/1b/5d961be9be1062aeab3ee0ed18b05222.gif",
    description:
      "A class of misfit students must assassinate their superpowered alien teacher before he destroys Earth, learning life lessons along the way.",
    genres: ["Comedy", "Action", "School"],
    episodes: 47,
    rating: 8.1,
    releaseYear: 2015,
  },
  {
    id: 56,
    title: "Horimiya",
    imageUrl:
      "https://i.pinimg.com/originals/a1/4c/c9/a14cc9ee1c965431d6ebd0530bc532d4.gif",
    description:
      "A popular high school girl falls for a seemingly average boy who hides his wild side, sparking a sweet and comedic romance.",
    genres: ["Romance", "Comedy", "Slice of Life"],
    episodes: 13,
    rating: 8.1,
    releaseYear: 2021,
  },
  {
    id: 57,
    title: "Hunter x Hunter (1999)",
    imageUrl:
      "https://i.pinimg.com/originals/23/e9/d6/23e9d674a8382d8e6b2068db345ecb7d.gif",
    description:
      "The original adaptation of a young boy’s journey to become a Hunter, facing challenges in a world of treasures and danger.",
    genres: ["Adventure", "Fantasy", "Action"],
    episodes: 62,
    rating: 8.0,
    releaseYear: 1999,
  },
  {
    id: 58,
    title: "My Neighbor Totoro",
    imageUrl:
      "https://i.pinimg.com/originals/ea/87/19/ea87191404a209c83613888054df3e50.gif",
    description:
      "Two young sisters befriend magical creatures in rural Japan, discovering wonder and comfort in a heartwarming tale of childhood.",
    genres: ["Fantasy", "Slice of Life", "Family"],
    episodes: 1,
    rating: 8.6,
    releaseYear: 1988,
  },
  {
    id: 59,
    title: "The Seven Deadly Sins",
    imageUrl:
      "https://i.pinimg.com/originals/ce/0c/fa/ce0cfae90221642cb692a426e2c636a7.gif",
    description:
      "A group of legendary knights, branded as traitors, reunite to save their kingdom from corruption and tyranny.",
    genres: ["Action", "Fantasy", "Adventure"],
    episodes: 100,
    rating: 7.8,
    releaseYear: 2014,
  },
  {
    id: 60,
    title: "Yuri!!! on Ice",
    imageUrl:
      "https://i.pinimg.com/originals/75/31/64/75316495b7d06f57c6d675314f8cddcb.gif",
    description:
      "A Japanese figure skater, down on his luck, finds inspiration and love under the guidance of a charismatic Russian champion.",
    genres: ["Sports", "Romance", "Drama"],
    episodes: 12,
    rating: 8.0,
    releaseYear: 2016,
  },
  {
    id: 61,
    title: "Dragon Ball Z",
    imageUrl:
      "https://i.pinimg.com/originals/bf/ba/e7/bfbae704d85960b6d40952cc5c45aa86.gif",
    description:
      "Goku and his allies defend Earth from powerful foes, uncovering their Saiyan heritage in epic battles of strength and spirit.",
    genres: ["Action", "Adventure", "Shounen"],
    episodes: 291,
    rating: 8.3,
    releaseYear: 1989,
  },
  {
    id: 62,
    title: "Ranking of Kings",
    imageUrl:
      "https://i.pinimg.com/originals/16/3c/1b/163c1b1623ed74446f0d9615cc86c470.gif",
    description:
      "A deaf and weak prince strives to become a great king, proving his worth through courage and kindness in a fantastical world.",
    genres: ["Adventure", "Fantasy", "Drama"],
    episodes: 23,
    rating: 8.5,
    releaseYear: 2021,
  },
  {
    id: 63,
    title: "Sailor Moon",
    imageUrl:
      "https://i.pinimg.com/originals/4e/9a/0a/4e9a0acf99e7d25da9536940437c69b8.gif",
    description:
      "A teenage girl transforms into a magical warrior to protect the world from evil forces, joined by her fellow Sailor Scouts.",
    genres: ["Magical Girl", "Romance", "Fantasy"],
    episodes: 200,
    rating: 7.9,
    releaseYear: 1992,
  },
  {
    id: 64,
    title: "Noragami",
    imageUrl:
      "https://i.pinimg.com/originals/e7/11/05/e711051f11f12088fe08d13ab7fd52b2.gif",
    description:
      "A minor god seeking fame takes on odd jobs for humans, teaming up with a girl whose soul slips out of her body.",
    genres: ["Action", "Supernatural", "Comedy"],
    episodes: 25,
    rating: 7.9,
    releaseYear: 2014,
  },
  {
    id: 65,
    title: "Howl’s Moving Castle",
    imageUrl:
      "https://i.pinimg.com/originals/90/aa/01/90aa01a5cac08969b135b364e7879428.gif",
    description:
      "A young woman, cursed to age prematurely, seeks refuge in a wizard’s magical moving castle, uncovering love and courage.",
    genres: ["Fantasy", "Romance", "Adventure"],
    episodes: 1,
    rating: 8.7,
    releaseYear: 2004,
  },
  {
    id: 66,
    title: "Spy x Family",
    imageUrl:
      "https://i.pinimg.com/originals/07/6a/87/076a8734229b127a985b1254b8507fe0.gif",
    description:
      "A spy, an assassin, and a telepathic girl form a fake family to complete a mission, leading to comedic and heartfelt moments.",
    genres: ["Comedy", "Action", "Slice of Life"],
    episodes: 25,
    rating: 8.6,
    releaseYear: 2022,
  },
  {
    id: 67,
    title: "Mushishi",
    imageUrl:
      "https://i.pinimg.com/originals/ca/09/bf/ca09bff6d813b577042fb1368af45303.gif",
    description:
      "A wandering traveler studies ethereal creatures called Mushi, which influence the world in subtle and mysterious ways.",
    genres: ["Mystery", "Supernatural", "Slice of Life"],
    episodes: 46,
    rating: 8.5,
    releaseYear: 2005,
  },
  {
    id: 68,
    title: "Attack on Titan: Final Season",
    imageUrl:
      "https://i.pinimg.com/originals/80/34/8c/80348cb8eecccc778ee72cab061adff7.gif",
    description:
      "The climactic end to the war between humans and Titans, as Eren’s actions spark a global conflict with devastating consequences.",
    genres: ["Action", "Dark Fantasy", "Drama"],
    episodes: 28,
    rating: 9.0,
    releaseYear: 2020,
  },
  {
    id: 69,
    title: "Soul Eater",
    imageUrl:
      "https://i.pinimg.com/originals/ec/ae/df/ecaedf2f3ee71041241b2545c1de5881.gif",
    description:
      "Students at a school for weapon meisters and their human weapons hunt evil souls to prevent a demon god’s resurrection.",
    genres: ["Action", "Supernatural", "Comedy"],
    episodes: 51,
    rating: 7.8,
    releaseYear: 2008,
  },
  {
    id: 70,
    title: "Natsume’s Book of Friends",
    imageUrl:
      "https://i.pinimg.com/originals/d3/15/97/d31597c26987d0088c6fb830e81ed69f.gif",
    description:
      "A boy who can see spirits inherits a book that binds yokai, working to free them while uncovering his grandmother’s legacy.",
    genres: ["Supernatural", "Drama", "Slice of Life"],
    episodes: 74,
    rating: 8.1,
    releaseYear: 2008,
  },
  {
    id: 71,
    title: "Death Parade",
    imageUrl:
      "https://i.pinimg.com/originals/51/2c/67/512c6799f3f82eb380fb1351fb848460.gif",
    description:
      "Souls are judged in an afterlife bar through deadly games that reveal their true nature, exploring morality and human emotions.",
    genres: ["Psychological", "Drama", "Thriller"],
    episodes: 12,
    rating: 8.2,
    releaseYear: 2015,
  },
  {
    id: 72,
    title: "Gurren Lagann",
    imageUrl:
      "https://i.pinimg.com/originals/31/c2/5b/31c25bd1912f1fea33aaefb3a223893f.gif",
    description:
      "Two friends pilot mechs to fight an oppressive regime, spiraling into an epic battle for the fate of the universe.",
    genres: ["Mecha", "Action", "Adventure"],
    episodes: 27,
    rating: 8.6,
    releaseYear: 2007,
  },
  {
    id: 73,
    title: "Kubo Won’t Let Me Be Invisible",
    imageUrl:
      "https://i.pinimg.com/originals/62/cf/a2/62cfa219c35e3af936d0639f7bac300b.gif",
    description:
      "A high school boy who often goes unnoticed finds his life changing when a cheerful classmate always sees him.",
    genres: ["Comedy", "Romance", "Slice of Life"],
    episodes: 12,
    rating: 7.6,
    releaseYear: 2023,
  },
  {
    id: 74,
    title: "Trigun",
    imageUrl:
      "https://i.pinimg.com/originals/59/7c/fb/597cfb0e42070e57fbe126ce61a103b0.gif",
    description:
      "A pacifist gunslinger with a massive bounty on his head roams a desert planet, balancing humor and tragedy.",
    genres: ["Action", "Sci-Fi", "Western"],
    episodes: 26,
    rating: 8.2,
    releaseYear: 1998,
  },
  {
    id: 75,
    title: "Barakamon",
    imageUrl:
      "https://i.pinimg.com/originals/df/b9/81/dfb981ec051fcca28adbe63aab402a4f.gif",
    description:
      "A calligrapher exiled to a rural island learns life lessons from quirky villagers, finding inspiration in simplicity.",
    genres: ["Slice of Life", "Comedy", "Drama"],
    episodes: 12,
    rating: 8.0,
    releaseYear: 2014,
  },
  {
    id: 76,
    title: "Paranoia Agent",
    imageUrl:
      "https://i.pinimg.com/originals/14/24/8d/14248ddb4d7b32485fe4d9652db0230d.gif",
    description:
      "A mysterious attacker on rollerblades terrorizes a city, revealing the psychological struggles of its victims.",
    genres: ["Psychological", "Mystery", "Thriller"],
    episodes: 13,
    rating: 8.0,
    releaseYear: 2004,
  },
  {
    id: 77,
    title: "Kaguya-sama: Love is War",
    imageUrl:
      "https://i.pinimg.com/originals/1e/af/3c/1eaf3c56a65b07a347ace235ce526641.gif",
    description:
      "Two genius students engage in a comedic battle of wits to make the other confess their love first.",
    genres: ["Comedy", "Romance", "Psychological"],
    episodes: 36,
    rating: 8.5,
    releaseYear: 2019,
  },
  {
    id: 78,
    title: "The Ancient Magus’ Bride",
    imageUrl:
      "https://i.pinimg.com/originals/ef/e0/29/efe029ccaa1a4e6948a029b59ee0a377.gif",
    description:
      "A young girl is sold to a non-human mage, becoming his apprentice and bride in a magical world of wonder and danger.",
    genres: ["Fantasy", "Romance", "Supernatural"],
    episodes: 24,
    rating: 8.0,
    releaseYear: 2017,
  },
  {
    id: 79,
    title: "Durarara!!",
    imageUrl:
      "https://i.pinimg.com/originals/9f/77/94/9f7794d79f64309117c265203ef460ce.gif",
    description:
      "A web of interconnected stories unfolds in Tokyo’s Ikebukuro district, involving a headless rider and urban legends.",
    genres: ["Action", "Supernatural", "Mystery"],
    episodes: 60,
    rating: 8.1,
    releaseYear: 2010,
  },
  {
    id: 80,
    title: "Violet Evergarden: The Movie",
    imageUrl:
      "https://i.pinimg.com/originals/4a/a8/fd/4aa8fd31d5f72f8e8e2ebb1798827297.gif",
    description:
      "Violet continues her journey as an Auto Memory Doll, uncovering a client’s past while confronting her own emotions.",
    genres: ["Drama", "Romance", "Fantasy"],
    episodes: 1,
    rating: 8.5,
    releaseYear: 2020,
  },
  {
    id: 81,
    title: "Great Teacher Onizuka",
    imageUrl:
      "https://i.pinimg.com/originals/48/b1/7f/48b17fa8d8051843d1f9996c60086144.gif",
    description:
      "A former delinquent becomes a teacher to reform a class of troubled students, using unorthodox methods and humor.",
    genres: ["Comedy", "Drama", "School"],
    episodes: 43,
    rating: 8.5,
    releaseYear: 1999,
  },
  {
    id: 82,
    title: "Hellsing",
    imageUrl:
      "https://i.pinimg.com/originals/2e/e7/8d/2ee78d3864ec1e28731e3cff66a7273d.gif",
    description:
      "A vampire hunter organization battles supernatural threats, led by the powerful vampire Alucard in a gory, action-packed tale.",
    genres: ["Action", "Horror", "Supernatural"],
    episodes: 13,
    rating: 7.8,
    releaseYear: 2001,
  },
  {
    id: 83,
    title: "Toradora!",
    imageUrl:
      "https://i.pinimg.com/originals/50/ef/36/50ef363e8b6fa8d52996428c0768d1e8.gif",
    description:
      "A kind-hearted delinquent and a fiery girl team up to help each other with their crushes, sparking an unexpected romance.",
    genres: ["Romance", "Comedy", "Slice of Life"],
    episodes: 25,
    rating: 8.1,
    releaseYear: 2008,
  },
  {
    id: 84,
    title: "Dorohedoro",
    imageUrl:
      "https://i.pinimg.com/originals/a4/e8/e7/a4e8e70b0394fc3cbd4dca167229d402.gif",
    description:
      "In a gritty world, a man with a reptile head searches for his past while battling sorcerers in a chaotic, violent city.",
    genres: ["Action", "Horror", "Fantasy"],
    episodes: 12,
    rating: 8.1,
    releaseYear: 2020,
  },
  {
    id: 85,
    title: "Cowboy Bebop: The Movie",
    imageUrl:
      "https://i.pinimg.com/originals/d0/d4/6c/d0d46c3e46e3a69444acde6b0e286c50.gif",
    description:
      "The Bebop crew hunts a terrorist with a deadly virus, blending action, noir, and their signature cool style.",
    genres: ["Action", "Sci-Fi", "Space Western"],
    episodes: 1,
    rating: 7.9,
    releaseYear: 2001,
  },
  {
    id: 86,
    title: "Shaman King",
    imageUrl:
      "https://i.pinimg.com/originals/1b/3b/8c/1b3b8c31117c0bb1149a523c65fea66b.gif",
    description:
      "A young shaman competes in a global tournament to become the Shaman King, connecting with spirits and allies.",
    genres: ["Action", "Supernatural", "Adventure"],
    episodes: 64,
    rating: 7.8,
    releaseYear: 2001,
  },
  {
    id: 87,
    title: "My Youth Romantic Comedy Is Wrong, as I Expected",
    imageUrl:
      "https://i.pinimg.com/originals/9a/ef/df/9aefdf1299d9370d7ba4ea772f5d4b7b.gif",
    description:
      "A cynical high schooler joins a service club, helping others while navigating complex relationships and personal growth.",
    genres: ["Comedy", "Romance", "Slice of Life"],
    episodes: 38,
    rating: 8.0,
    releaseYear: 2013,
  },
  {
    id: 88,
    title: "Steins;Gate 0",
    imageUrl:
      "https://i.pinimg.com/originals/c0/72/c8/c072c8bd32ac0937128e13f5e148f96d.gif",
    description:
      "In an alternate timeline, a scientist grapples with despair and time travel to prevent a tragic future.",
    genres: ["Sci-Fi", "Thriller", "Drama"],
    episodes: 23,
    rating: 8.4,
    releaseYear: 2018,
  },
  {
    id: 89,
    title: "Banana Fish",
    imageUrl:
      "https://i.pinimg.com/originals/36/48/5c/36485ca87a21a690f6507b72be8daa26.gif",
    description:
      "A young gang leader uncovers a dangerous conspiracy tied to a mysterious drug, forming a bond with a Japanese photographer.",
    genres: ["Action", "Drama", "Crime"],
    episodes: 24,
    rating: 8.2,
    releaseYear: 2018,
  },
  {
    id: 90,
    title: "Golden Kamuy",
    imageUrl:
      "https://i.pinimg.com/originals/a7/19/b9/a719b95d6e76b092a72eb2768f84b7d3.gif",
    description:
      "A war veteran and an Ainu girl hunt for hidden gold in Hokkaido, facing outlaws and harsh wilderness.",
    genres: ["Adventure", "Historical", "Action"],
    episodes: 36,
    rating: 8.0,
    releaseYear: 2018,
  },
  {
    id: 91,
    title: "Ergo Proxy",
    imageUrl:
      "https://i.pinimg.com/originals/e1/0e/21/e10e2117cf4d89cb49555a50181af532.gif",
    description:
      "In a dystopian city, a woman investigates mysterious androids and uncovers secrets about humanity’s existence.",
    genres: ["Sci-Fi", "Psychological", "Mystery"],
    episodes: 23,
    rating: 7.9,
    releaseYear: 2006,
  },
  {
    id: 92,
    title: "Weathering With You",
    imageUrl:
      "https://i.pinimg.com/originals/24/3d/8d/243d8db2006d038a3f7ec61443733b8b.gif",
    description:
      "A runaway teen meets a girl who can control the weather, leading to a magical romance amidst Tokyo’s storms.",
    genres: ["Romance", "Fantasy", "Drama"],
    episodes: 1,
    rating: 8.0,
    releaseYear: 2019,
  },
  {
    id: 93,
    title: "Blue Exorcist",
    imageUrl:
      "https://i.pinimg.com/originals/29/0e/57/290e57fd74238f667387235b1b0db9dc.gif",
    description:
      "The son of Satan trains to become an exorcist to fight demons and protect his friends, balancing his dual nature.",
    genres: ["Action", "Supernatural", "Fantasy"],
    episodes: 37,
    rating: 7.7,
    releaseYear: 2011,
  },
  {
    id: 94,
    title: "Claymore",
    imageUrl:
      "https://i.pinimg.com/originals/f3/39/fe/f339fe6c0cfe84847db2b4213f9ed73f.gif",
    description:
      "A female warrior with demonic powers hunts monstrous creatures in a medieval world, grappling with her own humanity.",
    genres: ["Action", "Dark Fantasy", "Horror"],
    episodes: 26,
    rating: 7.8,
    releaseYear: 2007,
  },
  {
    id: 95,
    title: "K-On!",
    imageUrl:
      "https://i.pinimg.com/originals/c4/bc/ab/c4bcab2e5b93e89e8f128e83feb50fed.gif",
    description:
      "A group of high school girls form a music club, bonding over tea, snacks, and lighthearted performances.",
    genres: ["Comedy", "Music", "Slice of Life"],
    episodes: 41,
    rating: 7.8,
    releaseYear: 2009,
  },
  {
    id: 96,
    title: "Beastars",
    imageUrl:
      "https://i.pinimg.com/originals/a8/56/7c/a8567cf466c301e0da7a330b87fa8845.gif",
    description:
      "In a world of anthropomorphic animals, a wolf grapples with his predatory instincts while solving a school murder mystery.",
    genres: ["Drama", "Psychological", "Romance"],
    episodes: 24,
    rating: 7.9,
    releaseYear: 2019,
  },
  {
    id: 97,
    title: "Samurai Champloo",
    imageUrl:
      "https://i.pinimg.com/originals/f1/0c/c8/f10cc838e5b73354caaeacdfcd7aee3c.gif",
    description:
      "A young woman teams up with two rogue samurai on a quest across Edo-era Japan, blending hip-hop and swordplay.",
    genres: ["Action", "Adventure", "Historical"],
    episodes: 26,
    rating: 8.5,
    releaseYear: 2004,
  },
  {
    id: 98,
    title: "Angel Beats!",
    imageUrl:
      "https://i.pinimg.com/originals/d7/6a/94/d76a94bdeb87b4b47d1876d86cfdcff2.gif",
    description:
      "Teens in an afterlife school rebel against their fate, forming bonds and uncovering the mysteries of their existence.",
    genres: ["Drama", "Supernatural", "Comedy"],
    episodes: 13,
    rating: 8.1,
    releaseYear: 2010,
  },
  {
    id: 99,
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
    id: 100,
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
