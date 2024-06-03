export const inViewAnimation = {
  initial: { opacity: 0, y: 20 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, amount: "all" as const },
};
