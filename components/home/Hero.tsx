import React from 'react';
import HeroCarousel from './HeroCarousel';
import { Button } from '../ui/button';
import Link from 'next/link';

function Hero() {
  return (
    <section className="grid gap-24 grid-cols-1 lg:grid-cols-2 items-center">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl ">
          We’re changing the way people shop.
        </h1>
        <p className="max-w-xl mt-8 text-lg text-muted-foreground leading-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
          dolores fugit quia esse quaerat iusto cumque eveniet ut maiores
          accusamus.
        </p>
        <Button size="lg" asChild className="mt-10">
          <Link href="/products" className="capitalize ">
            our products
          </Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
}

export default Hero;
