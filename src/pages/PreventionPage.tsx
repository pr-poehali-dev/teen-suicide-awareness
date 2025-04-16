
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import DirectionsSection from "@/components/prevention/DirectionsSection";
import ProtectiveFactorsSection from "@/components/prevention/ProtectiveFactorsSection";
import StrategiesSection from "@/components/prevention/StrategiesSection";

/**
 * Страница профилактики подросткового суицида
 * Содержит информацию о направлениях профилактики,
 * факторах защиты и стратегиях предотвращения
 */
const PreventionPage = () => {
  return (
    <Layout>
      <HeroSection
        title="Профилактика подросткового суицида"
        subtitle="Своевременные меры поддержки и профилактики могут предотвратить трагедию"
      />
      
      <DirectionsSection />
      <ProtectiveFactorsSection />
      <StrategiesSection />
    </Layout>
  );
};

export default PreventionPage;
