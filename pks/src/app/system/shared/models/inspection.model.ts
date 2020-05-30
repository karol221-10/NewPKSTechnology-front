export class Inspection {
  public id: string;
  public type: string;
  public creationDate: Date;
  public expirationDate: Date;
  public comment: string;

  constructor(item?, type?) {
    if (item != null) {
      if (type === 'inspection') {
        this.id = item.inspectionId;
        this.type = item.inspectionType;
        this.creationDate = item.inspectionCreationDate;
        this.expirationDate = item.inspectionExpirationDate;
        this.comment = item.inspectionComment;
      } else if (type === 'insurance') {
        this.id = item.insuranceId;
        this.type = item.insuranceType;
        this.creationDate = item.insuranceCreationDate;
        this.expirationDate = item.insuranceExpirationDate;
        this.comment = item.insuranceComment;
      }
    }
  }
}
