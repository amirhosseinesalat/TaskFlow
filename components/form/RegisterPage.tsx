import Image from "next/image";
import Link from "next/link";

function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <form className="w-full max-w-md">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-8 flex justify-center">
            <Image
              src="/images/logo.png"
              alt="TaskFlow"
              width={80}
              height={80}
              className="rounded-2xl"
            />
          </div>

          <div className="mb-5 text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              Sign up
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Hello! Here you can create a new account.
            </p>
          </div>

          <div className="space-y-5">
            <div>
              {" "}
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
              />{" "}
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Password
              </label>

              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
              />
            </div>
            <div>
              <label
                htmlFor="confirm-password"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Password
              </label>

              <input
                name="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-7 w-full rounded-lg bg-slate-900 py-3 text-sm font-medium text-white transition hover:bg-slate-800 active:scale-[0.99]"
          >
            Sign up
          </button>

          <p className="mt-6 text-center text-sm text-slate-500">
            Have an account right now?
            <Link
              href="/login"
              className="font-medium text-slate-900 hover:underline"
            >
              Log in
            </Link>
          </p>
        </div>
      </form>
    </main>
  );
}

export default RegisterPage;
