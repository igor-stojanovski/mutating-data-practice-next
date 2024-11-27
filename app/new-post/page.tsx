import { createPost } from "@/actions/actions";
import FormSubmit from "@/components/Form-Submit";

export default function NewPostPage() {
  return (
    <>
      <h1>Create a new post</h1>
      <FormSubmit createPost={createPost} />
    </>
  );
}
