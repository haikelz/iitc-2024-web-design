import DashboardLayout from "@/components/DashboardLayout";
import Button from "@/components/ui/Button";
import { Heading, Paragraph } from "@/components/ui/typography";

export default function Reward() {
  return (
    <DashboardLayout>
      <section className="grid grid-cols-2 bg-metallicBlue py-20 rounded-xl relative">
        <div className="flex flex-col items-center justify-center">
          <Paragraph className="text-white text-[32px] leading-relaxed font-bold">
            Current Points
          </Paragraph>
          <Paragraph className="text-white text-[40px] leading-relaxed font-bold">
            2344
          </Paragraph>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Paragraph className="text-white text-[32px] leading-relaxed font-bold">
            Today's Points
          </Paragraph>
          <Paragraph className="text-white text-[40px] leading-relaxed font-bold">
            213
          </Paragraph>
        </div>
        <div className="absolute top-1/2 left-1/2 h-4/5 bg-white w-px transform -translate-y-1/2"></div>
      </section>
      <section>
        <Heading as="h3">Recommended rewards</Heading>
        <div className="grid grid-cols-2 mt-5 gap-5">
          <div className="border rounded-md bg-white p-3 flex flex-row gap-5">
            <div className="bg-gray-50 rounded-lg h-fit w-[500px]">
              <img
                src="/images/pencilcase.png"
                loading="lazy"
                alt="profile"
                className="p-2"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <Heading as="h4" className="text-2xl">
                  Complete stationery
                </Heading>
                <Paragraph className="mt-2">
                  Quality stationery that is ideal for writing diaries or
                  schoolwork. Comfortable to hold, provides smooth sharp lines.
                </Paragraph>
              </div>
              <Button className="rounded-md py-1 mt-6 text-md w-1/4">
                750pts
              </Button>
            </div>
          </div>
          <div className="border rounded-md bg-white p-3 flex flex-row gap-5">
            <div className="bg-gray-50 rounded-lg h-fit w-[500px]">
              <img
                src="/images/calculator.png"
                loading="lazy"
                alt="profile"
                className="p-2"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <Heading as="h4" className="text-2xl">
                  Calculator
                </Heading>
                <Paragraph className="mt-2">
                A portable calculator to make math calculations easier, both for schoolwork and daily work. Functional lightweight
                </Paragraph>
              </div>
              <Button className="rounded-md py-1 mt-6 text-md w-1/4">
                900pts
              </Button>
            </div>
          </div>
          <div className="border rounded-md bg-white p-3 flex flex-row gap-5">
            <div className="bg-gray-50 rounded-lg h-fit w-[500px]">
              <img
                src="/images/paper-envelope.png"
                loading="lazy"
                alt="profile"
                className="p-2"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <Heading as="h4" className="text-2xl">
                  Paper envelope
                </Heading>
                <Paragraph className="mt-2">
                  Elegant paper envelopes for storing important documents. Made
                  of high-quality materials that keep the contents
                </Paragraph>
              </div>
              <Button className="rounded-md py-1 mt-6 text-md w-1/4">
                250pts
              </Button>
            </div>
          </div>
          <div className="border rounded-md bg-white p-3 flex flex-row gap-5">
            <div className="bg-gray-50 rounded-lg h-fit w-[500px]">
              <img
                src="/images/highlighter.png"
                loading="lazy"
                alt="profile"
                className="p-2"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <Heading as="h4" className="text-2xl">
                  Highlighter
                </Heading>
                <Paragraph className="mt-2">
                  Brightly colored highlighter pens to mark important parts of
                  text. It does not penetrate the paper and provides.
                </Paragraph>
              </div>
              <Button className="rounded-md py-1 mt-6 text-md w-1/4">
                300pts
              </Button>
            </div>
          </div>
          <div className="border rounded-md bg-white p-3 flex flex-row gap-5">
            <div className="bg-gray-50 rounded-lg h-fit w-[500px]">
              <img
                src="/images/eraser.png"
                loading="lazy"
                alt="profile"
                className="p-2"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <Heading as="h4" className="text-2xl">
                  Eraser
                </Heading>
                <Paragraph className="mt-2">
                  A gentle eraser that can easily remove pencil strokes without
                  damaging the paper. Durable and effectivedas.
                </Paragraph>
              </div>
              <Button className="rounded-md py-1 mt-6 text-md w-1/4">
                150pts
              </Button>
            </div>
          </div>
          <div className="border rounded-md bg-white p-3 flex flex-row gap-5">
            <div className="bg-gray-50 rounded-lg h-fit w-[500px]">
              <img
                src="/images/sticky-note.png"
                loading="lazy"
                alt="profile"
                className="p-2"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <Heading as="h4" className="text-2xl">
                  Sticky note
                </Heading>
                <Paragraph className="mt-2">
                  Small, self-adhesive notes that are easy to stick on a variety
                  of surfaces. Ideal for creating quick reminders or quick notes
                </Paragraph>
              </div>
              <Button className="rounded-md py-1 mt-6 text-md w-1/4">
                200pts
              </Button>
            </div>
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
}
