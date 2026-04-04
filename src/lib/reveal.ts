/**
 * Svelte action for scroll-triggered reveal animations.
 * Usage: <div use:reveal> or <div use:reveal={{ delay: 200 }}>
 */
export function reveal(node: HTMLElement, { delay = 0, y = 30 } = {}) {
  node.style.opacity = '0';
  node.style.transform = `translateY(${y}px)`;
  node.style.transition = `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms`;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          node.style.opacity = '1';
          node.style.transform = 'translateY(0)';
          observer.unobserve(node);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    },
  };
}

/**
 * Svelte action for staggered reveal of child elements.
 * Applies reveal animation to direct children with increasing delay.
 * Usage: <div use:revealChildren={{ stagger: 100 }}>
 */
export function revealChildren(node: HTMLElement, { stagger = 100, y = 30 } = {}) {
  const children = Array.from(node.children) as HTMLElement[];

  children.forEach((child, i) => {
    child.style.opacity = '0';
    child.style.transform = `translateY(${y}px)`;
    child.style.transition = `opacity 0.5s ease-out ${i * stagger}ms, transform 0.5s ease-out ${i * stagger}ms`;
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          children.forEach((child) => {
            child.style.opacity = '1';
            child.style.transform = 'translateY(0)';
          });
          observer.unobserve(node);
        }
      });
    },
    { threshold: 0.05, rootMargin: '0px 0px -50px 0px' }
  );

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    },
  };
}
