import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" aria-label="Page non trouvée" className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center">
        <div className="text-8xl font-heading font-bold gradient-text mb-4">
          404
        </div>
        <h1 className="text-2xl md:text-3xl font-heading font-bold mb-4">
          Page non trouvée
        </h1>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Oups ! La page que vous recherchez n&apos;existe pas ou a été déplacée.
          Retrouvez nos services et expertises data & IA sur notre site.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-heading font-semibold hover:bg-primary/90 transition-colors glow-ring"
          >
            Retour à l&apos;accueil
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center px-6 py-3 rounded-lg border border-border bg-secondary/30 text-foreground font-heading font-medium hover:bg-secondary/60 transition-colors"
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </main>
  );
}
