import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
      <div className="w-64 h-64 mb-6">
        <Image src={"/not-found.png"} width={500} height={500} alt="not found image" />
      </div>

      <h1 className="text-3xl font-semibold text-gray-900">Page not found</h1>
      <p className="mt-3 text-gray-600 max-w-md">
        Sorry, the page you&apos;re looking for doesn&apos;t exist or has been
        moved.
      </p>

      <div className="mt-6 flex items-center gap-3">
        <Link href="/" className="btn-primary">
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
