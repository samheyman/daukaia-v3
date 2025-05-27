export default function DonorBoxForm() {
  return (
    <div className="flex flex-col items-center w-[420px] h-fit ">
      <iframe
        src="https://donorbox.org/embed/daukaia?"
        name="donorbox"
        // allowpaymentrequest={true}
        seamless={true}
        frameBorder="0"
        scrolling="no"
        height="900px"
        width="420px"
        // style="max-width: 500px; min-width: 250px; max-height:none!important"
        allow="payment"
      ></iframe>
    </div>
  );
}
