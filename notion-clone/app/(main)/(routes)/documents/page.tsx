"use client";

import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PlusCircle } from "lucide-react";
import { useMutation } from "convex/react";
import { toast } from "sonner";
import { api } from "@/convex/_generated/api";

const DocumentPage = () => {

    const { user } = useUser();
    const create = useMutation(api.documents.create);

    const onCreate =  () => {
        const promise = create({title: "Untitled"});

        toast.promise(promise, {
            loading: "Creating a new note...",
            success: "New note created",
            error: "Failed to create a new note"
        });
    };


    return ( 
      <div className="h-full flex flex-col items-center justify-center space-y-4">

        <Image 
          src="/motionThinking.png" 
          width="300" 
          height="300" 
          alt="Thinking"
          className="dark:hidden" />

        <Image 
          src="/motionLaptopDark.png" 
          width="300" 
          height="300" 
          alt="Laptop"
          className="hidden dark:block" />

        <h2 className="text-lg font-medium">
            Welcome to, {user?.fullName}&apos;s Motion
        </h2>

        <Button onClick={onCreate}>
            <PlusCircle className="h-4 w-4 mr-2"/>
            Create a note 
        </Button>
      </div> 
    );
}
 
export default DocumentPage;