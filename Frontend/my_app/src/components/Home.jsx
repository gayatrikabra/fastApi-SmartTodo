function Home() {
    return (
        <section className="min-h-[500px] flex items-center justify-center bg-slate-900 text-white px-5 py-20">
            <div className="w-full max-w-4xl mx-auto text-center">

                {/* Badge */}
                <span className="inline-block mb-5 rounded-full border border-blue-500 px-5 py-2 text-sm font-semibold tracking-[2px] text-blue-500">
                    SMART TODO
                </span>

                {/* Heading */}
                <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                    Organize Your Day.{" "}
                    <span className="text-blue-500">
                        Get Things Done.
                    </span>
                </h1>

                {/* Description */}
                <p className="mx-auto max-w-3xl text-base leading-7 text-slate-300 md:text-lg md:leading-8">
                    Smart Todo is a simple and powerful task management
                    application designed to help you organize your daily
                    activities, prioritize important tasks, manage deadlines,
                    and track your progress. Create tasks, set priorities,
                    add due dates, and mark tasks as completed—all from one
                    easy-to-use dashboard. With Smart Todo, you can spend less
                    time managing your tasks and more time getting things done.
                </p>

                {/* Highlights */}
                <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-200 md:text-base">

                    <div className="flex items-center gap-2">
                        <span className="font-bold text-blue-500">✓</span>
                        <span>Plan your tasks</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="font-bold text-blue-500">✓</span>
                        <span>Set priorities</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="font-bold text-blue-500">✓</span>
                        <span>Track progress</span>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default Home;