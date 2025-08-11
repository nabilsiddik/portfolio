
const SectionHeader = ({ title, description }: { title: string, description: string }) => {
    return (
        <div className="container mx-auto text-center mb-16">
            <div className="text-center">
                <h1 className="text-4xl lg:text-5xl font-bold text-center max-w-4xl mx-auto leading-tight mb-6">
                    {title}
                </h1>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 text-center max-w-3xl mx-auto mb-8">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default SectionHeader
