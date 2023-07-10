export const product = {
  name: "cms",
  type: "document",
  title: "CMS",
  fields: [
    {
      name: "pageName",
      title: "Page Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "string",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    }
  ]
};