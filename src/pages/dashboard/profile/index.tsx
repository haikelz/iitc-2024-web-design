import Sidebar from "@/components/Sidebar";
import { Heading, Paragraph } from "@/components/ui/typography";

export default function Profile() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="ml-64 w-full p-6 space-y-10">
        <section className="w-full flex justify-between items-center">
          <div className="bg-white rounded-md border border-gray-300">
            <img src="/images/ryo.svg" alt="profile" />
            <Paragraph>Verstappen</Paragraph>
            <Paragraph>Grade 12</Paragraph>
          </div>
          <div>
            <Heading as="h3">Personal Information</Heading>
            <div>
              <div>
                <Paragraph>Fullname</Paragraph>
                <Paragraph>Verstappen</Paragraph>
              </div>
              <div>
                <Paragraph>Email address</Paragraph>
                <Paragraph>maxverstappen@gmail.com</Paragraph>
              </div>
              <div>
                <Paragraph>Bio</Paragraph>
                <Paragraph>
                  #editorberkelas #salaminteraksi #salamsehat #fbpro
                </Paragraph>
              </div>
            </div>
            <div>
              <div>
                <Paragraph>Grade</Paragraph>
                <Paragraph>12</Paragraph>
              </div>
              <div>
                <Paragraph>Phone</Paragraph>
                <Paragraph>+62 8126 6432 301</Paragraph>
              </div>
              <div>
                <Paragraph>School</Paragraph>
                <Paragraph>Xaverius High School</Paragraph>
              </div>
            </div>
          </div>
          <div>
            <Heading as="h3">Learning Progress</Heading>
            <Paragraph>Atomic Structure</Paragraph>
            <Paragraph>Ancient World Civilizations</Paragraph>
            <Paragraph>Simple Past Tense</Paragraph>
          </div>
        </section>
      </main>
    </div>
  );
}
