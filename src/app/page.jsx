import Banner from "@/components/home/Banner";
import Product from "@/components/home/Product";


export default function Home() {
  return (
    <div className="space-y-20 ">
      <main className="">
        <section className="">
          <Banner></Banner>
        </section>
        <section>
          <Product></Product>
        </section>
       
       
      </main>
    </div>
  );
}
