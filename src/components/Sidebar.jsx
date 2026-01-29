import { useAuth } from "../context/AuthContext";

const items = [
  "Home",
  "Explore",
  "Notifications",
  "Messages",
  "Grok",
  "Bookmarks",
  "Creator Studio",
  "Premium",
  "Profile",
  "More",
];

const Sidebar = () => {
  const { user } = useAuth();

  return (
    <div className="w-[260px] px-4 py-2 border-r border-neutral-800 flex flex-col justify-between">
      {/* top */}
      <div>
        <div className="text-2xl font-extrabold px-3 mb-4">𝕏</div>

        <nav className="space-y-1">
          {items.map((item) => (
            <div
              key={item}
              className="px-3 py-2 rounded-full hover:bg-neutral-900 cursor-pointer text-[15px] font-medium"
            >
              {item}
            </div>
          ))}
        </nav>

        <button className="mt-4 w-full bg-white text-black py-2 rounded-full font-semibold text-[14px]">
          Post
        </button>
      </div>

      {/* bottom user */}
      <div className="flex items-center gap-3 p-3 rounded-full hover:bg-neutral-900 cursor-pointer">
        <div className="w-9 h-9 rounded-full bg-pink-600 flex items-center justify-center font-semibold">
          {user.username[0]}
        </div>

        <div className="text-[13px]">
          <p className="font-semibold">{user.username}</p>
          <p className="text-neutral-500">@{user.username}</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;







