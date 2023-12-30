import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { EyeOpenIcon } from "@radix-ui/react-icons";
import { Suspense } from "react";

const RIZA_TOKEN = process.env.RIZA_TOKEN;

const Footer = () => {
  return (
    <footer className="h-[10vh] p-1">
      <div className=" grid grid-cols-5 w-full px-4">
        <div className=" col-span-1"></div>
        <div className="col-span-3 flex flex-col items-center justify-center">
          <Link href={"/"}>
            <Logo className="w-10 h-10 mx-auto" />
            <div className="font-bold text-xl text-foreground/50">
              Neko<span className="text-green-400">moe</span>
            </div>
          </Link>
        </div>
        <div className=" col-span-1 flex items-center justify-end">
          {UMAMI_TOKEN && (
            <Link href={"/analytics"} target="_blank" prefetch={false}>
              <Button variant={"outline"} className="rounded-full">
                <Suspense fallback={"Loading..."}>
                  <ActiveViews />
                </Suspense>
              </Button>
            </Link>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const ActiveViews = async () => {
  const response = await fetch(
    "https://analytics.us.umami.is/websites/5032fad1-ca41-4242-aa9f-913e7054a5c4/active",
    {
      headers: {
        Accept: "aplication/json",
        "x-umami-api-key": RIZA_TOKEN as string,
      },
      next: { revalidate: 60 },
    }
  );

  const active: { x: string }[] = await response.json();

  return (
    <>
      {active?.map((n) => n.x)} <EyeOpenIcon className="ml-2" />
    </>
  );
};
