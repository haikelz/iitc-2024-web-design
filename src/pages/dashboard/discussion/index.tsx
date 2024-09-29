import DashboardLayout from "@/components/DashboardLayout";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { Heading, Paragraph } from "@/components/ui/typography";
import { Heart, MessageCircleMore, PenLine, SearchIcon } from "lucide-react";

export default function Discussion() {
  return (
    <DashboardLayout>
      <section className="flex gap-6">
        <div className="w-3/4">
          <section className="flex gap-6 mb-6">
            <div className="flex w-full justify-between items-center">
              <div className="relative w-full flex justify-center items-center">
                <SearchIcon className="absolute text-gray-600 left-3" />
                <Input
                  type="text"
                  placeholder="Find the materials you need"
                  className="w-full py-4 rounded-md pl-12 outline-none border-gray-300"
                />
                <div className="absolute text-sm right-3 font-bold rounded-md py-2 px-2 bg-gray-300">
                  Search
                </div>
              </div>
            </div>
            <Button className="flex items-center rounded-md">
              <PenLine className="mr-3" />
              Create
            </Button>
          </section>
          <section className="flex flex-col gap-6">
            <div className="border p-5 rounded-md bg-white flex-col">
              <Heading as="h3" className="mb-3">
                Atomic Constituent Particles
              </Heading>
              <div className="flex justify-between">
                <div className="flex flex-row gap-3">
                  <div className="h-16 w-16">
                    <img
                      src="/images/sakura.jpeg"
                      alt=""
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <Heading as="h4">Sakura Yamauchi</Heading>
                    <div>17h ago</div>
                  </div>
                </div>
                <div className="flex flex-row gap-3">
                  <Button className="rounded-md h-10 text-blue-600 border-blue-700 border-2 bg-blue-200 flex items-center">
                    Science
                  </Button>
                  <Button className="rounded-md h-10 text-blue-700 border-blue-700 border-2 bg-blue-200 flex items-center">
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
                Electron Configuration
              </Heading>
              <div className="flex justify-between">
                <div className="flex flex-row gap-3">
                  <div className="h-16 w-16">
                    <img
                      src="/images/ayane.jpeg"
                      alt=""
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <Heading as="h4">Ayane satou</Heading>
                    <div>3d ago</div>
                  </div>
                </div>
                <div className="flex flex-row gap-3">
                  <Button className="rounded-md h-10 text-purple-600 border-purple-700 border-2 bg-purple-200 flex items-center">
                    Science
                  </Button>
                  <Button className="rounded-md h-10 text-purple-700 border-purple-600 border-2 bg-purple-200 flex items-center">
                    Grade 11
                  </Button>
                </div>
              </div>
              <div className="my-3">
                <Paragraph>Hi Guys,</Paragraph>
                <Paragraph>
                  How does the electron configuration affect the chemical
                  properties of an element, specifically in bond formation?
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
                Quantum Theory and Wave Mechanics Models
              </Heading>
              <div className="flex justify-between">
                <div className="flex flex-row gap-3">
                  <div className="h-16 w-16">
                    <img
                      src="/images/sankarea.jpeg"
                      alt=""
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <Heading as="h4">Sankarea</Heading>
                    <div>1d ago</div>
                  </div>
                </div>
                <div className="flex flex-row gap-3">
                  <Button className="rounded-md h-10 text-orange-600 border-orange-700 border-2 bg-orange-200 flex items-center">
                    Science
                  </Button>
                  <Button className="rounded-md h-10 text-orange-600 border-orange-700 border-2 bg-orange-200 flex items-center">
                    Grade 10
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
                  <Paragraph className="font-bold">19</Paragraph>
                </Button>
              </div>
            </div>
          </section>
        </div>
        <aside className="w-1/4 p-6 bg-white border rounded-2xl break-words">
          <Heading as="h3">Top Discussion</Heading>
          <div className="space-y-5 mt-6 mb-8">
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
                3. Atomic Quantum Theory and Relativity
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
          <div className="border-b border-gray-300 mb-8"></div>
          <Heading as="h3" className="mt-6">
            Latest Discussion
          </Heading>
          <div className="space-y-5 mt-6">
            <div className="overflow-hidden overflow-ellipsis whitespace-nowrap">
              <Paragraph className="truncate font-bold">
                1. Biotechnology and Its...
              </Paragraph>
              <Paragraph className="text-base">26 Replies</Paragraph>
            </div>
            <div className="overflow-hidden overflow-ellipsis whitespace-nowrap">
              <Paragraph className="truncate font-bold">
                2. Cell Structure and Function
              </Paragraph>
              <Paragraph className="text-base">71 Replies</Paragraph>
            </div>
            <div className="overflow-hidden overflow-ellipsis whitespace-nowrap">
              <Paragraph className="truncate font-bold">
                3. History of the Ancient World
              </Paragraph>
              <Paragraph className="text-base">33 Replies</Paragraph>
            </div>
            <div className="overflow-hidden overflow-ellipsis whitespace-nowrap">
              <Paragraph className="truncate font-bold">
                4. Review of Old Poems
              </Paragraph>
              <Paragraph className="text-base">44 Replies</Paragraph>
            </div>
            <div className="overflow-hidden overflow-ellipsis whitespace-nowrap">
              <Paragraph className="truncate font-bold">
                5. Phonology and Phonetics
              </Paragraph>
              <Paragraph className="text-base">67 Replies</Paragraph>
            </div>
          </div>
        </aside>
      </section>
    </DashboardLayout>
  );
}
