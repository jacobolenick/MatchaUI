export function SiteFooter() {
  return (
    <footer className="text-muted-foreground bg-background shrink-0 border-t py-6 text-center text-sm">
      <p>
        Created by{" "}
        <a
          href="https://www.linkedin.com/in/jacobmolenick"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground hover:text-primary font-medium underline-offset-4 hover:underline"
        >
          Jacob Olenick
        </a>
        {" "}&amp; DesignOps Studio
      </p>
    </footer>
  );
}
