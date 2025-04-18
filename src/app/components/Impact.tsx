import { newsreader } from "../fonts";

export default function Impact() {
  return (
    <section className="mx-auto flex w-[calc(100%-0.75rem)] lg:w-[min(1200px,(100%-4rem))] flex-col my-12">
      <div className="flex lg:flex-row what-we-do flex-col-reverse items-end">
        <div className="mx-0 lg:w-1/2">
          <h1 className={`${newsreader.className} text-6xl mt-4 mb-6`}>
            Impact
          </h1>
          <p className="text-base my-4">So far, we have: </p>
          <ul>
            <li>
              <span className="font-bold block">
                Empowered over 500 children
              </span>
              Through our educational programs and community support, we have
              provided over 500 children in Ocotal with the tools and confidence
              to pursue their dreams and create their own life stories.
            </li>
            <li>
              <span className="font-bold block">
                Increased educational engagement
              </span>
              Our safe learning environment and educational support have
              significantly improved school attendance and academic performance,
              fostering a love for learning and growth. 65% of beneficiaries
              achieve top grades as a result of our work.
            </li>
            <li>
              <span className="font-bold block">
                Improved quality of education
              </span>
              We have engaged 34 international volunteers, supported our local
              team with pedagogical tools and trained around 50 teachers in
              several local schools, enhancing educational quality for over
              1,000 students and broadening our community impact.
            </li>
            <li>
              <span className="font-bold block">
                Promoted health, nutrition, and well-being
              </span>
              We&apos;ve implemented programs that ensure access to nutritious
              meals, healthcare, and hygiene education, improving the overall
              well-being of children and their families.
            </li>
            <li>
              <span className="font-bold block">
                Strengthened community bonds
              </span>
              By creating spaces where families can connect and support one
              another, we&apos;ve built a strong, resilient community that works
              together to overcome challenges and nurture its young generation.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
