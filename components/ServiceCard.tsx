import type { Service } from "@/lib/data";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div
      className="bg-white border border-neutral-200 rounded-lg p-8 border-l-4 hover:shadow-lg transition-shadow"
      style={{ borderLeftColor: service.color }}
    >
      <div className="flex items-baseline gap-2">
        <span
          className="text-2xl font-bold"
          style={{ color: service.color }}
        >
          {service.name}
        </span>
        <span className="text-sm text-neutral-500">{service.nameEn}</span>
      </div>

      <p className="text-base text-neutral-800 mt-3">{service.description}</p>
      <p className="text-sm text-neutral-600 mt-4">{service.catch}</p>

      <a
        href={service.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-sm mt-6 transition-colors hover:opacity-75"
        style={{ color: service.color }}
      >
        サービスを開く →
      </a>
    </div>
  );
}
