import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitContact } from "@/hooks/useBackend";
import { CheckCircle2, Send } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

const SERVICE_TYPES = [
  "Web Development",
  "UI/UX Design",
  "SEO Optimization",
  "Growth Engineering",
  "E-commerce",
  "Cloud Infrastructure",
  "Other",
];

interface FormState {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  message: string;
}

const INITIAL: FormState = {
  name: "",
  email: "",
  phone: "",
  serviceType: "",
  message: "",
};

export function ContactSection() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const { mutateAsync, isPending } = useSubmitContact();

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message || !form.serviceType) {
      toast.error("Please fill in all required fields.");
      return;
    }
    try {
      await mutateAsync(form);
      setSubmitted(true);
      toast.success("Message sent! We'll be in touch within 24 hours.");
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="section-spacing bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <Badge
            variant="outline"
            className="mb-4 border-primary/30 text-primary bg-primary/10 uppercase tracking-widest text-xs"
          >
            Get in Touch
          </Badge>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-4">
            Start Your <span className="text-primary">Project</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Tell us about your vision. We'll respond within 24 hours with a
            plan.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-12 rounded-2xl bg-card border border-primary/30 text-center"
              data-ocid="contact-success"
            >
              <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="font-display font-bold text-2xl text-foreground mb-2">
                Message Received!
              </h3>
              <p className="text-muted-foreground mb-6">
                Thanks for reaching out, {form.name}. Our team will contact you
                at{" "}
                <span className="text-foreground font-medium">
                  {form.email}
                </span>{" "}
                within 24 hours.
              </p>
              <Button
                variant="outline"
                className="border-border text-foreground hover:bg-muted/40"
                onClick={() => {
                  setForm(INITIAL);
                  setSubmitted(false);
                }}
              >
                Send Another Message
              </Button>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl bg-card border border-border space-y-6"
              data-ocid="contact-form"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className="text-foreground text-sm font-medium"
                  >
                    Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="name"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className="bg-muted/30 border-border focus:border-primary"
                    data-ocid="contact-name"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-foreground text-sm font-medium"
                  >
                    Email <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className="bg-muted/30 border-border focus:border-primary"
                    data-ocid="contact-email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="phone"
                    className="text-foreground text-sm font-medium"
                  >
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    placeholder="+1 (555) 000-0000"
                    value={form.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className="bg-muted/30 border-border focus:border-primary"
                    data-ocid="contact-phone"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="service"
                    className="text-foreground text-sm font-medium"
                  >
                    Service Type <span className="text-destructive">*</span>
                  </Label>
                  <Select
                    value={form.serviceType}
                    onValueChange={(v) => handleChange("serviceType", v)}
                  >
                    <SelectTrigger
                      id="service"
                      className="bg-muted/30 border-border"
                      data-ocid="contact-service"
                    >
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border">
                      {SERVICE_TYPES.map((s) => (
                        <SelectItem
                          key={s}
                          value={s}
                          className="text-foreground hover:bg-muted"
                        >
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="message"
                  className="text-foreground text-sm font-medium"
                >
                  Project Details <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project, goals, and timeline..."
                  rows={5}
                  value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className="bg-muted/30 border-border focus:border-primary resize-none"
                  data-ocid="contact-message"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isPending}
                className="w-full bg-primary text-primary-foreground hover:opacity-90 transition-smooth font-semibold text-base"
                data-ocid="contact-submit"
              >
                {isPending ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  );
}
