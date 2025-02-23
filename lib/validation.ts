import { z } from "zod";

export const teamCreateFormSchema = z.object({
    teamName: z.string().min(1, "Team name is required"),
    logo: z
      .instanceof(File)
      .refine((file) => file.size <= 5 * 1024 * 1024, "File size must be less than 5MB")
      // .refine((file) =>{
      //    console.log("File Type : " , file.type)
      //    return file.type.startsWith("image/")
      //   }, "File must be an image")
    ,
    players: z.array(z.string()).min(1, "4 player is required"),
  });