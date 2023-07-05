import { Message } from 'fixparser/FIXParserBrowser';
import { FixField } from '../FixField/FixField';

export class FixMessage {
    private inner: Message | null = null

    private FieldSendingTime = 52;
    private FieldSenderCompId = 49;
    private FieldTargetCompId = 56;
    private FieldMsgTypeCompId = 35;
    private FieldClOrdId = 11;

    id: number;
    time: string | number | boolean | null;
    senderCompId: string | number | boolean | null;
    targetCompId: string | number | boolean | null;
    msgType: string | number | boolean | null | undefined;
    clOrdId: string | number | boolean | null;
    detail: string | number | boolean | null;

    data: FixField[];
    isAdmin: boolean;

    constructor(id: number, msg: Message | null) {
        this.inner = msg;

        if (msg !== null) {
            this.id = id;

            let timeTag = msg.data.find(x => x.tag == this.FieldSendingTime);
            let senderCompIdTag = msg.data.find(x => x.tag == this.FieldSenderCompId);
            let targetCompIdTag = msg.data.find(x => x.tag == this.FieldTargetCompId);
            let msgTypeTag = msg.data.find(x => x.tag == this.FieldMsgTypeCompId);
            let clOrdIdTag = msg.data.find(x => x.tag == this.FieldClOrdId);

            this.time = timeTag ? timeTag.value : null;
            this.senderCompId = senderCompIdTag ? senderCompIdTag.value : null;
            this.targetCompId = targetCompIdTag ? targetCompIdTag.value : null;
            this.msgType = msgTypeTag ? msgTypeTag.enumeration?.description : null;
            this.clOrdId = clOrdIdTag ? clOrdIdTag.value : null;

            this.isAdmin = this.msgType === "Logon" || this.msgType === "Heartbeat";

            this.data = Array.from(msg.data.map((value, ind, a) => {
                return new FixField(ind, value);
            }));
        } else {
            this.id = -1;
            this.time = null;
            this.senderCompId = null;
            this.targetCompId = null;
            this.msgType = null;
            this.clOrdId = null;
            this.detail = null;
            this.data = [];
            this.isAdmin = false;
        }
        this.detail = null;
    }
}