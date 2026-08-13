function Home() {
    return (
        <section className="min-h-[600px] flex items-center justify-center bg-dark text-white px-4 py-5">

            <div className="w-full max-w-4xl mx-auto text-center">

                <span className="inline-block mb-4 rounded-pill border border-warning px-4 py-2 text-warning fw-semibold">
                    SMART TODO
                </span>

                <h1 className="display-3 fw-bold mb-4">
                    Organize Your Day.{" "}
                    <span className="text-warning">
                        Get Things Done.
                    </span>
                </h1>

                <p className="lead text-secondary mx-auto" style={{ maxWidth: "750px" }}>
                    Smart Todo is a simple and powerful task management
                    application designed to help you organize your daily
                    activities, prioritize important tasks, manage deadlines,
                    and track your progress. Create tasks, set priorities,
                    add due dates, and mark tasks as completed—all from one
                    easy-to-use dashboard.
                </p>

                <div className="mt-4 d-flex justify-content-center gap-4 flex-wrap">

                    <span className="text-light">
                        <span className="text-warning fw-bold">✓</span>{" "}
                        Plan your tasks
                    </span>

                    <span className="text-light">
                        <span className="text-warning fw-bold">✓</span>{" "}
                        Set priorities
                    </span>

                    <span className="text-light">
                        <span className="text-warning fw-bold">✓</span>{" "}
                        Track progress
                    </span>

                </div>

                                

            </div>

        </section>
    );
}

export default Home;