import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum Genre {
  ACTION = 'action',
  COMEDY = 'comedy',
  HOROR = 'horor',
}
@Entity('movies')
export class MovieEntity {
  //id created updated
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({
    name: 'is_available',
  })
  releaseYear: number;

  //Date decorators
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ default: false })
  isPublic: boolean;

  // UUID
  @PrimaryColumn()
  @Generated('uuid')
  idUUid: string;

  //Column options, unsigned - true - только положительные числа
  @Column({
    type: 'varchar',
    length: 128,
    // nullable - null or no
  })
  descriptionColumn: string;

  @Column({
    type: 'decimal',
    precision: 3,
    scale: 1, // Количество после зяпятой
    default: 0.0,
  })
  rating: number;

  @Column({
    type: 'date', // 'time'
    nullable: true,
  })
  releaseDate: string;

  @Column({
    type: 'enum',
    enum: Genre,
    default: Genre.HOROR,
  })
  genre: Genre;
}

// СВЯЗИ В ТАБЛИЦАХ one-to-one one-to-many many-to-one many-to-many
