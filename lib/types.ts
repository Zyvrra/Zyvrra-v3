export type AccountType = "Buyer" | "Seller" | "Creator"
export type User = { id: string; username: string; name: string; type: AccountType }
export type Post = { id: string; sellerId: string; videoUrl: string; title: string; price: number; category: string; reactions: Record<string, number> }
