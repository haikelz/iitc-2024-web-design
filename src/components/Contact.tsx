import { Heading, Paragraph } from "./ui/typography";

export default function Contact() {
  return (
    <section className="w-full px-8">
      <div className="bg-darkSlateGray">
        <Heading as="h3" className="text-[32px] text-white">
          Contact Information
        </Heading>
        <Paragraph>
          Any ideas or questions? We are here to help and will respond to your
          message as soon as possible
        </Paragraph>
      </div>
      <div>
        <div>
          <Paragraph>edukel@gmail.com</Paragraph>
        </div>
        <div>
          <Paragraph>+62 812 6573 7369</Paragraph>
        </div>
        <div>
          <Paragraph>Kertosono, Kabupaten Nganjuk</Paragraph>
        </div>
      </div>
    </section>
  );
}
