import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container } from "react-bootstrap";
import NavbarComponent from "./components/NavbarComponent";
import Post from "./components/Post";
function App() {
const allPosts = [
    {
    id: 1,
    user: "bookworm_bella",
    name: "Bella Reads",
    avatar: "https://api.dicebear.com/8.x/initials/svg?seed=bookworm_bella",
    content: "Finished reading  The Seven Husbands of Evelyn Hugo . My heart is full and broken at the same time. 💔📖",
    uploadTime: "3 days ago",
    comments: [
      {
        user: "emotionalreader",
        avatar: "https://api.dicebear.com/8.x/initials/svg?seed=emotionalreader",
        content: "That book stays with you long after it’s over 😭"
      },
      {
        user: "bibliobabe",
        avatar: "https://api.dicebear.com/8.x/initials/svg?seed=bibliobabe",
        content: "Evelyn Hugo is ICONIC. Period."
      },
      {
        user: "talesandtissues",
        avatar: "https://api.dicebear.com/8.x/initials/svg?seed=talesandtissues",
        content: "Every chapter wrecked me and I loved it."
      }
    ]
  },
  {
    id: 2,
    user: "mysterymaven",
    name: "Mystery Maven",
    avatar: "https://api.dicebear.com/8.x/initials/svg?seed=mysterymaven",
    content: "Rewatched  Knives Out  for the fifth time and still found new clues. Rian Johnson, you genius. 🔍🍿",
    uploadTime: "1 day ago",
    comments: [
      {
        user: "filmgeek91",
        avatar: "https://api.dicebear.com/8.x/initials/svg?seed=filmgeek91",
        content: "Same! The layers in that movie are insane."
      },
      {
        user: "cluelover",
        avatar: "https://api.dicebear.com/8.x/initials/svg?seed=cluelover",
        content: "Don’t forget the donut inside the donut!"
      }
    ]
  },

    {
    id: 3,
    user: "surajnishad",
    name: "Suraj Nishad",
    avatar: "https://api.dicebear.com/8.x/initials/svg?seed=surajnishad",
    content: "Visited an old bookstore today and found a signed copy of my favorite novel. Absolute win. 📚🖋️",
    uploadTime: "20 hours ago",
    comments: [
      {
        user: "litlover",
        avatar: "https://api.dicebear.com/8.x/initials/svg?seed=litlover",
        content: "No way! That’s such a rare find!"
      }
    ]
  },
  {
    id: 4,
    user: "thegreatheist",
    name: "Heist Hype",
    avatar: "https://api.dicebear.com/8.x/initials/svg?seed=thegreatheist",
    content: "If you haven’t seen  Now You See Me , stop what you’re doing and watch it. The twist. The magic. The hype. 🎩✨",
    uploadTime: "4 days ago",
    comments: [
      {
        user: "illusionaddict",
        avatar: "https://api.dicebear.com/8.x/initials/svg?seed=illusionaddict",
        content: "That last scene still blows my mind!"
      },
      {
        user: "cardtrickcrazy",
        avatar: "https://api.dicebear.com/8.x/initials/svg?seed=cardtrickcrazy",
        content: "Watched it twice back to back 😄"
      },
      {
        user: "magicfan21",
        avatar: "https://api.dicebear.com/8.x/initials/svg?seed=magicfan21",
        content: "Waiting for a third movie!"
      },
      {
        user: "mystified",
        avatar: "https://api.dicebear.com/8.x/initials/svg?seed=mystified",
        content: "Loved Jesse Eisenberg’s role."
      }
    ]
  },
  {
    id: 5,
    user: "cluequeen",
    name: "Clue Queen",
    avatar: "https://api.dicebear.com/8.x/initials/svg?seed=cluequeen",
    content: " Clue Conspiracy  is my new favorite board game. Suspense + deduction = perfect evening. 🎲🕵️‍♀️",
    uploadTime: "5 days ago",
    comments: [
      {
        user: "boardnerd",
        avatar: "https://api.dicebear.com/8.x/initials/svg?seed=boardnerd",
        content: "Played it last week, total blast!"
      },
      {
        user: "gamenightguru",
        avatar: "https://api.dicebear.com/8.x/initials/svg?seed=gamenightguru",
        content: "The traitor mechanic is genius!"
      },
      {
        user: "suspectzero",
        avatar: "https://api.dicebear.com/8.x/initials/svg?seed=suspectzero",
        content: "Never trust Aunt Pearl... learned the hard way 😅"
      },
      {
        user: "detectivedan",
        avatar: "https://api.dicebear.com/8.x/initials/svg?seed=detectivedan",
        content: "We need to host a game night soon!"
      },
      {
        user: "accusesally",
        avatar: "https://api.dicebear.com/8.x/initials/svg?seed=accusesally",
        content: "I’m always the first one suspected 😩"
      }
    ]
  },
  {
    id: 6,
    user: "filmfanatic",
    name: "Film Fanatic",
    avatar: "https://api.dicebear.com/8.x/initials/svg?seed=filmfanatic",
    content: " Glass Onion ’s island aesthetic was next level. I wanna vacation there 🏝️🔍",
    uploadTime: "6 days ago",
    comments: [
      {
        user: "scenestealer",
        avatar: "https://api.dicebear.com/8.x/initials/svg?seed=scenestealer",
        content: "The set design was STUNNING!"
      },
      {
        user: "luxurylens",
        avatar: "https://api.dicebear.com/8.x/initials/svg?seed=luxurylens",
        content: "That pool scene... 😍"
      },
      {
        user: "sunsetseeker",
        avatar: "https://api.dicebear.com/8.x/initials/svg?seed=sunsetseeker",
        content: "I want that glass dome."
      }
    ]
  },
  {
    id: 7,
    user: "enolahype",
    name: "Enola Hype",
    avatar: "https://api.dicebear.com/8.x/initials/svg?seed=enolahype",
    content: "Enola Holmes is such a refreshing take on detective movies. Millie Bobby Brown slays 🔎💁‍♀️",
    uploadTime: "1 week ago",
    comments: [
      {
        user: "netflixnoir",
        avatar: "https://api.dicebear.com/8.x/initials/svg?seed=netflixnoir",
        content: "She carried the entire movie with charm!"
      },
      {
        user: "bakerstreetbabe",
        avatar: "https://api.dicebear.com/8.x/initials/svg?seed=bakerstreetbabe",
        content: "That fencing scene was 🔥"
      }
    ]
  },
  {
    id: 8,
    user: "puzzlepost",
    name: "Puzzle Post",
    avatar: "https://api.dicebear.com/8.x/initials/svg?seed=puzzlepost",
    content: "Finally solved a 2000-piece mystery-themed puzzle. Took 3 weeks. Worth every minute 🧩🔐",
    uploadTime: "8 days ago",
    comments: [
      {
        user: "piecesgalore",
        avatar: "https://api.dicebear.com/8.x/initials/svg?seed=piecesgalore",
        content: "That’s dedication 👏"
      },
      {
        user: "puzzletime",
        avatar: "https://api.dicebear.com/8.x/initials/svg?seed=puzzletime",
        content: "Show us the final image!"
      },
      {
        user: "jigsawjunkie",
        avatar: "https://api.dicebear.com/8.x/initials/svg?seed=jigsawjunkie",
        content: "I’ve been stuck on mine for 2 months 😩"
      },
      {
        user: "mysterycorner",
        avatar: "https://api.dicebear.com/8.x/initials/svg?seed=mysterycorner",
        content: "Was it like a murder mystery puzzle?"
      }
    ]
  },
  {
    id: 9,
    user: "librarywanderer",
    name: "Library Wanderer",
    avatar: "https://api.dicebear.com/8.x/initials/svg?seed=librarywanderer",
    content: "Nothing beats the smell of old pages in a quiet library. Instant peace. 📚☕",
    uploadTime: "10 days ago",
    comments: [
      {
        user: "nostalgicnotes",
        avatar: "https://api.dicebear.com/8.x/initials/svg?seed=nostalgicnotes",
        content: "Library therapy is real."
      }
    ]
  },
  {
    id: 10,
    user: "truecrimebuff",
    name: "True Crime Buff",
    avatar: "https://api.dicebear.com/8.x/initials/svg?seed=truecrimebuff",
    content: "Been binging crime docs all week. Brain = FBI mode. 🧠🔎",
    uploadTime: "11 days ago",
    comments: [
      {
        user: "docujunkie",
        avatar: "https://api.dicebear.com/8.x/initials/svg?seed=docujunkie",
        content: "Which one scared you the most?"
      },
      {
        user: "sleeplesssam",
        avatar: "https://api.dicebear.com/8.x/initials/svg?seed=sleeplesssam",
        content: "I can't sleep after those 😬"
      },
      {
        user: "serialwatcher",
        avatar: "https://api.dicebear.com/8.x/initials/svg?seed=serialwatcher",
        content: "That one with the sketchy neighbor… wild!"
      },
      {
        user: "darkdetails",
        avatar: "https://api.dicebear.com/8.x/initials/svg?seed=darkdetails",
        content: "We need a true crime watch party!"
      },
      {
        user: "casecrasher",
        avatar: "https://api.dicebear.com/8.x/initials/svg?seed=casecrasher",
        content: "Have you seen  The Staircase ?"
      }
    ]
  }
];



  return (
    <>
      <NavbarComponent />
      <Container>
        <h1 className="display-5 mt-2 mb-4">All posts</h1>
        {allPosts.map((post)=>{
          return (
            <Post 
              key={post.id}
              user={post.user}
              name={post.name}
              content={post.content}
              uploadTime={post.uploadTime}
              avatar={post.avatar}
              comments={post.comments}
            />
          )
        })}
      </Container>
    </>
  );
}

export default App;
