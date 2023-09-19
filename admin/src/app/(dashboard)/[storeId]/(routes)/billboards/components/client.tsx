"use client";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { BillboardColumn, columns } from "./columns";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { ApiList } from "@/components/ui/api-list";

const BillboardClient = ({data}: {data: BillboardColumn[]}) => {
  const params = useParams();
  const router = useRouter();

  return (
    <div className="">
      <div className="flex items-center justify-between">
        <Heading
          title={`Billboards (${data.length})`}
          description="Manage billboards for your store"
        />
        <Button
          onClick={() => router.push(`/${params.storeId}/billboards/new`)}
        >
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="label" columns={columns} data={data} />
      <Heading title="API" description="API Calls for Billboards" />
      <Separator />
      <ApiList entityName="billboards" entityIdName="billboardId" />
    </div>
  );
};

export default BillboardClient;
