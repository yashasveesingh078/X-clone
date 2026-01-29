const suggestions = [
  { name: "Narendra Modi", id: "narendramodi" },
  { name: "Local Bateman", id: "LocalBateman" },
  { name: "Album Aura", id: "AlbumAura" },
];

const Rightbar = () => {
  return (
    <div className="w-[350px] px-4 py-2 hidden lg:block text-[13px]">
      
      {/* search */}
      <div className="relative mb-4">
        <span className="absolute left-4 top-2.5 text-neutral-500">🔍</span>
        <input
          placeholder="Search"
          className="w-full bg-neutral-900 rounded-full pl-10 pr-4 py-2 outline-none"
        />
      </div>

      {/* premium */}
      <div className="bg-neutral-900 rounded-2xl p-4 mb-4">
        <h2 className="text-[16px] font-bold mb-2">Subscribe to Premium</h2>
        <p className="text-neutral-400 text-[13px] mb-3">
          Unlock new features and receive a share of revenue.
        </p>
        <button className="bg-blue-500 px-4 py-1.5 rounded-full font-semibold text-[13px]">
          Subscribe
        </button>
      </div>

      {/* who to follow */}
      <div className="bg-neutral-900 rounded-2xl p-4">
        <h2 className="text-[16px] font-bold mb-3">Who to follow</h2>

        {suggestions.map((user) => (
          <div
            key={user.id}
            className="flex justify-between items-center py-2 hover:bg-neutral-800 px-2 rounded-lg cursor-pointer"
          >
            <div>
              <p className="font-semibold">{user.name}</p>
              <p className="text-neutral-500 text-[12px]">@{user.id}</p>
            </div>

            <button className="bg-white text-black px-4 py-1 rounded-full text-[12px] font-semibold">
              Follow
            </button>
          </div>
        ))}

        <p className="text-blue-400 text-[13px] mt-2 cursor-pointer">
          Show more
        </p>
      </div>
    </div>
  );
};

export default Rightbar;





