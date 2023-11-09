import {Order} from "./model"

export const Orders:Order[]= [
    {
        number: 1,
        supplier: "Mercadona",
        date: "18/12/2022",
        details: [
            {state: true,
                description: "Palomitas sal",
                import: 4
            },
            {state: false,
                description: "Palomitas mantequilla",
                import: 4
            }, 
            {state: false,
                description: "colacola",
                import: 2
            }

        ]        

    }
]