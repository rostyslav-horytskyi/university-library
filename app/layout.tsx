import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { Toaster } from "@/components/ui/toaster";
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";

export const metadata: Metadata = {
  title: "BookWise",
  description:
    "BookWise is a book borrowing university library management solution.",
};

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();

  return (
    <html lang="en">
      <SessionProvider session={session}>
        <body className={`antialiased`}>
          {children}
          <Toaster />
        </body>
      </SessionProvider>
    </html>
  );
};

export default RootLayout;
