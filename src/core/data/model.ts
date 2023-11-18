export type OrderDetail = {
    state: boolean;
    description: string;
    amount: number;
  };

export type Order = {
    number: number;
    supplier: string;
    date: string;
    details: OrderDetail[];
  };