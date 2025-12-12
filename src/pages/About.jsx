export default function About() {
  return (
    <div className="min-h-screen flex items-start justify-center pt-32 px-6 pb-10 
                    bg-gradient-to-br from-[#0f1f3d] via-[#1e3d7b] to-[#4a78e2]">

      <div className="glass-card max-w-4xl text-white p-10 md:p-14 shadow-2xl rounded-3xl leading-relaxed">

        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-200 to-blue-400 
                       bg-clip-text text-transparent mb-8">
          About Me
        </h1>

        <p className="text-blue-100 text-lg leading-relaxed">

          Bashir Abubakar is a Mental Health Data Analyst within the NHS who is dedicated 
          to using data science, artificial intelligence and responsible innovation to 
          improve health outcomes. He specialises in advanced analytics, natural language 
          processing and predictive modelling to understand patient pathways, identify 
          inequalities and strengthen decision-making across urgent and emergency care.
          <br /><br />

          He is deeply committed to the intersection of sustainability, global health and 
          technology, exploring how AI can support climate-resilient health systems and 
          empower young people to shape data-driven solutions for their communities. His 
          work reflects a strong belief in ethical AI, public health equity and youth 
          leadership as catalysts for long-term systems change.
          <br /><br />

          Bashir has represented youth voices on major international platforms, including 
          serving as a delegate at COP28 and attending the One Young World Summit. These 
          global experiences have shaped his commitment to bridging data, climate resilience 
          and social justice, and to ensuring that emerging technologies benefit communities 
          fairly and sustainably.
          <br /><br />

          As a One Young World Ambassador, he actively champions initiatives that connect 
          innovation with public good. He collaborates across sectors, contributes to 
          research and health improvement projects, and engages in hackathons and innovation 
          programmes to accelerate meaningful change.
          <br /><br />

          Bashir is driven by a clear purpose: to build more equitable, sustainable and 
          future-ready systems through evidence, collaboration and responsible technology.
          <br /><br />

          <span className="font-semibold text-blue-200">
            LinkedIn:&nbsp;
            <a 
              href="https://linkedin.com/in/bashir-abubakar-61935417b/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-300"
            >
              linkedin.com/in/bashir-abubakar-61935417b/
            </a>
          </span>

        </p>

      </div>
    </div>
  );
}
