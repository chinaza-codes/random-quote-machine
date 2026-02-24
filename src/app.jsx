import twitter from "./assets/icons8-twitter.svg";
import tumblr from "./assets/icons8-tumblr.svg";
import { useState } from "react";

const quotes = [
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs",
    },
    {
        text: "Stay hungry. Stay foolish.",
        author: "Steve Jobs",
    },
    {
        text: "Everything you can imagine is real.",
        author: "Pablo Picasso",
    },
    {
        text: "In the middle of difficulty lies opportunity.",
        author: "Albert Einstein",
    },
    {
        text: "Do what you can, with what you have, where you are.",
        author: "Theodore Roosevelt",
    },
    {
        text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill",
    },
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt",
    },
    {
        text: "Happiness depends upon ourselves.",
        author: "Aristotle",
    },
    {
        text: "Turn your wounds into wisdom.",
        author: "Oprah Winfrey",
    },
    {
        text: "Dream big and dare to fail.",
        author: "Norman Vaughan",
    },
    {
        text: "It always seems impossible until it's done.",
        author: "Nelson Mandela",
    },
    {
        text: "Act as if what you do makes a difference. It does.",
        author: "William James",
    },
    {
        text: "The future belongs to those who prepare for it today.",
        author: "Malcolm X",
    },
    {
        text: "Your time is limited, so don't waste it living someone else's life.",
        author: "Steve Jobs",
    },
    {
        text: "If you want to lift yourself up, lift up someone else.",
        author: "Booker T. Washington",
    },
    {
        text: "We become what we think about.",
        author: "Earl Nightingale",
    },
    {
        text: "Start where you are. Use what you have. Do what you can.",
        author: "Arthur Ashe",
    },
    {
        text: "What we think, we become.",
        author: "Buddha",
    },
    {
        text: "Opportunities don't happen. You create them.",
        author: "Chris Grosser",
    },
    {
        text: "Discipline is choosing between what you want now and what you want most.",
        author: "Abraham Lincoln",
    },
];

export default function App() {
    const [quote, setQuote] = useState(quotes[0]);

    const getNewQuote = () => {
        const random = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[random]);
    };

    const shareText = `"${quote.text}" — ${quote.author}`;
    const encodedText = encodeURIComponent(shareText);

    const tweetUrl = `https://x.com/intent/tweet?text=${encodedText}`;

    const tumblrUrl = `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption=${encodeURIComponent(
        quote.author,
    )}&content=${encodeURIComponent(quote.text)}`;

    return (
        <section
            id="quote-box"
            className="bg-fuchsia-200 flex flex-col items-center justify-center p-8 rounded-2xl max-w-212.5 m-auto mt-10"
        >
            <div className="bg-zinc-600 w-full mb-8 p-4 rounded text-fuchsia-200 transition duration-1000 ease-in">
                <h1 id="text" className="text-2xl">
                    {quote.text}
                </h1>
                <p
                    id="author"
                    className="tracking-normal text-right font-bold capitalize italic"
                >
                    - {quote.author}
                </p>
            </div>

            <div className="flex justify-between flex-row-reverse w-full">
                <button
                    type="button"
                    id="new-quote"
                    onClick={getNewQuote}
                    className="bg-zinc-600 hover:bg-zinc-800 transition duration-1000 ease-in-out text-fuchsia-200 p-2 rounded font-bold capitalize cursor-pointer"
                >
                    new quote
                </button>

                <div className="flex gap-3 w-fit">
                    <a
                        href={tweetUrl}
                        id="tweet-quote"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={twitter}
                            alt="twitter-logo"
                            className="scale-120"
                        />
                    </a>

                    <a href={tumblrUrl} target="_blank" rel="noreferrer">
                        <img src={tumblr} alt="tumblr-logo" />
                    </a>
                </div>
            </div>
        </section>
    );
}
