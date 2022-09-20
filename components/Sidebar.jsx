import { signOut, useSession } from "next-auth/react";
import { AiFillHome } from "react-icons/ai";
import { BsSearch, BsFillPlusSquareFill, BsHeartFill } from "react-icons/bs";
import { BiLibrary } from "react-icons/bi";
import Image from "next/image";

const Sidebar = () => {
  const { data: session, status } = useSession();

  return (
    <div className="text-gray-500 p-5 text-sm font-bold border-r border-gray-900">
      <div className="pb-3">
        <Image
          src="/assets/Spotify-Logo-2.png"
          alt="/"
          width="116"
          height="35"
        />
      </div>
      <div className="space-y-4">
        <button
          className="flex items-center space-x-2 hover:text-white"
          onClick={() => signOut()}
        >
          <p>Log out</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <AiFillHome className="w-5 h-5" />
          <p>Home</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <BsSearch className="w-5 h-5" />
          <p>Search</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <BiLibrary className="w-5 h-5" />
          <p>Library</p>
        </button>
        <div className="space-y-3">
          <button className="flex items-center space-x-2 hover:text-white">
            <BsFillPlusSquareFill className="w-5 h-5" />
            <p>Create Playlist</p>
          </button>
          <button className="flex items-center space-x-2 hover:text-white">
            <BsHeartFill className="w-5 h-5" />
            <p>Liked songs</p>
          </button>
        </div>
        <hr className="border-t-[0.1px] border-gray-900" />
      </div>
      <div className="space-y-4">
        <p className="cursor-pointer hover:text-white">playlist</p>
        <p className="cursor-pointer hover:text-white">playlist</p>
        <p className="cursor-pointer hover:text-white">playlist</p>
        <p className="cursor-pointer hover:text-white">playlist</p>
        <p className="cursor-pointer hover:text-white">playlist</p>
        <p className="cursor-pointer hover:text-white">playlist</p>
        <p className="cursor-pointer hover:text-white">playlist</p>
        <p className="cursor-pointer hover:text-white">playlist</p>
        <p className="cursor-pointer hover:text-white">playlist</p>
        <p className="cursor-pointer hover:text-white">playlist</p>
        <p className="cursor-pointer hover:text-white">playlist</p>
        <p className="cursor-pointer hover:text-white">playlist</p>
      </div>
    </div>
  );
};

export default Sidebar;
