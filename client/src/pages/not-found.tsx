import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
      <h1 className="font-display text-[15vw] font-bold text-white/10 leading-none">404</h1>
      <h2 className="text-3xl font-display font-medium mb-4">Page Not Found</h2>
      <p className="text-white/60 mb-8 max-w-md">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link href="/" className="group flex items-center gap-2 text-white hover:text-white/70 transition-colors">
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        Back to Home
      </Link>
    </div>
  );
}
