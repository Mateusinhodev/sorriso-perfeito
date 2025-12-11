import { Card, CardContent } from "./ui/card";

const ServiceCard = ({title, description, image}) => {
    return (
        <Card className="py-0 overflow-hidden transition-all duration-300 border-border hover:shadow-lg hover:-translate-y-1">
            <div className="aspect-square overflow-hidden bg-muted">
                <img 
                    src={image} 
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
            </div>
            <CardContent className="p-2">
                <h3 className="mb-4 text-xl font-semibold text-foreground">{title}</h3>
                <p className="mb-6 text-sm text-muted-foreground">{description}</p>
            </CardContent>
        </Card>
    );
}

export default ServiceCard;