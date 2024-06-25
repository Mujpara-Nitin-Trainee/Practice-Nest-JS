import { AbstractEntity } from "src/config/database/entity/abstract.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { productCategory } from "./category.entity";

@Entity()
export class userScarpDetails {

  @PrimaryGeneratedColumn()
  id: number;

  @Column("int")
  scarpKg: number;

  @Column("int")
  price: number;

  @Column({ type: "varchar", default: "Pending" })
  deliveryStatus: string;

  @Column({ type: "varchar", default: "Pending" })
  paymentStatus: string;

  @CreateDateColumn({ type: "timestamp", default: () => "current_timestamp(6)" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp", default: () => "current_timestamp(6)", onUpdate: "current_timestamp(6)" })
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @ManyToOne(() => productCategory, (category) => category.userScraps)
  category: productCategory[];

  @Column()
  categoryId: number;
}