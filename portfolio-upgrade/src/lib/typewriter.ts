export default function typewriter(node: HTMLElement, { delay = 0 }: { delay?: number } = {}) {
  const text = node.textContent || '';
  const duration = text.length * 80;

  return {
    duration,
    delay,
    tick: (t: number) => {
      const i = Math.floor(text.length * t);
      node.textContent = text.slice(0, i);
    },
  };
}