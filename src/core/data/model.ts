export type OrderDetail = {
    state: boolean;
    description: string;
    import: number;
  };

export type Order = {
    number: number;
    supplier: string;
    date: string;
    details: OrderDetail[];
  };