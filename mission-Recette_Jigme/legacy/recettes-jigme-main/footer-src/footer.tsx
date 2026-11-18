// Pied de page du lien en bio (BioShell.tsx) — composants importés tels quels depuis lienenbio-maison.
import { createRoot } from "react-dom/client";
import SocialGarden from "@/components/SocialGarden";
import { YoutubePicker } from "@/components/YoutubePicker";
import { SocialIcon } from "@/components/SocialIcon";
import { socials } from "@/lib/content";

function Footer() {
  return (
          <footer className="border-t border-line px-6 pt-1 pb-4 text-center text-xs text-fg-muted">
            <SocialGarden className="social-garden relative mx-auto mb-1 max-w-md pt-4 pb-0">
            <nav aria-label="Réseaux sociaux" className="flex flex-wrap justify-center gap-1">
              <YoutubePicker className="grid size-10 place-items-center rounded-full bg-white text-fg transition hover:bg-surface-muted hover:text-black focus-visible:outline-2 focus-visible:outline-moss-400" />
              {socials.filter((s) => !s.key.startsWith("youtube")).map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  className="grid size-10 place-items-center rounded-full bg-white text-fg transition hover:bg-surface-muted hover:text-black focus-visible:outline-2 focus-visible:outline-moss-400"
                >
                  <SocialIcon name={s.key} className="size-[18px]" />
                </a>
              ))}
            </nav>
            </SocialGarden>
            <a href="https://jigme.fr/mediakit" className="underline-offset-4 hover:text-fg hover:underline">
              Marques &amp; partenariats : media kit
            </a>
            <span className="mx-2">·</span>© {new Date().getFullYear()} Jigmé
          </footer>
  );
}
const el = document.getElementById("lb-footer");
if (el) createRoot(el).render(<Footer />);
