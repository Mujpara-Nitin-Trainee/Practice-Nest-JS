import { AbstractEntity } from "src/config/database/entity/abstract.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToMany, UpdateDateColumn } from "typeorm";
import { roleMaster } from "./role.entity";
@Entity()
export class permissionMaster extends AbstractEntity<permissionMaster> {
  @Column("varchar")
  permissionName: string;

  @CreateDateColumn({ type: "timestamp", default: () => "current_timestamp(6)" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp", default: () => "current_timestamp(6)", onUpdate: "current_timestamp(6)" })
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @ManyToMany(() => roleMaster, (role) => role.permission)
  role: roleMaster[];
}