export class Bokning {
  skiEquipmentId: number;
  name: string;

  constructor(name: string, skiEquipmentId: number) {
    this.skiEquipmentId = skiEquipmentId;
    this.name = name;
  }
}
