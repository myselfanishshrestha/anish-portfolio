import { useState, type FormEvent } from "react";
import { ArrowUpRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const details = [
  {
    label: "Email",
    value: "myselfshresthaanish@gmail.com",
    href: "mailto:myselfshresthaanish@gmail.com",
  },
  { label: "Phone", value: "+977 9860989161", href: "tel:+9779860989161" },
  { label: "Location", value: "Kathmandu, Nepal", href: null },
  { label: "Availability", value: "Remote & international", href: null },
];

export function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const accessKey =
      (import.meta.env["VITE_WEB3FORMS_ACCESS_KEY"] as string | undefined) ||
      "f70793b1-fe63-4005-9014-f2216d43845b";

    formData.append("access_key", accessKey);
    formData.append("subject", `New Portfolio Contact Message from ${formData.get("name")}`);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Failed to send message. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection or email directly.");
    }
  };
  return (
    <section id="contact" className="bg-background px-6 py-24 md:px-12 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <header className="flex items-baseline justify-between border-t border-border pt-4">
          <span className="label-mono text-primary">05 &mdash; Contact</span>
          <span className="label-mono text-muted-foreground">
            Open for work
          </span>
        </header>

        <div className="mt-10 grid gap-14 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-6">
            <h2 className="font-display text-4xl leading-tight text-foreground sm:text-5xl">
              Have something worth building?
              <span className="text-primary"> Let&apos;s talk.</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              I&apos;m open to full-time roles, contract work and collaborations
              on web platforms and AI-driven products. Write a line about what
              you&apos;re working on and I&apos;ll reply.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href="mailto:myselfshresthaanish@gmail.com?subject=Hire%20Me%20%2F%20Job%20Opportunity"
                className="label-mono group inline-flex items-center gap-2 bg-foreground px-6 py-3.5 text-background transition-colors hover:bg-primary"
              >
                Hire me
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="/resume.pdf"
                download
                className="label-mono border-b border-foreground pb-1 text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Download resume
              </a>
            </div>
          </div>

          <div className="md:col-span-6 md:border-l md:border-border md:pl-10">
            <span className="label-mono text-muted-foreground">Details</span>
            <dl className="mt-6">
              {details.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-t border-border py-5"
                >
                  <dt className="label-mono text-muted-foreground">
                    {item.label}
                  </dt>
                  <dd className="text-base text-foreground">
                    {item.href ? (
                      <a
                        href={item.href}
                        className="border-b border-border pb-0.5 transition-colors hover:border-primary hover:text-primary"
                      >
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            <form
              onSubmit={handleSubmit}
              className="mt-10 border-t border-border pt-8"
            >
              <span className="label-mono text-muted-foreground">
                Or leave a note
              </span>

              {/* Botcheck honeypot to prevent spam */}
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

              {status === "success" ? (
                <div className="mt-6 rounded-md border border-primary/40 bg-primary/10 p-6">
                  <div className="flex items-center gap-3 text-primary">
                    <CheckCircle2 className="h-5 w-5 shrink-0" />
                    <p className="font-medium text-foreground">Message received!</p>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Thank you for reaching out. Anish will review your note and get back to you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="label-mono mt-4 inline-block border-b border-foreground pb-0.5 text-xs text-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <div className="mt-6 space-y-6">
                  {status === "error" && (
                    <div className="flex items-center gap-2 rounded border border-destructive/40 bg-destructive/10 p-3 text-sm text-destructive">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      <span>{errorMessage || "Failed to send message. Please email directly."}</span>
                    </div>
                  )}

                  <div>
                    <label
                      htmlFor="name"
                      className="label-mono block text-muted-foreground"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      placeholder="Your name"
                      className="mt-2 w-full border-b border-border bg-transparent py-2 text-base text-foreground outline-none focus:border-primary placeholder:text-muted-foreground/50"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="label-mono block text-muted-foreground"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="your.email@example.com"
                      className="mt-2 w-full border-b border-border bg-transparent py-2 text-base text-foreground outline-none focus:border-primary placeholder:text-muted-foreground/50"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="label-mono block text-muted-foreground"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder="Tell me about your project or inquiry..."
                      className="mt-2 w-full resize-none border-b border-border bg-transparent py-2 text-base text-foreground outline-none focus:border-primary placeholder:text-muted-foreground/50"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="label-mono inline-flex cursor-pointer items-center gap-2 border border-foreground px-6 py-3 text-foreground transition-colors hover:bg-foreground hover:text-background disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending message...
                      </>
                    ) : (
                      "Send message"
                    )}
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
