// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";

import {
  real,
  boolean,
  integer,
  index,
  pgTableCreator,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `internazionale-cms_${name}`);

export const posts = createTable(
  "post",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updatedAt", { withTimezone: true }),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.name),
  })
);

export const clients = createTable(
  "clients",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256} ),
    dni: varchar("dni", { length: 9 }),
    email: varchar("email", { length: 255 }),
    phone_number: integer("phone_number").default(0),
    payment_method: varchar("payment_method", {
      enum: ["cash", "card"]
    }),
    username: varchar("username", { length: 256 }),
    password: varchar("password", { length: 256 }),
    image: varchar("image")
  }
)

export const rooms = createTable(
  "rooms",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }),
    description: varchar("description", { length: 256 }),
    capacity: integer("capacity").default(1),
    type: varchar("type", {
      enum: ["apartment", "studio"]
    }),
    state: boolean("state"),
    price: real("price").default(0.0),
    image: varchar("image")
  }
)

export const reservations = createTable(
  "reservations",
  {
    
  }
)
