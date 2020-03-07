import { User } from './User';
import { Project } from '../Content/Project';
import { Post } from '../Content/Post';
import { MessageBox } from '../Messaging/MessageBox';
import { SocialMedia } from './SocialMedia';

export class RegisteredUser extends User{
    _id: String;
    aboutMe: String;
    address: Location;
    projects: Project[];
    following: RegisteredUser[];
    followers: RegisteredUser[];
    socialMedia: SocialMedia[];
    posts: Post[];
    messageBox: MessageBox;
    fundedProjects: Project[];
    type: string;
}