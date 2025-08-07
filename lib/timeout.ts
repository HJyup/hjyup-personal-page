export type TimeoutController = {
  set: (fn: () => void, delay: number) => void;
  clear: () => void;
  pending: () => boolean;
};

export function createTimeout(): TimeoutController {
  let id: ReturnType<typeof setTimeout> | null = null;

  const clear = () => {
    if (id) {
      clearTimeout(id);
      id = null;
    }
  };

  const set = (fn: () => void, delay: number) => {
    clear();
    id = setTimeout(() => {
      id = null;
      fn();
    }, delay);
  };

  const pending = () => id !== null;

  return { set, clear, pending };
}
