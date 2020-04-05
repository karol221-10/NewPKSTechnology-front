export class Track {
  constructor(
    public id: number,
    public leavingFrom: string,
    public leavingTo: string,
    public data: Date,
    public from: Date,
    public to: Date,
    public passengers: number,
    public numberOfStops: number,
    public travelTime: string
  ) {}
}
