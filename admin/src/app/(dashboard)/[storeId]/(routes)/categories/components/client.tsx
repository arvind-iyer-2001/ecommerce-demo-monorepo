"use client";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { CategoryColumn, columns } from "./columns";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { ApiList } from "@/components/ui/api-list";

const CategoryClient = ({data}: {data: CategoryColumn[]}) => {
  const params = useParams();
  const router = useRouter();

  return (
    <div className="">
      <div className="flex items-center justify-between">
        <Heading
          title={`Categories (${data.length})`}
          description="Manage categories for your store"
        />
        <Button
          onClick={() => router.push(`/${params.storeId}/categories/new`)}
        >
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
      <Heading title="API" description="API Calls for Categories" />
      <Separator />
      <ApiList entityName="categories" entityIdName="categoryId" />
    </div>
  );
};

export default CategoryClient;
