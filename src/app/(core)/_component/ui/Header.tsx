import Link from 'next/link';
import { Input } from '@/app/_component/ui/input';
import { Button } from '@/app/_component/ui/button';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

export default function Header() {
  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b bg-white">
        <div className="container flex h-20 max-w-screen-xl items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex flex-1 gap-6 md:gap-10 ">
            <Link href="/" className="flex flex-initial items-center space-x-2">
              <span className="inline-block font-bold">크크🦄</span>
            </Link>
            <div className="flex flex-1 gap-6 md:gap-10 ">
              <nav>메뉴</nav>
              <nav>메뉴</nav>
            </div>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4 md:justify-end ">
            <div className="flex items-center space-x-1 gap-3">
              <div className="relative hidden sm:mr-2 sm:block">
                <div className="absolute inset-y-0 left-3 flex items-center">
                  <MagnifyingGlassIcon className="mr-2 h-4 w-4" />
                </div>
                <Input
                  placeholder="검색하기"
                  className=" py-1.5 pl-8 text-sm transition focus:border-black"
                />
              </div>
              <div className="flex items-center gap-5">
                <Button variant="ghost">
                  <Link href="/login">로그인</Link>
                </Button>
                <Button asChild>
                  <Link href="/register">회원가입</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
