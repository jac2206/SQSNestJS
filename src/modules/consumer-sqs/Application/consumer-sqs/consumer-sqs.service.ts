import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { SqsConsumerEventHandler, SqsMessageHandler } from '@ssut/nestjs-sqs';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { SQSMessageDTO } from 'src/Common/DTO/SQSMessageDTO';
import { EventSendSNS } from '../../Domain/Entities/EventRecivedSQS';


@Injectable()
export class ConsumerSqsService {
    constructor(private readonly httpService: HttpService) {}
    eventSNS:EventSendSNS;
    // sqsMessage:SQSMessageDTO;

    @SqsMessageHandler('MicroServicerReadSQS', false)
    async handleMessage(message: AWS.SQS.Message) {
        // console.log(JSON.parse(message.Body))     
        // this.sqsMessage = JSON.parse(message.Body);
        console.log(this.getEventMessageSQS(JSON.parse(message.Body)));
        console.log((await this.sendSQSMessengeToService(this.getEventMessageSQS(JSON.parse(message.Body)))).data);
        
    }
    getEventMessageSQS(message:SQSMessageDTO){
        this.eventSNS = JSON.parse(message.Message);
        return this.eventSNS;
    }
    sendSQSMessengeToService(eventSQS:EventSendSNS):Promise<AxiosResponse<EventSendSNS>>{
        // console.log(eventSQS);
        return this.httpService.axiosRef.post('http://localhost:3000/sns/sqsevent', eventSQS);
    }
    findAll(): Promise<AxiosResponse<any>> {
        return this.httpService.axiosRef.get('http://localhost:3000');
    }

    // @SqsMessageHandler('MicroServicerReadSQS', false)
    // async handleMessage(message: AWS.SQS.Message) {
    //     console.log(JSON.parse(message.Body))     
    //     // const messange:object =  JSON.parse(message.Body) as {
    //     //         Message: string;
    //     //         Timestamp: string;
    //     // };     
    //     // console.log(this.getEventMessageSQS(messange.Message));
    //     console.log(this.getEventMessageSQS(message));
    // }
    // getEventMessageSQS(message:AWS.SQS.Message){
    //     const messange:any = JSON.parse(message.Body) as {
    //         Message: string;
    //         Timestamp: string;
    //     };  
    //     this.eventSNS = JSON.parse(messange.Message);
    //     return this.eventSNS;
    // }
    // getEventMessageSQS(message:string){
    //     this.eventSNS = JSON.parse(message);
    //     return this.eventSNS;
    // }

    // @SqsMessageHandler('MicroServicerReadSQS', false)
    // async handleMessage(message: AWS.SQS.Message) {
    //     console.log(message);
    //     // console.log(message.Body)
    //     console.log(JSON.parse(message.Body))
    //     // const body : any = JSON.parse(message.Body)
    //     // console.log(body['Message'])
    //     // const obj: any = JSON.parse(message.Body) as {
    //     //     message: string;
    //     //     date: string;
    //     // };
    //     // const obj: any = JSON.parse(message.Body) as {
    //     //     Message: string;
    //     //     Timestamp: string;
    //     // };
    //     // console.log(obj)
    //     // const { data } = JSON.parse(obj.Message) ;
    //     // console.log(data);
    //     // use the data and consume it the way you want // 

    //     //  const jsonSQS : SQSDTO = JSON.parse(message.Body)
    //     //  const timeElapsed = Date.now();    
    //     //  const today = new Date(timeElapsed);
    //     //  console.log(today.toISOString());
    //     //  console.log(JSON.parse(jsonSQS.Message));
         
    // }
    // @SqsConsumerEventHandler('MicroServicerReadSQS', 'sns.send')
    // async handleMessage2(error: Error, message: AWS.SQS.Message) {
    //     console.error(error);
    //     console.error(message);
         
    // }

}
