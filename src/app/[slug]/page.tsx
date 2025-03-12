//import { ConsumptionMethod } from "@prisma/client";
import Image from "next/image";
import { notFound } from "next/navigation";

import { db } from "@/lib/prisma";

import ConsumptionMethodOption from "./components/consumption-method-option";


interface RestaurantPageProps {
   params: Promise<{slug: string}>;
}

const RestaurantPage = async ({params}: RestaurantPageProps) => {
   const {slug} = await params;
   const restaurant = await db.restaurant.findUnique({where:{slug} }); // faz uma solicitação direto ao db para encontrar o slug @unique
   if (!restaurant) {
      return notFound(); // caso não seja encontrado o slug, irá retornar que não foi encontrado este campo no db
   }
   return (
   <div className="container mx-auto h-full w-[425px]">
     <div className ="flex h-screen flex-col items-center justify-center px-6 pt-24" >
      {/* Logo e Título */}
      <div className= "flex flex-col items-center gap-2">
         <Image
            src={restaurant.avatarImageUrl}
            alt={restaurant.name}
            width={82}
            height={82}
         />
         <h2 className="font-semibold">{restaurant.name}</h2>
       </div>
       {/*SEJA BEM VINDO!*/}
       <div className="space-y-2 pt-24 text-center">
         <h3 className="text-2xl font-semibold">Seja bem vindo!</h3>
         <p className="opacity-55">
            Escolha como prefere saborear sua refeição.
            Estamos á disposição para lhe oferecer uma experiência única em cada detalhe!
         </p>
     </div>
     <div className="grid grid-cols-2 gap-4 pt-14">
      <ConsumptionMethodOption
         option="DINE_IN"
         slug={slug}
         buttonText="Para comer aqui"
         imageAlt="Comer aqui"
         imageUrl="/dine_in.png"
         />
         <ConsumptionMethodOption
            option="TAKEAWAY"
            slug={slug}
            buttonText="Para levar"
            imageAlt="Para levar"
            imageUrl="/takeaway.png"
         />
         </div>
     </div>
   </div>
   );
};


// este component é um server components = renderizam no servidor da aplicação
// podem ser async
// podem solicitar recursos do backend (banco de dados)
// não podem usar eventos ex: onClick
// não podem utilizar hooks ex: useState, useEffect

export default RestaurantPage;