import { z } from "zod";

const postSchema = z.object({
  title: z.string().min(5).max(50),
  content: z.string().min(10),
});

type IPost = z.infer<typeof postSchema>;

export default IPost;
export { postSchema };
