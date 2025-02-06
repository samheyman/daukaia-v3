export default function Legal() {
  return (
    <section className="flex mx-auto w-[calc(100%-0.75rem)] lg:w-[min(1200px,(100%-4rem))] flex-col my-8 pt-4 pb-8 min-h-screen">
      <h1 className="text-2xl font-semibold mt-8">Terms of Donations</h1>
      <p className="mt-4 mb-2">
        Welcome to Daukaia Norge! These Terms of Donations govern your
        contributions made through our website (
        <a href="https://daukaia-v3.vercel.app">
          https://daukaia-v3.vercel.app
        </a>
        ). By making a donation, you agree to these terms.
      </p>
      <ol className="list-decimal list-inside ">
        <li className="my-4 font-bold">
          General Terms
          <ul>
            <li className="font-normal ps-5 mt-2 space-y-1 list-disc list-inside">
              These Terms of Donations apply to all one-time and recurring
              contributions made on our website. We reserve the right to update
              these terms at any time.
            </li>
          </ul>
        </li>
        <li className="my-4 font-bold">
          Donations and Payments
          <ul>
            <li className="font-normal ps-5 mt-2 space-y-1 list-disc list-inside">
              All donations are made in NOK (Norwegian Krone) and may be subject
              to transaction fees.{" "}
            </li>
            <li className="font-normal ps-5 mt-2 space-y-1 list-disc list-inside">
              Payments must be completed using one of the accepted payment
              methods.{" "}
            </li>
            <li className="font-normal ps-5 mt-2 space-y-1 list-disc list-inside">
              Donations are voluntary and non-refundable.{" "}
            </li>
            <li className="font-normal ps-5 mt-2 space-y-1 list-disc list-inside">
              We reserve the right to change the suggested donation amounts at
              any time.
            </li>
          </ul>
        </li>
        <li className="my-4 font-bold">
          Donation Confirmation
          <ul>
            <li className="font-normal ps-5 mt-2 space-y-1 list-disc list-inside">
              Once a donation is made, you will receive an email confirmation.
            </li>
            <li className="font-normal ps-5 mt-2 space-y-1 list-disc list-inside">
              If there is an issue with the payment, please contact us at
              <a href="mailto:hola@daukaia.org">hola@daukaia.org</a>.
            </li>
          </ul>
        </li>
        <li className="my-4 font-bold">
          Recurring Donations
          <ul>
            <li className="font-normal ps-5 mt-2 space-y-1 list-disc list-inside">
              If you choose a monthly donation, you authorize recurring
              payments.
            </li>
            <li className="font-normal ps-5 mt-2 space-y-1 list-disc list-inside">
              You may cancel your recurring donation at any time through your
              account or by contacting us.
            </li>
          </ul>
        </li>
        <li className="my-4 font-bold">
          Use of Donations
          <ul>
            <li className="font-normal ps-5 mt-2 space-y-1 list-disc list-inside">
              All donations will be used to support Daukaia Norge’s mission and
              initiatives.
            </li>
            <li className="font-normal ps-5 mt-2 space-y-1 list-disc list-inside">
              We will ensure transparency in how donations are utilized.
            </li>
          </ul>
        </li>
        <li className="my-4 font-bold">
          Limitation of Liability
          <ul>
            <li className="font-normal ps-5 mt-2 space-y-1 list-disc list-inside">
              We are not liable for indirect damages, lost profits, or
              consequential damages arising from your donation.
            </li>
            <li className="font-normal ps-5 mt-2 space-y-1 list-disc list-inside">
              Our maximum liability is limited to the amount of your donation.
            </li>
          </ul>
        </li>
        <li className="my-4 font-bold">
          Governing Law and Disputes
          <ul>
            <li className="font-normal ps-5 mt-2 space-y-1 list-disc list-inside">
              These Terms of Donations are governed by Norwegian law.
            </li>
            <li className="font-normal ps-5 mt-2 space-y-1 list-disc list-inside">
              Any disputes will be resolved through Norwegian courts unless
              otherwise agreed.
            </li>
          </ul>
        </li>
      </ol>
      <p className="my-4">
        For any questions or assistance, contact us at{" "}
        <a href="mailto:hola@daukaia.org">hola@daukaia.org</a>.
      </p>

      <p className="my-4">Thank you for supporting Daukaia Norge!</p>
    </section>
  );
}
