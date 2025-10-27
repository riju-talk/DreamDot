import Link from "next/link";
import { Button } from "@/components/ui/button";

export function LandingCTA() {
  return (
    <section className="py-20 px-4 bg-primary text-primary-foreground">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Start Creating?</h2>
        <p className="text-xl mb-8 opacity-90">
          Join thousands of creators sharing their work on DreamDot
        </p>
        <Link href="/auth/register">
          <Button size="lg" variant="secondary">
            Get Started Free
          </Button>
        </Link>
      </div>
    </section>
  );
}
