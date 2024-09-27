import { Heading, Paragraph } from "@/components/ui/typography";

export default function Raport() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-3xl p-8 bg-white rounded shadow-md">
        <div className="text-center mb-10">
          <Heading as="h2">Result</Heading>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <Paragraph>Atomic Model History Quiz</Paragraph>
              <Paragraph className="bg-teal-500 text-white px-3 py-1 rounded text-sm w-fit">
                Excellent
              </Paragraph>
            </div>
            <Paragraph className="text-teal-500 font-semibold text-lg">
              90%
            </Paragraph>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <Paragraph>Bohr Atomic Model Quiz</Paragraph>
              <Paragraph className="bg-yellow-500 text-white px-3 py-1 rounded text-sm w-fit">
                Fair
              </Paragraph>
            </div>
            <Paragraph className="text-yellow-500 font-semibold text-lg">
              65%
            </Paragraph>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <Paragraph>Electron Configuration Quiz</Paragraph>
              <Paragraph className="bg-red-500 text-white px-3 py-1 rounded text-sm w-fit">
                Poor
              </Paragraph>
            </div>
            <Paragraph className="text-red-500 font-semibold text-lg">
              57%
            </Paragraph>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <Paragraph>Final Atomic Structure Test</Paragraph>
              <Paragraph className="bg-teal-500 text-white px-3 py-1 rounded text-sm w-fit">
                Excellent
              </Paragraph>
            </div>
            <Paragraph className="text-teal-500 font-semibold text-lg">
              92%
            </Paragraph>
          </div>
        </div>

        <div className="mt-10">
          <a
            href="/dashboard/course"
            className="flex justify-center rounded bg-metallicBlue text-xl px-6 py-2 text-white font-bold"
          >
            Back to course
          </a>
        </div>
      </div>
    </main>
  );
}
