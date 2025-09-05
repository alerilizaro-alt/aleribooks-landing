export default function Footer() {
  return (
    <footer className="text-xs text-center text-muted-foreground py-6">
      © {new Date().getFullYear()} Aleribooks. Made with{" "}
      <a
        href="https://ui.shadcn.com"
        target="_blank"
        rel="noopener noreferrer"
        className="underline-offset-4 hover:underline"
      >
        shadcn/ui
      </a>{" "}
      (MIT). Photos from{" "}
      <a
        href="https://unsplash.com/license"
        target="_blank"
        rel="noopener noreferrer"
        className="underline-offset-4 hover:underline"
      >
        Unsplash
      </a>.
    </footer>
  );
}
