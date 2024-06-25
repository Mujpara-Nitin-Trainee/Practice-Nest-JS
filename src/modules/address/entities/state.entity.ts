import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { City } from "./city.entity";

@Entity()
export class State {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  stateName: string;

  @CreateDateColumn({ type: "timestamp", default: () => "current_timestamp(6)" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp", default: () => "current_timestamp(6)", onUpdate: "current_timestamp(6)" })
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @OneToMany(() => City, (city) => city.state, { cascade: true })
  cities: City[];
}