import { Author } from "./author"

export interface Post {
    title: string
    content: string
    excerpt: string
    date: Date
    slug: string
    author: Author
    coverImage: {
        url: string
    }
}
