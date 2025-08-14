import SlideInView from "./SlideInText"
import Divider from "./ui/divider"

const SectionHeader = ({ title, description, style }: { title: string, description: string, style: any }) => {
    return (
        <div className="container mx-auto text-center mb-16">
            <div className="text-center">
                <div>
                    <Divider variant="dashed">
                        <div>
                            <h1 className={`text-2xl md:text-3xl lg:text-4xl font-bold text-center max-w-4xl mx-auto leading-tight mb-4 `}>
                                {title}
                            </h1>
                            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 text-center max-w-3xl mx-auto mb-8">
                                {description}
                            </p>
                        </div>
                    </Divider>
                </div>
            </div>
        </div>
    )
}

export default SectionHeader
