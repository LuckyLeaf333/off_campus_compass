import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { lusitana } from './ui/fonts';
import Image from 'next/image';
import { HomeModernIcon } from '@heroicons/react/24/outline';


export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
      <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <HomeModernIcon className="h-12 w-12" />
      <p className="text-[44px]">Off Campus Compass</p>
    </div>
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p
            className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
          >
            <strong>Welcome to Off Campus Compass.</strong> 
            {"\n"}Find housemates, read ratings of landlords, learn about leasing timelines and more!
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src="/2022_1266_JK_036.jpg"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Image of campus"
          />
          <Image
            src="/1090_06_041_select.jpg"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Image of ctown"
          />
        </div>
      </div>
    </main>
  );
}
