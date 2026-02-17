export default function App() {
    return (
        <>
            <section
                id="quote-box"
                className="bg-fuchsia-200 flex flex-col items-center justify-center  p-8 rounded-2xl  max-w-svh m-auto "
            >
                <div className="bg-zinc-600 w-full mb-8 p-2.5 rounded text-fuchsia-200">
                    <h1 id="text" className="text-2xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quo dignissimos eos suscipit, exercitationem repellat
                        odio nesciunt aspernatur error? Vero perferendis nostrum
                        voluptas quas porro modi accusamus dignissimos dolorem
                        expedita animi!
                    </h1>
                    <p
                        id="author"
                        className="tracking-normal text-right font-bold capitalize italic"
                    >
                        some author
                    </p>
                </div>

                <div className="flex justify-between flex-row-reverse w-full">
                    <button
                        type="button"
                        id="new-quote"
                        className="bg-zinc-900 text-fuchsia-200 p-2 rounded font-bold capitalize"
                    >
                        new quote
                    </button>
                    <div className="flex gap-2.5 w-fit">
                        <a href="twitter.com/intent/tweet" id="tweet-quote">
                            <img
                                src="src\assets\icons8-twitter.svg"
                                alt="twitter-logo"
                                className="scale-120"
                            />
                        </a>
                        <a href="">
                            <img
                                src="src\assets\icons8-tumblr.svg"
                                alt="tumblr-logo"
                            />
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
