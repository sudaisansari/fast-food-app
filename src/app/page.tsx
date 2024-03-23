import { InfiniteMovingCardsDemo } from "@/components/shared/movingCards";
import DealsandSignaturess from "@/components/widgets/DealsandSignaturess";
import Hero from "@/components/widgets/Hero";
import Services from "@/components/widgets/Services";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <InfiniteMovingCardsDemo />
      <DealsandSignaturess />
    </main>
  )
}