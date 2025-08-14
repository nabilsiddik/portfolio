import { Heart } from "lucide-react";
import aboutImage from '../assets/images/nabil-siddik-web-developer.png'
import { VerifiedBadgeIcon } from "@/svg/AboutIcons";
interface ProfileCardProps {
    coverTitle: string;
    coverHighlight: string;
    coverSubtitle: string;
    profileImage: string;
    name: string;
    username: string;
    bio: string;
    stars: number;
    reviews: number;
    posts: number;
    likes: number;
    skills: string[];
}

export function ProfileCard({
    coverTitle,
    coverHighlight,
    coverSubtitle,
    profileImage,
    name,
    username,
    bio,
    stars,
    reviews,
    posts,
    likes,
    skills,
}: ProfileCardProps) {
    return (
        <div className="w-full rounded-xl shadow-md overflow-hidden border bg-white pb-3">
            {/* Cover Section */}
            <div className="relative bg-black text-white px-4 py-6">
                <h2 className="text-lg font-bold">
                    {coverTitle}{" "}
                    <span className="text-pink-500">{coverHighlight}</span>
                </h2>
                <p className="text-sm mt-1 mb-6">{coverSubtitle}</p>
            </div>

            {/* Profile Info */}
            <div className="relative px-4 pb-4">
                {/* Profile Image */}
                <div className="absolute -top-10 left-4">
                    <img src={aboutImage} className="w-[100px] h-[100px] rounded-full" alt="Nabil Siddik about" />
                </div>

                {/* Like Button */}
                <div className="absolute -top-10 right-4 flex items-center space-x-2 bg-white rounded-full px-3 py-1 shadow">
                    <Heart className="text-red-500 fill-red-500 w-5 h-5" />
                    <span className="text-sm">{likes} likes</span>
                </div>

                <div className="pt-14">
                    <h3 className="font-bold text-lg flex items-center gap-1">
                        {name}
                        <span className="text-blue-500">
                            <VerifiedBadgeIcon/>
                        </span>
                    </h3>
                    <p className="text-gray-500">@{username}</p>
                    <p className="mt-2 text-sm">{bio}</p>

                    {/* Stars */}
                    <div className="flex items-center mt-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <span
                                key={i}
                                className={`text-yellow-400 ${i < stars ? "opacity-100" : "opacity-30"
                                    }`}
                            >
                                ★
                            </span>
                        ))}
                        <span className="ml-2 text-sm text-gray-600">
                            {reviews} reviews
                        </span>
                    </div>

                    {/* Stats */}
                    <div className="flex gap-6 mt-4 text-sm text-gray-600">
                        <span>{posts} posts</span>
                        <span>{likes.toLocaleString()} likes</span>
                    </div>

                    {/* Skills */}
                    <div className="mt-4 flex flex-wrap gap-2">
                        {skills.map((skill, index) => (
                            <span
                                key={index}
                                className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
