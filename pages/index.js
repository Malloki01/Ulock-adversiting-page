import Head from "next/head";
import { Hero, About, Projects, Experiences, Footer } from "../components";

export default function Home() {
  return (
    <div className="app">
      <Head>
        <title>Ulock</title>
        <meta name="description" content="Nikhil Rajput's portfolio developed using Next.js." />
        <meta name="keywords" content="system engineer, next js" />
        <link rel="icon" href="/huergo.ico" />
      </Head>
      <Hero />
      <About />
      <Projects />
      <Experiences />
      <Footer />
    </div>
  );
}
