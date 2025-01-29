import { type SchemaTypeDefinition } from 'sanity'
import { productSchema } from './products'
import { comment } from './comment'
import { heroSectionSchema } from './heroSection'
import { userSchema } from './user'
import { orderSchema } from './orders'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema, comment, heroSectionSchema, userSchema, orderSchema],
}
