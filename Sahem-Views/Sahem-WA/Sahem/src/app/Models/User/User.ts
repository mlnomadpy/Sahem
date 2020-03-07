import { Session } from './Session';

export class User{
    _id: String;
    currentSession: Session;
    previousSessions: Session[];

}