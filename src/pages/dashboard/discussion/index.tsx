import DashboardLayout from "@/components/DashboardLayout";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { Heading, Paragraph } from "@/components/ui/typography";
import { Heart, MessageCircleMore, PenLine, SearchIcon } from "lucide-react";

export default function Discussion() {
  return (
    <DashboardLayout>
      <section className="flex gap-3">
        <div className="w-3/4">
          <section className="flex gap-3 mb-3">
            <div className="flex w-full justify-between items-center">
              <div className="relative w-full flex justify-center items-center">
                <SearchIcon className="absolute text-gray-600 left-3" />
                <Input
                  type="text"
                  placeholder="Find the materials you need"
                  className="w-full py-2 rounded-md pl-12 outline-none border-gray-300"
                />
                <div className="absolute text-xs right-3 font-bold rounded-md py-1 px-2 bg-gray-300">
                  Search
                </div>
              </div>
            </div>
            <Button className="flex items-center rounded-md">
              <PenLine className="mr-3" />
              Create
            </Button>
          </section>
          <section className="flex flex-col gap-3">
            <div className="border p-5 rounded-md bg-white flex-col">
              <Heading as="h3" className="mb-3">
                Atomic Constituent Particles
              </Heading>
              <div className="flex justify-between">
                <div className="flex flex-row gap-3">
                  <div>
                    <img src="/images/ryo.svg" alt="" />
                  </div>
                  <div>
                    <Heading as="h4">Sakura</Heading>
                    <div>17h ago</div>
                  </div>
                </div>
                <div className="flex flex-row gap-3">
                  <Button className="rounded-md h-10 text-[#1a56db] border-[#1a56db] border-2 bg-[#c3ddfd] flex items-center">
                    Science
                  </Button>
                  <Button className="rounded-md h-10 text-[#1a56db] border-[#1a56db] border-2 bg-[#c3ddfd] flex items-center">
                    Grade 12
                  </Button>
                </div>
              </div>
              <div className="my-3">
                <Paragraph>Hi Guys,</Paragraph>
                <Paragraph>
                  Why are electrons always outside the nucleus of an atom, while
                  protons and neutrons are inside the nucleus
                </Paragraph>
              </div>
              <div className="flex flex-row gap-3">
                <Button className="flex rounded-md bg-[#e5e7eb] text-black">
                  <MessageCircleMore className="mr-3" />
                  Add Response
                </Button>
                <Button className="rounded-md bg-[#e5e7eb] text-black flex justify-center items-center space-x-3">
                  <Heart className="fill-red-500 stroke-red-500" />
                  <Paragraph className="font-bold">12</Paragraph>
                </Button>
              </div>
            </div>
            <div className="border p-5 rounded-md bg-white flex-col">
              <Heading as="h3" className="mb-3">
                Atomic Constituent Particles
              </Heading>
              <div className="flex justify-between">
                <div className="flex flex-row gap-3">
                  <div>
                    <img src="/images/ryo.svg" alt="" />
                  </div>
                  <div>
                    <Heading as="h4">Sakura</Heading>
                    <div>17h ago</div>
                  </div>
                </div>
                <div className="flex flex-row gap-3">
                  <Button className="rounded-md h-10 text-[#1a56db] border-[#1a56db] border-2 bg-[#c3ddfd] flex items-center">
                    Science
                  </Button>
                  <Button className="rounded-md h-10 text-[#1a56db] border-[#1a56db] border-2 bg-[#c3ddfd] flex items-center">
                    Grade 12
                  </Button>
                </div>
              </div>
              <div className="my-3">
                <Paragraph>Hi Guys,</Paragraph>
                <Paragraph>
                  Why are electrons always outside the nucleus of an atom, while
                  protons and neutrons are inside the nucleus
                </Paragraph>
              </div>
              <div className="flex flex-row gap-3">
                <Button className="flex rounded-md bg-[#e5e7eb] text-black">
                  <MessageCircleMore className="mr-3" />
                  Add Response
                </Button>
                <Button className="rounded-md bg-[#e5e7eb] text-black flex justify-center items-center space-x-3">
                  <Heart className="fill-red-500 stroke-red-500" />
                  <Paragraph className="font-bold">27</Paragraph>
                </Button>
              </div>
            </div>
            <div className="border p-5 rounded-md bg-white flex-col">
              <Heading as="h3" className="mb-3">
                Atomic Constituent Particles
              </Heading>
              <div className="flex justify-between">
                <div className="flex flex-row gap-3">
                  <div>
                    <img src="/images/ryo.svg" alt="" />
                  </div>
                  <div>
                    <Heading as="h4">Sakura</Heading>
                    <div>17h ago</div>
                  </div>
                </div>
                <div className="flex flex-row gap-3">
                  <Button className="rounded-md h-10 text-[#1a56db] border-[#1a56db] border-2 bg-[#c3ddfd] flex items-center">
                    Science
                  </Button>
                  <Button className="rounded-md h-10 text-[#1a56db] border-[#1a56db] border-2 bg-[#c3ddfd] flex items-center">
                    Grade 12
                  </Button>
                </div>
              </div>
              <div className="my-3">
                <Paragraph>Hi Guys,</Paragraph>
                <Paragraph>
                  Why are electrons always outside the nucleus of an atom, while
                  protons and neutrons are inside the nucleus
                </Paragraph>
              </div>
              <div className="flex flex-row gap-3">
                <Button className="flex rounded-md bg-[#e5e7eb] text-black">
                  <MessageCircleMore className="mr-3" />
                  Add Response
                </Button>
                <Button className="rounded-md bg-[#e5e7eb] text-black flex justify-center items-center space-x-3">
                  <Heart className="fill-red-500 stroke-red-500" />
                  <Paragraph className="font-bold">27</Paragraph>
                </Button>
              </div>
            </div>
          </section>
        </div>
        <aside className="w-1/4 p-6 bg-white border rounded-2xl break-words">
          <Heading as="h3">Top Discussion</Heading>
          <div className="space-y-5 mt-6">
            <div className="overflow-hidden overflow-ellipsis whitespace-nowrap">
              <Paragraph className="truncate font-bold">
                1. Atomic Constituent Particles
              </Paragraph>
              <Paragraph className="text-base">1069 Replies</Paragraph>
            </div>
            <div className="overflow-hidden overflow-ellipsis whitespace-nowrap">
              <Paragraph className="truncate font-bold">
                2. Electron Configuration
              </Paragraph>
              <Paragraph className="text-base">776 Replies</Paragraph>
            </div>
            <div className="overflow-hidden overflow-ellipsis whitespace-nowrap">
              <Paragraph className="truncate font-bold">
                3. Atonic Quantum Theory and Relativity
              </Paragraph>
              <Paragraph className="text-base">1069 Replies</Paragraph>
            </div>
            <div className="overflow-hidden overflow-ellipsis whitespace-nowrap">
              <Paragraph className="truncate font-bold">
                4. Gravitational Time Dilatation
              </Paragraph>
              <Paragraph className="text-base">452 Replies</Paragraph>
            </div>
            <div className="overflow-hidden overflow-ellipsis whitespace-nowrap">
              <Paragraph className="truncate font-bold">
                5. Einstein's Field Equation
              </Paragraph>
              <Paragraph className="text-base">107 Replies</Paragraph>
            </div>
          </div>
        </aside>
      </section>
    </DashboardLayout>
  );
}
