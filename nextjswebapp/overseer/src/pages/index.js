import Link from 'next/link';
import Panel from "@/components/Panel";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="flex flex-col justify-center bg-white pb-64">
      <Panel className="m-8 h-fit">
          <h1 className="text-4xl">Welcome to Overseer</h1>
          <h2 className="text-2xl mb-16">Get started below</h2>
          <div className="flex justify-center m-2 gap-3">
            <Button rounded primary noBorder><Link href="/auth/signup">Sign up</Link></Button>
            <Button rounded secondary noBorder><Link href="/auth/login">Login</Link></Button>
          </div>
        </Panel>
    </div>
  );
}
