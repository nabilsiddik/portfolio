import { projects } from "@/data/projectData"
import SectionHeader from "../SectionHeader"
import ProjectCard from "../ProjectCard"
import { Button } from "../ui/button"

const Project = () => {
    return (
        <div className="container mx-auto my-20 px-5">
            <SectionHeader title="Projects" description="My projects" />

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {projects?.length > 0 && projects.slice(0, 6).map((project) => {
                    return <ProjectCard project={project} />
                })}
            </div>

            {projects.length > 6 &&
                <div className="flex justify-center">
                    <Button className="mt-10" size={'lg'}>View All Projects</Button>
                </div>
            }
        </div>
    )
}

export default Project
