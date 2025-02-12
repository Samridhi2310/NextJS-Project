"use client"
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/navigation"

export default function Home() {
  const route=useRouter();
  function navigation(name){
    route.push(name);
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex  gap-8 row-start-2 items-center sm:items-start">
        <h1>Hello Next Js</h1>
        
        <Link href="/samridhi">blog</Link>
        <Link href="/about/aditi">Aditi</Link>
        <Link href="/about/hello">Hello</Link>
        
        <button onClick={()=>navigation('/about/aboutData')}>Nested Static about</button>

        
        
        
      </main>
    </div>
  );
}
