import { AnimationProps } from "framer-motion";

export const variants: AnimationProps["variants"] = {
  hiddenByOpacity: {
    opacity: 0,
  },
  visibleByOpacity: {
    opacity: 1,
  },
  visibleByX: {
    opacity: 1,
    x: 0,
  },
  visibleByY: {
    opacity: 1,
    y: 0,
  },
  xLeftHidden: {
    opacity: 0,
    x: -50,
  },
  xRightHidden: {
    opacity: 0,
    x: 50,
  },
  yTopHidden: {
    opacity: 0,
    y: -50,
  },
  yBottomHidden: {
    opacity: 0,
    y: 50,
  },
  visibleGrid: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
  xVisibleGrid: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.3,
    },
  },
  yVisibleGrid: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
    },
  },
};
