'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { initializeLiff } from '@/lib/liff/init';
import { useAuth } from '@/lib/auth/context';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export default function LIFFHome() {
  const router = useRouter();
  const { login } = useAuth();

  useEffect(() => {
    const init = async () => {
      const auth = await initializeLiff();
      if (auth) {
        login(auth.token, auth.user);
      }
    };
    init();
  }, [login]);

  return (
    <div className="container py-8">
      <h1 className="mb-8 text-3xl font-bold">Welcome to MotoWash</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Book a Wash</CardTitle>
            <CardDescription>
              Schedule a new motorcycle wash service
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/liff/book">Book Now</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Track Booking</CardTitle>
            <CardDescription>
              Check your current booking status
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" asChild className="w-full">
              <Link href="/liff/booking">View Status</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>View Receipt</CardTitle>
            <CardDescription>
              Download your wash service receipt
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" asChild className="w-full">
              <Link href="/liff/receipt">Get Receipt</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
