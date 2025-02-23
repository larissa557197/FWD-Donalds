"use client";

import { Restaurant } from "@prisma/client"; // Indica que este componente é um componente do lado do cliente (client component) no Next.js.
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react"; // Importa ícones da biblioteca 'lucide-react'.
import Image from "next/image"; // Importa o componente de imagem otimizada do Next.js.
import { useRouter } from "next/navigation"; // Importa o hook 'useRouter' para manipulação de navegação.

import { Button } from "@/components/ui/button"; // Importa um componente de botão personalizado.

// Define a interface para as props do componente.
interface RestaurantHeaderProps {
    // Especifica que a prop 'restaurant' deve ter as propriedades 'name' e 'coverImageUrl'.
    restaurant: Pick<Restaurant, "name" | "coverImageUrl">;
}

// Define o componente RestaurantHeader e desestrutura a prop 'restaurant'.
const RestaurantHeader = ({ restaurant }: RestaurantHeaderProps) => { 
  const router = useRouter();
  
  const handleBackClick = () => router.back();
  return (
    <div className="relative h-[250px] w-full">
      <Button
        variant="secondary"
        size="icon"
        className="absolute left-4 top-4 z-50 rounded-full"
        onClick={handleBackClick}
      >
        <ChevronLeftIcon />
      </Button>
      <Image
        src={restaurant.coverImageUrl}
        alt={restaurant.name}
        fill
        className="object-cover"
      />
      <Button
        variant="secondary"
        size="icon"
        className="absolute right-4 top-4 z-50 rounded-full"
      >
        <ScrollTextIcon />
      </Button>
    </div>
  );
};

export default RestaurantHeader;