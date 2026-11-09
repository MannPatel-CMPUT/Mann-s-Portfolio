import { ActionLink } from "@/components/ui/action-link";

const palette = [
  { name: "Paper", value: "#F5F4F1", className: "bg-paper" },
  { name: "Stone", value: "#EAE8E4", className: "bg-stone" },
  { name: "Ink", value: "#171717", className: "bg-ink" },
  { name: "Muted", value: "#686868", className: "bg-muted" },
  { name: "Burnt Copper", value: "#B35435", className: "bg-copper" },
  { name: "Copper Hover", value: "#904029", className: "bg-copper-deep" },
  { name: "Rule", value: "#D6D2CB", className: "bg-rule" },
  { name: "Charcoal", value: "#242424", className: "bg-charcoal" },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-24">
      <header className="max-w-3xl">
        <p className="eyebrow">Mann Patel · Design system 02</p>
        <h1 className="mt-6 font-display text-6xl leading-[0.95] tracking-tight sm:text-8xl">
          Editorial <span className="italic text-copper">foundations.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
          A quiet visual language for the portfolio: warm paper tones, grounded typography, and
          measured copper accents.
        </p>
      </header>

      <div className="mt-16 grid gap-14 border-t border-rule pt-10 md:grid-cols-[minmax(0,1.2fr)_minmax(16rem,0.8fr)] md:gap-20 md:pt-14">
        <section aria-labelledby="palette-heading">
          <p className="eyebrow">01 · Color</p>
          <h2 id="palette-heading" className="mt-3 font-display text-4xl sm:text-5xl">
            Warm neutrals, a restrained accent.
          </h2>
          <ul className="mt-8 grid list-none grid-cols-2 gap-x-5 gap-y-6 p-0 sm:grid-cols-4">
            {palette.map((color) => (
              <li key={color.name}>
                <div
                  aria-hidden="true"
                  className={`h-16 border border-rule ${color.className}`}
                />
                <p className="mt-2 text-sm font-medium text-ink">{color.name}</p>
                <p className="mt-1 font-mono text-xs text-muted">{color.value}</p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="type-heading">
          <p className="eyebrow">02 · Type</p>
          <h2 id="type-heading" className="mt-3 font-display text-4xl sm:text-5xl">
            Three clear voices.
          </h2>
          <div className="mt-8 space-y-6">
            <div className="border-b border-rule pb-5">
              <p className="font-display text-4xl leading-tight sm:text-5xl">Instrument Serif</p>
              <p className="mt-2 text-sm leading-6 text-muted">Display · expressive, calm, readable</p>
            </div>
            <div className="border-b border-rule pb-5">
              <p className="text-2xl font-medium">Inter Variable</p>
              <p className="mt-2 text-sm leading-6 text-muted">Body · clear at small and large sizes</p>
            </div>
            <div>
              <p className="font-mono text-sm tracking-wide">IBM PLEX MONO · 02:14 PM</p>
              <p className="mt-2 text-sm leading-6 text-muted">Metadata · quiet, precise, compact</p>
            </div>
          </div>
        </section>
      </div>

      <section aria-labelledby="controls-heading" className="mt-16 border-t border-rule pt-10 md:mt-20">
        <p className="eyebrow">03 · Shared controls</p>
        <h2 id="controls-heading" className="mt-3 font-display text-4xl sm:text-5xl">
          Clear paths forward.
        </h2>
        <div className="mt-7 flex flex-wrap items-center gap-4">
          <ActionLink href="#palette" variant="primary">Primary action</ActionLink>
          <ActionLink href="#type-heading" variant="secondary">Secondary action</ActionLink>
          <ActionLink href="#controls-heading" variant="text">Text link</ActionLink>
        </div>
        <p className="mt-5 max-w-2xl text-sm leading-6 text-muted">
          Controls use semantic links or buttons, have visible keyboard focus, and keep copper
          accents distinct from body text.
        </p>
      </section>
    </main>
  );
}
