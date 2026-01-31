import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Package, CheckCircle, TrendingUp, Truck, Lock } from "lucide-react";
import { format } from "date-fns";
import { tr } from "date-fns/locale";
import DocumentUpload from "@/components/admin/DocumentUpload";
import PhotoGallery from "@/components/admin/PhotoGallery";

// ⚠️ TEMPORARY: PIN-based access for internal testing only
// TODO: Restore proper authentication before production deployment
const ADMIN_PIN = "227742";

type OrderStatus = "new" | "negotiating" | "in_transit" | "delivered";

interface ShippingRequest {
  id: string;
  created_at: string;
  destination: string;
  product_category: string;
  packaging_type: string;
  quantity: number;
  total_weight: number;
  total_volume: number;
  is_stackable: boolean;
  customer_name: string;
  phone: string;
  email: string;
  estimated_min_price: number;
  estimated_max_price: number;
  status: OrderStatus;
  notes: string | null;
  customer_photos: string[];
  admin_documents: string[];
}

const STATUS_CONFIG: Record<OrderStatus, { label: string; color: string }> = {
  new: { label: "Yeni", color: "bg-blue-500" },
  negotiating: { label: "Görüşülüyor", color: "bg-yellow-500" },
  in_transit: { label: "Yolda", color: "bg-orange-500" },
  delivered: { label: "Teslim Edildi", color: "bg-green-500" },
};

const CATEGORY_LABELS: Record<string, string> = {
  electronics: "Elektronik",
  textiles: "Tekstil",
  automotive: "Otomotiv",
  machinery: "Makine",
  other: "Diğer",
};

