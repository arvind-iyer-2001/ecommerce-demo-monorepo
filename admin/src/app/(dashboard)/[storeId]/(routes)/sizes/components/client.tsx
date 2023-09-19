"use client";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { SizeColumn, columns } from "./columns";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { ApiList } from "@/components/ui/api-list";

const SizeClient = ({data}: {data: SizeColumn[]}) => {
  const params = useParams();
  const router = useRouter();

  return (
    <div className="">
      <div className="flex items-center justify-between">
        <Heading
          title={`Sizes (${data.length})`}
          description="Manage sizes for your store"
        />
        <Button
          onClick={() => router.push(`/${params.storeId}/sizes/new`)}
        >
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
      <Heading title="API" description="API Calls for Sizes" />
      <Separator />
      <ApiList entityName="sizes" entityIdName="sizeId" />
    </div>
  );
};

export default SizeClient;
