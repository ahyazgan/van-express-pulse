import { Phone, Package, FileWarning, Box, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface HelpModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const HelpModal = ({ open, onOpenChange }: HelpModalProps) => {
  const { language } = useLanguage();

  const faqs = [
    {
      question: language === "tr" ? "Fiyatlandırma nasıl yapılıyor?" : "How is pricing calculated?",
      answer: language === "tr" 
        ? "Navlun ücretleri; yükün en, boy, yükseklik (dese) bilgilerine, toplam ağırlığına ve varış noktasının km mesafesine göre güncel yakıt maliyetleri dahilinde hesaplanır." 
        : "Freight charges are calculated based on cargo dimensions (width, length, height), total weight, and destination distance, including current fuel costs.",
    },
    {
      question: language === "tr" ? "Minivan Express teslimat hızı nedir?" : "What is Minivan Express delivery speed?",
      answer: language === "tr" 
        ? "Minivan araçlarımız ile Türkiye-Avrupa arası teslimat süresi, sınır kapılarındaki yoğunluğa bağlı olarak ortalama 24-48 saattir." 
        : "With our minivan vehicles, Turkey-Europe delivery time is 24-48 hours on average, depending on border crossing congestion.",
    },
    {
      question: language === "tr" ? "Hangi evraklar gerekli?" : "What documents are required?",
      answer: language === "tr" 
        ? "Şahsi gönderiler için kimlik/pasaport fotokopisi ve eşya listesi; ticari gönderiler için ise Proforma Fatura ve Çeki Listesi (Packing List) yeterlidir." 
        : "For personal shipments: ID/passport copy and item list. For commercial shipments: Proforma Invoice and Packing List are sufficient.",
    },
    {
      question: language === "tr" ? "CMR sorumluluğu nedir, yüküm sigortalı mı?" : "What is CMR liability, is my cargo insured?",
      answer: language === "tr"
        ? "Her sevkiyat, CMR konvansiyonunun belirlediği taşıyıcı sorumluluğu altında taşınır; bu sorumluluk yasa gereği brüt kilogram başına 8,33 SDR ile sınırlıdır. Mobilya, elektronik veya makine gibi yüklerde bu tavan çoğu zaman eşyanın gerçek değerini karşılamaz; bu nedenle talep üzerine, beyan ettiğiniz değer üzerinden ek yük sigortası yaptırıyoruz."
        : "Every shipment moves under the carrier liability set by the CMR convention; by law that liability is capped at 8.33 SDR per gross kilogram. For furniture, electronics or machinery this ceiling often falls short of the real value, so on request we arrange additional cargo cover based on the value you declare.",
    },
    {
      question: language === "tr" ? "Ödeme şartları nelerdir?" : "What are the payment terms?",
      answer: language === "tr" 
        ? "Ödemeler, yükleme anında veya varış öncesinde banka havalesi/EFT yoluyla tahsil edilmektedir." 
        : "Payments are collected at the time of loading or before arrival via bank transfer/EFT.",
    },
    {
      question: language === "tr" ? "Gümrük işlemlerini siz mi yapıyorsunuz?" : "Do you handle customs procedures?",
      answer: language === "tr" 
        ? "İhracat gümrük işlemlerinde danışmanlık sağlıyoruz. Müşterilerimizin sadece proforma fatura hazırlaması yeterlidir, gerisini operasyon ekibimiz yönetir." 
        : "We provide consulting for export customs procedures. Customers only need to prepare the proforma invoice; our operations team handles the rest.",
    },
    {
      question: language === "tr" ? "Hacimli yükler için kapasite nedir?" : "What is the capacity for bulky cargo?",
      answer: language === "tr" 
        ? "Minivan araçlarımız maksimum 1.300 kg kapasitelidir. Hacimli ama hafif yükleriniz için özel hacim hesabı yapılmaktadır." 
        : "Our minivan vehicles have a maximum capacity of 1,300 kg. Special volume calculations are made for bulky but lightweight cargo.",
    },
  ];

  const infoCards = [
    {
      icon: FileWarning,
      title: language === "tr" ? "Gümrük" : "Customs",
      description: language === "tr" 
        ? "Proforma fatura yeterlidir, işlemleri biz yönetiyoruz." 
        : "Proforma invoice is sufficient, we handle the procedures.",
    },
    {
      icon: Package,
      title: language === "tr" ? "Yasaklı Yükler" : "Prohibited Cargo",
      description: language === "tr" 
        ? "Yanıcı (ADR), canlı hayvan ve illegal ürün taşınmaz." 
        : "Flammable (ADR), live animals, and illegal goods are not transported.",
    },
    {
      icon: Box,
      title: language === "tr" ? "Paketleme" : "Packaging",
      description: language === "tr" 
        ? "Sağlam koli ve paletleme önerilir." 
        : "Sturdy boxes and palletizing are recommended.",
    },
  ];

  const phoneNumber = "+90 539 330 86 17";
  const whatsappLink = "https://wa.me/905393308617";
  const telLink = "tel:+905393308617";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md max-h-[85vh] overflow-y-auto rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            {language === "tr" ? "Yardım & Destek" : "Help & Support"}
          </DialogTitle>
        </DialogHeader>

        {/* FAQ Section */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
            {language === "tr" ? "Sık Sorulan Sorular" : "FAQ"}
          </h3>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-sm font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Info Cards */}
        <div className="space-y-4 mt-6">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
            {language === "tr" ? "Önemli Bilgiler" : "Important Info"}
          </h3>
          <div className="space-y-3">
            {infoCards.map((card, index) => (
              <Card key={index} className="border-border/50 bg-secondary/30">
                <CardHeader className="pb-2 pt-4 px-4">
                  <CardTitle className="text-sm font-semibold flex items-center gap-2">
                    <card.icon className="w-4 h-4 text-primary" />
                    {card.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-4 pb-4 pt-0">
                  <p className="text-xs text-muted-foreground">{card.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-6 pt-4 border-t border-border">
          <Card className="bg-primary/10 border-primary/20">
            <CardHeader className="pb-2 pt-4 px-4">
              <CardTitle className="text-base font-bold flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary" />
                {language === "tr" ? "Bize Ulaşın" : "Contact Us"}
              </CardTitle>
            </CardHeader>
            <CardContent className="px-4 pb-4 pt-0 space-y-3">
              <p className="text-lg font-bold text-foreground">{phoneNumber}</p>
              <div className="flex gap-2">
                <Button asChild className="flex-1" size="sm">
                  <a href={telLink}>
                    <Phone className="w-4 h-4 mr-2" />
                    {language === "tr" ? "Şimdi Ara" : "Call Now"}
                  </a>
                </Button>
                <Button asChild variant="secondary" className="flex-1 bg-green-600 hover:bg-green-700 text-white" size="sm">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default HelpModal;
