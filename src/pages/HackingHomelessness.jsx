import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HackingHomelessness() {
  return (
    <>
      <Helmet>
        <title>Hacking Homelessness — Bashir Abubakar</title>
        <meta
          name="description"
          content="Reflections from a Local Government homelessness innovation hackathon in Birmingham, exploring how data and AI can support prevention and better decision-making."
        />
        <meta property="og:title" content="Hacking Homelessness — Bashir Abubakar" />
        <meta
          property="og:description"
          content="A two-day hackathon focused on data, AI, and prevention in homelessness and rough sleeping."
        />
        <meta property="og:url" content="https://bashir-abubakar.github.io/blog/hacking-homelessness" />
        <meta property="og:image" content="https://bashir-abubakar.github.io/og-image.png" />
      </Helmet>

      <div
        className="
          min-h-screen w-full 
          bg-gradient-to-br from-[#0f1f3d] via-[#1e3d7b] to-[#4a78e2]
          pt-24 sm:pt-28 md:pt-32 
          px-4 sm:px-6 pb-14
        "
      >
        <div className="max-w-4xl mx-auto text-white">
          <div className="mb-6">
            <Link
              to="/blog"
              className="text-blue-200 underline hover:text-blue-300"
            >
              ← Back to Blog
            </Link>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              text-4xl sm:text-5xl font-bold 
              bg-gradient-to-r from-blue-200 to-blue-400 
              bg-clip-text text-transparent
              mb-4
            "
          >
            Hacking Homelessness: Data, AI, and Prevention in Local Government
          </motion.h1>

          <p className="text-blue-100 mb-8">
            Birmingham • 26–27 November • Local Government Homelessness Innovation Hackathon
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            <img
              src="/images/Local-Government-Innovation-Hackaton-1-1536x922.jpg"
              alt="Local Government Innovation Hackathon"
              className="rounded-2xl border border-white/20 shadow-xl object-cover w-full h-64"
            />
            <img
              src="/images/Keynote-at-the-Innovation-Hackathon-1536x922.jpg"
              alt="Keynote at the Innovation Hackathon"
              className="rounded-2xl border border-white/20 shadow-xl object-cover w-full h-64"
            />
          </div>

          <div className="glass-card rounded-3xl border border-white/20 shadow-2xl p-7 sm:p-10 leading-relaxed">
            <p className="text-blue-100">
              The atmosphere in the room was vibrant — packed with bright minds ready to hack,
              prototype, and build practical solutions to tackle homelessness and rough sleeping.
              Over 26–27 November, I joined a Local Government homelessness innovation hackathon
              in Birmingham organised by GDS Local, and it turned out to be a genuinely brilliant
              experience.
              <br /><br />
              If you’re unfamiliar with the term, a hackathon is an intensive collaborative event
              where people come together to solve problems creatively. Participants form teams,
              share ideas, and develop practical solutions in a short timeframe — in this case,
              two days. It’s about bringing diverse perspectives together and encouraging rapid
              innovation.
              <br /><br />
              Participants could choose one of three challenge statements:
              <ul className="list-disc ml-6 mt-3 space-y-2">
                <li>Using data and artificial intelligence (AI) to predict and prevent homelessness</li>
                <li>AI-driven outreach and system efficiency for homelessness and rough sleeping services</li>
                <li>Optimising temporary accommodation allocation through data-driven insights</li>
              </ul>
              <br />
              The event brought together people from housing, local government, health, policing,
              research, and the voluntary sector — all looking at the same challenge from completely
              different angles. That made for rich conversations and a lot of learning.
              <br /><br />
              I was able to bring in some of the mental health and ambulance insights from my work,
              and it was interesting to see how naturally they linked with homelessness datasets.
              There’s real potential in combining these perspectives — especially for identifying
              early warning signs, spotting high-risk areas, and understanding where pressures might
              build long before someone reaches crisis point.
              <br /><br />
              Our team built a working prototype called <span className="font-semibold">Signify</span>,
              aimed at helping identify risk pathways earlier and support better preventative decision-making.
              Watching everyone’s ideas come together in the final presentations was a great way to wrap up
              the two days.
              <br /><br />
              For anyone interested, we’ve shared some of the work here:
              <br />
              <a
                href="https://lnkd.in/eiWT2ZDB"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-200 hover:text-blue-300"
              >
                https://lnkd.in/eiWT2ZDB
              </a>
              <br /><br />
              Big thanks to GDS Local and partners for organising such an energising and meaningful event.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
