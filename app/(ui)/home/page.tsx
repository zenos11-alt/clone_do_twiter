import { HomeFeed } from "@/app/components/home/home-feed";
import { HomeHeader } from "@/app/components/home/home-header";
import { TweetPost } from "@/app/components/tweet/tweet-post";

export default function Page() {
    return(
         <div>
           <HomeHeader/>
           <TweetPost/>
           <HomeFeed />
        </div>
    );
}