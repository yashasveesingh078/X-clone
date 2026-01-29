const Tweet = ({ tweet }) => {
  return (
    <div className="px-4 py-3 border-b border-neutral-800 hover:bg-neutral-950">
      <div className="flex gap-3">
        {/* avatar */}
        <div className="w-9 h-9 rounded-full bg-pink-600 flex items-center justify-center font-semibold text-sm">
          {tweet.author[0]}
        </div>

        <div className="flex-1">
          {/* header */}
          <div className="flex items-center gap-2 text-[12.5px]">
            <span className="font-semibold">{tweet.author}</span>
            <span className="text-neutral-500">@{tweet.author}</span>
            <span className="text-neutral-500">· {tweet.time}</span>
          </div>

          {/* text */}
          <p className="mt-0.5 text-[13.5px] leading-[1.35rem]">
            {tweet.text}
          </p>

          {/* image */}
          {tweet.image && (
            <img
              src={tweet.image}
              className="mt-2 rounded-2xl border border-neutral-800 max-h-[360px] object-cover"
            />
          )}

//           {/* actions */}
//           <div className="flex justify-between mt-2 text-neutral-500 text-[12px] max-w-[420px]">
//             <span className="hover:text-blue-400">💬 289</span>
//             <span className="hover:text-green-400">🔁 2.9K</span>
//             <span className="hover:text-pink-500">❤️ 11K</span>
//             <span>📊 255K</span>
//           </div>
//         </div>
//       </div>
//     </div>
  );
};

export default Tweet;






