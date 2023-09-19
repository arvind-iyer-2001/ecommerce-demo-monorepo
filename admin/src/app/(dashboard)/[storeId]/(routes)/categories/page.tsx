import { format } from "date-fns";

import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs";

import prismadb from "@/lib/prismadb";
import CategoryClient from "./components/client";
import { CategoryColumn } from "./components/columns";

const CategoriesPage = async ({
  params
}: {
  params: { storeId: string }
}) => {
  const { userId } = auth();

  if (!userId) {
    redirect('/sign-in');
  }

  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
      userId
    }
  });

  if (!store) {
    redirect('/');
  }
  const categories = await prismadb.category.findMany({
    where: {
      storeId: params.storeId,
    },
    include: {
        billboard: true
    },
    orderBy: {
      createdAt: 'desc'
    }
  });

  const formattedCategories: CategoryColumn[] = categories.map((item) => ({
    id: item.id,
    billboardLabel: item.billboard.label,
    name: item.name,
    createdAt: format(item.createdAt, 'MMMM do, yyyy'),
  }));

  return ( 
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <CategoryClient data={formattedCategories}/>
      </div>
    </div>
  );
}

export default CategoriesPage;