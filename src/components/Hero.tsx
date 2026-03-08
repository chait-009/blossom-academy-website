import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import RequestCallbackDialog from "@/components/RequestCallbackDialog";

const Hero = () => {
  const [callbackOpen, setCallbackOpen] = useState(false);

  return (
    <section id="home" className="relative pt-[calc(4rem+2.25rem)] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      <div className="relative container mx-auto px-4 py-20 md:py-32 flex flex-col items-center text-center">
        <motion.img
          src="/logo.png"
          alt="Blossom Science Academy"
          className="h-24 w-24 md:h-32 md:w-32 object-contain mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />
        <motion.h1
          className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-primary leading-tight max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Empowering Minds For <span className="text-secondary">Eternal Futures</span>
        </motion.h1>
        <motion.p
          className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Premier coaching institute in Chinchwad offering comprehensive classes for 8th–12th (SSC/CBSE), Foundation, MHT-CET, JEE, NEET & NDA preparation.
        </motion.p>
        <motion.p
          className="mt-2 text-sm font-semibold text-primary tracking-wider uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Believe – Achieve – Succeed
        </motion.p>
        <motion.div
          className="mt-8 flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button onClick={() => setCallbackOpen(true)} size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold text-base px-8">
            Enroll Now
          </Button>
          <Link to="/courses">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-base px-8">
              View Courses
            </Button>
          </Link>
        </motion.div>
      </div>
      <RequestCallbackDialog open={callbackOpen} onOpenChange={setCallbackOpen} />
    </section>
  );
};

export default Hero;
