import { Mail, MapPin, Phone } from "lucide-react";
import Button from "./ui/Button";
import { Heading, Paragraph } from "./ui/typography";

export default function Contact() {
  return (
    <section className="w-full p-8 flex space-x-10">
      <div className="flex-none bg-darkSlateGray rounded-xl p-10 w-2/5">
        <Heading as="h3" className="text-[32px] text-white">
          Contact Information
        </Heading>
        <Paragraph className="text-white">
          Any ideas or questions? We are here to help and will respond to your
          message as soon as possible
        </Paragraph>
        <div className="my-5 flex flex-row">
          <div className="mt-1">
            <Mail className="text-white" />
          </div>
          <div className="mx-5">
            <Paragraph className="text-white">Chat to us</Paragraph>
            <Paragraph className="text-white">edukel@gmail.com</Paragraph>
          </div>
        </div>
        <div className="my-5 flex flex-row">
          <div className="mt-1">
            <Phone className="text-white" />
          </div>
          <div className="mx-5">
            <Paragraph className="text-white">Call us</Paragraph>
            <Paragraph className="text-white">+62 812 6573 7369</Paragraph>
          </div>
        </div>
        <div className="my-5 flex flex-row">
          <div className="mt-1">
            <MapPin className="text-white" />
          </div>
          <div className="mx-5">
            <Paragraph className="text-white">Visit us</Paragraph>
            <Paragraph className="text-white">
              Kertosono, Kabupaten Nganjuk
            </Paragraph>
          </div>
        </div>
      </div>
      <div className="flex-grow p-5">
        <div className="space-y-7">
          <div className="grid grid-cols-2 gap-20">
            <div className="flex flex-col space-y-2">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className="border-b-2 border-[#19535f]"
                placeholder="Max"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                className="border-b-2 border-[#19535f]"
                placeholder="Max"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-20">
            <div className="flex flex-col space-y-2">
              <label htmlFor="email">Mail</label>
              <input
                type="email"
                className="border-b-2 border-[#19535f]"
                placeholder="Max"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                className="border-b-2 border-[#19535f]"
                placeholder="Max"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="message">Message</label>
            <input
              type="text"
              className="border-b-2 border-[#19535f]"
              placeholder="Max"
            />
          </div>
        </div>
        <div className="flex justify-end mt-20">
          <Button className="py-4 px-8 rounded-md">Send Message</Button>
        </div>
      </div>
    </section>
  );
}
