import { Lobster } from "next/font/google";
import {
  NotionLogoIcon,
  GitHubLogoIcon,
  TwitterLogoIcon,
  InstagramLogoIcon,
  CodeSandboxLogoIcon,
} from "@radix-ui/react-icons";
const className = "h-[3rem] w-[3rem]";
const logos = [
  { logo: <NotionLogoIcon className={className} />, name: "Notion" },
  { logo: <GitHubLogoIcon className={className} />, name: "GitHub" },
  { logo: <TwitterLogoIcon className={className} />, name: "Twitter" },
  { logo: <InstagramLogoIcon className={className} />, name: "Instagram" },
  { logo: <CodeSandboxLogoIcon className={className} />, name: "CodeSandbox" },
];
const lobster = Lobster({
  subsets: ["latin"],
  weight: "400",
});

export default function Banner() {
  return (
    <div className="w-10/12 m-auto my-5">
      <div >
        <h3 className="p-4">So much trust</h3>
        <p className="text-xl p-4">Trusted by industry leaders</p>
      </div>
      <div className="border-b my-4"></div>
      <div className={lobster.className}>
        <div className="w-full py-5 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
            {logos.map((logo, index) => (
              <li key={index} className="flex gap-2">
                {logo.logo}
                <p className="text-3xl p-2">{logo.name}</p>
              </li>
            ))}
          </ul>
          <ul
            className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
            aria-hidden="true"
          >
            {logos.map((logo, index) => (
              <li key={index} className="flex gap-2">
                {logo.logo}
                <p className="text-3xl p-2">{logo.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
