import micIcon from "@/assets/Aicard/Mic.png";
import lightningIcon from "@/assets/Aicard/heroicons-solid_lightning-bolt.png";
import searchIcon from "@/assets/Aicard/search.png";
import objectiveIcon from "@/assets/Aicard/objective.png";
import assessmentIcon from "@/assets/Aicard/assesment.png";
import planIcon from "@/assets/Aicard/plan.png";

const SoapNotesPreview = () => {
  return (
    <section className="w-full bg-gradient-to-b from-white to-[#ffeae5cb] px-4 py-20">
      <div className="relative max-w-6xl mx-auto rounded-3xl bg-[#F9F9F9] shadow-[0px_10px_30px_0px_#00000020] overflow-visible">

        {/* HEADER */}
        <div className="grid grid-cols-1 md:grid-cols-2 font-samsung bg-gray-100 rounded-t-3xl text-sm font-medium">
          
          {/* LEFT HEADER */}
          <div className="flex items-center gap-3 px-6 py-5">
            <img src={micIcon} alt="Mic" className="w-5 h-5" />
            <span>Spoken by Veterinarian</span>
          </div>

          {/* RIGHT HEADER */}
          <div className="flex items-center gap-3 px-6 py-5">
            <img src={lightningIcon} alt="AI" className="w-5 h-5" />
            <span>AI Generated SOAP Notes</span>
          </div>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-10">

          {/* LEFT COLUMN */}
          <div className="bg-[#FFF1EE] rounded-2xl p-6 inter-400 text-sm leading-relaxed text-gray-700 italic">
            <p>
              “Four-year-old spayed female Golden Retriever, here for right ear
              scratching about a week, worse last few days. Eating and drinking
              fine. No lethargy. No prior chronic ear issues.
              <br /><br />
              Right ear canal mildly erythematous with moderate ceruminous debris.
              Left ear normal. Heart and lungs normal. Looks like mild right
              otitis externa.
              <br /><br />
              We’ll clean the ear today and start topical otic medication twice
              daily for seven days. Recheck if not improving.”
            </p>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-8 text-sm inter-500 text-gray-700">

            {/* SUBJECTIVE */}
            <div>
              <h4 className="flex items-center gap-3 font-semibold mb-3">
                <img src={searchIcon} alt="Subjective" className="w-5 h-5" />
                Subjective
              </h4>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>4-year-old spayed female Golden Retriever</li>
                <li>Right ear scratching × 1 week</li>
                <li>Eating and drinking normally</li>
                <li>No lethargy</li>
                <li>No chronic ear disease</li>
              </ul>
            </div>

            {/* OBJECTIVE */}
            <div>
              <h4 className="flex items-center gap-3 font-semibold mb-3">
                <img src={objectiveIcon} alt="Objective" className="w-5 h-5" />
                Objective
              </h4>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Right ear canal mildly erythematous</li>
                <li>Moderate ceruminous debris</li>
                <li>Left ear within normal limits</li>
                <li>Heart and lungs auscultated normally</li>
              </ul>
            </div>

            {/* ASSESSMENT */}
            <div>
              <h4 className="flex items-center gap-3 font-semibold mb-3">
                <img src={assessmentIcon} alt="Assessment" className="w-5 h-5" />
                Assessment
              </h4>
              <ul className="list-disc list-inside text-gray-600">
                <li>Mild right otitis externa</li>
              </ul>
            </div>

            {/* PLAN */}
            <div>
              <h4 className="flex items-center gap-3 font-semibold mb-3">
                <img src={planIcon} alt="Plan" className="w-5 h-5" />
                Plan
              </h4>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Clean right ear canal today</li>
                <li>Topical otic medication BID × 7 days</li>
                <li>Recheck if not improving</li>
              </ul>
            </div>

          </div>
        </div>

        {/* FLOATING BOTTOM BANNER */}
        <div className="absolute hidden sm:block left-1/2 -bottom-7 -translate-x-1/2 bg-[#FFCEC4] px-8 py-4 rounded-full shadow-md text-sm font-medium text-center">
          Editable. Reviewable. Saved directly to the patient record.
        </div>
      </div>

      {/* FOOTNOTE */}
      <p className="mt-16 text-center text-xs text-gray-500">
        Displayed for illustration purposes. Final notes follow your clinic’s formatting.
      </p>
    </section>
  );
};

export default SoapNotesPreview;
