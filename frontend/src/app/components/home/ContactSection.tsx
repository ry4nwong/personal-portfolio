
export default function ContactSection() {
    return (
        <section className="flex flex-col gap-5 py-10 px-10 card">
            <div className="flex flex-col gap-2 mb-2">
                <h2 className="text-3xl font-semibold px-4">
                    🚀 Contact Me
                </h2>
                <p className="px-5">
                    I will respond as soon as possible!
                </p>
            </div>

            <form className="flex flex-col gap-4 w-full max-w-2xl">
                <div>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="block w-full p-2 border border-[var(--border)] rounded-lg text-base focus:border-blue-500 bg-[var(--card-bg)]"
                        placeholder="Name"
                    />
                </div>

                <div>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="block w-full p-2 border border-[var(--border)] rounded-lg text-base focus:border-blue-500 bg-[var(--card-bg)]"
                        placeholder="Email"
                    />
                </div>

                <div>
                    <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        className="block w-full p-2 border border-[var(--border)] rounded-lg text-sm focus:border-blue-500 bg-[var(--card-bg)]"
                        placeholder="Message"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="px-6 py-2 rounded-lg font-semibold bg-[var(--muted)] transition cursor-pointer"
                >
                    Send Message
                </button>
            </form>
        </section>
    );
}