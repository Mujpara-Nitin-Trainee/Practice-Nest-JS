import { AbstractEntity } from "src/config/database/entity/abstract.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class ImgMaster extends AbstractEntity<ImgMaster> {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  imgReferId: number;

  @Column()
  imgReferType: string;

  @Column()
  imgName: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

}