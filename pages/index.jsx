import Head from "../src/components/head.jsx";
import Script from "next/script";

export default function App() {
  return (
    <>
      <Head />
      <Script>window.location = "/homepage"</Script>
    </>
  );
}
