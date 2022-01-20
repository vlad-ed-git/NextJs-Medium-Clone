import { Post } from "../schemas/Post";
import { PostCategory } from "../schemas/PostCategory";
import truncate from "lodash/truncate"


const hplipsum = require('hplipsum');


//todo - remove from release
// also remove --- npm i hplipsum
const PAGE_SIZE = 25;
const DUMMY_IMG_URL = 'https://picsum.photos/';
const DUMMY_USER_NAMES = ['vlad', 'jason', 'anne', 'asha', 'brown', 'kyle', 'julia', 'john', 'arya', 'lenny', 'vlad'];

export async function GenDummyPosts(page: number, simulateADelay : boolean, pageSize? : number,) {
    let limit = pageSize ? pageSize : PAGE_SIZE;
    let endAt = page === 1 ? limit : page * limit;
    let startAt = endAt - limit;

    let data = Array<Post>();
    let minWords = getRandomInt(1, 6, 1000);
    let minParagraphs = getRandomInt(3, 6, 1);

    while (startAt < endAt) {
        let postContent: string = hplipsum(minWords, minParagraphs);
        let aPost: Post = {
            id: startAt + 1,
            title: truncate(postContent, {length : 30, separator : ' '}),
            body: postContent,
            category: PostCategory.UNCATEGORIZED,
            slug: "post-" + (startAt + 1).toString(),
            likes: 0,
            views: 0,
            writtenBy: {
                userId: getRandomInt(1, 100, 1),
                isBanned: Math.floor(Math.random() * 1) == 1 ? true : false,
                isEditor: true,
                userName : DUMMY_USER_NAMES[getRandomInt(0, DUMMY_USER_NAMES.length, 1)]
            },
            featuredImage: {
                url: DUMMY_IMG_URL + getRandomInt(1, 5, 1000).toString(),
            },
            postImages: [
                {
                    url: DUMMY_IMG_URL + '2000'
                },

                {
                    url: DUMMY_IMG_URL + '3000'
                },

                {
                    url: DUMMY_IMG_URL + '1800'
                },


            ]
        }
        data.push(
            aPost
        )
        startAt++;
    }
    if (simulateADelay)
        await simulateDelay();
    return data;
}

function simulateDelay() {
    let time = getRandomInt(3, 5, 1000);
    return new Promise(resolve => setTimeout(resolve, time));
}

function getRandomInt(from : number, to : number, aFactorOf : number) {
    return (Math.floor(Math.random() * to) + from) * aFactorOf
}