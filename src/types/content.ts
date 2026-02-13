export type ContentSection =
  | {
      type: "paragraph";
      content: string;
    }
  | {
      type: "title";
      content: string;
    }
  | {
      type: "list";
      items: string[];
    };
