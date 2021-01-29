export default function typewriter(node, { speed = 80, delay = 0 }) {
  const text = node.textContent;
  const duration = text.length * speed;

  return {
    duration,
    delay,
    tick: (t) => {
      const i = ~~(text.length * t);
      node.textContent = text.slice(0, i);
    },
  };
}