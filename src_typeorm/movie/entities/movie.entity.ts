import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ReviewEntity } from '../../review/entity/review.entity';
import { ActorEntity } from '../../actor/entities/actor.entity';
import { PosterEntity } from './poster.entity';

export enum Genre {
  ACTION = 'action',
  COMEDY = 'comedy',
  HOROR = 'horor',
}
@Entity('movies')
export class MovieEntity {
  //id created updated
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({
    name: 'is_available',
  })
  releaseYear: number;

  @Column({ name: 'poster_id', type: 'uuid', nullable: true })
  posterId: string;

  @OneToOne(() => PosterEntity, (poster) => poster.movie, {
    onDelete: 'CASCADE',
    nullable: true,
  })
  @JoinColumn({ name: 'poster_id' })
  poster: PosterEntity | null;

  @OneToMany(() => ReviewEntity, (review) => review.movie)
  reviews: ReviewEntity[];

  @ManyToMany(() => ActorEntity, (actor) => actor.movies)
  @JoinTable({
    name: 'movie_actors',
    joinColumn: { name: 'movie_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'actor_id', referencedColumnName: 'id' },
  })
  actors: ActorEntity[];

  //Date decorators
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ default: false })
  isPublic: boolean;

  // UUID — альтернативный способ (уже не нужен: id выше и так uuid).
  // Второй @PrimaryColumn делал ключ составным (id + idUUid), и связь с reviews.movie_id ломалась.
  // @PrimaryColumn()
  // @Generated('uuid')
  // idUUid: string;

  //Column options, unsigned - true - только положительные числа
  @Column({
    type: 'varchar',
    length: 128,
    nullable: true, // nullable - null or no
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
