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
            <div className="bg-gray-50 rounded-lg h-fit">
              <img src="/images/ryo.svg" loading="lazy" alt="profile" />
            </div>
            <div>
              <Heading as="h4" className="text-2xl">
                Complete Stationery
              </Heading>
              <Paragraph className="mt-2">
                Quality stationery that is ideal for writing diaries or
                schoolwork. Comfortable to hold, provides smooth and sharp
                lines.
              </Paragraph>
              <Button className="rounded-md py-1 mt-6 text-md">750pts</Button>
            </div>
          </div>
          <div className="border rounded-md bg-white p-3 flex flex-row gap-5">
            <div className="bg-gray-50 rounded-lg h-fit">
              <img src="/images/ryo.svg" loading="lazy" alt="profile" />
            </div>
            <div>
              <Heading as="h4" className="text-2xl">
                Complete Stationery
              </Heading>
              <Paragraph className="mt-2">
                Quality stationery that is ideal for writing diaries or
                schoolwork. Comfortable to hold, provides smooth and sharp
                lines.
              </Paragraph>
              <Button className="rounded-md py-1 mt-6 text-md">750pts</Button>
            </div>
          </div>
          <div className="border rounded-md bg-white p-3 flex flex-row gap-5">
            <div className="bg-gray-50 rounded-lg h-fit">
              <img src="/images/ryo.svg" loading="lazy" alt="profile" />
            </div>
            <div>
              <Heading as="h4" className="text-2xl">
                Complete Stationery
              </Heading>
              <Paragraph className="mt-2">
                Quality stationery that is ideal for writing diaries or
                schoolwork. Comfortable to hold, provides smooth and sharp
                lines.
              </Paragraph>
              <Button className="rounded-md py-1 mt-6 text-md">750pts</Button>
            </div>
          </div>
          <div className="border rounded-md bg-white p-3 flex flex-row gap-5">
            <div className="bg-gray-50 rounded-lg h-fit">
              <img src="/images/ryo.svg" loading="lazy" alt="profile" />
            </div>
            <div>
              <Heading as="h4" className="text-2xl">
                Complete Stationery
              </Heading>
              <Paragraph className="mt-2">
                Quality stationery that is ideal for writing diaries or
                schoolwork. Comfortable to hold, provides smooth and sharp
                lines.
              </Paragraph>
              <Button className="rounded-md py-1 mt-6 text-md">750pts</Button>
            </div>
          </div>
          <div className="border rounded-md bg-white p-3 flex flex-row gap-5">
            <div className="bg-gray-50 rounded-lg h-fit">
              <img src="/images/ryo.svg" loading="lazy" alt="profile" />
            </div>
            <div>
              <Heading as="h4" className="text-2xl">
                Complete Stationery
              </Heading>
              <Paragraph className="mt-2">
                Quality stationery that is ideal for writing diaries or
                schoolwork. Comfortable to hold, provides smooth and sharp
                lines.
              </Paragraph>
              <Button className="rounded-md py-1 mt-6 text-md">750pts</Button>
            </div>
          </div>
          <div className="border rounded-md bg-white p-3 flex flex-row gap-5">
            <div className="bg-gray-50 rounded-lg h-fit">
              <img src="/images/ryo.svg" loading="lazy" alt="profile" />
            </div>
            <div>
              <Heading as="h4" className="text-2xl">
                Complete Stationery
              </Heading>
              <Paragraph className="mt-2">
                Quality stationery that is ideal for writing diaries or
                schoolwork. Comfortable to hold, provides smooth and sharp
                lines.
              </Paragraph>
              <Button className="rounded-md py-1 mt-6 text-md">750pts</Button>
            </div>
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
}
