"use-client";

import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
// import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";

import { useStoreModal } from "@/hooks/use-store-modal";

const formSchema = z.object({
  name: z.string().min(1),
});

export const StoreModal = () => {
  const storeModal = useStoreModal();
  // const router = useRouter();

  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setLoading(true);
      const response = await axios.post("/api/stores", values);
      console.log(response.data);

      // Performs complete Refresh on the site
      window.location.assign(`/${response.data.id}`);
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    } finally {
      setLoading(false);
    }
    // console.log(values);
  }

  return (
    <Modal
      title="Create store"
      description="Add a new store to manage products and categories."
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      <div>
        <div className="space-y-4 py-2 pb-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                name="name"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="E-commerce"
                          {...field}
                          disabled={loading}
                        ></Input>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
                control={form.control}
              />
              <div className="pt-6 spacex-2 flex items-center justify-end w-full">
                <Button
                  variant="outline"
                  onClick={storeModal.onClose}
                  disabled={loading}
                >
                  Cancel
                </Button>
                <Button 
                  type="submit"
                  disabled={loading}
                >
                  Continue
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </Modal>
  );
};
