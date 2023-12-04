export default {
  logo: <span>Concept Note</span>,
  project: {
    link: "https://github.com/jgjgill",
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s",
    };
  },
  head: (
    <>
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#d3d3d3" />
    </>
  ),
};
