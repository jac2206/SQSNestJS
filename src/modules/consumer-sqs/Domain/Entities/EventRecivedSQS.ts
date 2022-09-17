import { PayloadRecivedSQS } from "./PayloadRecivedSQS";

export interface EventSendSNS {
    event: string;
    payload: PayloadRecivedSQS;
}
// export class EventSendSNS {
//     event: string;
//     payload: PayloadRecivedSQS;
// }