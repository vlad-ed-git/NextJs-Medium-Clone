import { PostCategory } from "./PostCategory";
import { PostImage } from "./PostImage";
import { User } from "./User";

export type Post = {
    id : number,
    title : string,
    body : string,
    category : PostCategory,
    slug : string,
    likes? : number,
    views? : number,
    writtenBy : User,
    featuredImage? : PostImage,
    postImages? : Array<PostImage>
}
