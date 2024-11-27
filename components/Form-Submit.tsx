"use client";

import React, { useActionState } from "react";

type Props = {
  createPost: any;
};

export default function FormSubmit({ createPost }: Props) {
  const [{ errors }, formAction, isPending] = useActionState(
    createPost,
    {} as any
  );

  return (
    <form action={formAction}>
      <p className="form-control">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" />
      </p>
      <p className="form-control">
        <label htmlFor="image">Image</label>
        <input
          type="file"
          accept="image/png, image/jpeg"
          id="image"
          name="image"
        />
      </p>
      <p className="form-control">
        <label htmlFor="content">Content</label>
        <textarea id="content" name="content" rows={5} />
      </p>
      <p className="form-actions">
        {!isPending ? (
          <>
            <button type="reset">Reset</button>
            <button>Create Post</button>
          </>
        ) : (
          "Creating post..."
        )}
      </p>
      {errors && (
        <ul className="form-errors">
          {errors.map((error: any) => {
            return (
              <li key={error}>
                <p>{error}</p>
              </li>
            );
          })}
        </ul>
      )}
    </form>
  );
}
