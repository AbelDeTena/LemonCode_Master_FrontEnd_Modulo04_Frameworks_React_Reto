import {Order} from "./model"

export const MockOrders:Order[]= [
    {
        number: 1,
        supplier: "Mercadona",
        date: "2023-12-10",
        details: [
            {state: true,
                description: "Palomitas sal",
                amount: 4
            },
            {state: true,
                description: "Palomitas mantequilla",
                amount: 4
            }, 
            {state: true,
                description: "colacola",
                amount: 2
            }

        ]        

    },
    {
        number: 2,
        supplier: "Carrefour",
        date: "2023-12-12",
        details: [
            {state: true,
                description: "Palomitas sal",
                amount: 3.5
            },
            {state: false,
                description: "Palomitas mantequilla",
                amount: 3.75
            }, 
            {state: true,
                description: "colacola",
                amount: 1.80
            }

        ]        

    }
]