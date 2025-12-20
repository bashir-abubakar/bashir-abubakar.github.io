import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

export default function HackingHomelessness() {
  return (
    <>
      {/* ------------------------------------------------------------- */}
      {/* SEO                                                          */}
      {/* ------------------------------------------------------------- */}
      <Helmet>
        <title>
          Hacking Homelessness — Data, AI, and Prevention in Local Government
        </title>

        <meta
          name="description"
          content="Reflections from a Local Government homelessness innovation hackathon exploring how data and AI can support early intervention, prevention, and better decision-making."
        />

        <meta
          name="keywords"
          content="Homelessness Hackathon, Local Government Innovation, AI for Public Good, Preventing Homelessness, Data Analytics, GDS Local"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Hacking Homelessness — Data, AI, and Prevention"
        />
        <meta
          property="og:description"
          content="Reflections from a two-day homelessness innovation hackathon bringing together data, AI, and cross-sector collaboration."
        />
        <meta
          property="og:image"
          content="https://bashir-abubakar.github.io/images/Local-Government-Innovation-Hackaton-1-1536x922.jpg"
        />
      </Helmet>

      {/* ------------------------------------------------------------- */}
      {/* PAGE CONTENT                                                 */}
      {/* ------------------------------------------------------------- */}
      <div
        className="
          min-h-screen w-full
          bg-gradient-to-br from-[#0f1f3d] via-[#1e3d7b] to-[#4a78e2]
          pt-24 sm:pt-28 md:pt-32
          px-4 sm:px-6 pb-20
        "
      >
        <article className="max-w-4xl mx-auto text-white">

          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="
              text-4xl sm:text-5xl font-bold
              text-center
              bg-gradient-to-r from-blue-200 to-blue-400
              bg-clip-text text-transparent
              mb-10
            "
          >
            Hacking Homelessness: Data, AI, and Prevention in Local Government
          </motion.h1>

          {/* INTRO */}
          <p className="text-lg text-blue-100 leading-relaxed mb-6">
            The atmosphere in Birmingham was vibrant from the moment we arrived.
            The room was filled with bright minds from across housing, local
            government, health, policing, research, and the voluntary sector, all
            ready to hack, collaborate, and develop innovative solutions to
            tackle homelessness and rough sleeping.
          </p>

          <p className="text-lg text-blue-100 leading-relaxed mb-10">
            I spent 26–27 November taking part in a Local Government homelessness
            innovation hackathon organised by GDS Local, and it turned out to be a
            genuinely energising and thought-provoking experience. What stood out
            immediately was the diversity of perspectives in the room. People
            came with very different lived experiences, professional
            backgrounds, and datasets, yet everyone was focused on the same
            shared challenge.
          </p>

          {/* IMAGE */}
          <img
            src="/images/Local-Government-Innovation-Hackaton-1-1536x922.jpg"
            alt="Participants collaborating at the Local Government Innovation Hackathon"
            className="rounded-2xl shadow-xl mb-12"
          />

          {/* SECTION */}
          <h2 className="text-2xl font-semibold text-blue-200 mb-4">
            What is a hackathon?
          </h2>

          <p className="text-lg text-blue-100 leading-relaxed mb-10">
            If you’re unfamiliar with the term, a hackathon is an intensive
            collaborative event where people come together to solve problems
            creatively. Participants form teams, share ideas, and develop
            practical solutions in a short timeframe – in this case, two days.
            It’s about bringing diverse perspectives together, encouraging rapid
            experimentation, and turning ideas into tangible prototypes.
          </p>

          {/* SECTION */}
          <h2 className="text-2xl font-semibold text-blue-200 mb-4">
            The challenge statements
          </h2>

          <ul className="list-disc list-inside text-lg text-blue-100 space-y-2 mb-10">
            <li>Using data and artificial intelligence (AI) to predict and prevent homelessness</li>
            <li>AI-driven outreach and system efficiency for homelessness and rough sleeping services</li>
            <li>Optimising temporary accommodation allocation through data-driven insights</li>
          </ul>

          {/* SECTION */}
          <h2 className="text-2xl font-semibold text-blue-200 mb-4">
            A collaborative approach to a complex challenge
          </h2>

          <p className="text-lg text-blue-100 leading-relaxed mb-6">
            The event itself was a great example of partnership working. It was
            organised by the Ministry of Housing, Communities and Local
            Government, GDS Local, the Local Government Association, and
            Birmingham City Council. Birmingham City Council and the West
            Midlands Combined Authority hosted the event, while AWS provided
            technical support throughout.
          </p>

          <blockquote className="border-l-4 border-blue-300 pl-4 italic text-blue-200 mb-6">
            “This hackathon is all about exploration and creativity, bringing
            together diverse perspectives to tackle one of the most pressing
            challenges this country faces: homelessness and rough sleeping.”
          </blockquote>

          <p className="text-lg text-blue-100 leading-relaxed mb-10">
            The government has made ending homelessness a priority, with a record
            investment of more than £1 billion this year. As was emphasised
            during the event, this isn’t just about funding – it’s about finding
            smarter, more effective ways to intervene early, support vulnerable
            people, and build systems that work for everyone.
          </p>

          {/* IMAGE */}
          <img
            src="/images/Keynote-at-the-Innovation-Hackathon-1536x922.jpg"
            alt="Keynote address at the homelessness innovation hackathon"
            className="rounded-2xl shadow-xl mb-12"
          />

          {/* SECTION */}
          <h2 className="text-2xl font-semibold text-blue-200 mb-4">
            From ideas to a working prototype
          </h2>

          <p className="text-lg text-blue-100 leading-relaxed mb-6">
            Armed with this context, teams spent the rest of day one
            collaborating intensively. I was able to bring in mental health and
            ambulance insights from my work at Yorkshire Ambulance Service, and
            it was striking how naturally these linked with homelessness
            datasets.
          </p>

          <p className="text-lg text-blue-100 leading-relaxed mb-6">
            Our team built a working prototype called <strong>Signify</strong>,
            aimed at identifying risk pathways earlier and supporting better
            preventative decision-making. The team I worked with were thoughtful,
            creative, and genuinely committed to designing something practical
            rather than purely theoretical.
          </p>

          {/* SECTION */}
          <h2 className="text-2xl font-semibold text-blue-200 mb-4">
            Final reflections
          </h2>

          <p className="text-lg text-blue-100 leading-relaxed mb-6">
            The energy in the room on day two was infectious. Teams refined their
            ideas, tested assumptions, and presented to a judging panel of senior
            civil servants and local government colleagues.
          </p>

          <p className="text-lg text-blue-100 leading-relaxed mb-10">
            I came away with fresh ideas and a deeper appreciation for what can be
            achieved when different parts of the system sit around the same
            table. Huge thanks to GDS Local and all the partners involved for
            organising such a meaningful and energising event.
          </p>

          <a
            href="https://lnkd.in/eiWT2ZDB"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 underline font-medium"
          >
            View shared work from the hackathon → https://github.com/bmahmood-cap/gds-hackathon
          </a>

        </article>
      </div>
    </>
  );
}
