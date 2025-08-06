import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Apple, 
  Carrot, 
  Leaf, 
  Package, 
  Truck,
  Clock,
  Shield,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import freshFruits from "@/assets/fresh-fruits.jpg";
import freshVegetables from "@/assets/fresh-vegetables.jpg";
import preparedProduce from "@/assets/prepared-produce.jpg";
import organicSpecialty from "@/assets/organic-specialty.jpg";

const Products = () => {
  const productCategories = [
    {
      icon: <Apple className="w-8 h-8" />,
      title: "Fresh Fruits",
      description: "Premium quality fruits sourced from the best growers worldwide",
      image: freshFruits,
      products: [
        "Apples (various varieties)",
        "Citrus fruits (oranges, lemons, limes)",
        "Berries (strawberries, blueberries, raspberries)",
        "Stone fruits (peaches, plums, apricots)",
        "Tropical fruits (pineapples, mangoes, bananas)",
        "Seasonal specialties"
      ],
      features: ["Year-round availability", "Multiple varieties", "Consistent quality", "Competitive pricing"]
    },
    {
      icon: <Carrot className="w-8 h-8" />,
      title: "Fresh Vegetables",
      description: "Wide variety of vegetables to meet all your culinary and processing needs",
      image: freshVegetables,
      products: [
        "Root vegetables (carrots, potatoes, onions)",
        "Leafy greens (lettuce, spinach, kale)",
        "Cruciferous vegetables (broccoli, cauliflower)",
        "Peppers and tomatoes",
        "Herbs and aromatics",
        "Specialty vegetables"
      ],
      features: ["Farm-fresh quality", "Organic options", "Bulk quantities", "Custom cuts available"]
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Prepared Produce",
      description: "Ready-to-use fruits and vegetables processed to your specifications",
      image: preparedProduce,
      products: [
        "Pre-cut vegetables",
        "Sliced and diced fruits",
        "Salad mixes",
        "Stir-fry preparations",
        "Soup vegetable mixes",
        "Custom preparations"
      ],
      features: ["Extended shelf life", "Portion control", "Food safety certified", "Custom packaging"]
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Organic & Specialty",
      description: "Certified organic and specialty produce for discerning customers",
      image: organicSpecialty,
      products: [
        "Certified organic fruits",
        "Certified organic vegetables",
        "Heirloom varieties",
        "Exotic and rare produce",
        "Microgreens",
        "Edible flowers"
      ],
      features: ["Certified organic", "Traceable origins", "Premium quality", "Limited availability"]
    }
  ];

  const qualityFeatures = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Quality Assurance",
      description: "Rigorous quality controls from farm to delivery"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Freshness Guarantee",
      description: "Products delivered at peak freshness with extended shelf life"
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Temperature Controlled",
      description: "Cold chain maintained throughout transportation"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Certified Suppliers",
      description: "All suppliers meet our strict certification requirements"
    }
  ];

  const seasonalHighlights = [
    {
      season: "Spring",
      products: ["Asparagus", "Spring onions", "New potatoes", "Fresh peas", "Baby vegetables"],
      color: "bg-green-100 text-green-800"
    },
    {
      season: "Summer",
      products: ["Tomatoes", "Berries", "Stone fruits", "Corn", "Summer squash"],
      color: "bg-yellow-100 text-yellow-800"
    },
    {
      season: "Autumn",
      products: ["Apples", "Pumpkins", "Root vegetables", "Brussels sprouts", "Citrus"],
      color: "bg-orange-100 text-orange-800"
    },
    {
      season: "Winter",
      products: ["Citrus fruits", "Winter squash", "Stored apples", "Greenhouse vegetables", "Imported specialties"],
      color: "bg-blue-100 text-blue-800"
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Fresh, high-quality produce sourced from trusted growers worldwide. 
            From everyday essentials to specialty items, we have everything your business needs.
          </p>
        </div>

        {/* Product Categories */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {productCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="bg-primary/80 p-2 rounded-lg mb-2 w-fit">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                </div>
                <CardHeader>
                  <p className="text-muted-foreground">{category.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-3 text-sm">Product Range:</h4>
                    <div className="grid grid-cols-1 gap-1">
                      {category.products.map((product, productIndex) => (
                        <div key={productIndex} className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                          <span>{product}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.features.map((feature, featureIndex) => (
                      <Badge key={featureIndex} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Quality Features */}
        <section className="mb-20 bg-secondary p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-12">Quality & Standards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                  {feature.icon}
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Seasonal Availability */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Seasonal Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seasonalHighlights.map((season, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <Badge className={`mx-auto ${season.color} border-0`}>
                    {season.season}
                  </Badge>
                  <CardTitle className="text-lg">{season.season} Specialties</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {season.products.map((product, productIndex) => (
                      <li key={productIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                        <span>{product}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Sourcing Information */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-2xl">Global Sourcing Network</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Our extensive network of trusted suppliers spans across multiple continents, 
                  ensuring year-round availability of fresh produce at competitive prices.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">UK & European Sources</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Local UK farms</li>
                      <li>• Dutch greenhouse produce</li>
                      <li>• Spanish Mediterranean fruits</li>
                      <li>• French specialty vegetables</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Global Partners</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• South American exporters</li>
                      <li>• African specialty suppliers</li>
                      <li>• Asian exotic produce</li>
                      <li>• New Zealand quality farms</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Custom Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm">
                  Can't find what you're looking for? We specialize in sourcing 
                  specific products to meet your unique requirements.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Special variety requests</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Specific quality grades</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Custom packaging</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Seasonal planning</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-primary text-primary-foreground p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Ready to Order?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Get in touch with our team to discuss your produce requirements 
            and receive competitive pricing for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                Get Price Quote <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Learn About Our Services
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products;