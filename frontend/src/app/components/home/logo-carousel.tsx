import Image from "next/image";

export default function LogoCarousel() {
    const logos = [
        { src: "/logos/css.svg", alt: "CSS" },
        { src: "/logos/django.svg", alt: "Django" },
        { src: "/logos/docker.svg", alt: "Docker" },
        { src: "/logos/fastapi.svg", alt: "FastAPI" },
        { src: "/logos/firebase.svg", alt: "Firebase" },
        { src: "/logos/graphql.svg", alt: "GrahpQL" },
        { src: "/logos/html.svg", alt: "HTML" },
        { src: "/logos/java.svg", alt: "Java" },
        { src: "/logos/javascript.svg", alt: "Javascript" },
        { src: "/logos/junit.png", alt: "JUnit" },
        { src: "/logos/langchain.svg", alt: "Langchain" },
        { src: "/logos/mongo.svg", alt: "MongoDB" },
        { src: "/logos/mysql.svg", alt: "MySQL" },
        { src: "/logos/nextjs.svg", alt: "Next.js" },
        { src: "/logos/nodejs.svg", alt: "Node.js" },
        { src: "/logos/openai.svg", alt: "OpenAI" },
        { src: "/logos/pipecat.svg", alt: "Pipecat" },
        { src: "/logos/postgresql.svg", alt: "PostgreSQL" },
        { src: "/logos/python.svg", alt: "Python" },
        { src: "/logos/react.svg", alt: "React" },
        { src: "/logos/redis.svg", alt: "Redis" },
        { src: "/logos/redux.svg", alt: "Redux" },
        { src: "/logos/spring.svg", alt: "Spring" },
        { src: "/logos/twilio.svg", alt: "Twilio" },
    ];

    return (
        <div className="overflow-hidden px-2 [mask-image:linear-gradient(to_right,transparent_0,black_100px,black_calc(100%-100px),transparent_100%)]">
            <div className="scroll-animation relative flex whitespace-nowrap gap-8 min-w-full">
                {logos.map((logo, idx) => (
                    <Image src={logo.src} alt={logo.alt} width={36} height={36} />
                ))}
            </div>
        </div>
    );
}