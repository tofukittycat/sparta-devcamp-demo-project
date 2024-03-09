import Link from 'next/link';

export default function Header() {
  return (
    <>
      <header className="sticky top-0 bg-white z-10 border-b">
        <Link href="/login">로그인</Link>
      </header>
    </>
  );
}
