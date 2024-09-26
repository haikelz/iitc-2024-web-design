import { Heading, Paragraph } from "@/components/ui/typography";

export default function DetailMaterial() {
  return (
    <div className="w-full min-h-screen">
      <header className="w-full flex justify-normal px-4 py-5 border-b-gray-300 border items-center">
        <div className="flex justify-center space-x-4 items-center">
          <img src="/images/arrow-left.svg" alt="arrow left" />
          <Heading as="h3">Theory of Relativity</Heading>
        </div>
      </header>
      <div className="flex justify-start items-start w-full">
        <aside className="w-[500px] space-y-4 py-6 px-6 border-r-2 min-h-screen h-full">
          <div className="rounded-md border bg-gray-100 border-gray-300 p-4">
            <Paragraph className="font-bold text-2xl">
              Application of Relativity
            </Paragraph>
            <div className="bg-[#16BDCA] mt-2 rounded-md px-3 w-fit py-1">
              <Paragraph className="text-white text-sm">Complete</Paragraph>
            </div>
          </div>
          <div className="rounded-md border border-gray-300 p-4">
            <Paragraph className="font-bold text-2xl">
              Application of Relativity
            </Paragraph>
            <div className="bg-[#16BDCA] mt-2 rounded-md px-3 w-fit py-1">
              <Paragraph className="text-white text-sm">Complete</Paragraph>
            </div>
          </div>
        </aside>
        <section className="w-full flex py-8 px-6 justify-between flex-col items-start">
          <div className="w-full space-y-7 pb-12">
            <Heading as="h3">Theory of Relativity</Heading>
            <Paragraph className="w-full">
              The Theory of Relativity is a theory put forward by Albert
              Einstein, which consists of two main parts: Special Relativity
              (1905) and General Relativity (1915). This theory changed the way
              we understand space, time, and gravity.
            </Paragraph>
            <img src="/images/video-course.png" alt="video-course" />
            <Paragraph>
              Special Relativity: Special Relativity refers to the observation
              that the laws of physics apply equally to all observers moving at
              constant speeds relative to each other. The speed of light in a
              vacuum (about 300,000 km/s) is always constant, regardless of the
              movement of the observer or the light source. Time Dilation and
              Length Contraction.
            </Paragraph>
            <Paragraph>
              General Relativity: General Relativity is a theory of gravity that
              extends Special Relativity to involve acceleration. Gravity is not
              the force of attraction between two objects, but rather the
              curvature of space-time caused by the mass and energy of an
              object. Phenomena such as the bending of light near massive
              objects and gravitational time dilation (time traveling slower in
              a strong gravitational field) are predictions of this theory.
            </Paragraph>
          </div>
          <div className="w-full flex justify-between items-center">
            <div className="flex justify-center items-center w-fit space-x-3">
              <img src="/images/arrow-left.svg" alt="arrow left" />
              <Paragraph>Previous</Paragraph>
            </div>
            <div className="flex justify-center items-center w-fit space-x-3">
              <Paragraph>Next</Paragraph>
              <img
                src="/images/arrow-left.svg"
                alt="arrow right"
                className="rotate-180"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
