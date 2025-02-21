import { formatCurrency } from "@/helpers/format-currency";
import { Product } from "@prisma/client"; // Importa o tipo 'Product' do Prisma

import Image from "next/image"; // Importa o componente de imagem otimizada do Next.js

import Link from "next/link"; // Importa o componente de navegação do Next.js

import { useParams } from "next/navigation"; // Hook para obter os parâmetros da URL


// import { formatCurrency } from "@/helpers/format-currency";

// Define a interface para as props esperadas pelo componente
interface ProductsProps {
  products: Product[]; // Um array de produtos do tipo 'Product'
}

// Componente Products que recebe uma lista de produtos e os exibe
const Products = ({ products }: ProductsProps) => {
  // Obtém o parâmetro 'slug' da URL
  const { slug } = useParams<{ slug: string }>();
  return (
    <div className="space-y-3 px-5">
      {/* Mapeia os produtos e os exibe como links clicáveis */}
      {products.map((product) => (
        <Link
          key={product.id} // Define a chave única para otimizar a renderização
          href={`/${slug}/menu/${product.id}`} // Define o link do produto com base no slug e no id do produto
          className="flex items-center justify-between gap-10 border-b py-3"
        >
          {/* ESQUERDA */}
          <div>
            <h3 className="text-sm font-medium">{product.name}</h3>
            <p className="line-clamp-2 text-sm text-muted-foreground">
              {/* Exibe a descrição do produto */}
              {product.description}
            </p>
            <p className="pt-3 text-sm font-semibold">
              {/* preço do produto */}
              {formatCurrency(product.price)}
            </p>
          </div>

          {/* DIREITA */}
          <div className="relative min-h-[82px] min-w-[120px]">
            <Image
              // URL da imagem do produto
              src={product.imageUrl}
              // Texto alternativo para acessibilidade
              alt={product.name}
              // Ajusta a imagem ao tamanho do container
              fill
              className="rounded-lg object-contain"
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Products;