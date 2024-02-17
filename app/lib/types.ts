export type Plan = {
    billingCycle: "YEARLY"| "MONTHLY",
    createdAt?: Date,
    currency: string,
    description: string,
    id: number,
    name: string,
    price: number,
    stripePriceId: string,
    updatedAt?: Date,
    features: Feature[]
} 

export type Feature = {
    id: number,
    name: string,
    description:string,
    planId:number,
}