export const registerFormControl = [
  {
    name: "userName",
    type: "text",
    componentType: "input",
    placeholder: "Enter your username",
    label: "User Name",
    required: true,
  },
  {
    name: "email",
    type: "email",
    componentType: "input",
    placeholder: "Enter your email",
    label: "Email",
    required: true,
  },
  {
    name: "password",
    type: "password",
    placeholder: "Enter your password",
    label: "Password",
    required: true,
  },
];

export const loginFormControl = [
  {
    name: "email",
    type: "email",
    componentType: "input",
    placeholder: "Enter your email",
    label: "Email",
    required: true,
  },
  {
    name: "password",
    type: "password",
    componentType: "input",
    placeholder: "Enter your password",
    label: "Password",
    required: true,
  },
];

export const addProductFormElements = [
  {
    label: "Tittle",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: "men", label: "Men" },
      { id: "women", label: "Women" },
      { id: "kids", label: "Kids" },
      { id: "accessories", label: "Accessories" },
      { id: "footwear", label: "Footwear" },
    ],
  },
  {
    label: "Brand",
    name: "brand",
    componentType: "select",
    options: [
      { id: "adidas", label: "Adidas" },
      { id: "nike", label: "Nike" },
      { id: "puma", label: "Puma" },
      { id: "reebok", label: "Reebok" },
      { id: "underarmour", label: "Underarmour" },
    ],
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter product sale price (optional)",
  },
  {
    label: "Stock",
    name: "stock",
    componentType: "input",
    type: "number",
    placeholder: "Enter product stock",
  },
];
