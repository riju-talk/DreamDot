"use client";
import Header from "./(components)/header";
import Footer from "./(components)/footer";

export default function Home() {
  return (
    <>
    <Header/>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <Footer/>
    </main>
    </>
  );
}
