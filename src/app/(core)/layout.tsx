import { ReactNode } from 'react';
import Header from './_component/Header';

type Props = { children: ReactNode; modal: ReactNode };

export default function Layout({ children, modal }: Props) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        {modal}
      </body>
    </html>
  );
}
