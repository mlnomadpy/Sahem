import { User } from './User';
import { Project } from '../Content/Project';
import { Post } from '../Content/Post';
import { MessageBox } from '../Messaging/MessageBox';
import { SocialMedia } from './SocialMedia';

export class Creator extends User {
    _id: String;
    user_id: String;
    creator_tag: String;
    personal_information: PersonalInformation;
    bio: String;
    projects: Project[];
}