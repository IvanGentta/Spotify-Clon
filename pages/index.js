import Head from "next/head";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <Head>
        <title>Spotify Clon</title>
        <meta
          name="description"
          content="A Spotify clon create to lear and show my skills"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Sidebar />
      </main>
      <div></div>
    </div>
  );
}
