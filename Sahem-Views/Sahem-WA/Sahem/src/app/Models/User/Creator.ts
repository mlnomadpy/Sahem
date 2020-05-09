import { User } from './User';
import { Project } from '../Content/Project';
import { Post } from '../Content/Post';
import { MessageBox } from '../Messaging/MessageBox';
import { SocialMedia } from './SocialMedia';
import { Image } from '../Common/Image';
import { PersonalInformation } from './PersonalInformation';

export class Creator {
    _id: String;
    user_id: String;
    creator_tag: String;
    bio: String;
    projects: Project[];
    personal_information: PersonalInformation;
    avatar: Image;
    // paymentInformation: PaymentInformation;
    // following: Creator[];
    // followers: Creator[];
    // socialMedia: ContactMe[];
    // posts: Post[];
    // messageBox: MessageBox;
    // fundedProjects: Project[];
}