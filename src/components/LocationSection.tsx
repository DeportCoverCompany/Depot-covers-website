export default function LocationSection() {
  return (
    <section className="bg-gray-50 py-20">
      {/* Heading */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            We'd love to meet you. Stop by our office, discuss your branding
            ideas and let our team help bring them to life.
          </p>
        </div>
      </div>

      {/* Map with spacing */}
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl shadow-2xl">
          <iframe
            title="Company Location"
            src="https://maps.google.com/maps?q=-1.2837641,36.8270377&z=17&output=embed"
            className="h-[450px] w-full md:h-[600px] lg:h-[700px]"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
