import { PayloadRecivedSQS } from "./PayloadRecivedSQS";

export class EventSendSNS {
    event: string;
    payload: PayloadRecivedSQS;
}