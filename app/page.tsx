export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-6xl font-bold text-center sm:text-left">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <section className="mt-6 text-2xl text-center sm:text-left">
          Get started by editing{" "}
          <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
            app/page.tsx
          </code>
        </section>
      </main>
    </div>
  );
}
