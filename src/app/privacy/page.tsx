export default function Privacy() {
  return (
    <section className="flex mx-auto w-[calc(100%-0.75rem)] lg:w-[min(1200px,(100%-4rem))] flex-col my-8 pt-4 pb-8 min-h-screen">
      <h2 className="text-2xl font-semibold">Privacy Policy, Daukaia Norge </h2>
      <span className="block font-light italic">Last Updated: 04/02/2025</span>
      <p className="mt-4 mb-2">
        Daukaia Norge values your privacy. This Privacy Policy outlines how we
        handle your personal information when you visit our website
        (https://daukaia-v3.vercel.app/) and make a donation.
      </p>
      <ol className="list-decimal list-inside ">
        <li className="my-4 font-bold">
          Data Collection
          <ul>
            <li className="font-normal ps-5 mt-2 space-y-1 list-disc list-inside">
              We only collect the personal information you voluntarily provide
              when making a donation or contacting us.
            </li>
            <li className="font-normal ps-5 mt-2 space-y-1 list-disc list-inside">
              This may include your name, email address, and payment details.
            </li>
            <li className="font-normal ps-5 mt-2 space-y-1 list-disc list-inside">
              We do not use cookies or tracking technologies.
            </li>
          </ul>
        </li>
        <li className="my-4 font-bold">
          Use of Personal Data
          <ul>
            <li className="font-normal ps-5 mt-2 space-y-1 list-disc list-inside">
              We use your information solely to process donations and
              communicate with you regarding your contribution.
            </li>
            <li className="font-normal ps-5 mt-2 space-y-1 list-disc list-inside">
              We do not sell, rent, or share your data with third parties except
              as required by law.
            </li>
          </ul>
        </li>
        <li className="my-4 font-bold">
          Data Storage and Security
          <ul>
            <li className="font-normal ps-5 mt-2 space-y-1 list-disc list-inside">
              We take reasonable steps to protect your personal data.
            </li>
            <li className="font-normal ps-5 mt-2 space-y-1 list-disc list-inside">
              Payment processing is handled by secure third-party providers.
            </li>
          </ul>
        </li>
        <li className="my-4 font-bold">
          Your Rights
          <ul>
            <li className="font-normal ps-5 mt-2 space-y-1 list-disc list-inside">
              You have the right to request access to, correction, or deletion
              of your personal data.
            </li>
            <li className="font-normal ps-5 mt-2 space-y-1 list-disc list-inside">
              To make a request, please contact us at{" "}
              <a href="mailto:hola@daukaia.org">hola@daukaia.org</a>.
            </li>
          </ul>
        </li>
        <li className="my-4 font-bold">
          Changes to This Policy
          <ul>
            <li className="font-normal ps-5 mt-2 space-y-1 list-disc list-inside">
              We may update this Privacy Policy from time to time. Changes will
              be posted on this page.
            </li>
          </ul>
        </li>
      </ol>
      <p className="my-4">
        For any questions or concerns, contact us at{" "}
        <a href="mailto:hola@daukaia.org">hola@daukaia.org</a>.
      </p>
      <p className="my-4">Thank you for supporting Daukaia Norge!</p>
    </section>
  );
}
