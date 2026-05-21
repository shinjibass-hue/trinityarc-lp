export type Service = {
  name: string;
  nameEn: string;
  color: string;
  description: string;
  catch: string;
  url: string;
};

export const services: Service[] = [
  {
    name: "セコカン",
    nameEn: "Sekokan",
    color: "#1200FF",
    description: "内装工事業者向け業務管理SaaS",
    catch: "工事台帳・案件管理・請求書発行を一元化",
    url: "https://sekokan-chi.vercel.app/",
  },
  {
    name: "ラクロス",
    nameEn: "Rakurosu",
    color: "#0EA5E9",
    description: "内装積算・見積支援SaaS",
    catch: "クロス工事の見積を、現場経験のロジックで自動化",
    url: "https://rakurosu.vercel.app/",
  },
  {
    name: "キドリン",
    nameEn: "Kidorin",
    color: "#0D9488",
    description: "木取り計算・板材最適化SaaS",
    catch: "板材の歩留まりを最大化、図面とExcelで現場へ",
    url: "https://kidorin.vercel.app/",
  },
];
