import Image from 'next/image'
import type { PortfolioItem } from '@/lib/data/portfolio'

interface PortfolioCardProps {
  item: PortfolioItem
}

export default function PortfolioCard({ item }: PortfolioCardProps) {
  return (
    <div className="group relative rounded-xl overflow-hidden bg-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64 w-full">
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-nt-teal-dark/90 via-nt-teal-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {/* Content on hover */}
        <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-nt-gray-light text-xs font-medium uppercase tracking-wider mb-1">
            {item.year && `${item.year} · `}{item.location}
          </p>
          <p className="text-white text-sm leading-relaxed">{item.description}</p>
        </div>
      </div>
      <div className="p-4">
        <span className="inline-block text-xs font-medium text-nt-teal uppercase tracking-wide mb-1">
          {item.subtitle}
        </span>
        <h3 className="font-display font-semibold text-gray-900 text-base leading-snug">
          {item.title}
        </h3>
      </div>
    </div>
  )
}
