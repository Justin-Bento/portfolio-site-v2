import Image from "next/image";

export default function Home() {
  return (
    <main className="container  max-w-[90%] mx-auto p-6 min-h-dvh grid place-items-center">
      <section className="*:lg:flex *:items-centre *:lg:justify-center *:lg:text-center">
        <span className="block  mb-12">
          <Image src="" alt="" className="size-24 bg-gray-400 rounded-full" />
        </span>
        <h1 className="text-lg font-medium text-teal-700 capitalize mb-4">
          Hi, My name is Justin Bento.
        </h1>
        <p className="scroll-m-20 text-4xl leading-12 font-extrabold tracking-tight text-balance max-w-prose capitalize">
          I'm A recent graduated from Humber College’s Multimedia Design &
          Development program.
        </p>
        <p className="mt-6 max-w-[80ch] mx-auto text-lg leading-9 text-balance">
          My goal is to become a professional website developer that knows how
          to design. During my time at Humber, I learned a lot about design and
          development after I graudate I plan on continuing my education in
          website development through Harvard CS50 and The Odin Project and land
          a job.
        </p>
        <span className="mt-12 block gap-4 lg:flex lg:items-center lg:justify-center">
          <button className="py-5 px-8 text-sm leading-0 rounded-lg bg-teal-700 text-white font-semibold">
            View Projects
          </button>
          <button className="py-5 px-8 text-sm leading-0 rounded-lg bg-teal-200 text-teal-800 font-semibold">
            Let's Talk
          </button>
        </span>
      </section>
    </main>
  );
}
