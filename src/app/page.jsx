import Banner from "@/components/home/Banner";
import Product from "@/components/home/Product";
import TestSession from "@/components/TestSession";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";


export default async function Home() {
  const session=await getServerSession(authOptions);

  return (
    <div className="space-y-20 ">
      <main className="">
        <section className="">
          <Banner></Banner>
        </section>
        <TestSession></TestSession>
        <p>{JSON.stringify(session)}</p>
        <section>
          <Product></Product>
        </section>
      </main>
    </div>
  );
}
