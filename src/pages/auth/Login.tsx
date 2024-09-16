import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { Heading, Paragraph } from "@/components/ui/typography";
import { Lock, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/dashboard");
  };

  return (
    <section className="bg-white">
      <div className="flex flex-col items-center justify-center px-80 py-8 h-screen">
        <div className="w-full bg-white rounded-2xl border-2 border-[#e5e7eb]">
          <div className="grid grid-cols-2">
            <div className="flex flex-col justify-center items-center bg-darkSlateGray m-5 py-40 rounded-xl">
              <img src="/images/login_image.png" />
              <Heading as="h4" className="text-white my-5">
                Explore the World of Learning With Fun
              </Heading>
              <Paragraph className="text-white">
                Positive and fun atmosphere in learning
              </Paragraph>
            </div>
            <div className="flex flex-col my-auto ml-10 mr-20">
              <Heading as="h3">Sign in to your account</Heading>
              <Paragraph>Welcome back! Select method to Sign In</Paragraph>
              <form className="space-y-4 my-5" action="#">
                <div>
                  <label className="block mb-2 font-medium">Email</label>
                  <div className="relative">
                    <Input
                      className="rounded-lg border text-base border-gray-300 py-1.5 px-3 pl-12 w-full"
                      placeholder="Enter your email address"
                      type="text"
                    />
                    <Mail className="absolute text-[#6b7280] left-3 top-1/2 transform -translate-y-1/2" />
                  </div>
                </div>
                <div>
                  <label className="block mb-2 font-medium">Password</label>
                  <div className="relative">
                    <Input
                      className="rounded-lg border text-base border-gray-300 py-1.5 px-3 pl-12 w-full"
                      placeholder="Enter your password"
                      type="password"
                    />
                    <Lock className="absolute text-[#6b7280] left-3 top-1/2 transform -translate-y-1/2" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <Input
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3"
                        required
                      />
                    </div>
                    <div className="ml-2 text-sm">
                      <label>Remember me</label>
                    </div>
                  </div>
                  <a href="#" className="text-sm font-medium hover:underline">
                    Forgot password?
                  </a>
                </div>
                <div>
                  <Button
                    onClick={handleSignIn}
                    className="w-full rounded-lg mt-5"
                  >
                    Sign In
                  </Button>
                </div>
                <div className="my-12 border-b-2 text-center">
                  <div className="leading-none px-7 inline-block text-sm tracking-wide font-medium bg-white transform translate-y-2.5">
                    Or
                  </div>
                </div>
                <div className="grid grid-cols-2 pt-3 gap-10">
                  <Button className="rounded-lg flex justify-center bg-white text-black border text-base font-medium">
                    <img
                      src="/images/google.png"
                      className="mr-3"
                      alt="Google logo"
                    />
                    Login with Google
                  </Button>
                  <Button className="rounded-lg flex justify-center bg-white text-black border text-base font-medium">
                    <img
                      src="/images/apple.png"
                      className="mr-3"
                      alt="Apple logo"
                    />
                    Login with Apple
                  </Button>
                </div>
                <Paragraph className="text-base flex justify-center pt-5">
                  Don&apos;t have an account?
                  <a
                    href="/auth/register"
                    className="text-base ml-1 hover:underline"
                  >
                    Create an account
                  </a>
                </Paragraph>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
