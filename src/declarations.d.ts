interface Template {
  data: any;
}

declare module "*.nicat" {
  export const template: Template = null;
}
