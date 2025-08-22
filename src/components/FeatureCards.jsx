import { motion } from 'framer-motion';
import { Clock, Zap, Server, HeadphonesIcon } from 'lucide-react';

const FeatureCards = () => {
  const cards = [
    { label: 'Tiempo de entrega', title: 'Sitios en 7–15 días', foot: 'Plan Profesional', icon: Clock },
    { label: 'Rendimiento', title: '90+ en Lighthouse', foot: 'Core Web Vitals', icon: Zap },
    { label: 'Infraestructura', title: 'Hosting + SSL incluidos', foot: 'AWS/Cloudflare', icon: Server },
    { label: 'Soporte', title: 'Mantenimiento y actualizaciones', foot: 'SLA mensual', icon: HeadphonesIcon },
  ];

  return (
    <div className="max-w-[90rem] mx-auto px-6 pb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, i) => {
        const IconComponent = card.icon;
        return (
          <motion.div
            key={i}
            className="group relative rounded-2xl border border-[#E2E2E2]/10 p-6 bg-[#E2E2E2]/[0.02] backdrop-blur-md cursor-pointer overflow-hidden"
            whileHover={{
              y: -12,
              scale: 1.08,
              transition: { duration: 0.4, ease: "easeOut" }
            }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Background celeste que aparece en hover */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-400 ease-out" style={{ backgroundColor: '#455CFF' }}></div>

            {/* Sombra sutil en hover */}
            <div className="absolute inset-0 rounded-2xl shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-out"></div>

            {/* Contenido de la card */}
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#141414] rounded-lg flex items-center justify-center group-hover:bg-[#E2E2E2]/20 transition-all duration-300">
                  <IconComponent className="w-5 h-5 text-[#E2E2E2]/60 group-hover:text-[#E2E2E2] transition-all duration-300" />
                </div>
              </div>
              <div className="text-[#E2E2E2]/60 text-sm mb-1 group-hover:text-[#E2E2E2] transition-all duration-300 font-gilroy">{card.label}</div>
              <div className="text-lg font-semibold text-[#E2E2E2] group-hover:text-[#E2E2E2] transition-all duration-300 font-gilroy">{card.title}</div>
              <div className="mt-6 text-[#E2E2E2]/40 text-sm group-hover:text-[#E2E2E2] transition-all duration-300 font-gilroy">{card.foot}</div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default FeatureCards;
