export interface BylawArticle {
  id: number;
  title: string;
  content: string | string[];
}

export const BYLAWS_DATA = {
  name: "Hukuk Teknolojileri Derneği",
  shortName: "HTD",
  articles: [
    {
      id: 1,
      title: "DERNEĞİN ADI VE MERKEZİ",
      content: "Derneğin Adı: Hukuk Teknolojileri Derneği. Kısa Adı: HTD. Merkezi: Ankara."
    },
    {
      id: 2,
      title: "DERNEĞİN AMACI",
      content: [
        "Hukuk hizmetlerinin teknolojiyle dönüştürülmesini (LegalTech) sağlamak.",
        "Hukuki iletişimin ve kullanıcı deneyiminin tasarım odaklı bir bakış açısıyla yeniden kurgulanmasını (LegalDesign) sağlamak.",
        "Türkiye'de güçlü bir ekosistem oluşturmak.",
        "Yapay zeka, blokzincir ve otomasyon teknolojilerini hukuk pratiğine entegre etmek.",
        "Hukuki erişim adaletini teknoloji ve tasarım araçlarıyla genişletmek."
      ]
    },
    {
      id: 3,
      title: "ÇALIŞMA KONULARI VE BİÇİMLERİ",
      content: [
        "LegalTech Alanında AR-GE projeleri yürütmek.",
        "Hukuk teknolojisi girişimlerine mentörlük sağlamak.",
        "Hukuki belgelerin görsel iletişim ve bilgi tasarımıyla yeniden tasarlanmasına öncülük etmek.",
        "Sertifika programları, kurslar ve bootcamp'ler düzenlemek.",
        "Uluslararası kuruluşlarla (ELTA, ILTA, Stanford Legal Design Lab) iş birlikleri yürütmek."
      ]
    },
    {
      id: 4,
      title: "FAALİYET ALANI",
      content: "Dernek; hukuk, teknoloji, tasarım ve eğitim sektörlerini kapsayan sosyal ve mesleki alanda yurt içinde ve yurt dışında faaliyet gösterir."
    },
    {
      id: 5,
      title: "ÜYE OLMA HAKKI VE ÜYELİK TÜRLERİ",
      content: [
        "Asıl Üyelik: Hukuk, teknoloji, tasarım alanında deneyim sahipleri.",
        "Öğrenci Üyelik: İlgili bölümlerde eğitimine devam edenler.",
        "Kurumsal Üyelik: Hukuk büroları, teknoloji şirketleri, üniversiteler.",
        "Onur Üyeliği: Üstün katkı sağlamış kişiler."
      ]
    },
    {
      id: 6,
      title: "ÜYELİK BAŞVURUSU VE KABUL",
      content: "Üye olmak isteyen kişi, dernek merkezi veya resmi web sitesi üzerinden yazılı ya da elektronik başvuru formunu doldurur ve iki asıl üyenin referansını sunar. Yönetim Kurulu, başvuruyu 30 gün içinde karara bağlar."
    },
    {
      id: 7,
      title: "ÜYELERİN HAK VE YÜKÜMLÜLÜKLERİ",
      content: "Üyeler Genel Kurul'a katılma, oy kullanma ve organlara seçilme hakkına sahiptir. Tüzük hükümlerine uymak ve aidatları zamanında ödemekle yükümlüdürler."
    },
    {
      id: 8,
      title: "ÜYELİKTEN ÇIKMA",
      content: "Her üye, yazılı ya da elektronik bildirimle her zaman üyelikten ayrılabilir. Ayrılma bildirimi Yönetim Kurulu'na ulaştığı tarihten itibaren geçerlidir."
    },
    {
      id: 9,
      title: "ÜYELİKTEN ÇIKARILMA",
      content: "Dernek tüzüğüne aykırı davranan, aidatını ödemeyen veya dernek itibarına zarar veren üyeler Yönetim Kurulu kararıyla üyelikten çıkarılabilir."
    },
    {
      id: 10,
      title: "ZORUNLU ORGANLAR",
      content: "Derneğin zorunlu organları şunlardır: Genel Kurul, Yönetim Kurulu ve Denetim Kurulu."
    }
  ],
  founders: [
    { name: "Hayri Efe Savran", role: "Başkan" },
    { name: "Utkan Ulaş Yurttaş", role: "Başkan Yardımcısı" },
    { name: "Mustafa Gedik", role: "Genel Sekreter" },
    { name: "Eda Özuğur", role: "Sayman" },
    { name: "Tan Öktenay", role: "Üye" },
    { name: "Çağatay Kazık", role: "Üye" },
    { name: "Başak Şengül", role: "Üye" }
  ]
};
