import Image from "next/image"
import Link from "next/link"
import WhatsAppFab from "@/components/whatsapp-fab"
import Header from "@/components/header"
import DesktopBanner from "@/components/desktop-banner"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen pb-16 md:pb-0">
      <div className="md:hidden">
        <Header />
      </div>

      <div className="p-4 space-y-8 md:pt-8 md:container md:mx-auto">
        <DesktopBanner />

        <h1 className="text-2xl font-light mb-6 md:text-3xl">Encontrá tu auto ideal</h1>

        <div className="space-y-8">
          <div className="clean-card rounded-lg p-6">
            <h2 className="text-lg font-light mb-4">Nuestras marcas</h2>
            <div className="flex gap-3 overflow-x-auto pb-2">
              {["Chevrolet", "Toyota", "Nissan", "Ford", "BMW", "Audi"].map((brand) => (
                <Link
                  key={brand}
                  href={`/autos?marca=${brand}`}
                  className="px-4 py-2 bg-black bg-opacity-40 rounded-full text-sm whitespace-nowrap hover:bg-opacity-60 transition-colors"
                >
                  {brand}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-light mb-4">Ultimos ingresos</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((item) => (
                <Link
                  key={item}
                  href={`/autos/${item}`}
                  className="block clean-card rounded-lg overflow-hidden subtle-hover"
                >
                  <div className="aspect-video relative">
                    <Image
                      src="/cruze.jpeg"
                      alt="Auto destacado"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium">Chevrolet Cruze - 1.8 LT</h3>
                    <p className="text-gray-400 text-sm">2013 • Automático • Gasolina</p>
                    <p className="font-medium mt-2">$18.989.900</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <WhatsAppFab phoneNumber="+54 9 11 7368-2567" message="Hola, estoy interesado en conocer más sobre sus vehículos" />
    </main>
  )
}

