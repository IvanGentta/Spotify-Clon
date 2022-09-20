import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";

const login = ({ providers }) => {
  return (
    <div
      className="bg-black flex flex-col items-center justify-center
     min-h-screen w-full space-y-3"
    >
      <Image
        src="/assets/Spotify-Logo-1.png"
        width="200"
        height="200"
        alt="/"
      />

      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            className="bg-[#18D860] text-white p-5 rounded-full"
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
          >
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default login;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
