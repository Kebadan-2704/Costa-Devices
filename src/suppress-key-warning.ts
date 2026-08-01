/**
 * Suppress the false-positive "Each child in a list should have a unique key prop"
 * warning that originates from Next.js's internal OuterLayoutRouter component.
 *
 * This is a known bug in Next.js 16.x where the OuterLayoutRouter renders
 * children arrays (templateStyles, templateScripts, template) via jsxs()
 * without keys in development mode. It does NOT indicate a problem in
 * application code.
 *
 * This patch only runs in development and only suppresses the specific
 * OuterLayoutRouter warning.
 */
if (typeof window !== "undefined" && process.env.NODE_ENV !== "production") {
  const originalConsoleError = console.error;
  console.error = (...args: unknown[]) => {
    if (
      typeof args[0] === "string" &&
      args[0].includes("Each child in a list should have a unique") &&
      typeof args[1] === "string" &&
      args[1].includes("OuterLayoutRouter")
    ) {
      // Suppress this specific Next.js internal warning
      return;
    }
    originalConsoleError.apply(console, args);
  };
}

export {};
