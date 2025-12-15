const debounce = (fn: Function, delay: number) => {
  let timerId: ReturnType<typeof setTimeout>;
  return (...params: any[]) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => fn(...params), delay);
  };
};

const throttled = (fn: Function, delay: number) => {
  let isThrottled: boolean = false;
  return (...args: any[]) => {
    if (isThrottled) return;

    fn(...args);
    isThrottled = true;
    setTimeout(() => (isThrottled = false), delay);
  };
};

// THROTTLE: Limits function execution to once per time period

// USAGE EXAMPLES:

// Debounce - waits until user stops typing
const debouncedSearch = debounce((query: string) => {
  console.log("Searching for:", query);
}, 500);

// Throttle - limits scroll handler to once per 200ms
const throttledScroll = throttled(() => {
  console.log("Scroll position:", window.scrollY);
}, 200);

// When to use what:
// DEBOUNCE: Search input, resize events, form validation
//           → Waits for user to STOP doing something
//
// THROTTLE: Scroll handlers, mouse move, button spam prevention
//           → Limits HOW OFTEN something happens
