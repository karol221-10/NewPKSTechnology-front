export class Inspection {
  public id: string;
  public type: string;
  public creationDate: Date;
  public expiryDate: Date;
  public comment: string;

  constructor(item?, type?) {
    if (item != null) {
      if (type === 'inspection') {
        this.id = item.inspectionId;
        this.type = item.inspectionType;
        this.creationDate = item.inspectionCreationDate;
        this.expiryDate = item.inspectionExpirationDate;
        this.comment = item.inspectionComment;
      } else if (type === 'insurance') {
        this.id = item.insuranceId;
        this.type = item.insuranceType;
        this.creationDate = item.insuranceCreationDate;
        this.expiryDate = item.insuranceExpirationDate;
        this.comment = item.insuranceComment;
      }
    }
  }
}


export class InspectionToEdit {
  public id: string;
  public type: string;
  public creationDate: Date;
  public expiryDate: Date;
  public comment: string;

  constructor(item) {
    if (item != null) {
        this.id = item.id;
        this.type = item.type;
        this.creationDate = item.creationDate;
        this.expiryDate = item.expiryDate;
        this.comment = item.comment;
    }
  }
}
