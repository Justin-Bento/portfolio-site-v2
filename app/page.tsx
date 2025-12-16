import Image from "next/image";

export default function Home() {
  return (
    <main className="container  max-w-[90%] mx-auto p-6 min-h-dvh grid place-items-center">
      <section className="*:lg:flex *:items-centre *:lg:justify-center *:text-center">
        <span className="block  mb-12">
          <Image src="" alt="" className="size-24 bg-gray-400 rounded-full" />
        </span>
        <h1 className="">Hi, My name is Justin Bento.</h1>
        <p className="">
          I recently graduated from Humber College’s Multimedia Design and
          Development program.
        </p>
        <p className="mt-6 max-w-prose mx-auto">
          My goal is to specializing in website development and multimedia
          design. During my time at Humber, I learned a lot about design and
          development and continued my education in website development through
          Harvard CS50 and The Odin Project.
        </p>
        <span className="mt-12 block lg:gap-x-4">
          <button className="">View Projects</button>
          <button className="">Let's Talk</button>
        </span>
      </section>
    </main>
  );
}
