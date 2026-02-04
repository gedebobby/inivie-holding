import HeroVideo from "@/components/hero";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
    <Navbar />
    <HeroVideo />
    <div className="h-[1800px]">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eos debitis neque ad vero. Velit cumque reprehenderit, aspernatur fuga deleniti ex nisi ab, tenetur veniam consectetur, alias quo. Modi, vitae!</p>
    </div>
    </>
  );
}
