import {Inspection} from './inspection.model';

export class Bus {
  public id: string;
  public inspectionExpiry: Inspection;
  public insuranceExpiry: Inspection;
  public registrationNumber: string;

  constructor(item?) {
    if (item != null) {
      this.id = item.id;
      this.inspectionExpiry = new Inspection({
        inspectionId: item.inspectionId,
        inspectionType: item.inspectionType,
        inspectionCreationDate: item.inspectionCreationDate,
        inspectionExpirationDate: item.inspectionExpirationDate,
        inspectionComment: item.inspectionComment
      }, 'inspection');
      this.insuranceExpiry = new Inspection({
        insuranceId: item.insuranceId,
        insuranceType: item.insuranceType,
        insuranceCreationDate: item.insuranceCreationDate,
        insuranceExpirationDate: item.insuranceExpirationDate,
        insuranceComment: item.insuranceComment
      }, 'insurance');
      this.registrationNumber = item.registrationNumber;
    }
  }
}
