export interface SQSMessageDTO {
    Type: string;
    MessageId: string;
    TopicArn: string;
    Subject: string;
    Message: string;
    Timestamp: string;
    SignatureVersion: string;
    Signature: string;
    SigningCertURL: string;
    UnsubscribeURL: string;
}
// export class SQSMessageDTO {
//     Type: string;
//     MessageId: string;
//     TopicArn: string;
//     Subject: string;
//     Message: string;
//     Timestamp: string;
//     SignatureVersion: string;
//     Signature: string;
//     SigningCertURL: string;
//     UnsubscribeURL: string;
// }