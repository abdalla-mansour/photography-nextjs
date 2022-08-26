import Head from "next/head";
import Hero from "../components/Hero";
import Instagram from "../components/Instagram";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Photography</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        heading="Captur Photography"
        message="I capture moments in nature and keep them alive."
      />
      <Instagram />
    </div>
  );
}