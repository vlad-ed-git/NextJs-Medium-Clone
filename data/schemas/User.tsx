export type User = {
    userId : number,
    userName : string,
    email? : string,
    phone_number? : string,
    name? :  string,
    profile_photo_url? : string,
    isBanned : boolean,
    isEditor : boolean
}