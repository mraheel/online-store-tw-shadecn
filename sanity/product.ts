export const product = {
  name: "product",
  type: "document",
  title: "Product",
  fields: [
    {
      name: "name",
      title: "Product Name",
      type: "string",
    },
    {
      name: "type",
      title: "Product Type",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "materials",
      title: "Product Materials",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "image",
      title: "Image",
      type: "array",
      of: [
        {
          type: "image",
        },
      ],
    },
    {
      name: "categorySet",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Male", value: "male" },
          { title: "Female", value: "female" },
          { title: "Kids", value: "kids" },
        ],
      },
    },
    {
      name: "featured",
      title: "Featured",
      type: "string",
      options: {
        list: [
          { title: "Yes", value: "yes" },
          { title: "No", value: "no" },
        ],
        layout: "radio",
      },
    },
  ],
};