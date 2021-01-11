import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';
@Entity({ name: 'cities', synchronize: false })
export class City extends BaseEntity {
  @PrimaryColumn()
  codepostal: string;

  @PrimaryColumn()
  codecommune: string;

  @Column()
  nomcommune: string;

  @Column()
  libelleacheminement: string;

  toJSON() {
    return {
      city: this.libelleacheminement,
      codePostal: this.codepostal,
      category: this.getCategory(),
    };
  }

  getCategory() {
    if (this.codepostal[0] === '9' && this.codepostal[1] === '7')
      return 'OUTRE_MER';
    return 'METROPOLE';
  }
}
