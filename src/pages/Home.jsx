import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Rightbar from "../components/Rightbar";

const Home = () => {
  return (
    <div className="flex justify-center bg-black min-h-screen text-white">
      <div className="flex w-full max-w-[1300px]">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </div>
  );
};

export default Home;

