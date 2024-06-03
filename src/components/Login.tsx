import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRightIcon } from '@radix-ui/react-icons';

import Logo from "@/assets/Logo.png";
import FIcon from "@/assets/f.png";
import TIcon from "@/assets/twe.png";
import LIcon from "@/assets/lock.png";
import EIcon from "@/assets/eye.png";


const Login: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen">
      <Card className="flex flex-col absolute top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4 w-[334px] h-[620px] px-4 py-4">
        <div className="flex flex-col justify-center items-center w-full">
          <img src={Logo} alt="" />
          <CardHeader className="justify-center items-center w-64 text-center mt-3">
            <CardTitle className="text-xl">Welcome back</CardTitle>
            <CardDescription>Sign in to access to your dashboard, settings and projects</CardDescription>
          </CardHeader>
        </div>

        <div className="flex flex-col gap-2 mt-5">
          <Button variant="outline" className="flex justify-center items-center gap-2 w-full rounded-3xl shadow-sm shadow-gray-300/50">
            <img src={FIcon} alt="" /> Connect with Facebook
          </Button>
          <Button variant="outline" className="flex justify-center items-center gap-2 w-full rounded-3xl shadow-sm shadow-gray-200/50">
            <img src={TIcon} alt="" /> Connect with Twitter
          </Button>
        </div>

        <div className="flex items-center mt-4">
          <div className="flex-grow h-px bg-gray-200" />
          <span className="mx-3 text-sm text-muted-foreground">or sign in with email</span>
          <div className="flex-grow h-px bg-gray-200" />
        </div>
        <form>
          <div className="flex flex-col gap-4 mt-4">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" className="rounded-3xl mt-1 placeholder:text-gray-300" id="email" placeholder="Email" />
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="password">Password</Label>
              <div className="relative flex items-center w-full mt-1">
                <img src={LIcon} className="absolute top-1/2 left-2 -translate-y-2/4 hover:cursor-pointer" alt="" />
                <Input type="password" className="rounded-3xl pl-7 placeholder:text-gray-300" id="password" placeholder="Enter your password" />
                <img src={EIcon} className="absolute top-1/2 right-2 -translate-y-2/4 hover:cursor-pointer" alt="" />
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2 mt-4">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Remember for 30 days
            </label>
          </div>

          <Button className="flex justify-center items-center gap-2 w-full mt-4 bg-[#06b6d4] hover:bg-[#6ad3e5] rounded-3xl shadow-sm shadow-gray-200/50">
            Sign in <ArrowRightIcon />
          </Button>
        </form>

        <div className="flex gap-2 justify-center mt-4">
          <span>No account?</span>
          <a href="#" className="text-sky-400" >Create an account</a>
        </div>
      </Card>
    </div>
  );
};

export default Login;