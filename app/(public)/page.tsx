import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center">
      <div className="container flex flex-col items-center gap-4 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Campus MotoWash
        </h1>
        <p className="max-w-[600px] text-lg text-muted-foreground sm:text-xl">
          Professional motorcycle washing service right on your campus.
          Book, track, and manage your wash with ease.
        </p>
        <div className="flex gap-4">
          <Button size="lg" asChild>
            <Link href="/liff">Book Now</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/liff/booking">Track Order</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
