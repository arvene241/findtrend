import useMediaQuery from "./useMediaQuery";

export default function useBreakpoints() {
  const breakpoints = {
    isMobile: useMediaQuery("(max-width: 768px"),
    isLaptop: useMediaQuery("(max-width: 1060px)"),
    isDesktop: useMediaQuery("(min-width: 1441px)"),
    // active: "sm",
  };

  return breakpoints;
}