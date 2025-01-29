import { PageTransition } from "@/components/PageTransition";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <section className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
            <span className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-primary/10 text-primary mb-8">
              Manage your portfolio with confidence
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              Smart Portfolio Management
              <br />
              <span className="text-primary">Made Simple</span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-gray-600 mb-12">
              Take control of your investments with our powerful portfolio
              management platform. Track, analyze, and optimize your portfolio in
              real-time.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors duration-200">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="inline-flex items-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Index;