import { PageTransition } from "@/components/PageTransition";

const Blog = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <section className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Latest Insights
              </h1>
              <p className="text-xl text-gray-600">
                Stay updated with investment trends and strategies
              </p>
            </div>
            <div className="glass rounded-2xl p-8">
              <p className="text-center text-gray-600">Blog posts coming soon</p>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Blog;