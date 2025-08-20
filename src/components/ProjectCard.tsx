import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import ThreeDCard from "./ThreeDCard"

export default function ProjectCard({ project }: any) {
    return (
        <ThreeDCard>
            <Card className="max-w-3xl mx-auto rounded-2xl shadow-md overflow-hidden bg-white">
                {/* Project Preview */}
                <div className="overflow-hidden">
                    <img
                        src={project?.thumbnail}
                        alt="Project Preview"
                        className="w-full h-full object-cover"
                    />
                </div>

                <CardContent className="p-6">
                    {/* Title */}
                    <h2 className="text-2xl font-semibold mb-2 text-center sm:text-left">{project?.title}</h2>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 text-center sm:text-left">
                        {project?.description}
                    </p>

                    <div className="flex gap-5 sm:gap-3 items-center justify-between flex-col sm:flex-row pb-5">
                        {/* Tech Stack Icons */}
                        <div className="flex items-center gap-3 flex-wrap">
                            {project?.icons.length > 0 && project?.icons?.map((Icon: any) => {
                                return <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-600 text-sm font-medium">
                                    <Icon />
                                </div>
                            })}
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-600 text-sm font-medium">
                                +4
                            </span>
                        </div>

                        <Button className="rounded-lg px-6 w-full sm:w-auto" size={'lg'}>Details</Button>
                    </div>
                </CardContent>
            </Card>
        </ThreeDCard>
    )
}
