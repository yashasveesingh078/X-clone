import { useState } from "react";
import Tweet from "./Tweet";
import { useAuth } from "../context/AuthContext";

const defaultTweets = [
  {
    id: 1,
    author: "NarendraModi",
    text:
      "Speaking at the start of the Budget Session of Parliament. May both Houses witness meaningful discussions.",
    image: "https://www.legalbites.in/wp-content/uploads/2020/06/Indian-Parliament.jpg",
    time: "8h",
  },
  {
    id: 2,
    author: "PicturesFolder",
    text: "Cinematic Scene",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    time: "2h",
  },
];

const Feed = () => {
  const { user } = useAuth();

  const [text, setText] = useState("");
  const [image, setImage] = useState(""); // string URL OR blob URL
  const [tweets, setTweets] = useState(defaultTweets);

  // file upload
  const handleImage = (e) => {
    if (!e.target.files[0]) return;
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const postTweet = () => {
    if (!text.trim() && !image) return;

    const newTweet = {
      id: Date.now(),
      author: user?.username || "Guest",
      text,
      image,
      time: "now",
    };

    setTweets((prev) => [newTweet, ...prev]);

    setText("");
    setImage("");
  };

  return (
    <div className="w-[600px] border-r border-neutral-800">
      {/* Tabs */}
      <div className="sticky top-0 bg-black/80 backdrop-blur border-b border-neutral-800 z-10">
        <div className="flex text-sm font-semibold">
          <div className="flex-1 text-center py-4 border-b-2 border-blue-500">
            For you
          </div>
          <div className="flex-1 text-center py-4 text-neutral-500">
            Following
          </div>
        </div>
      </div>

      {/* Composer */}
      <div className="p-4 border-b border-neutral-800">
        <div className="flex gap-3">
          <div className="w-10 h-10 rounded-full bg-pink-600 flex items-center justify-center font-bold">
            {(user?.username || "G")[0]}
          </div>

          <textarea
            placeholder="What’s happening?"
            className="flex-1 bg-black resize-none outline-none text-[13.5px]"
            rows={2}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        {/* IMAGE URL INPUT (NEW) */}
        <input
          type="text"
          placeholder="Paste image URL (optional)"
          value={image.startsWith("blob:") ? "" : image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full mt-2 bg-black border border-neutral-800 rounded-md px-2 py-1 text-[12.5px] outline-none"
        />

        {/* IMAGE PREVIEW */}
        {image && (
          <img
            src={image}
            className="mt-3 rounded-2xl border border-neutral-800 max-h-[300px] object-cover"
            alt="tweet"
          />
        )}

        <div className="flex justify-between items-center mt-3">
          <div className="flex gap-4 text-blue-400 text-sm">
            <label className="cursor-pointer">
              📷
              <input type="file" hidden onChange={handleImage} />
            </label>
            😊
            📍
          </div>

          <button
            onClick={postTweet}
            className="bg-white text-black px-4 py-1.5 rounded-full text-[13px] font-semibold hover:bg-neutral-200"
          >
            Post
          </button>
        </div>
      </div>

      {/* Tweets */}
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} tweet={tweet} />
      ))}
    </div>
  );
};

export default Feed;










