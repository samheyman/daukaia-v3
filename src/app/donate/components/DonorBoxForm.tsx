export default function DonorBoxForm() {
  return (
    <div className="flex flex-col lg:items-end lg:mx-auto w-full lg:w-[600px] ">
      <iframe
        src="https://donorbox.org/embed/daukaia?"
        name="donorbox"
        // allowpaymentrequest={true}
        seamless={true}
        frameBorder="0"
        scrolling="no"
        height="900px"
        width="500px"
        // style="max-width: 500px; min-width: 250px; max-height:none!important"
        allow="payment"
      ></iframe>
    </div>
  );
}
