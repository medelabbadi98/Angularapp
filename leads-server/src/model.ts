import {Entity, PrimaryGeneratedColumn, Column, createConnection, Connection, Repository} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  number: string;

  @Column('text')
  emailAdress: string;

  @Column()
  socialStatus: string;

  @Column()
  formations: string [];
}

let connection:Connection;

export async function getProductRepository(): Promise<Repository<Product>> {
  if (connection===undefined) {
    connection = await createConnection({
      type: 'sqlite',
      database: 'myangularapp',
      synchronize: true,
      entities: [
        Product
      ],
    });
  }
  return connection.getRepository(Product);
}