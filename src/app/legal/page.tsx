export default function Legal() {
  return (
    <section className="flex mx-auto w-[calc(100%-0.75rem)] lg:w-[min(1200px,(100%-4rem))] flex-col my-8 pt-4 pb-8 min-h-screen">
      <h1 className="text-2xl font-semibold">Legal information</h1>
      <span className="block font-light italic">Last Updated: 04/02/2025</span>

      <div className="my-4 md:max-w-3xl">
        <h2 className="text-lg font-semibold">Daukaia Norge</h2>
        <p className="text-base">
          Daukaia Norge is registered in Norway under the company registration
          number 916 937 288; &Oslash;vre Keisemark 65, 3189 Horten, tel: +47
          907 96 705
        </p>
        <ul className="list-disc pl-4">
          <li>
            <a
              className="underline text-blue-600"
              href="/docs/Daukaia_vedtekter.pdf"
            >
              Vedtekter
            </a>
          </li>
          <li>
            <a
              className="underline text-blue-600"
              href="/docs/Godkjent_vedtak_i_Enhetsregisteret.pdf"
            >
              Godkjent vedtak i enhetsregisteret
            </a>
          </li>
          <li>
            <a
              className="underline text-blue-600"
              href="/docs/Registerutskift_fra_Frivillighetsregisteret.pdf"
            >
              Registerutskrift fra frivillighetsregisteret
            </a>
          </li>
        </ul>
      </div>
      <div className="my-4 md:max-w-3xl">
        <h2 className="text-lg font-semibold">Asociaci&oacute;n Daukaia </h2>
        <p className="text-base">
          Asociaci&oacute;n Daukaia is registered in Spain under the company
          registration number NIF G86642980,inscrita en el Grupo 1 Sección 1
          Número nacional 601941 en el Registro Nacional de Asociaciones, el
          19/02/2013.
        </p>
        <ul className="list-disc pl-4">
          <li>
            <a
              className="underline text-blue-600"
              href="/docs/Acta_fundacional.pdf"
            >
              Acta fundacional
            </a>
          </li>
          <li>
            <a
              className="underline text-blue-600"
              href="/docs/Estatutos Asociacion Daukaia.pdf"
            >
              Estatutos
            </a>
          </li>
          <li>
            <a
              className="underline text-blue-600"
              href="/docs/Resolución_de_inscripción_de_los_nuevos_titulares.pdf"
            >
              Inscripción en el registro de asociaciones
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
