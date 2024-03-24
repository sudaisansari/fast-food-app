import { GetInTouch } from "@/components/shared/GetInTouch";
import { InfiniteMovingCardsDemo } from "@/components/shared/movingCards";
import DealsandSignaturess from "@/components/widgets/DealsandSignaturess";
import Hero from "@/components/widgets/Hero";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <InfiniteMovingCardsDemo />
      <DealsandSignaturess />
      <GetInTouch />
    </main>
  )
}