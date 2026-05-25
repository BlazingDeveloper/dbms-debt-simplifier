import { Link } from 'react-router-dom';
import logo from './assets/logo.png';

const LOGOS = [
  'NOMAD CO',
  'HORIZON',
  'ATLAS',
  'NORTHWIND',
  'SUMMIT',
];

const FEATURES = [
  {
    title: 'Transparent Splits',
    desc: 'See exactly who paid, who owes, and how the balance changes after every expense.',
  },
  {
    title: 'Minimum Settlements',
    desc: 'Reduce the number of transfers needed with smart settlement calculations.',
  },
  {
    title: 'Group-Ready',
    desc: 'Organize trips, roommates, and teams with clear history and shared context.',
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="FairShare" className="h-9 w-20 rounded-lg object-fill bg-white border border-gray-200" />
            <div className="text-lg font-semibold tracking-tight">FairShare</div>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/app"
              className="text-sm font-semibold text-gray-700 hover:text-gray-900"
            >
              Log In
            </Link>
            <Link
              to="/app"
              className="px-5 py-2.5 rounded-full text-sm font-semibold bg-indigo-600 text-white
                shadow-sm hover:-translate-y-0.5 transition-transform"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-6 py-24 text-center">
            <p className="text-sm font-semibold text-indigo-600 tracking-wide">FairShare</p>
            <h1 className="mt-4 text-5xl sm:text-6xl font-bold tracking-tight text-gray-900">
              Split expenses with clarity and confidence
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
              A clean, trustworthy way to track shared costs, settle up quickly, and keep
              every trip or plan perfectly transparent.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <Link
                to="/app"
                className="px-6 py-3 rounded-full text-sm font-semibold bg-indigo-600 text-white
                  shadow-sm hover:-translate-y-0.5 transition-transform"
              >
                Start Free
              </Link>
              <button className="px-6 py-3 rounded-full text-sm font-semibold text-gray-700
                border border-gray-200 hover:-translate-y-0.5 transition-transform">
                See How It Works
              </button>
            </div>

            <div className="mt-16">
              <div className="mx-auto max-w-5xl rounded-2xl border border-gray-200 bg-gray-50
                shadow-sm p-6">
                <div className="rounded-xl bg-white border border-gray-200 p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-indigo-600" />
                      <span className="text-sm font-semibold text-gray-900">Trip Expenses</span>
                    </div>
                    <div className="text-xs text-gray-500">Updated now</div>
                  </div>

                  <div className="mt-6 grid gap-4 md:grid-cols-3">
                    <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                      <p className="text-xs uppercase tracking-widest text-gray-500">Total</p>
                      <p className="mt-2 text-2xl font-semibold text-gray-900">INR 6,240</p>
                      <p className="text-xs text-gray-500 mt-1">last 7 days</p>
                    </div>
                    <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                      <p className="text-xs uppercase tracking-widest text-gray-500">Members</p>
                      <p className="mt-2 text-2xl font-semibold text-gray-900">4</p>
                      <p className="text-xs text-gray-500 mt-1">active group</p>
                    </div>
                    <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                      <p className="text-xs uppercase tracking-widest text-gray-500">Settlements</p>
                      <p className="mt-2 text-2xl font-semibold text-gray-900">2</p>
                      <p className="text-xs text-gray-500 mt-1">pending</p>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    <div className="rounded-2xl border border-gray-200 bg-white p-4">
                      <p className="text-sm font-semibold text-gray-900">Latest expenses</p>
                      <div className="mt-3 space-y-3">
                        {['Dinner', 'Taxi', 'Museum'].map((item) => (
                          <div key={item} className="flex items-center justify-between text-sm">
                            <span className="text-gray-700">{item}</span>
                            <span className="text-gray-900 font-semibold">INR 420</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-2xl border border-gray-200 bg-white p-4">
                      <p className="text-sm font-semibold text-gray-900">Who owes whom</p>
                      <div className="mt-3 space-y-3 text-sm text-gray-700">
                        <div className="flex items-center justify-between">
                          <span>Aisha owes Omar</span>
                          <span className="font-semibold text-gray-900">INR 180</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Riya owes You</span>
                          <span className="font-semibold text-gray-900">INR 220</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Jai owes Riya</span>
                          <span className="font-semibold text-gray-900">INR 90</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50">
          <div className="max-w-6xl mx-auto px-6 py-16">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <p className="text-sm font-semibold text-gray-600">
                Trusted by 10,000+ users
              </p>
              <div className="flex flex-wrap items-center gap-6 text-xs text-gray-400">
                {LOGOS.map((logo) => (
                  <span key={logo} className="tracking-widest">{logo}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-6 py-24">
            <div className="grid gap-6 md:grid-cols-3">
              {FEATURES.map((f) => (
                <div
                  key={f.title}
                  className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700
                    flex items-center justify-center text-sm font-bold">
                    FS
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">{f.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-900">
          <div className="max-w-6xl mx-auto px-6 py-24 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Ready to simplify every shared expense?
            </h2>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
              Start with your next trip or shared plan and keep the money side effortless.
            </p>
            <div className="mt-8">
              <Link
                to="/app"
                className="inline-flex px-6 py-3 rounded-full text-sm font-semibold bg-white
                  text-gray-900 shadow-sm hover:-translate-y-0.5 transition-transform"
              >
                Create a Group
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
