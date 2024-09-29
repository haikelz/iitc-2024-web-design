import Sidebar from "@/components/Sidebar";
import Button from "@/components/ui/Button";
import { Heading, Paragraph } from "@/components/ui/typography";
import { Pencil } from "lucide-react";

export default function Profile() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="ml-64 w-full p-6 space-y-10">
        <section className="bg-white p-8 rounded-lg border border-gray-300">
          <div className="flex justify-start items-start space-x-4">
            <img
              src="/images/ryo.svg"
              alt="profile"
              className="border-2 w-24 h-24 border-blue-400 rounded-full"
            />
            <div>
              <Paragraph className="font-bold text-3xl">Verstappen</Paragraph>
              <Paragraph className="text-xl">Grade 12</Paragraph>
            </div>
          </div>
        </section>
        <section className="p-8 bg-white border rounded-lg border-gray-300">
          <div className="w-full flex justify-between items-center">
            <Heading as="h3">Personal Information</Heading>
            <Button className="rounded-lg flex justify-center items-center space-x-4">
              <Paragraph className="text-white font-bold">Edit</Paragraph>
              <Pencil />
            </Button>
          </div>
          <div className="flex space-x-20 justify-start mt-8 items-start">
            <div className="space-y-4">
              <div>
                <Paragraph className="font-normal">Fullname</Paragraph>
                <Paragraph className="font-bold">Verstappen</Paragraph>
              </div>
              <div>
                <Paragraph className="font-normal">Email address</Paragraph>
                <Paragraph className="font-bold">
                  maxverstappen@gmail.com
                </Paragraph>
              </div>
              <div>
                <Paragraph className="font-normal">Bio</Paragraph>
                <Paragraph className="font-bold">
                  #editorberkelas #salaminteraksi #salamsehat #fbpro
                </Paragraph>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <Paragraph className="font-normal">Grade</Paragraph>
                <Paragraph className="font-bold">12</Paragraph>
              </div>
              <div>
                <Paragraph className="font-normal">Phone</Paragraph>
                <Paragraph className="font-bold">+62 8126 6432 301</Paragraph>
              </div>
              <div>
                <Paragraph className="font-normal">School</Paragraph>
                <Paragraph className="font-bold">
                  Xaverius High School
                </Paragraph>
              </div>
            </div>
          </div>
        </section>
        <section className="p-6 bg-white border rounded-lg border-gray-300">
          <Heading as="h3">Learning Progress</Heading>
          <div className="space-y-5 w-full mt-8">
            <div>
              <Paragraph className="font-bold">Atomic Structure</Paragraph>
              <div className="flex justify-center items-center space-x-5">
                <div className="w-full bg-gray-300 mt-2 rounded-full h-4">
                  <div className="bg-green-500 w-[75%] h-4 rounded-full"></div>
                </div>
                <Paragraph className="font-bold">75%</Paragraph>
              </div>
            </div>
            <div>
              <Paragraph className="font-bold">
                Ancient World Civilizations
              </Paragraph>
              <div className="flex justify-center items-center space-x-5">
                <div className="w-full bg-gray-300 mt-2 rounded-full h-4">
                  <div className="bg-green-500 w-full h-4 rounded-full"></div>
                </div>
                <Paragraph className="font-bold">100%</Paragraph>
              </div>
            </div>
            <div>
              <Paragraph className="font-bold">Simple Past Tense</Paragraph>
              <div className="flex justify-start items-center space-x-5">
                <div className="w-full bg-gray-300 mt-2 rounded-full h-4">
                  <div className="bg-red-500 w-[25%] h-4 rounded-full"></div>
                </div>
                <Paragraph className="font-bold">25%</Paragraph>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
