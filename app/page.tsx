export default function Home() {
  return (
    <main className="wrapper min-h-dvh grid items-center ">
      <section className="flex flex-col items-start md:items-center *:text-xl/relaxed *:text-center *:[&:not(:first-child)]:mt-6">
        <span className="block">
          <div className="size-24 bg-gray-400 rounded-full" />
        </span>
        <div className="max-w-[95ch] *:text-balance space-y-3">
          <h1 className="">Hi, My name is Justin Bento.</h1>
          <p className="scroll-m-20 text-center text-5xl/snug capitalize font-extrabold text-balance">
            I'm A recent graduated from Humber College’s Multimedia Design &
            Development program.
          </p>
          <p className="">
            My goal is to become a professional website developer that knows how
            to design. During my time at Humber, I learned a lot about design
            and development after I graudate I plan on continuing my education
            in website development through Harvard CS50 and The Odin Project and
            land a job.
          </p>
        </div>
        <span className="mt-12 flex items-start md:items-center gap-6">
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
