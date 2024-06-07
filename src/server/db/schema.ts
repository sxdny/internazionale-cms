// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

// Import the Drizzle ORM types
import {
  json,
  real,
  boolean,
  integer,
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

export const users = createTable(
  "users",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }),
    username: varchar("username", { length: 256 }),
    password: varchar("password", { length: 256 }),
    role: varchar("role", {
      enum: ["admin", "user"]
    }),
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
    id: serial("id").primaryKey(),
    room_id: integer("room_id").references(() => rooms.id,),
    client_id: integer("client_id").references(() => clients.id),
    capacity: integer("capacity").default(1),
    check_in: timestamp("check_in", { withTimezone: false }),
    check_out: timestamp("check_out", { withTimezone: false }),
    initial_price: real("initial_price").default(0.0),
    final_price: real("final_price").default(0.0),
    state: boolean("state"),
    services: json("services")
  }
)