const AdminDashboard = () => {
  // ⚠️ TEMPORARY: PIN lock for internal testing
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [pinInput, setPinInput] = useState("");
  const [pinError, setPinError] = useState(false);

  const [orders, setOrders] = useState<ShippingRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"current" | "completed" | "revenue">("current");

  const handlePinSubmit = () => {
    if (pinInput === ADMIN_PIN) {
      setIsUnlocked(true);
      setPinError(false);
    } else {
      setPinError(true);
      setPinInput("");
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    const { data, error } = await supabase
      .from("shipping_requests")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching orders:", error);
    } else {
      setOrders(data || []);
    }
    setLoading(false);
  };

  const updateStatus = async (id: string, newStatus: OrderStatus) => {
    const { error } = await supabase
      .from("shipping_requests")
      .update({ status: newStatus })
      .eq("id", id);

    if (error) {
      console.error("Error updating status:", error);
    } else {
      setOrders(orders.map(o => o.id === id ? { ...o, status: newStatus } : o));
    }
  };

  const openWhatsApp = (order: ShippingRequest) => {
    const message = encodeURIComponent(
      `Merhaba ${order.customer_name},\n\n` +
      `Yazgan Nakliyat'tan aranıyorsunuz.\n\n` +
      `📦 Sipariş Detayları:\n` +
      `• Güzergah: Türkiye → ${order.destination}\n` +
      `• Ürün: ${CATEGORY_LABELS[order.product_category] || order.product_category}\n` +
      `• Ağırlık: ${order.total_weight} kg\n` +
      `• Hacim: ${order.total_volume} m³\n` +
      `• Tahmini Fiyat: €${order.estimated_min_price} - €${order.estimated_max_price}\n\n` +
      `Size nasıl yardımcı olabiliriz?`
    );
    const phone = order.phone.replace(/\D/g, "");
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  const currentOrders = orders.filter(o => o.status !== "delivered");
  const completedOrders = orders.filter(o => o.status === "delivered");
  
  const totalRevenue = completedOrders.reduce(
    (sum, o) => sum + (o.estimated_min_price + o.estimated_max_price) / 2, 
    0
  );

  const displayOrders = activeTab === "current" ? currentOrders : 
                        activeTab === "completed" ? completedOrders : orders;

  // ⚠️ TEMPORARY: PIN lock screen for internal testing
  if (!isUnlocked) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="w-full max-w-sm">
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
              <Lock className="w-6 h-6 text-primary" />
            </div>
            <CardTitle>Yönetim Paneli</CardTitle>
            <p className="text-sm text-muted-foreground mt-2">
              Erişim için PIN kodunu girin
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              type="password"
              placeholder="PIN Kodu"
              value={pinInput}
              onChange={(e) => {
                setPinInput(e.target.value);
                setPinError(false);
              }}
              onKeyDown={(e) => e.key === "Enter" && handlePinSubmit()}
              className={pinError ? "border-destructive" : ""}
            />
            {pinError && (
              <p className="text-sm text-destructive text-center">
                Hatalı PIN kodu
              </p>
            )}
            <Button onClick={handlePinSubmit} className="w-full">
              Giriş Yap
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border bg-card p-6 flex flex-col">
        <div className="mb-8">
          <h1 className="text-xl font-bold text-foreground">Yazgan Nakliyat</h1>
          <p className="text-sm text-muted-foreground">Yönetim Paneli</p>
        </div>

        <nav className="space-y-2 flex-1">
          <button
            onClick={() => setActiveTab("current")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-colors ${
              activeTab === "current" 
                ? "bg-primary text-primary-foreground" 
                : "hover:bg-muted text-foreground"
            }`}
          >
            <Package className="w-5 h-5" />
            <span className="font-medium">Aktif Siparişler</span>
            <Badge variant="secondary" className="ml-auto">
              {currentOrders.length}
            </Badge>
          </button>

          <button
            onClick={() => setActiveTab("completed")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-colors ${
              activeTab === "completed" 
                ? "bg-primary text-primary-foreground" 
                : "hover:bg-muted text-foreground"
            }`}
          >
            <CheckCircle className="w-5 h-5" />
            <span className="font-medium">Tamamlanan</span>
            <Badge variant="secondary" className="ml-auto">
              {completedOrders.length}
            </Badge>
          </button>

          <button
            onClick={() => setActiveTab("revenue")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-colors ${
              activeTab === "revenue" 
                ? "bg-primary text-primary-foreground" 
                : "hover:bg-muted text-foreground"
            }`}
          >
            <TrendingUp className="w-5 h-5" />
            <span className="font-medium">Gelir Özeti</span>
          </button>
        </nav>

        <div className="pt-6 border-t border-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <Truck className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground">Admin</p>
              <p className="text-xs text-muted-foreground">Yönetici</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground">
            {activeTab === "current" && "Aktif Siparişler"}
            {activeTab === "completed" && "Tamamlanan Siparişler"}
            {activeTab === "revenue" && "Gelir Özeti"}
          </h2>
          <p className="text-muted-foreground">
            {activeTab === "current" && "Devam eden tüm gönderim talepleri"}
            {activeTab === "completed" && "Başarıyla teslim edilen siparişler"}
            {activeTab === "revenue" && "Toplam gelir ve istatistikler"}
          </p>
        </div>

        {/* Stats Cards for Revenue Tab */}
        {activeTab === "revenue" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Toplam Sipariş
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-foreground">{orders.length}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Tamamlanan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-emerald-600">{completedOrders.length}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Tahmini Gelir
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-primary">
                  €{totalRevenue.toLocaleString("tr-TR")}
                </p>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Orders Table */}
        <Card>
          <CardContent className="p-0">
            {loading ? (
              <div className="p-8 text-center text-muted-foreground">
                Yükleniyor...
              </div>
            ) : displayOrders.length === 0 ? (
              <div className="p-8 text-center text-muted-foreground">
                Henüz sipariş bulunmuyor
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tarih</TableHead>
                    <TableHead>Müşteri</TableHead>
                    <TableHead>Telefon</TableHead>
                    <TableHead>Ürün</TableHead>
                    <TableHead>Güzergah</TableHead>
                    <TableHead>Ağırlık/Hacim</TableHead>
                    <TableHead>Fiyat</TableHead>
                    <TableHead>Fotoğraflar</TableHead>
                    <TableHead>Belgeler</TableHead>
                    <TableHead>Durum</TableHead>
                    <TableHead>İşlem</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {displayOrders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="whitespace-nowrap">
                        {format(new Date(order.created_at), "dd MMM yyyy", { locale: tr })}
                      </TableCell>
                      <TableCell>
                        <div>
                          <p className="font-medium">{order.customer_name}</p>
                          <p className="text-xs text-muted-foreground">{order.email}</p>
                        </div>
                      </TableCell>
                      <TableCell className="whitespace-nowrap">{order.phone}</TableCell>
                      <TableCell>
                        <Badge variant="outline">
                          {CATEGORY_LABELS[order.product_category] || order.product_category}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <span className="text-sm">TR → {order.destination}</span>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">
                          <p>{order.total_weight} kg</p>
                          <p className="text-muted-foreground">{order.total_volume} m³</p>
                        </div>
                      </TableCell>
                      <TableCell className="whitespace-nowrap font-medium">
                        €{order.estimated_min_price} - €{order.estimated_max_price}
                      </TableCell>
                      <TableCell>
                        <PhotoGallery photos={order.customer_photos || []} />
                      </TableCell>
                      <TableCell>
                        <DocumentUpload
                          orderId={order.id}
                          documents={order.admin_documents || []}
                          onUpdate={(docs) => {
                            setOrders(orders.map(o => 
                              o.id === order.id ? { ...o, admin_documents: docs } : o
                            ));
                          }}
                        />
                      </TableCell>
                      <TableCell>
                        <Select
                          value={order.status}
                          onValueChange={(value: OrderStatus) => updateStatus(order.id, value)}
                        >
                          <SelectTrigger className="w-36">
                            <SelectValue>
                              <div className="flex items-center gap-2">
                                <div className={`w-2 h-2 rounded-full ${STATUS_CONFIG[order.status].color}`} />
                                {STATUS_CONFIG[order.status].label}
                              </div>
                            </SelectValue>
                          </SelectTrigger>
                          <SelectContent>
                            {Object.entries(STATUS_CONFIG).map(([value, config]) => (
                              <SelectItem key={value} value={value}>
                                <div className="flex items-center gap-2">
                                  <div className={`w-2 h-2 rounded-full ${config.color}`} />
                                  {config.label}
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50"
                          onClick={() => openWhatsApp(order)}
                        >
                          <MessageCircle className="w-4 h-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AdminDashboard;
