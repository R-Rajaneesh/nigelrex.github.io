import "../styles/globals.css";

/**
 * It takes a component and a pageProps object and returns a component
 * @returns A component that renders the component that was passed in as a prop.
 */
function Nigelrex({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default Nigelrex;
