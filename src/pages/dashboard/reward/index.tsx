import Sidebar from "@/components/Sidebar";
import Button from "@/components/ui/Button";
import { Heading, Paragraph } from "@/components/ui/typography";

export default function Reward() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="ml-64 w-full p-6 space-y-10">
        <section className="w-full flex justify-between items-center">
          <div>
            <Heading as="h3" className="text-2xl font-bold mb-2">
              Hi, Verstappen!
            </Heading>
            <Paragraph>Monday, September 09, 2024</Paragraph>
          </div>
          <img src="/images/ryo.svg" loading="lazy" alt="profile" />
        </section>
        <section className="grid grid-cols-2 bg-blue-600 py-20 rounded-xl relative">
          <div className="flex flex-col items-center justify-center">
            <Paragraph className="text-white">Current Points</Paragraph>
            <Paragraph className="text-white text-2xl">2344</Paragraph>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Paragraph className="text-white">Today's Points</Paragraph>
            <Paragraph className="text-white text-2xl">213</Paragraph>
          </div>
          <div className="absolute top-1/2 left-1/2 h-4/5 bg-white w-px transform -translate-y-1/2"></div>
        </section>
        <section>
          <Heading as="h3">Recommended rewards</Heading>
          <div className="grid grid-cols-2 gap-5">
            <div className="border rounded-md p-3 flex flex-row gap-5">
              <div>
                <img src="/images/ryo.svg" loading="lazy" alt="profile" />
              </div>
              <div>
                <Heading as="h4">Complete Stationery</Heading>
                <Paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Rerum, perferendis.
                </Paragraph>
                <Button className="rounded-md py-1 text-md">750pts</Button>
              </div>
            </div>
            <div className="border rounded-md p-3 flex flex-row gap-5">
              <div>
                <img src="/images/ryo.svg" loading="lazy" alt="profile" />
              </div>
              <div>
                <Heading as="h4">Complete Stationery</Heading>
                <Paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Rerum, perferendis.
                </Paragraph>
                <Button className="rounded-md py-1 text-md">750pts</Button>
              </div>
            </div>
            <div className="border rounded-md p-3 flex flex-row gap-5">
              <div>
                <img src="/images/ryo.svg" loading="lazy" alt="profile" />
              </div>
              <div>
                <Heading as="h4">Complete Stationery</Heading>
                <Paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Rerum, perferendis.
                </Paragraph>
                <Button className="rounded-md py-1 text-md">750pts</Button>
              </div>
            </div>
            <div className="border rounded-md p-3 flex flex-row gap-5">
              <div>
                <img src="/images/ryo.svg" loading="lazy" alt="profile" />
              </div>
              <div>
                <Heading as="h4">Complete Stationery</Heading>
                <Paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Rerum, perferendis.
                </Paragraph>
                <Button className="rounded-md py-1 text-md">750pts</Button>
              </div>
            </div>
            <div className="border rounded-md p-3 flex flex-row gap-5">
              <div>
                <img src="/images/ryo.svg" loading="lazy" alt="profile" />
              </div>
              <div>
                <Heading as="h4">Complete Stationery</Heading>
                <Paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Rerum, perferendis.
                </Paragraph>
                <Button className="rounded-md py-1 text-md">750pts</Button>
              </div>
            </div>
            <div className="border rounded-md p-3 flex flex-row gap-5">
              <div>
                <img src="/images/ryo.svg" loading="lazy" alt="profile" />
              </div>
              <div>
                <Heading as="h4">Complete Stationery</Heading>
                <Paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Rerum, perferendis.
                </Paragraph>
                <Button className="rounded-md py-1 text-md">750pts</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
