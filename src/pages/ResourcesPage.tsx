
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import EmergencyHelpSection from "@/components/resources/EmergencyHelpSection";
import SupportOrganizationsSection from "@/components/resources/SupportOrganizationsSection";
import EducationalMaterialsSection from "@/components/resources/EducationalMaterialsSection";

/**
 * Страница с ресурсами помощи при кризисных ситуациях
 * Включает телефоны доверия, организации поддержки и образовательные материалы
 */
const ResourcesPage = () => {
  return (
    <Layout>
      <HeroSection
        title="Ресурсы помощи"
        subtitle="Полезные контакты, организации и материалы для получения помощи в кризисной ситуации"
      />
      
      <EmergencyHelpSection />
      <SupportOrganizationsSection />
      <EducationalMaterialsSection />
    </Layout>
  );
};

export default ResourcesPage;
